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
            <div :ref="el => { charts[0] = el }" style="height: 100%;"></div>
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
const { proxy } = getCurrentInstance()
//通过ref获取html元素
const info = ref();
const charts = ref([])
const options = ref([
  {
    title: {
      text: 'Stacked Area Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  },
])
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

const setCharts=(index)=>{
  // 渲染echarts的父元素
  var infoEl = charts.value[index];
  //  light dark
  var userEc = proxy.$echarts.init(infoEl, "light");
  var option = options.value[index];
  userEc.setOption(option);
}

onMounted(() => {
  for (var i=0; i<charts.value.length; ++i){
    setCharts(i);
  }
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
