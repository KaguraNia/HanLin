<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-demo" active-text-color="black">
                <el-menu-item index="1" @click="toTeacher()">
                    <span>
                        <i style="font-weight: bold;" class="icon icon-homepage"></i>
                        <span>教师主页</span>
                    </span>
                </el-menu-item>
                <el-menu-item index="2" @click="toTeacherquizlist()">
                    <span>
                        <i style="font-weight: bold;" class="icon icon-member"></i>
                        <span>测验情况</span>
                    </span>
                </el-menu-item>
                <el-menu-item index="3" @click="toTeacherdate()">
                    <span style="color: rgb(0, 181, 253);">
                        <i style="font-weight: bold;" class="icon icon-base-info2"></i>
                        <span>个人信息</span>
                    </span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <div class="mainview">
            <el-main>
                <el-descriptions title="个人信息">
                    <el-descriptions-item label="">
                        <d-avatar :width="160" :height="160" :name="account"></d-avatar>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <el-descriptions>
                            <el-descriptions-item label="账号名：">{{ account }}</el-descriptions-item>
                            <el-descriptions-item label="账号类型：">
                                <el-tag style="font-family: 'wending';" size="large">教师</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label=""></el-descriptions-item>
                            <el-descriptions-item label="账号状态：">
                                <el-tag style="font-family: 'wending';" size="large">正常</el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </el-descriptions-item>
                </el-descriptions>
            </el-main>
        </div>
    </el-container>
</template>

<script lang="ts" setup name="Load">

import { RouterLink, useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
import axios from 'axios';
import router from '@/router';
import { ElMessageBox } from 'element-plus'

let account = sessionStorage.getItem("account");
let type = sessionStorage.getItem("type");

let route = useRoute()
const drawer2 = ref(false)
const radio1 = ref('Option 1')
let imgpathlist = reactive([

])

let imgaddr = 'http://121.37.109.0:8080/image/img/download?name=paper.jpg'
let img = ''
function toTeacher() {
    router.push("/teacher")
}
function toTeacherquizlist() {
    router.push("/teacherquizlist")
}
function toTeacherdate() {
    router.push("/teacherdate")
}

var textarea1 = ref('')
var curquestion = 0

let param = route.query.imgAddr
// img = route.query.imgAddr
console.log(param)


//获取测验评阅结果
axios({
    method: 'GET',
    url: '/api' + '/image/img/download',
    params: {
        name: param
    }
}).then(response => {
    img = response.data
    console.log(img);
}).catch(function (error) {
    console.log(error);
});

</script>

<style scoped>
.content {
    text-align: left;
}

.buttontext {
    font-family: 'wending';
}

h3 {
    font-family: 'wending';
    font-size: 24px
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