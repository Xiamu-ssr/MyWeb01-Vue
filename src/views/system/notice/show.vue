<template>
	<div class="app-container">
		<el-scrollbar class="box-class" style="height: 100%">
			<el-col :span="20" :offset="2">
				<el-timeline>
					<el-timeline-item
						v-for="activity in activities"
						:timestamp="activity['createTime']"
						placement="top"
						:hollow="activity['hollow']"
						:size="activity['size']"
						:type="activity['type']"
					>
						<el-card style="width: 90%">
							<span style="font-size: 1.6vw; font-family: '微軟正黑體';font-weight: bold">
								{{ activity['noticeTitle'] }}
							</span>
							<el-divider><span  style="font-weight: bold; font-family: 'Times, Times New Roman, serif'">NOTICE</span></el-divider>
							<div v-html="activity['noticeContent']">
							</div>
						</el-card>
					</el-timeline-item>
				</el-timeline>
			</el-col>
		</el-scrollbar>
	</div>
</template>

<script setup name="NoticeShow">
import {listNotice} from "@/api/system/notice"
import {onMounted, ref} from "vue";
import {randomTimeLineStyle} from "@/api/utils";

const activities = ref([])


onMounted(()=>{
	listNotice({
		pageNum:1,
		pageSize:1000000
	}).then(rp=>{
		activities.value = rp["rows"]
		activities.value.forEach(activity=>{
			let randomA = randomTimeLineStyle()
			Object.assign(activity, randomA)
		})
		console.log(activities.value)
	})
})
</script>

<style scoped>

</style>