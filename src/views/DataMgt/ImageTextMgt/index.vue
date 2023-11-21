<template>
	<div class="app-container">
		<el-row class="box-class" style="height: 16%">
			<el-form class="form-header-search">
				<el-row>
					<el-col :span="7">
						<el-form-item label="地区">
							<el-select v-model="queryParams.place" clearable collapse-tags filterable multiple
									   placeholder="支持多选,搜索">
								<el-option v-for="p in selectOptions.place" :label="p.label"
										   :value="p.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="7">
						<el-form-item label="时间">
							<el-date-picker
								v-model="queryParams.date"
								:shortcuts="shortcuts"
								end-placeholder="End date"
								range-separator="To"
								start-placeholder="Start date"
								type="daterange"
								unlink-panels
							/>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="7">
						<el-form-item label="标题">
							<el-input v-model="queryParams.title" placeholder="支持模糊查询,正则表达式"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="7">
						<el-form-item label="文本">
							<el-input v-model="queryParams.text" placeholder="支持模糊查询,正则表达式"></el-input>
						</el-form-item>
					</el-col>
					<el-col :offset="7" :span="3">
						<el-button plain type="primary" @click="submitSearch">查询</el-button>
						<el-button plain type="success" @click="createNew">新建</el-button>
					</el-col>
				</el-row>
			</el-form>
		</el-row>
		<el-row class="box-class" style="margin-top: 1%; height: 79%">
			<el-table :data="tableData" border stripe>
				<el-table-column label="ID" prop="id" sortable></el-table-column>
				<el-table-column label="地区" sortable>
					<template #default="scope">
						{{ i2g[scope.row.place] }}
					</template>
				</el-table-column>
				<el-table-column label="时间" prop="date" sortable></el-table-column>
				<el-table-column label="标题" prop="title"></el-table-column>
				<el-table-column fixed="right" label="操作" width="240px">
					<template #default="scope">
						<el-button type="primary" @click="viewOne(scope.row.id)">查看</el-button>
						<el-popconfirm
							:icon="Warning"
							cancel-button-text="不，我不想 "
							confirm-button-text="我确定"
							icon-color="#ff0000"
							title="这也是昔日的回忆，你确定要删除吗？"
							width="220"
							@confirm="deleteOne(scope.row.id)"
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
		<el-drawer v-model="drawer" :before-close="handleClose" direction="rtl" size="70%">
			<template #header>
				<h4>您正在新建一条属于你的回忆,你们的回忆,祝好运.——RoBot</h4>
			</template>
			<template #default>
				<div class="box-class">
					<form class="form-header-search">
						<el-row>
							<el-col :span="12">
								<el-form-item label="标题">
									<el-input v-model="createParams.title" placeholder="词短意长"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="内容">
									<el-input v-model="createParams.text" :rows="5" :show-word-limit="true"
											  maxlength="256" placeholder="词短意长" resize="none" type="textarea"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="时光快照墙">
									<el-upload
										v-model:file-list="picList"
										:action=uploadImgUrl
										:before-upload="handlePicBeforeUpload"
										:data="{id:createParams.id}"
										:headers="{ Authorization: 'Bearer ' + getToken() }"
										:on-preview="handlePictureCardPreview"
										:on-remove="handleRemove"
										:on-success="handleSuccess"
										list-type="picture-card"
									>
										<el-icon>
											<Plus/>
										</el-icon>
									</el-upload>

									<el-dialog v-model="dialogVisible">
										<img :src="dialogImageUrl" alt="Preview Image" w-full/>
									</el-dialog>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="地区">
									<el-select v-model="createParams.place" clearable filterable placeholder="支持搜索">
										<el-option v-for="p in selectOptions.place" :label="p.label"
												   :value="p.value"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
						</el-row>
					</form>
				</div>
			</template>
			<template #footer>
				<el-divider></el-divider>
				<div align="center" style="flex: auto">
					<el-button @click="handleClose">取消创建</el-button>
					<el-button type="primary" @click="confirmCreate">提交</el-button>
				</div>
			</template>
		</el-drawer>

		<!--    查看-->
		<el-dialog
			v-model="drawer2"
			:align-center="true"
			:title="oneInfoView.id"
			center
			width="60%"
		>
			<el-card>
				<el-row>
					<el-col :span="24">
						<span style="font-size: 32px;font-weight: bold; font-family: 楷体">{{
								oneInfoView.title
							}}</span>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-tag round size="large">{{ i2g[oneInfoView.place] }}</el-tag>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-scrollbar max-height="400px" style="background: #3A71A855">
							<el-image v-for="url in oneInfoView.images" :preview-src-list="imgList"
									  :src="viewImgUrl+'/'+url.name"
									  style="height: 50%;width: 50%">
								<template #error>
									<div>
										<h2>Error</h2>
									</div>
								</template>
							</el-image>
						</el-scrollbar>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<span style="font-size: 18px;font-family: 黑体">{{ oneInfoView.text }}</span>
					</el-col>
				</el-row>
			</el-card>
			<template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="drawer2 = false">
          知道了
        </el-button>
      </span>
			</template>
		</el-dialog>
	</div>
</template>

<script name="ImageTextMgt" setup>
import {getToken} from "@/utils/auth";
import {Plus, Warning} from '@element-plus/icons-vue'
import {ElMessageBox} from 'element-plus'
import {getCurrentInstance, onMounted} from "vue";
import {
  cancelImageText,
  createImageText,
  deletePic,
  getId,
  getImageTextById,
  getIndex2Geo,
  getList
} from "@/api/DataMgt/index"

const {proxy} = getCurrentInstance();
//多选常量
const selectOptions = reactive({
	place: []
})
const i2g = getIndex2Geo();
//查询参数
const queryParams = reactive({
	title: undefined,
	text: undefined,
	place: undefined,
	date: undefined
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
const tableData = ref([])
//抽屉
const drawer = ref(false);
const drawer2 = ref(false);
//新建参数
const createParams = reactive({
	id: undefined,
	title: undefined,
	text: undefined,
	place: undefined,
})
//图片展示
const picList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const uploadImgUrl = ref(import.meta.env.VITE_APP_BASE_API + '/DataMgt/uploadPic'); // 上传的图片服务器地址

//动态查看
const oneInfoView = ref({})
const viewImgUrl = ref(import.meta.env.VITE_APP_BASE_API + '/images'); // 上传的图片服务器地址
const imgList = ref([])

//图片上传前回调方法
const handlePicBeforeUpload = (file) => {
	// console.log(file)
	return true;
}
//上传成功
const handleSuccess = (rp, file) => {
	file.name = rp["msg"];
	// console.log(rp,file)
	// console.log(picList)
}
//图片移除回调方法
const handleRemove = (uploadFile, uploadFiles) => {
	deletePic(uploadFile.name).then(rp => {
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
const submitSearch = () => {
	console.log(queryParams)
	getList(queryParams).then(rp => {
		tableData.value = [];
		for (let r of rp.data) {
			console.log(r)
			// r["date"] = new Date(r["date"]);
			// r["date"] = r["date"].setHours(r["date"].getHours() - 14);
			// r["date"] = new Date(r["date"]).toLocaleString();
			// console.log(r)
			tableData.value.push(r);
		}
		// tableData.value = rp.data;
	})
}

//创建
const createNew = () => {
	getId().then(rp => {
		createParams.id = rp["msg"]
		proxy.$modal.msg("创建");
		drawer.value = true;
		console.log(createParams)
	})
}

//确认创建
function confirmCreate() {
	createImageText(createParams).then(rp => {
		proxy.$modal.msgSuccess("创建成功");
		//clear
		for (let c in createParams) {
			createParams[c] = undefined;
		}
		drawer.value = false
		submitSearch();
	})
}

const handleClose = () => {
	ElMessageBox.confirm('确定退出"新建"?')
		.then(() => {
			cancelImageText(createParams.id).then(rp => {
				//clear
				for (let c in createParams) {
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
const viewOne = (id) => {
	getImageTextById(id).then(rp => {
		console.log(rp.data)
		oneInfoView.value = rp.data
		imgList.value = Array.from(oneInfoView.value['images']).map(i => {
			return viewImgUrl.value + '/' + i.name
		})
		// console.log(imgList.value)
		drawer2.value = true;
	})
}
//删除
const deleteOne = (id) => {
	cancelImageText(id).then(rp => {
		proxy.$modal.msg("delete" + id);
		submitSearch();
	})
}

onMounted(() => {
	for (let index in i2g) {
		selectOptions.place.push({label: i2g[index], value: index})
	}
	submitSearch();
})

</script>

<style scoped>
:deep(.el-dialog) {
	margin-top: auto !important;
}
</style>