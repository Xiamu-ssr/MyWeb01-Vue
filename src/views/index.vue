<template>
	<div class="app-container">
		<!--  通过ref获取html元素 宽高必须设置 -->
		<el-row :gutter="20" style="height: 100%">
			<!--      第一列-->
			<el-col :span="5" class="box-class" v-loading="loadings[0]" element-loading-background="#fddb9255">
<!--				头像块-->
				<el-row style="height: 20%">
					<el-col :span="12">
						<el-avatar shape="square" style="height: 80%;width: auto" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
					</el-col>
					<el-col :span="12">
						<el-row style="height: 50%;">
							<el-col :span="24"><b style="font-size: 1.5vw;">Mo<br/> Kanglong</b></el-col>
						</el-row>
						<el-row style="height: 50%;">
							<el-col :span="24">
								<el-tag size="large" style="font-size: 14px" type="danger">Standart</el-tag>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
<!--				program块-->
				<el-row style="margin-top: 0%;height: 10%">
					<el-col :span="12">
						<router-link :to="{path:'/portfolio'}">
							<el-row style="height: 100%">
								<el-col :span="8">
									<svg-icon icon-class="Home_01" style="width: 100%;height: 100%;"></svg-icon>
								</el-col>
								<el-col :span="16" style="display: flex;align-items: center">
									<div>
										<span style="font-size: 1.6vw;">
											{{allData.programs }}
										</span><br/>
										<span style="font-size: 0.8vw">Programs</span>
									</div>
								</el-col>
							</el-row>
						</router-link>
					</el-col>
					<el-col :span="12">
						<el-row style="height: 100%">
							<el-col :span="8">
								<svg-icon icon-class="Home_02" style="width: 100%;height: 100%;"></svg-icon>
							</el-col>
							<el-col :span="16" style="display: flex;align-items: center">
								<div>
									<span
										style="font-size: 1.6vw;">
										{{allData.partners }}
									</span><br/>
									<span style="font-size: 0.8vw">Partners</span>
								</div>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
<!--				Details块-->
				<el-row style="margin-top: 10%;height: 30%">
					<el-row>
						<span style="font-size: 1.4vw">Details</span>
					</el-row>
					<el-divider></el-divider>
					<el-row>
						<el-descriptions column="1" >
							<el-descriptions-item label="Username">		Kmo Dragon</el-descriptions-item>
							<el-descriptions-item label="Telephone">	+86 17264466637</el-descriptions-item>
							<el-descriptions-item label="Place">		Suzhou</el-descriptions-item>
							<el-descriptions-item label="Remarks">		<el-tag size="small">PManager</el-tag></el-descriptions-item>
							<el-descriptions-item label="Email">		mumu2663@163.com</el-descriptions-item>
						</el-descriptions>
					</el-row>
				</el-row>
<!--				Segments块-->
				<el-row style="margin-top: 5%;height: 25%">
					<el-row>
						<span style="font-size: 1.4vw;">Segments</span>
					</el-row>
					<el-divider></el-divider>
					<el-row>
						<el-tag v-for="tag in allData.tags"
								class="mx-1"
								style="margin: 0.2vw"
								:effect=tag.effect
								:round="tag.round"
								:size="tag.size"
								:type="tag.type"
						>{{ tag.value }}</el-tag>
					</el-row>
				</el-row>
			</el-col>
			<!--      第二列-->
			<el-col :span="13" >
				<!--        四个小card-->
				<el-row :gutter="20" style="height: 12%">
					<el-col :span="6" v-for="card in allData.cards">
						<el-row class="box-class" style="height: 100%" v-loading="loadings[1]" element-loading-background="#fddb9255">
							<el-col :span="16">
								<el-row style="height: 60%">
									<el-col :span="20">
										<span style="font-size: 1.6vw">{{ card.num.toLocaleString() }}</span>
									</el-col>
								</el-row>
								<el-row style="height: 40%">
									<el-col :span="22"><span style="font-size: 1vw">{{ card.name }}</span></el-col>
								</el-row>
							</el-col>
							<el-col :span="8" align="center">
								<svg-icon :icon-class="card.icon" style="width: 100%;height: 100%;"></svg-icon>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
<!--				地图-->
				<el-row style="margin-top: 2%; height: 86%" v-loading="loadings[2]" element-loading-background="#fddb9255">
					<el-col :span="24" class="box-class">
						<div ref="chart" style="height: 100%;"></div>
					</el-col>
				</el-row>
			</el-col  >
			<!--	第三列	-->
			<el-col :span="6" class="box-class" v-loading="loadings[3]" element-loading-background="#fddb9255">
				<el-row style="height: 100%">
					<el-row style="font-size: 1.4vw;font-weight: bold;font-family: 'Stencil Std, fantasy'">User Activity Timeline</el-row>
					<el-divider></el-divider>
					<el-row style="width: 100%">
						<el-col :span="22">
							<el-timeline>
								<el-timeline-item
									v-for="(activity, index) in activities"
									:key="index"
									:hollow="activity['hollow']"
									:size="activity['size']"
									:timestamp="activity.timestamp"
									:type="activity['type']"
									placement="top"
								>
									<el-card class="hover-card" @click="transUrl(activity['tag']['place'])">
										{{ activity.content }}
										<el-tag
											:effect="activity['tag']['effect']"
											:type  ="activity['tag']['type']"
											:size  ="activity['tag']['size']"
											:round ="activity['tag']['round']"
										>{{ i2g[activity['tag']["place"]] }}</el-tag>
									</el-card>
								</el-timeline-item>
							</el-timeline>
						</el-col>
					</el-row>
				</el-row>
			</el-col>
		</el-row>
		<div class="div_foot">
			<a href="https://beian.miit.gov.cn/" target="_blank"><span>陕ICP备2023015443号</span></a>
		</div>
	</div>
</template>
<script setup name="Index">
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import china from "@/assets/data/china.json"
import {useRouter} from "vue-router";
import {getAllData} from "@/api/home"
import {getGeo2Index, getIndex2Geo} from "@/api/DataMgt"
import {randomTimeLineStyle, randomTagStyle} from "@/api/utils"

const {proxy} = getCurrentInstance()
const i2g = getIndex2Geo();
const g2i = getGeo2Index();
const router = useRouter();
//数据
const activities = ref([])
const chart = ref()
const allData = reactive({
	programs: 0,
	partners: 0,
	tags:[
		{value:"21years"},
		{value:"Benefit finder"},
		{value:"Product manager"},
		{value:"fitness"},
		{value:"Cantaloupe crazy"},
		{value:"Light music"},
	],
	geo: [],
	max: 0,
	cards: [
		{name:"Images", 	num:0, icon:"Home_03"},
		{name:"Post",   	num:0, icon:"Home_04"},
		{name:"Messages", 	num:0, icon:"Home_05"},
		{name:"Days", 		num:0, icon:"Home_06"},
	],
	curTimeLine: []
})
const loadings = ref([
	true,//第一列
	true,//第二列上面
	true,//第二列下面
	true//第三列
])

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

//最近动态跳转
const transUrl=(place)=>{
	// console.log(place)
	router.push({path: "/TimeLine", state: {place: i2g[place]}});
}

onMounted(() => {
	getAllData().then(rp => {
		// console.log(rp.data)
		//转化programs和partners
		allData.programs = rp.data["programs"]
		allData.partners = rp.data["partners"]
		loadings.value[0] = false;
		//转化cards数据
		for(let i=0; i<allData.cards.length; ++i){
			allData.cards[i].num = rp.data["fourCards"][`${i}`]
		}
		loadings.value[1] = false;
		//转化geo数据
		for (let key in i2g) {
			if (key in rp.data["geo"]) {
				allData.geo.push({name: i2g[key], value: rp.data["geo"][key]})
				allData.max = rp.data["geo"][key] > allData.max ? rp.data["geo"][key] : allData.max;
			} else {
				allData.geo.push({name: i2g[key], value: 0})
			}
		}
		setCharts();
		loadings.value[2] = false;
		//转化最新动态
		activities.value = []
		rp.data["curTimeLine"].forEach(tmp=>{
			// console.log(tmp)
			let activity = randomTimeLineStyle()
			let tag = randomTagStyle()
			activity["timestamp"] = tmp["createTime"]
			activity["content"] = tmp["title"]
			activity["tag"] = {
				place: tmp["place"],
				size: tag.size,
				type: tag.type,
				effect: tag.effect,
				round: tag.round
			}
			activities.value.push(activity)
		})
		loadings.value[3] = false;
	})
	//设置tagsStyle
	for (let tag of allData.tags) {
		let tmp = randomTagStyle()
		tag["type"] = tmp.type;
		tag["effect"] = tmp.effect;
		tag["round"] = true;
		tag["size"] = "large";
	}
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

:deep(.el-descriptions__cell){
	padding-bottom: 0.2vw !important;
	font-size: 0.8vw !important;
}
:deep(.el-divider){
	margin: 0 !important;
	padding: 0 !important;
}
</style>
