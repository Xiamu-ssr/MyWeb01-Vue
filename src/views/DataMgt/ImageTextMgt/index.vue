<template>
  <div class="app-container">
    <el-row class="box-class" style="height: 16%">
      <el-form class="form-header-search">
        <el-row>
          <el-col :span="7">
            <el-form-item label="地区">
              <el-select v-model="queryParams.place" clearable multiple collapse-tags>
                <el-option v-for="p in selectOptions.place" :label="p.label" :value="p.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="时间">
              <el-date-picker
                  v-model="queryParams.date"
                  type="daterange"
                  unlink-panels
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  :shortcuts="shortcuts"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="标题"><el-input placeholder="支持模糊查询,正则表达式"></el-input></el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="文本"><el-input placeholder="支持模糊查询,正则表达式"></el-input></el-form-item>
          </el-col>
          <el-col :span="3" :offset="7">
            <el-button type="primary" plain @click="submitSearch">查询</el-button>
            <el-button type="success" plain @click="createNew">新建</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="box-class" style="margin-top: 1%; height: 79%">
      <el-table :data="tableData" stripe border >
        <el-table-column label="ID"  prop="id" sortable></el-table-column>
        <el-table-column label="地区" prop="place" sortable></el-table-column>
        <el-table-column label="时间" prop="date"  sortable></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="操作"              width="240px" fixed="right">
          <template #default="scope">
            <el-button type="primary" @click="viewOne(scope.row.id)">查看</el-button>
            <el-popconfirm
                width="220"
                confirm-button-text="我确定"
                cancel-button-text="不，我不想 "
                :icon="Warning"
                icon-color="#ff0000"
                title="这也是昔日的回忆，你确定要删除吗？"
                @confirm="deleteOne"
            >
              <template #reference>
                <el-button>删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
<!--    新建-->
    <el-drawer v-model="drawer" direction="rtl" :before-close="handleClose" size="70%">
      <template #header>
        <h4>您正在新建一条属于你的回忆,你们的回忆,祝好运.——RoBot</h4>
      </template>
      <template #default>
        <div class="box-class">
          <form class="form-header-search">
            <el-row>
              <el-col :span="12">
                <el-form-item label="标题"><el-input v-model="createParams.title" placeholder="词短意长"></el-input></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="内容"><el-input v-model="createParams.text" maxlength="256" :show-word-limit="true" resize="none" :rows="5" type="textarea" placeholder="词短意长"></el-input></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="时光快照墙">
                  <el-upload
                      v-model:file-list="picList"
                      :action=uploadImgUrl
                      :data="{id:createParams.id}"
                      :headers="{ Authorization: 'Bearer ' + getToken() }"
                      list-type="picture-card"
                      :on-success="handleSuccess"
                      :before-upload="handlePicBeforeUpload"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                  >
                    <el-icon><Plus /></el-icon>
                  </el-upload>

                  <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                  </el-dialog>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="地区">
                  <el-select v-model="createParams.place" clearable>
                    <el-option v-for="p in selectOptions.place" :label="p.label" :value="p.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </form>
        </div>
      </template>
      <template #footer>
        <el-divider></el-divider>
        <div style="flex: auto" align="center">
          <el-button @click="handleClose">取消创建</el-button>
          <el-button type="primary" @click="confirmCreate">提交</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup name="ImageTextMgt">
import { getToken } from "@/utils/auth";
import { Warning, Plus  } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import {getCurrentInstance} from "vue";
import { getId, deletePic, createImageText, cancelImageText, getList } from "@/api/DataMgt/index"

const { proxy } = getCurrentInstance();
//多选常量
const selectOptions = reactive({
  place:[
    {value:"01",label:"天津"},
    {value:"02",label:"上海"},
    {value:"03",label:"南京"},
    {value:"04",label:"苏州"}
  ]
})
//查询参数
const queryParams = reactive({
  title:undefined,
  text:undefined,
  place:undefined,
  date:undefined
});
//日期选择
const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
//查询结果
const tableData=ref([
  {id:"BN20231009", place:"苏州",date:"20230805",title:"久违的见面。很开心。"},
  {id:"BN20231010", place:"苏州",date:"20230907",title:"久违的见面。很开心。"},
  {id:"BN20231011", place:"南京",date:"20230904",title:"久违的见面。很开心。"},
  {id:"BN20231012", place:"南京",date:"20231005",title:"久违的见面。很开心。"},
  {id:"BN20231013", place:"天津",date:"20230903",title:"久违的见面。很开心。"}
])
//抽屉
const drawer = ref();
//新建参数
const createParams = reactive({
  id:undefined,
  title:undefined,
  text:undefined,
  place:undefined,
})
//图片展示
const picList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const uploadImgUrl = ref(import.meta.env.VITE_APP_BASE_API +'/DataMgt/uploadPic'); // 上传的图片服务器地址
//图片上传前回调方法
const handlePicBeforeUpload= (file) => {
  // console.log(file)
  return true;
}
//上传成功
const handleSuccess =(rp, file) =>{
  file.name = rp["msg"];
  // console.log(rp,file)
  // console.log(picList)
}
//图片移除回调方法
const handleRemove= (uploadFile, uploadFiles) => {
  deletePic(uploadFile.name).then(rp=>{
    console.log(rp)
  })
  // console.log(uploadFile, uploadFiles)
}
//图片预览回调
const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url;
  dialogVisible.value = true
}

//查询
const submitSearch=()=>{
  console.log(queryParams)
  getList(queryParams).then(rp=>{
    tableData.value = rp.data;
  })
}

// const getCurrentTime=()=>{
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = ("0" + (date.getMonth() + 1)).slice(-2);
//   let day = ("0" + date.getDate()).slice(-2);
//   let hours = ("0" + date.getHours()).slice(-2);
//   let minutes = ("0" + date.getMinutes()).slice(-2);
//   let seconds = ("0" + date.getSeconds()).slice(-2);
//   let formattedDate = year + month + day + hours + minutes + seconds;
//   return formattedDate;
// }
//创建
const createNew=()=>{
  getId().then(rp=>{
    createParams.id = rp["msg"]
    proxy.$modal.msg("创建");
    drawer.value = true;
    console.log(createParams)
  })
}
//确认创建
function confirmCreate() {
  createImageText(createParams).then(rp=>{
    proxy.$modal.msgSuccess("创建成功");
    //clear
    for (let c in createParams){
      createParams[c] = undefined;
    }
    drawer.value = false
  })
}
const handleClose = () => {
  ElMessageBox.confirm('确定退出"新建"?')
      .then(() => {
        cancelImageText(createParams.id).then(rp=>{
          //clear
          for (let c in createParams){
            createParams[c] = undefined;
          }
          console.log(createParams)
          drawer.value = false
        })
      })
      .catch(() => {
        // catch error
      })
}
//查看
const viewOne=(id)=>{
  proxy.$modal.msg("查看"+id);
}
//删除
const deleteOne=(id)=>{
  proxy.$modal.msg("delete"+id);
}

</script>

<style scoped>
</style>