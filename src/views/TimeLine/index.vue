<template>
	<div>
		<el-scrollbar class="homePage">
			<!--      封面-->
			<el-row>
				<el-col :span="24">
					<div class="image-container">
						<el-image fit="contain" :src="topHome"></el-image>
						<div class="overlay-text">
							<el-row>
								<el-col :span="24">
									<el-tag effect="dark" size="large" style="width: 100px">Hi I'am there.</el-tag>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<span style="font-size: 32px; color: black;font-family: 方正粗黑宋简体">I am Developer</span>
								</el-col>
							</el-row>
							<el-row style="padding-top: 14px">
								<el-col :span="24">
									<span style="font-size: 16px; color: black;font-family: 楷体;font-weight: bold">I make the complex simple</span>
								</el-col>
							</el-row>
						</div>
					</div>

				</el-col>
			</el-row>
			<!--      地区选择-->
			<el-row>
				<el-col :span="24" align="center">
					<span style="font-size: 28px;font-family: Georgia, serif">Page Time-Line</span>
				</el-col>
			</el-row>
			<el-row>
				<el-col :offset="10" :span="4" align="center">
					<span style="font-size: 16px;font-family: Arial, sans-serif">地区</span>
					<el-divider direction="vertical"/>
					<el-select v-model="curPlace" clearable style="width: 100px" @change="selectChange">
						<el-option v-for="p in selectOptions.place" :label="p.label" :value="p.value"></el-option>
					</el-select>
				</el-col>
			</el-row>
			<!--    内容展示 -->
			<el-row>
				<el-col :span="4"></el-col>
				<el-col :span="16">
					<el-timeline>
						<el-timeline-item
							v-for="(activity, index) in activities"
							:key="index"
							:hollow="activity.hollow"
							:timestamp="activity.createTime"
							:type="activity.type"
							placement="top"
						>
							<el-card>
								<el-row>
									<el-col :span="24">
										<span style="font-size: 32px;font-weight: bold; font-family: 楷体">{{
												activity.title
											}}</span>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<el-tag round size="large">{{ i2g[activity.place] }}</el-tag>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<el-carousel :interval="1500" style="width: 100%" type="card">
											<el-carousel-item v-for="url in activity.images">
												<el-image :preview-src-list="activity.imgList" :preview-teleported="true"
														  :src="viewImgUrl+'/'+url.name"
														  fit="scale-down"
														  style="width: 100%;height: 100%">
													<template #error>
														<div class="image-slot">
															<span>哎呀，图片被掉入黑洞啦</span>
														</div>
													</template>
												</el-image>
											</el-carousel-item>
										</el-carousel>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<span style="font-size: 18px;font-family: 黑体">{{ activity.text }}</span>
									</el-col>
								</el-row>
							</el-card>
						</el-timeline-item>
					</el-timeline>
				</el-col>
				<el-col :span="4"></el-col>
			</el-row>
		</el-scrollbar>
	</div>
</template>


<script name="TimeLine" setup>
import {onMounted} from "vue";
import {getListByPlace} from "@/api/TimeLine";
import {getGeo2Index, getIndex2Geo} from "@/api/DataMgt/index"

import topHome from "@/assets/images/topHome.png"

const viewImgUrl = ref(import.meta.env.VITE_APP_BASE_API + '/images'); // 上传的图片服务器地址
//index To geo place Map
const i2g = getIndex2Geo();
const g2i = getGeo2Index();
const selectOptions = reactive({
	place: []
})
const curPlace = ref();
const activities = ref([])

const getListByPlaceL = () => {
	activities.value = [];
	getListByPlace({place: curPlace.value}).then(rp => {
		console.log(rp.data)
		// let colors = ["blue", "green", "red", "orange"];
		let types = ["danger", "primary", "success", "info", "warning"];
		let hollows = [true, false];

		for (let d of rp.data) {
			d.hollow = hollows[Math.floor(Math.random() * hollows.length)];
			// d.color = colors[Math.floor(Math.random() * colors.length)];
			d.type = types[Math.floor(Math.random() * types.length)];
			d.imgList = Array.from(d['images']).map(i => {
				return viewImgUrl.value + '/' + i.name
			})
			activities.value.push(d);
		}
		console.log(activities)
	})
}
const selectChange = (val) => {
	console.log(val)
	getListByPlaceL(val);
}

const viewImg = () => {
	console.log("viewImg")
}

onMounted(() => {
	if (history.state.place != null) {
		curPlace.value = g2i[history.state.place];
	} else {
		curPlace.value = "1";
	}
	getListByPlaceL();
	for (let index in i2g) {
		selectOptions.place.push({label: i2g[index], value: index})
	}
})

</script>


<style scoped>

.homePage {
	margin-top: 1vh;
	margin-left: 1vw;
	margin-right: 1vw;
	margin-bottom: 1vh;
	box-shadow: 3px 0px 5px 3px #00000005, -3px 0px 5px 3px #00000005, 0px 3px 5px 3px #00000005, 0px -3px 5px 3px #00000005;
	border-radius: 10px;
	height: 92vh;
}

.image-container {
	position: relative;
	width: 100%; /* 根据你的图片大小调整 */
	height: 100%; /* 根据你的图片大小调整 */
}

.image-container .el-image {
	width: 100%;
	height: 100%;
}

.overlay-text {
	position: absolute;
	top: 50%;
	left: 5%;
}

.image-slot {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: var(--el-fill-color-light);
	color: var(--el-text-color-secondary);
	font-size: 24px;
}
</style>