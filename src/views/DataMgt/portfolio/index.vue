<template>
	<div class="app-container">
		<el-row class="box-class" style="height: 30%">
			<el-upload
				class="avatar-uploader"
				:limit="1"
				accept=".jpg, .png"
				:headers="upload.headers"
				:action="upload.url"
				:show-file-list="false"
				:on-success="handleAvatarSuccess"
				:before-upload="beforeAvatarUpload"
			>
				<el-image v-if="!!upload.fileUrl"
						  style="width: 200px;height: 200px"
						  :src="upload.fileUrl"
						  class="avatar" />
				<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
			</el-upload>
		</el-row>
		<el-scrollbar class="box-class" style="margin-top: 1%;height: 60%">
			<el-row>
				<template v-for="i in 88">
					<el-col :span="1"></el-col>
					<el-col :span="6">
						<el-card style="margin-top: 5vh">
							<el-image
								src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
							/>
							<div style="padding: 14px">
								<span>Yummy hamburger</span>
								<div class="bottom">
									<time class="time">{{ new Date() }}</time>
									<el-button text class="button">Operating</el-button>
								</div>
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
import {getCurrentInstance, reactive, ref} from "vue";

const {proxy} = getCurrentInstance();
const uploadRef = ref()
const upload = reactive({
	// 是否禁用上传
	isUploading: false,
	// 设置上传的请求头部
	headers: { Authorization: "Bearer " + getToken() },
	// 上传的地址
	url: ref(import.meta.env.VITE_APP_BASE_API + '/common/upload'),
	// 上传的文件列表
	fileUrl: ""
})

const handleAvatarSuccess = (rp, uploadFile) => {
	console.log(rp)
	upload.fileUrl = rp.url
	// imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload = (rawFile) => {
	if (rawFile.size / 1024 / 1024 > 2) {
		proxy.$modal.alertError('Avatar picture size can not exceed 2MB!')
		return false
	}
	return true
}
</script>

<style scoped>
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>