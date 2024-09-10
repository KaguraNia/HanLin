<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-demo" active-text-color="rgb(0, 181, 253)">
                <el-menu-item index="1" @click="toStudent()">
                    <span >
                        <i style="font-weight: bold;" class="icon icon-homepage"></i>
                        <span>学生主页</span>
                    </span>
                </el-menu-item>
                <el-menu-item index="2" @click="toquizlist()">
                    <span style="color: rgb(0, 181, 253);"> 
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
                <el-table :data="tableData" stripe max-height="100%" highlight-current-row style="width: 100%">
                    <el-table-column prop="id" label="ID" width="180" />
                    <el-table-column prop="quizName" label="测验名" width="180" />
                    <el-table-column prop="totalScore" label="总得分" />
                    <el-table-column prop="userName" label="姓名" />
                    <el-table-column slot-scope="scope" fixed="right" label="操作" width="120">
                        <template #default="scope">
                            <el-button style="font-family: 'wending';" link type="primary" size="small" @click.prevent="toPaper(scope.row.id)">
                                查看详情
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </div>
    </el-container>
</template>

<style>
span {
    font-size: 24px;
}

.el-table {
    display: inline-block;
}

.el-aside {
    background-color: snow;
    box-shadow: 2px 0 10px 0 rgb(180, 180, 180);
}

.mainview {
    margin: 10px 10px 0 10px;
    box-shadow: 5px 5px 10px 0 rgb(180, 180, 180);
    width: 100%;
    background-color: white;
    text-align: center;
}

.vxe-table {
    display: inline-block;
    width: 70%;
}

span {
    font-size: 24px;
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


.content{
    text-align: left;
}

.map1{
    width: 300px;
    height: 300px;
    background-color: grey;
    margin:0px 50px 20px 50px;
    position: relative;
    top: 20px;
    display: inline-block;
}

.grades{
    display: inline-block;
}


.grades span{
    font-size: 20px;
}

.grades ul {
    margin-right: 160px;
}

.grades li {
    list-style-type: none;
    padding: 12px;
}


</style>

<script lang="ts" setup name="Load">
import { RouterLink } from 'vue-router';
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import router from '@/router';

let route = useRoute();

function toStudent() {
    router.push("/student")
}
function toquizlist() {
    router.push("/quizList")
}
function tostudentdate() {
    router.push("/studentdate")
}

function toPaper(data: number) {
    console.log(data);
    router.push(
        {
            path: '/studentpaper',
            query: { quizID: data }
        }
    );
}

var tableData = ref([
    {
        id: '',
        quizName: '',
        totalScore: '',
        userName: '',
    },
])

let param = sessionStorage.getItem("account")

//获取测验列表
axios({
    method: 'GET',
    url: '/api' + '/quiz/quiz',
    params: {
        username: param
    }
}).then(response => {
    // console.log(response);
    tableData.value = response.data.data;
    // console.log(response.data.data);
}).catch(function (error) {
    // console.log(error);
});



</script>
