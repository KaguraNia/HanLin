<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-demo" active-text-color="rgb(0, 181, 253)">
                <el-menu-item index="1" @click="toStudent()">
                    <span style="color: rgb(0, 181, 253);">
                        <i style="font-weight: bold;" class="icon icon-homepage"></i>
                        <span>学生主页</span>
                    </span>
                </el-menu-item>
                <el-menu-item index="2" @click="toquizlist()">
                    <span>
                        <i style="font-weight: bold;" class="icon icon-list-view"></i>
                        <span>测验情况</span>
                    </span> 
                </el-menu-item>
                <el-menu-item index="3" @click="tostudentdate()">
                    <span>
                        <i style="font-weight: bold;" class="icon icon-base-info2"></i>
                        <span>个人信息</span>
                    </span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <div class="mainview">
            <el-main>
                <div class="item item1 clearfix" id="item1">
                    <div ref="echartsRef1" class="echarts leftfix"></div>
                    <div class="message leftfix">
                    </div>
                </div>
            </el-main>
        </div>
    </el-container>
</template>

<script lang="ts" setup name="Load">

import { useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import * as echarts from "echarts";
import { onMounted } from "vue";
import { watch } from 'vue';

let route = useRoute()

let data1 = ref(0),
    data2 = ref(0),
    data3 = ref(0),
    data4 = ref(0),
    data5 = ref(0),
    data6 = ref(0)

var ChartData = [
    data1.value = 0,
    data2.value = 0,
    data3.value = 0,
    data4.value = 0,
    data5.value = 0,
    data6.value = 0
]

var flag = false

function toStudent() {
    router.push("/student")
}
function toquizlist() {
    router.push("/quizList")
}
function tostudentdate() {
    router.push("/studentdate")
}

axios({
    method: 'GET',
    url: '/api' + '/quiz/quiz',
    params: {
        username: sessionStorage.getItem("account")
    }
}).then(response => {
    // console.log(response.data.data[0].totalScore);
    data1.value = response.data.data[0].totalScore
    data2.value = response.data.data[1].totalScore
    data3.value = response.data.data[2].totalScore
    data4.value = response.data.data[3].totalScore
    data5.value = response.data.data[4].totalScore
    data6.value = response.data.data[5].totalScore
    flag = true
}).catch(function (error) {
    console.log(error);
});

const echartsRef1 = ref()

function ChartOpen() {
    var myChart = echarts.init(echartsRef1.value)
    // 指定图表的配置项和数据
    const option = {
        title: {
            text: "总分变化趋势",
            // style:"font-family: 'wending';",
        },
        tooltip: {},
        legend: {
            data: ["得分", "班级均分"]
        },
        xAxis: {
            data: ["第1次", "第2次", "第3次", "第4次", "第5次", "第6次"]
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: "得分",
                type: "bar",
                data: ChartData,
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
}

onMounted(() => {
    ChartOpen()
})

watch(() => data1.value, () => {
    var myChart = echarts.init(echartsRef1.value)
    // 指定图表的配置项和数据
    const option = {
        title: {
            text: "总分变化趋势"
        },
        tooltip: {},
        legend: {
            data: ["得分", "班级均分"]
        },
        xAxis: {
            data: ["第1次", "第2次", "第3次", "第4次", "第5次", "第6次"]
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: "得分",
                type: "bar",
                data: [data1.value,data2.value,data3.value,data4.value,data5.value,data6.value,],
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
})

</script>

<style scoped>
.el-aside {
    background-color: snow;
    box-shadow: 2px 6px 10px 0 rgb(180, 180, 180);
}

.mainview {
    margin: 10px 10px 0 10px;
    box-shadow: 5px 5px 10px 0 rgb(180, 180, 180);
    width: 100%;
    background-color: white;
}

span {
    font-size: 24px;
}

.echarts {
    width: 100%;
    height: 500px;
    display: inline-block;
}

.item {
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
}


.data{
    background-color: snow;
}

.box{
    height: 200px;
    line-height: 200px;
    font-size: 36px;
}

.text{
    margin: 20px;
}

.box4 button{
    width: 25%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
}

.hidden{
    font-size: 0px;
}

* {
    margin: 0;
    padding: 0;
}

.leftfix {
    float: left;
}

.rightfix {
    float: right;
}

.clearfix::after {
    content: '';
    display: block;
    clear: both;
}

a {
    text-decoration: none;
    color: #666;
}

ol,
ul,
dl {
    list-style-type: none;
}

input {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

body {
    /* background-image: url("https://img2.imgtp.com/2024/05/05/soSEQv6l.jpg"); */
    background-image: url("@/public/背景图.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}

.container {
    box-shadow: 0 0 10px 5px rgb(180, 180, 180);
    width: 1000px;
    text-align: center;
    margin: 0 auto;
    background-color: white;
}

.pagehead {
    margin: 0 auto;
    text-align: center;
    width: 1000px;
    height: 150px;
    background-color: rgb(255, 207, 119);
    color: white;
    line-height: 150px;
    font-size: 40px;
}

.content {
    box-shadow: 0 -3px 7px 2px rgb(180, 180, 180);
    width: 960px;
    margin: 0 auto;
    background-color: snow;
    position: relative;
    left: 0;
    top: -10px;
    border-radius: 10px;
}

h1 {
    height: 60px;
    line-height: 60px;
    font-size: 60px;
    margin-bottom: 36px;
    padding: 0;
    font-family: "仿宋";
    position: relative;
    top: 30px;
}

h2 {
    height: 40px;
    line-height: 40px;
    font-size: 40px;
    margin: 16px 0;
    padding: 0;
    font-family: "仿宋";
}

@font-face {
    font-family: wending;
    src: url("@/public/三极行楷简体-粗.ttf") format('truetype');
}

.hidden{
    display: none;
}

span{
    color: black;
}

.buttontext{
    font-family: 'wending';
    background-color: none;
}

.el-aside{
    font-family: 'wending';
}
</style>