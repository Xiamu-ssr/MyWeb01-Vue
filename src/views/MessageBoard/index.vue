<template>
	<div class="homePage">
		<el-row class="box-class" style="height: 10%" v-loading="loadings[0]" element-loading-background="#fddb9255">
			<el-col :span="4" :offset="1" >
				<el-statistic title="留言人数" :value="topData.peopleNum" />
			</el-col>
			<el-col :span="4">
				<el-statistic title="留言字数" :value="topData.textNum" />
			</el-col>
			<el-col :span="4">
				<el-statistic :value="138">
					<template #title>
						<div style="display: inline-flex; align-items: center">
							Ratio of men to women
							<el-icon style="margin-left: 4px" :size="12">
								<Male />
							</el-icon>
						</div>
					</template>
					<template #suffix>/100</template>
				</el-statistic>
			</el-col>
			<el-col :span="4">
				<el-statistic title="留言数量" :value="topData.messageNum">
					<template #suffix>
						<el-icon style="vertical-align: -0.125em">
							<ChatLineRound />
						</el-icon>
					</template>
				</el-statistic>
			</el-col>
			<el-col :span="3">
				<el-row justify="space-evenly" style="align-items: center; height: 100%">
					<el-button type="primary" plain @click="dialogVisible = true">留下你的言语</el-button>
				</el-row>
			</el-col>
			<el-col :span="3">
				<el-row justify="space-evenly" style="align-items: center; height: 100%">
					只看友链
					<el-switch
						v-model="linkOnly"
						style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
						@change="linkSwicthChange"
					/>
				</el-row>
			</el-col>
		</el-row>
		<el-scrollbar class="box-class" style="margin-top: 1%;height: 84%" v-loading="loadings[1]" element-loading-background="#fddb9255">
			<el-row :gutter="20" style="width: 100%">
				<el-col :span="6" v-for="m in messages" style="margin-top: 3%">
					<el-card v-if="!!m.link && m.show" class="hover-card" style="border-radius: 10px" @click="transUrl(m.link)">
						<el-row justify="center" style="margin: 0;padding:0">
							<el-col :span="8">
								<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
							</el-col>
							<el-col :span="8" style="align-items: center;display: flex;">
								<el-tag size="large" :type="m.nameColor" :effect="m.nameEffect">{{ m.name }}</el-tag>
							</el-col>
						</el-row>
						<el-divider content-position="left" style="margin-top: 0.7vh;margin-bottom: 1.1vh">友情链接<el-icon><Link /></el-icon></el-divider>
						<el-row>
							<span style="font-family: '微軟正黑體';font-weight: bold;font-size: 1.4vw">{{ m.text }}</span>
						</el-row>
						<el-row justify="end" style="margin-top: 2vh">
							<el-col :span="10" style="align-items: center;display: flex">
								<el-icon size="20"><Calendar /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ (m.createTime+"").substring(0,10) }}
							</el-col>
						</el-row>
					</el-card>
					<el-card v-else-if="m.show" class="hover-card" style="border-radius: 10px">
						<el-row justify="center" style="margin: 0;padding:0">
							<el-col :span="8">
								<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
							</el-col>
							<el-col :span="8" style="align-items: center;display: flex;">
								<el-tag size="large" :type="m.nameColor" :effect="m.nameEffect">{{ m.name }}</el-tag>
							</el-col>
						</el-row>
						<el-divider style="margin-top: 0.7vh;margin-bottom: 1.1vh"></el-divider>
						<el-row>
							<span style="font-family: '微軟正黑體';font-weight: bold;font-size: 1.4vw">{{ m.text }}</span>
						</el-row>
						<el-row justify="end" style="margin-top: 2vh">
							<el-col :span="10" style="align-items: center;display: flex">
								<el-icon size="20"><Calendar /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ (m.createTime+"").substring(0,10) }}
							</el-col>
						</el-row>
					</el-card>
				</el-col>
			</el-row>
		</el-scrollbar>
<!--		新加留言-->
		<el-dialog
			v-model="dialogVisible"
			title="创造一条新的留言"
			width="40vw"
			:before-close="handleClose"
			align-center
		>
			<el-form ref="ruleFormRef" class="box-class" :model="queryParams" label-width="100px" :rules="rules">
				<el-form-item label="留言类型">
					<el-switch
						v-model="queryParams.category"
						style="--el-switch-on-color: #67C23A; --el-switch-off-color: #409EFF"
						active-text="友情链接"
						inactive-text="正常留言"
						@change="switchChange"
					/>
				</el-form-item>
				<el-form-item label="昵称" prop="name">
					<el-input v-model="queryParams.name" style="width: 220px" :maxlength="12" :minlength="1" show-word-limit></el-input>
				</el-form-item>
				<el-form-item label="昵称颜色" prop="nameColor">
					<el-select v-model="queryParams.nameColor">
						<el-option value="" label="蓝色"></el-option>
						<el-option value="warning" label="黄色"></el-option>
						<el-option value="success" label="绿色"></el-option>
						<el-option value="danger"  label="红色"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="昵称深浅" prop="nameEffect">
					<el-select v-model="queryParams.nameEffect">
						<el-option value="light" label="明亮"></el-option>
						<el-option value="dark"  label="深沉"></el-option>
						<el-option value="plain" label="空心"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="留言内容" prop="text">
					<el-input type="textarea" :rows="2" v-model="queryParams.text" style="width: 90%" :maxlength="32" :minlength="1" show-word-limit resize="none"></el-input>
				</el-form-item>
				<el-form-item v-show="queryParams.category" label="链接地址" prop="link">
					<el-input type="textarea" :rows="3" v-model="queryParams.link" style="width: 90%" :maxlength="256" :minlength="1" show-word-limit resize="none"></el-input>
				</el-form-item>
			</el-form>
			<el-divider></el-divider>
			<el-card class="hover-card" style="border-radius: 10px; width: 25vw; align-items: center">
				<el-row justify="center" style="margin: 0;padding:0">
					<el-col :span="8">
						<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
					</el-col>
					<el-col :span="8" style="align-items: center;display: flex;">
						<el-tag size="large" :type="queryParams.nameColor" :effect="queryParams.nameEffect">{{ queryParams.name }}</el-tag>
					</el-col>
				</el-row>
				<el-divider v-if="queryParams.category" content-position="left" style="margin-top: 0.7vh;margin-bottom: 1.1vh">友情链接<el-icon><Link /></el-icon></el-divider>
				<el-divider v-else style="margin-top: 0.7vh;margin-bottom: 1.1vh"></el-divider>
				<el-row>
					<span style="font-family: '微軟正黑體';font-weight: bold;font-size: 1.4vw">{{ queryParams.text }}</span>
				</el-row>
				<el-row justify="end" style="margin-top: 24px">
					<el-col :span="10" style="align-items: center;display: flex">
						<el-icon size="20"><Calendar /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ new Date().toLocaleDateString() }}
					</el-col>
				</el-row>
			</el-card>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消创建</el-button>
					<el-button type="primary" @click="submit(ruleFormRef)">
					  	确定
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup name="MessageBoard">
import { ChatLineRound, Male, Calendar } from '@element-plus/icons-vue'
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import { ElMessageBox } from 'element-plus'
import { create, getList, getTopData } from "@/api/MessageBoard"

const { proxy } = getCurrentInstance()
//顶部数据
const topData = reactive({
	peopleNum:0,
	textNum:0,
	messageNum: 0
})
const linkOnly = ref(false)
//留言数据
const messages = ref([])
//新建
const dialogVisible = ref(false)
const ruleFormRef = ref()
const queryParams = reactive({
	category: false,
	name:undefined,
	text:undefined,
	nameColor:"",
	nameEffect:"light",
	link:undefined,
	time: new Date()
})
const rules = reactive({
	name:[
		{ required: true, message: 'Please input', trigger: 'blur' },
		{ min: 1, max: 16, message: 'Length should be 1 to 16', trigger: 'blur' },
	],
	nameColor:[{ required: false, message: 'Please input', trigger: 'blur' }],
	nameEffect:[{ required: true, message: 'Please input', trigger: 'blur' }],
	text:[
		{ required: true, message: 'Please input', trigger: 'blur' },
		{ min: 1, max: 32, message: 'Length should be 1 to 32', trigger: 'blur' },
	],
	link:[
		{ required: false, message: 'Please input', trigger: 'blur' },
		{ min: 0, max: 256, message: 'Length should be 0 to 256', trigger: 'blur' },
	],
})
const loadings=ref([
	true,
	true
])

//只看友链
const linkSwicthChange=(val)=>{
	if (val === true){
		messages.value.forEach(m=>{
			if (!m["link"]){
				m["show"] = false
			}
		})
	}else {
		messages.value.forEach(m=>{
			m["show"] = true
		})
	}
}

//创建留言更改类型
const switchChange=(val)=>{
	if (val===false){
		queryParams.link = undefined
	}
}

//提交新的留言
const submit= async(formEl)=>{
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log(queryParams)
			create(queryParams).then(rp=>{
				if (rp["code"] === 200){
					proxy.$modal.alertSuccess("留言星已收到您的留言，待管理员审核后方可展示。")
				}else {
					proxy.$modal.msgSuccess("创建失败");
				}
				getListL()
			})
		} else {
			console.log('error submit!', fields)
		}
		dialogVisible.value = false;
	})
}

//关闭新建留言
const handleClose = (done) => {
	ElMessageBox.confirm('你要退出留言新建界面吗?')
		.then(() => {
			done()
		})
		.catch(() => {
			// catch error
		})
}

//跳转页面
const transUrl=(url)=>{
	window.open(url, "_blank");
}

//获取留言数据
const getListL=()=>{
	getList({
		status:"1",
		pageNum: 1,
		pageSize: 1000000,
		orderByColumn: 'createTime',
		isAsc: 'descending',
	}).then(rp=>{
		if (rp["code"] === 200){
			messages.value = rp.data["rows"]
			messages.value.forEach(m=>{
				m["show"] = true
			})
			proxy.$modal.msgSuccess("已与留言星建立连接--..Success..");
			loadings.value[1] = false
		}else {
			proxy.$modal.msgSuccess("Fail:Please Connect Developer");
		}

	})
}
//获取顶部数据
const getTopDataL=()=>{
	getTopData().then(rp=>{
		topData.messageNum = rp["data"]["messageNum"];
		topData.textNum = rp["data"]["textNum"];
		topData.peopleNum = rp["data"]["peopleNum"];
		loadings.value[0] = false
	})
}

onMounted(()=>{
	getListL()
	getTopDataL()
})

</script>

<style scoped>
.homePage {
	margin-top: 1vh;
	margin-left: 1vw;
	margin-right: 1vw;
	margin-bottom: 0vh;
	//box-shadow: 3px 0px 5px 3px #00000005, -3px 0px 5px 3px #00000005, 0px 3px 5px 3px #00000005, 0px -3px 5px 3px #00000005;
	//border-radius: 10px;
	height: 92vh;
}
.el-button{
	width: 100px;
}
:deep(.el-dialog) {
	margin-top: auto !important;
}
:deep(.el-statistic__head){
	font-size: 1vw !important;
	font-weight: bold;
}
</style>