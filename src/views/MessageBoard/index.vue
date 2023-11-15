<template>
	<div class="homePage">
		<el-row class="box-class" style="height: 14%">
			<el-col :span="4" :offset="2">
				<el-statistic title="Daily active users" :value="268500" />
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
				<el-statistic title="Total Transactions" :value="172000" />
			</el-col>
			<el-col :span="4">
				<el-statistic title="Feedback number" :value="562">
					<template #suffix>
						<el-icon style="vertical-align: -0.125em">
							<ChatLineRound />
						</el-icon>
					</template>
				</el-statistic>
			</el-col>
			<el-col span="4">
				<el-row justify="space-between" style="align-items: center; height: 100%">
					<el-button type="primary" plain @click="dialogVisible = true">留下你的言语</el-button>
					<el-button>去年今月</el-button>
				</el-row>
			</el-col>
		</el-row>
		<el-scrollbar class="box-class" style="margin-top: 1%;height: 84%">
			<el-row :gutter="20" style="width: 100%">
				<el-col :span="6" v-for="m in messages" style="margin-top: 3%">
					<el-card style="border-radius: 10px">
						<el-row justify="center" style="margin: 0px;padding:0px">
							<el-col :span="8">
								<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
							</el-col>
							<el-col :span="8" style="align-items: center;display: flex;">
								<el-tag size="large" :type="m.nameType" :effect="m.nameEffect">{{ m.name }}</el-tag>
							</el-col>
						</el-row>
						<el-divider style="margin-top: 6px;margin-bottom: 12px"></el-divider>
						<el-row>
							<span style="font-family: '微軟正黑體';font-weight: bold;font-size: 24px">{{ m.text }}</span>
						</el-row>
						<el-row justify="end" style="margin-top: 24px">
							<el-col :span="10" style="align-items: center;display: flex">
								<el-icon size="20"><Calendar /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ m.time.toLocaleDateString() }}
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
			width="40%"
			:before-close="handleClose"
			align-center
		>
			<el-form class="box-class" :model="queryParams" label-width="100px">
				<el-form-item label="昵称">
					<el-input v-model="queryParams.name" style="width: 220px" :maxlength="12" :minlength="1" show-word-limit></el-input>
				</el-form-item>
				<el-form-item label="昵称颜色">
					<el-radio-group v-model="queryParams.nameType">
						<el-radio-button label="蓝色"/>
						<el-radio-button label="黄色" />
						<el-radio-button label="绿色" />
						<el-radio-button label="红色" />
					</el-radio-group>
				</el-form-item>
				<el-form-item label="昵称深浅">
					<el-radio-group v-model="queryParams.nameEffect">
						<el-radio-button label="深色"/>
						<el-radio-button label="浅色" />
					</el-radio-group>
				</el-form-item>
				<el-form-item label="留言内容">
					<el-radio-group v-model="queryParams.nameEffect">
						<el-input type="textarea" :rows="2" v-model="queryParams.text" style="width: 220px" :maxlength="12" :minlength="1" show-word-limit resize="none"></el-input>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="submit">
					  	Confirm
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup>
import { ChatLineRound, Male, Calendar } from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import { ElMessageBox } from 'element-plus'

const messages = ref([
	{
		text:"上课了！",
		name:"陌生人",
		time: new Date(),
		nameType:"info",
		nameEffect:"dark"
	},
	{
		text:"你，站起来回答这个问题。",
		name:"陌生人",
		time: new Date(),
		nameType:"primary",
		nameEffect:"light"
	},
	{
		text:"汗流浃背了吧老弟",
		name:"陌生人",
		time: new Date(),
		nameType:"success",
		nameEffect:"dark"},
	{
		text:"EDG牛逼！！",
		name:"陌生人",
		time: new Date(),
		nameType:"danger",
		nameEffect:"light"
	},
	{
		text:"up！up！up！冲冲冲!",
		name:"陌生人",
		time: new Date(),
		nameType:"warning",
		nameEffect:"dark"
	},
	{
		text:"上课了！",
		name:"陌生人",
		time: new Date(),
		nameType:"info",
		nameEffect:"dark"
	},
	{
		text:"你，站起来回答这个问题。",
		name:"陌生人",
		time: new Date(),
		nameType:"primary",
		nameEffect:"light"
	},
	{
		text:"汗流浃背了吧老弟",
		name:"陌生人",
		time: new Date(),
		nameType:"success",
		nameEffect:"dark"},
	{
		text:"EDG牛逼！！",
		name:"陌生人",
		time: new Date(),
		nameType:"danger",
		nameEffect:"light"
	},
	{
		text:"up！up！up！冲冲冲!",
		name:"陌生人",
		time: new Date(),
		nameType:"warning",
		nameEffect:"dark"
	},
	{
		text:"上课了！",
		name:"陌生人",
		time: new Date(),
		nameType:"info",
		nameEffect:"dark"
	},
	{
		text:"你，站起来回答这个问题。",
		name:"陌生人",
		time: new Date(),
		nameType:"primary",
		nameEffect:"light"
	},
	{
		text:"汗流浃背了吧老弟",
		name:"陌生人",
		time: new Date(),
		nameType:"success",
		nameEffect:"dark"},
	{
		text:"EDG牛逼！！",
		name:"陌生人",
		time: new Date(),
		nameType:"danger",
		nameEffect:"light"
	},
	{
		text:"up！up！up！冲冲冲!",
		name:"陌生人",
		time: new Date(),
		nameType:"warning",
		nameEffect:"dark"
	},
])
const dialogVisible = ref(false)
const queryParams = reactive({
	text:undefined,
	name:undefined,
	time: new Date(),
	nameType:undefined,
	nameEffect:undefined
})

const handleClose = (done) => {
	ElMessageBox.confirm('Are you sure to close this dialog?')
		.then(() => {
			done()
		})
		.catch(() => {
			// catch error
		})
}

//提交新的留言
const submit=()=>{
	dialogVisible.value = false;
	console.log(queryParams)
}

</script>

<style scoped>
.homePage {
	margin-top: 1vh;
	margin-left: 1vw;
	margin-right: 1vw;
	margin-bottom: 1vh;
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
</style>