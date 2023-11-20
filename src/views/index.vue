<template>
	<div class="app-container">
		<!--  通过ref获取html元素 宽高必须设置 -->
		<el-row :gutter="20" style="height: 100%">
			<!--      第一列-->
			<el-col :span="5" class="box-class">
				<el-row>
					<el-col :span="12">
						<el-avatar :size="120" shape="square"/>
					</el-col>
					<el-col :span="12">
						<el-row>
							<el-col :span="24"><b style="font-size: 24px;">Mo<br/> Kanglong</b></el-col>
						</el-row>
						<el-row style="margin-top: 20%">
							<el-col :span="24">
								<el-tag size="large" style="font-size: 14px" type="danger">Standart</el-tag>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
				<el-row style="margin-top: 8%">
					<el-col :span="12">
						<el-row style="height: 6vh">
							<el-col :span="8" style="width: 100%;">
								<svg-icon icon-class="Home_01" style="width: 100%;height: 100%;"></svg-icon>
							</el-col>
							<el-col :span="16">
								<span
									style="display: inline-block;font-size: 28px;margin: 6px;padding: 0px;margin-bottom: 0px">{{
										allData.programs
									}}</span><br/>
								<span
									style="display: inline-block;font-size: 12px;margin: 2px;padding: 0px;">Programs</span>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="12">
						<el-row style="height: 6vh">
							<el-col :span="8" style="width: 100%;">
								<svg-icon icon-class="Home_02" style="width: 100%;height: 100%;"></svg-icon>
							</el-col>
							<el-col :span="16">
								<span
									style="display: inline-block;font-size: 28px;margin: 6px;padding: 0px;margin-bottom: 0px">{{
										allData.partners
									}}</span><br/>
								<span
									style="display: inline-block;font-size: 12px;margin: 2px;padding: 0px;">Partners</span>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
				<el-row style="margin-top: 15%">
					<span style="font-size: 24px;margin: 0px;padding: 0px;">Details</span>
				</el-row>
				<el-row>
					<el-divider></el-divider>
				</el-row>
				<el-row>
					<el-descriptions column="1" >
						<el-descriptions-item label="Username">		Kmo Dragon</el-descriptions-item>
						<el-descriptions-item label="Telephone">	+86 17264466637</el-descriptions-item>
						<el-descriptions-item label="Place">		Suzhou</el-descriptions-item>
						<el-descriptions-item label="Remarks">		<el-tag size="small">PManager</el-tag></el-descriptions-item>
						<el-descriptions-item label="Email">		mumu2663@163.com</el-descriptions-item>
					</el-descriptions>
				</el-row>
				<el-row style="margin-top: 3vh">
					<span style="font-size: 24px;margin: 0px;padding: 0px;">Segments</span>
				</el-row>
				<el-row>
					<el-divider></el-divider>
				</el-row>
				<el-row>
					<el-tag class="mx-1" effect="light" round size="large" style="margin: 2px" type="danger">21years
					</el-tag>
					<el-tag class="mx-1" effect="plain" round size="large" style="margin: 2px" type="warning">Benefit
						finder
					</el-tag>
					<el-tag class="mx-1" effect="light" round size="large" style="margin: 2px" type="success">Product
						manager
					</el-tag>
					<el-tag class="mx-1" effect="plain" round size="large" style="margin: 2px" type="warning">fitness
					</el-tag>
					<el-tag class="mx-1" effect="plain" round size="large" style="margin: 2px" type="danger">Cantaloupe
						crazy
					</el-tag>
					<el-tag class="mx-1" effect="plain" round size="large" style="margin: 2px" type="">Light music
					</el-tag>
				</el-row>
				<el-row justify="center" style="margin-top: 5vh">
					<el-col :offset="1" :span="10" justify="center">
						<el-button style="width: 80px" type="success">Edit</el-button>
					</el-col>
					<el-col :offset="2" :span="10" justify="center">
						<el-button plain style="width: 80px" type="danger">Suspend</el-button>
					</el-col>
				</el-row>
			</el-col>
			<!--      第二列-->
			<el-col :span="13">
				<!--        四个小card-->
				<el-row :gutter="20" style="height: 12%">
					<el-col :span="6">
						<el-row class="box-class" style="height: 100%">
							<el-col :span="16">
								<el-row style="height: 50%">
									<el-col :offset="2" :span="20"><span
										style="font-size: 24px">{{ allData.cards["0"].toLocaleString() }}</span>
									</el-col>
								</el-row>
								<el-row style="height: 50%">
									<el-col :offset="2" :span="22"><span>Images</span></el-col>
								</el-row>
							</el-col>
							<el-col :span="8" align="center">
								<svg-icon icon-class="Home_03" style="width: 60%;height: 100%;"></svg-icon>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="6">
						<el-row class="box-class" style="height: 100%">
							<el-col :span="16">
								<el-row style="height: 50%">
									<el-col :offset="2" :span="20"><span
										style="font-size: 24px">{{ allData.cards["1"].toLocaleString() }}</span>
									</el-col>
								</el-row>
								<el-row style="height: 50%">
									<el-col :offset="2" :span="22"><span>Posts</span></el-col>
								</el-row>
							</el-col>
							<el-col :span="8" align="center">
								<svg-icon icon-class="Home_04" style="width: 60%;height: 100%;"></svg-icon>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="6">
						<el-row class="box-class" style="height: 100%">
							<el-col :span="16">
								<el-row style="height: 50%">
									<el-col :offset="2" :span="20"><span
										style="font-size: 24px">{{ allData.cards["2"].toLocaleString() }}</span>
									</el-col>
								</el-row>
								<el-row style="height: 50%">
									<el-col :offset="2" :span="22"><span>Messages</span></el-col>
								</el-row>
							</el-col>
							<el-col :span="8" align="center">
								<svg-icon icon-class="Home_05" style="width: 60%;height: 100%;"></svg-icon>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="6">
						<el-row class="box-class" style="height: 100%">
							<el-col :span="16">
								<el-row style="height: 50%">
									<el-col :offset="2" :span="20"><span
										style="font-size: 24px">{{ allData.cards["3"].toLocaleString() }}</span>
									</el-col>
								</el-row>
								<el-row style="height: 50%">
									<el-col :offset="2" :span="22"><span>Days</span></el-col>
								</el-row>
							</el-col>
							<el-col :span="8" align="center">
								<svg-icon icon-class="Home_06" style="width: 60%;height: 100%;"></svg-icon>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
				<el-row style="margin-top: 2%; height: 86%">
					<el-col :span="24" class="box-class">
						<div ref="chart" style="height: 100%;"></div>
					</el-col>
				</el-row>
			</el-col>
			<!--	第三列	-->
			<el-col :span="6" class="box-class">
				<el-row style="font-size: 24px">User Activity Timeline</el-row>
				<el-row>
					<el-divider></el-divider>
				</el-row>
				<el-row>
					<el-col :span="22">
						<el-timeline>
							<el-timeline-item
								v-for="(activity, index) in activities"
								:key="index"
								:color="activity.color"
								:hollow="activity.hollow"
								:icon="activity.icon"
								:size="activity.size"
								:timestamp="activity.timestamp"
								:type="activity.type"
								placement="top"
							>
								<el-card>
									{{ activity.content }}
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<div class="div_foot">
			<a href="https://beian.miit.gov.cn/" target="_blank"><span>陕ICP备2023015443号</span></a>
		</div>
	</div>
</template>
<script name="Index" setup>
import {onMounted, reactive, ref} from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
// import * as echarts from "echarts";
import {MoreFilled} from '@element-plus/icons-vue'
import china from "@/assets/data/china.json"
import {useRouter} from "vue-router";
import {getAllData} from "@/api/home"
import {getGeo2Index, getIndex2Geo} from "@/api/DataMgt/index"

const {proxy} = getCurrentInstance()
const i2g = getIndex2Geo();
const g2i = getGeo2Index();
const router = useRouter();
//通过ref获取html元素
const activities = [
	{
		content: 'Custom icon',
		timestamp: '2018-04-12 20:46',
		size: 'large',
		type: 'primary',
		icon: MoreFilled,
	},
	{
		content: 'Custom color',
		timestamp: '2018-04-03 20:46',
		color: '#0bbd87',
	},
	{
		content: 'Custom size',
		timestamp: '2018-04-03 20:46',
		size: 'large',
	},
	{
		content: 'Custom hollow',
		timestamp: '2018-04-03 20:46',
		type: 'primary',
		hollow: true,
	},
	{
		content: 'Default node',
		timestamp: '2018-04-03 20:46',
	},
]
const chart = ref()
const allData = reactive({
	programs: 0,
	partners: 0,
	geo: [],
	max: 0,
	cards: {"0": 0, "1": 0, "2": 0, "3": 0},
	curTimeLine: []
})

const setCharts = () => {
	var myChart = proxy.$echarts.init(chart.value, "light");
	proxy.$echarts.registerMap('china', china);
	var option = {
		series: [
			{
				type: "map",
				map: 'china',
				center: [104, 34],
				zoom: 1.5,
				roam: true,
				name: "动态数量",
				data: allData.geo
			},
		],
		tooltip: {
			trigger: "item",
		},
		visualMap: {
			left: "right",
			min: 0,
			max: allData.max,
			inRange: {
				color: [
					"#ffffef",
					"#ffffbf",
					"#fee090",
					"#fdae61",
					"#f46d43",
					"#d73027",
					"#a50026",
				],
			},
			text: ["High", "Low"],
			calculable: true,
		},
	};
	myChart.setOption(option);
	myChart.on('click', function (params) {
		// console.log(params);
		router.push({path: "/TimeLine", state: {place: params.name}})
	});
}

onMounted(() => {
	getAllData().then(rp => {
		console.log(rp.data)
		//转化programs和partners
		allData.programs = rp.data["programs"]
		allData.partners = rp.data["partners"]
		//转化geo数据
		for (let key in i2g) {
			if (key in rp.data["geo"]) {
				allData.geo.push({name: i2g[key], value: rp.data["geo"][key]})
				allData.max = rp.data["geo"][key] > allData.max ? rp.data["geo"][key] : allData.max;
			} else {
				allData.geo.push({name: i2g[key], value: 0})
			}
		}
		//转化cards数据
		allData.cards = rp.data["fourCards"]
		setCharts();
	})
});
</script>

<style scoped>
.el-col {
	border-radius: 10px;
	height: 100%;
}

.el-divider {
	padding: 0px;
	margin-top: 10px;
	margin-bottom: 10px;
}
:deep(.el-descriptions__body){
	background-color: #00000000
}
:deep(.div_foot){
	bottom: 0px;
    position: absolute;
	height: 50px;
	text-align: center;
	line-height: 50px;
	width: 100%;
	font-size: 14px;
	font-family: "微軟正黑體";
	color: #000000bb;
}
</style>
