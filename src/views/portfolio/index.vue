<template>
	<div class="app-container">
		<el-scrollbar class="box-class" style="margin-top: 1%;height: 100%">
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

<script setup name="Portfolio">
import { getToken } from "@/utils/auth";
import {getCurrentInstance, nextTick, onMounted, reactive, ref} from "vue";
import {createNew, getList, deletById} from "@/api/Portfolio"
import {InfoFilled} from "@element-plus/icons-vue";

const {proxy} = getCurrentInstance();
//图片数据
const urlPre = import.meta.env.VITE_APP_BASE_API
//展示数据
const showParams=ref([])

//跳转页面
const transUrl=(url)=>{
	window.open(url, "_blank");
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
	width: 200px;
	height: 200px;
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