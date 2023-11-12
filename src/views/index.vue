<template>
  <div class="app-container">
    <!--  通过ref获取html元素 宽高必须设置 -->
    <el-row style="height: 100%" :gutter="20">
<!--      第一列-->
      <el-col :span="5" class="box-class">
        <el-row>
          <el-col :span="12"><el-avatar shape="square" :size="120" /></el-col>
          <el-col :span="12">
            <el-row><el-col :span="24"><b style="font-size: 24px;">Mo<br/> Kanglong</b></el-col></el-row>
            <el-row style="margin-top: 20%"><el-col :span="24"><el-tag size="large" type="danger" style="font-size: 14px">Standart</el-tag></el-col></el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 8%">
          <el-col :span="12">
            <el-row style="height: 6vh">
              <el-col :span="8"  style="width: 100%;">
                <svg-icon icon-class="Home_01"  style="width: 100%;height: 100%;"></svg-icon>
              </el-col>
              <el-col :span="16">
                <span  style="display: inline-block;font-size: 28px;margin: 6px;padding: 0px;margin-bottom: 0px">5</span><br/>
                <span  style="display: inline-block;font-size: 12px;margin: 2px;padding: 0px;">Programs</span>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row style="height: 6vh">
              <el-col :span="8"  style="width: 100%;">
                <svg-icon icon-class="Home_02"  style="width: 100%;height: 100%;"></svg-icon>
              </el-col>
              <el-col :span="16">
                <span  style="display: inline-block;font-size: 28px;margin: 6px;padding: 0px;margin-bottom: 0px">1</span><br/>
                <span  style="display: inline-block;font-size: 12px;margin: 2px;padding: 0px;">Partners</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 15%">
          <span  style="font-size: 24px;margin: 0px;padding: 0px;">Details</span>
        </el-row>
        <el-row>
          <el-divider></el-divider>
        </el-row>
        <el-row>
          <el-descriptions column="1">
            <el-descriptions-item label="Username">Kmo Dragon</el-descriptions-item>
            <el-descriptions-item label="Telephone">+86 17264466637</el-descriptions-item>
            <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
            <el-descriptions-item label="Remarks">
              <el-tag size="small">PManager</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Email">mumu2663@163.com</el-descriptions-item>
          </el-descriptions>
        </el-row>
        <el-row style="margin-top: 3vh">
          <span  style="font-size: 24px;margin: 0px;padding: 0px;">Segments</span>
        </el-row>
        <el-row>
          <el-divider></el-divider>
        </el-row>
        <el-row>
          <el-tag size="large" type="danger"  class="mx-1" effect="light" style="margin: 2px" round>21years</el-tag>
          <el-tag size="large" type="warning" class="mx-1" effect="plain" style="margin: 2px" round>Benefit finder</el-tag>
          <el-tag size="large" type="success" class="mx-1" effect="light" style="margin: 2px" round>Product manager</el-tag>
          <el-tag size="large" type="warning" class="mx-1" effect="plain" style="margin: 2px" round>fitness</el-tag>
          <el-tag size="large" type="danger"  class="mx-1" effect="plain" style="margin: 2px" round>Cantaloupe crazy</el-tag>
          <el-tag size="large" type=""        class="mx-1" effect="plain" style="margin: 2px" round>Light music</el-tag>
        </el-row>
        <el-row style="margin-top: 5vh" justify="center">
          <el-col :span="10" :offset="1" justify="center"><el-button style="width: 80px" type="success" >Edit</el-button></el-col>
          <el-col :span="10" :offset="2" justify="center"><el-button style="width: 80px" type="danger" plain>Suspend</el-button></el-col>
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
                    <el-col :span="20" :offset="2"><span style="font-size: 24px">1,250</span></el-col>
                  </el-row>
                  <el-row style="height: 50%">
                    <el-col :span="22" :offset="2"><span>Point Balance</span></el-col>
                  </el-row>
                </el-col>
                <el-col :span="8" align="center"><svg-icon icon-class="Home_03" style="width: 60%;height: 100%;"></svg-icon></el-col>
              </el-row>
          </el-col>
          <el-col :span="6">
            <el-row class="box-class" style="height: 100%">
              <el-col :span="16">
                <el-row style="height: 50%">
                  <el-col :span="20" :offset="2"><span style="font-size: 24px">12</span></el-col>
                </el-row>
                <el-row style="height: 50%">
                  <el-col :span="22" :offset="2"><span>Pending</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8" align="center"><svg-icon icon-class="Home_04" style="width: 60%;height: 100%;"></svg-icon></el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row class="box-class" style="height: 100%">
              <el-col :span="16">
                <el-row style="height: 50%">
                  <el-col :span="20" :offset="2"><span style="font-size: 24px">1</span></el-col>
                </el-row>
                <el-row style="height: 50%">
                  <el-col :span="22" :offset="2"><span>Redeemed</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8" align="center"><svg-icon icon-class="Home_05" style="width: 60%;height: 100%;"></svg-icon></el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row class="box-class" style="height: 100%">
              <el-col :span="16">
                <el-row style="height: 50%">
                  <el-col :span="20" :offset="2"><span style="font-size: 24px">2</span></el-col>
                </el-row>
                <el-row style="height: 50%">
                  <el-col :span="22" :offset="2"><span>Expired</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8" align="center"><svg-icon icon-class="Home_06" style="width: 60%;height: 100%;"></svg-icon></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 2%; height: 86%">
          <el-col :span="24" class="box-class">
            <div ref="chart" style="height: 100%;"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="box-class">
        <el-row style="font-size: 24px">User Activity Timeline</el-row>
        <el-row><el-divider></el-divider></el-row>
        <el-row>
          <el-col :span="22">
            <el-timeline>
              <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :icon="activity.icon"
                  :type="activity.type"
                  :color="activity.color"
                  :size="activity.size"
                  :hollow="activity.hollow"
                  :timestamp="activity.timestamp"
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
  </div>
</template>
<script setup name="Index">
import {  onMounted, ref, inject } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
// import * as echarts from "echarts";
import { MoreFilled } from '@element-plus/icons-vue'
import china from "@/assets/data/china.json"

const { proxy } = getCurrentInstance()
//通过ref获取html元素
const chart = ref()
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
//数据区

const setCharts=()=>{

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
        data: [
          {
            name: "北京市",
            value: 21,
          },
          {
            name: "天津市",
            value: 12,
          },
          {
            name: "上海市",
            value: 99,
          },
          {
            name: "重庆市",
            value: 98,
          },
          {
            name: "河北省",
            value: 99,
          },
          {
            name: "河南省",
            value: 29,
          },
          {
            name: "云南省",
            value: 79,
          },
          {
            name: "辽宁省",
            value: 38,
          },
          {
            name: "黑龙江省",
            value: 4,
          },
          {
            name: "湖南省",
            value: 32,
          },
          {
            name: "安徽省",
            value: 84,
          },
          {
            name: "山东省",
            value: 72,
          },
          {
            name: "新疆维吾尔自治区",
            value: 99,
          },
          {
            name: "江苏省",
            value: 70,
          },
          {
            name: "浙江省",
            value: 85,
          },
          {
            name: "江西省",
            value: 11,
          },
          {
            name: "湖北省",
            value: 62,
          },
          {
            name: "广西壮族自治区",
            value: 13,
          },
          {
            name: "甘肃省",
            value: 74,
          },
          {
            name: "山西省",
            value: 78,
          },
          {
            name: "内蒙古自治区",
            value: 74,
          },
          {
            name: "陕西省",
            value: 40,
          },
          {
            name: "吉林省",
            value: 9,
          },
          {
            name: "福建省",
            value: 90,
          },
          {
            name: "贵州省",
            value: 57,
          },
          {
            name: "广东省",
            value: 6,
          },
          {
            name: "青海省",
            value: 52,
          },
          {
            name: "西藏自治区",
            value: 10,
          },
          {
            name: "四川省",
            value: 98,
          },
          {
            name: "宁夏回族自治区",
            value: 11,
          },
          {
            name: "海南省",
            value: 25,
          },
          {
            name: "台湾省",
            value: 86,
          },
          {
            name: "香港特别行政区",
            value: 8,
          },
          {
            name: "澳门特别行政区",
            value: 50,
          },
        ],
      },
    ],
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      left: "right",
      min: 0,
      max: 100,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
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
    console.log(params);
  });
}

onMounted(() => {
  setCharts();
});
</script>

<style scoped>
.el-col{
  border-radius: 10px;
  height: 100%;
}
.el-divider{
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
