<template>
  <div class="homePage">
    <el-row>
      <el-col :span="24" align="center">
        <span style="font-size: 28px;font-family: Georgia, serif">Page Time-Line</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="10" align="center">
        <span style="font-size: 16px;font-family: Arial, sans-serif">地区</span>
        <el-divider direction="vertical" />
        <span style="font-size: 16px;font-family: Arial, sans-serif">天津</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-carousel height="450px" class="box-class">
          <el-carousel-item v-for="url in topInfo.images" :key="url" style="width: 100%;height: 100%">
            <div class="image-container">
              <el-image :src="viewImgUrl+'/'+url.name" fit="contain"></el-image>
              <div class="overlay-text">
                <el-row>
                  <el-col :span="24">
                    <el-tag effect="dark" size="large" style="width: 100px">{{ topInfo.place }}</el-tag>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <span style="font-size: 32px; color: black;font-family: 方正粗黑宋简体">{{ topInfo.title }}</span>
                    <span style="font-size: 32px; color: black;font-family: 等线">{{ topInfo.title }}</span>
                    <span style="font-size: 32px; color: black;font-family: '微軟正黑體 Light'">{{ topInfo.title }}</span>
                  </el-col>
                </el-row>
                <el-row style="padding-top: 14px">
                  <el-col :span="24">
                    <span style="font-size: 16px; color: black;font-family: 楷体;font-weight: bold">{{ topInfo.text }}</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>


<script setup name="TimeLine">

import {onMounted} from "vue";
import {getImageTextById} from "@/api/DataMgt";

const topInfo = ref({})
const viewImgUrl = ref(import.meta.env.VITE_APP_BASE_API +'/images'); // 上传的图片服务器地址


onMounted(()=>{
  getImageTextById("MT00000013").then(rp=>{
    topInfo.value = rp.data;
    // topInfo.value["images"] = topInfo.value["images"][0]["name"]
    // topInfo.value.images = Array.from(topInfo.value['images']).map(i => {return viewImgUrl.value+'/'+i.name})
  })
})

</script>


<style scoped>

.homePage{
  margin-top: 1vh;
  margin-left: 15vw;
  margin-right: 15vw;
  margin-bottom: 1vh;
  box-shadow: 3px 0px 5px 3px #00000005,-3px 0px 5px 3px #00000005, 0px 3px 5px 3px #00000005,0px -3px 5px 3px #00000005;
  border-radius: 10px;
  height: 92vh;
}

.image-container {
  position: relative;
  width: 100%;  /* 根据你的图片大小调整 */
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
</style>