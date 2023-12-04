<template>
	<div class="app-container">
		<el-row class="box-class" style="height: 10%">
			<el-form class="form-header-search">
				<el-row>
					<el-col :span="7">
						<el-form-item label="状态">
							<el-select v-model="queryParams.status" clearable>
								<el-option label="已通过" :value="1"></el-option>
								<el-option label="未通过" :value="0"></el-option>
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
								value-format="YYYY-MM-DD"
								unlink-panels
							/>
						</el-form-item>
					</el-col>
					<el-col :span="3" :offset="7">
						<el-button type="primary" @click="submitSearch">查询</el-button>
					</el-col>
				</el-row>
			</el-form>
		</el-row>
		<el-row class="box-class" style="margin-top: 1%; height: 90%">
			<el-table :data="tableData" border stripe max-height="60vh" @sort-change="handleSortChange">
				<el-table-column label="ID" 		prop="id" 			width="120px"></el-table-column>
				<el-table-column label="时间" 		prop="createTime"	width="160px"
								 sortable="custom"
								 :sort-orders="['ascending', 'descending']"
				></el-table-column>
				<el-table-column label="昵称" 		prop="name"></el-table-column>
				<el-table-column label="内容" 		prop="text"></el-table-column>
				<el-table-column label="链接地址"	prop="link"></el-table-column>
				<el-table-column label="状态" 		prop="status" 		width="80px" align="center">
					<template #default="scope">
						<dict-tag :options="my_message_status" :value="scope.row.status"></dict-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作" 							width="120px" align="center">
					<template #default="scope">
						<el-button type="primary" v-if="scope.row.status === '0'" @click="confirmCheckL(scope.row.id)" plain>通过</el-button>
						<el-button type="danger" v-if="scope.row.status === '1'" @click="cancelCheckL(scope.row.id)" plain>不通过</el-button>
					</template>
				</el-table-column>
			</el-table>
			<pagination
				v-model:total="queryParams.pageTotal"
				v-model:page="queryParams.pageNum"
				v-model:limit="queryParams.pageSize"
				@pagination="handlePagination">
			</pagination>
		</el-row>
	</div>
</template>

<script name="MessageMgt" setup>
import {getCurrentInstance, onMounted} from "vue";
import {getList, confirmCheck, cancelCheck} from "@/api/MessageBoard"
import DictTag from "@/components/DictTag/index.vue";
import Pagination from "@/components/Pagination/index.vue";

const {proxy} = getCurrentInstance();
const { my_message_status } = proxy.useDict("my_message_status");
//查询参数
const queryParams = reactive({
	status: undefined,
	date: undefined,
	pageTotal: 0,
	pageNum: 1,
	pageSize: 10,
	orderByColumn: 'createTime',
	isAsc: 'descending',
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

//查询
const submitSearch = () => {
	console.log(queryParams)
	getList(queryParams).then(rp => {
		// console.log(rp)
		tableData.value = rp.data["rows"];
		queryParams.pageTotal = rp.data["total"]
	})
}

//分页
const handlePagination=({page, limit})=>{
	console.log(page, limit)
	submitSearch()
}

//排序
const handleSortChange=(column)=>{
	queryParams.orderByColumn = column.prop;
	queryParams.isAsc = column.order;
	submitSearch();
}

const confirmCheckL=(id)=>{
	confirmCheck(id).then(rp=>{
		if (rp.code === 200){
			proxy.$modal.msgSuccess("操作成功");
			submitSearch();
		}else {
			proxy.$modal.msgError("操作失败");
		}
	})
}

const cancelCheckL=(id)=>{
	cancelCheck(id).then(rp=>{
		if (rp.code === 200){
			proxy.$modal.msgSuccess("操作成功");
			submitSearch();
		}else {
			proxy.$modal.msgError("操作失败");
		}
	})
}

onMounted(() => {
	submitSearch();
})

</script>

<style scoped>
:deep(.el-dialog) {
	margin-top: auto !important;
}
</style>