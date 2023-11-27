<template>
	<div class="app-container">
		<el-row class="box-class" style="height: 30%">
			<el-form class="form-header-search">
				<el-row>
					<el-col :span="6" :offset="4">
						<el-upload
							ref="uploadRef"
							class="avatar-uploader"
							:limit="1"
							accept=".jpg, .png"
							:headers="upload.headers"
							:action="upload.url"
							:disabled="upload.disabled"
							:show-file-list="false"
							:on-success="handleSubmitSuccess"
							:before-upload="checkImage"
						>
							<el-image v-if="!!queryParams.fileUrl"
									  style="width: 260px;height: 195px"
									  :src="urlPre + queryParams.fileUrl"
									  class="avatar" />
							<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
						</el-upload>
					</el-col>
					<el-col :span="6">
						<el-row>
							<el-form-item label="标题">
								<el-input v-model="queryParams.title"></el-input>
							</el-form-item>
						</el-row>
						<el-row>
							<el-form-item label="链接地址">
								<el-input v-model="queryParams.url"></el-input>
							</el-form-item>
						</el-row>
						<el-row>
							<el-form-item label="排序">
								<el-input-number v-model="queryParams.orderNum" :min="0" :max="65535"></el-input-number>
							</el-form-item>
						</el-row>
						<el-row>
							<el-form-item label="标签">
								<el-tag
									v-for="tag in queryParams.tags"
									:key="tag"
									closable
									:disable-transitions="false"
									@close="handleClose(tag)"
								>
									{{ tag }}
								</el-tag>
								<el-input
									v-if="inputVisible"
									ref="InputRef"
									size="small"
									v-model="inputValue"
									@keyup.enter="handleInputConfirm"
								/>
								<el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
									+ New Tag
								</el-button>
							</el-form-item>
						</el-row>
					</el-col>
					<el-col :span="4" style="align-items: center;display: flex;justify-content: center">
						<el-button type="warning" @click="resetImg">重置图片</el-button>
						<el-button type="primary" @click="submit">提交</el-button>
					</el-col>
				</el-row>
			</el-form>
		</el-row>
		<el-scrollbar class="box-class" style="margin-top: 1%;height: 70%">
			<el-row>
				<template v-for="item in showParams">
					<el-col :span="1"></el-col>
					<el-col :span="6">
						<el-card style="margin-top: 5vh;display: flex; justify-content: center">
							<el-scrollbar style="height: 200px;">
								<el-image :src="urlPre+item['fileUrl']" style="width: 100%; height: auto" @click="transUrl(item['url'])"/>
							</el-scrollbar>
							<div style="padding: 14px">
								<span style="font-family: '方正粗黑宋简体';font-size: 28px;">{{ item['title'] }}</span>
								<el-row style="margin-top: 5%">
									<el-col :span="12">
										<el-input-number v-model="item['orderNum']" :min="0" :max="65536"></el-input-number>
									</el-col>
									<el-col :span="11" :offset="1" style="display: flex">
										<el-button type="primary" plain @click="updateOrderL(item['id'], item['orderNum'])" >更新顺序</el-button>
										<el-popconfirm
											width="220"
											confirm-button-text="是的"
											cancel-button-text="No, Thanks"
											:icon="InfoFilled"
											icon-color="#626AEF"
											title="你确定要删除这个作品展示吗?"
											@confirm="deleteByIdL(item['id'])"
										>
											<template #reference>
												<el-button type="danger" class="button">删除</el-button>
											</template>
										</el-popconfirm>
									</el-col>
								</el-row>
							</div>
						</el-card>
					</el-col>
					<el-col :span="1"></el-col>
				</template>
			</el-row>
		</el-scrollbar>
<!--		上传图片-->
	</div>
</template>

<script setup name="PortfolioMgt">
import { getToken } from "@/utils/auth";
import {getCurrentInstance, nextTick, onMounted, reactive, ref} from "vue";
import {createNew, getList, deletById, updateOrder} from "@/api/Portfolio"
import {InfoFilled} from "@element-plus/icons-vue";

const {proxy} = getCurrentInstance();
//图片数据
const urlPre = import.meta.env.VITE_APP_BASE_API
const uploadRef = ref()
const upload = reactive({
	// 是否禁用上传
	isUploading: false,
	// 设置上传的请求头部
	headers: { Authorization: "Bearer " + getToken() },
	// 上传的地址
	url: ref(import.meta.env.VITE_APP_BASE_API + '/common/upload'),
	disabled:false
})
//tags数据
const inputValue = ref('')
const inputVisible = ref(false)
const InputRef = ref()
//展示数据
const showParams=ref([])
//提交数据
const queryParams=reactive({
	fileUrl: undefined,
	title: undefined,
	url: undefined,
	tags:[],
	orderNum:0,
})


//提交图片前检查
const checkImage = (rawFile) => {
	if (rawFile.size / 1024 / 1024 > 8) {
		proxy.$modal.alertError('Picture size can not exceed 8MB!')
		return false
	}
	return true
}

//图片提交成功后操作
const handleSubmitSuccess = (rp, uploadFile) => {
	upload.disabled = true
	queryParams.fileUrl = rp.fileName;
}

//重置图片
const resetImg = ()=>{
	uploadRef.value.clearFiles();
	queryParams.fileUrl = ""
	upload.disabled = false
}

//删除tag
const handleClose = (tag) => {
	queryParams.tags.splice(queryParams.tags.indexOf(tag), 1)
}
//添加tag
const showInput = () => {
	if (queryParams.tags.length <= 5){
		inputVisible.value = true
		nextTick(() => {
			InputRef.value.input.focus()
		})
	}else {
		proxy.$modal.msgWarning("tags至少1个并且最多只能有5个")
	}
}
const handleInputConfirm = () => {
	if (!!inputValue.value && !inputValue.value.includes(',')) {
		queryParams.tags.push(inputValue.value)
	}else {
		proxy.$modal.msgWarning("单个tag内容不能为空且不能包含字符','")
	}
	inputVisible.value = false
	inputValue.value = ''
}

//提交前检查
const checkBeforeSubmit = ()=>{
	for (let key in queryParams){
		if (!queryParams[key]){
			queryParams[key] = null;
			proxy.$modal.alertError("不能存在空条目")
			return false
		}
	}
	if (1 > queryParams.tags.length || queryParams.tags.length > 5){
		proxy.$modal.alertError("tags至少1个并且最多只能有5个")
		return false
	}
	return true;
}
//提交图片和文本
const submit=()=>{
	if (checkBeforeSubmit()){
		console.log(queryParams);
		createNew(queryParams).then(rp=>{
			if (rp["code"]===200){
				queryParams.title = undefined;
				queryParams.fileUrl = undefined;
				queryParams.url = undefined;
				queryParams.tags = []
				queryParams.orderNum = 0;
				uploadRef.value.clearFiles();
				upload.disabled = false
				proxy.$modal.msgSuccess("添加成功")
				getListL();
			}
		})
	}
}

//跳转页面
const transUrl=(url)=>{
	window.open(url, "_blank");
}

//删除个人作品集
const deleteByIdL=(id)=>{
	console.log(id)
	deletById(id).then(rp=>{
		proxy.$modal.msgSuccess("删除成功")
		getListL();
	})
}

const updateOrderL=(id, orderNum)=>{
	updateOrder({id: id, orderNum: orderNum}).then(rp=>{
		if (rp["code"]===200){
			proxy.$modal.msgSuccess("更新成功");
		}else {
			proxy.$modal.msgError(rp["msg"]);
		}
		getListL();
	})
}

//获取数据
const getListL=()=>{
	getList().then(rp=>{
		showParams.value = rp.data
		proxy.$modal.msgSuccess("查询成功")
	})
}

onMounted(()=>{
	getListL();
})
</script>

<style scoped>
:deep(.avatar-uploader .el-upload ){
	border: 1px dashed var(--el-border-color);
	background-color: #ffffff;
	border-radius: 6px;
	width: 260px;
	height: 195px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

:deep(.avatar-uploader .el-upload:hover) {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 200px;
	height: 200px;
	text-align: center;
}

</style>