<template>
<!--	<div id="mainContainer" style="width: 1600px; height: 900px; position: absolute">-->
		<router-view />
<!--	</div>-->
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
import { handleThemeStyle } from '@/utils/theme'

onMounted(() => {
	nextTick(() => {
	// 初始化主题样式
		handleThemeStyle(useSettingsStore().theme)
	})
	// console.log("初始化咯")
	// var baseWidth = 1600; //设计稿宽度
	// var baseHeight = 900;
	// var browerWidth = window.innerWidth; //浏览器可视宽度
	// var browerHeight = window.innerHeight; //浏览器可视高度
	//
	// var zoomWidth = browerWidth / baseWidth;
	// var zoomHeight = browerHeight / baseHeight;
	// var zoomValue = zoomHeight < zoomWidth ? zoomHeight : zoomWidth;
	// console.log("当前网页宽高", browerWidth, browerHeight)
	// console.log("缩放比例为", zoomValue)
	// document.getElementById("mainContainer").style.transform = "scale(" + zoomValue + "," + zoomValue + ")"; //mainContainer为主容器id
	// // document.getElementById("mainContainer").style.zoom = zoomValue; //mainContainer为主容器id
	// window.onresize = function () { //窗口尺寸变化时，重新计算和缩放
	// 	browerWidth = window.innerWidth;
	// 	browerHeight = window.innerHeight;
	// 	zoomWidth = browerWidth / baseWidth;
	// 	zoomHeight = browerHeight / baseHeight;
	// 	zoomValue = zoomHeight < zoomWidth ? zoomHeight : zoomWidth;
	// 	console.log("当前网页宽高", browerWidth, browerHeight)
	// 	console.log("缩放比例为", zoomValue)
	// 	document.getElementById("mainContainer").style.transform = "scale(" + zoomValue + "," + zoomValue + ")";
	// 	// document.getElementById("mainContainer").style.zoom = zoomValue; //mainContainer为主容器id
	//
	// }
})
</script>
