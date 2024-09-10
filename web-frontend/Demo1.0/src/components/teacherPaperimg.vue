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
                    <span style="color: rgb(0, 181, 253);">
                        <i style="font-weight: bold;" class="icon icon-member"></i>
                        <span>测验情况</span>
                    </span>
                </el-menu-item>
                <el-menu-item index="3" @click="toTeacherdate()">
                    <span>
                        <i style="font-weight: bold;" class="icon icon-base-info2"></i>
                        <span>个人信息</span>
                    </span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <div class="mainview">
            <div style="text-align: left;">
                <span style="margin-left: 15px;cursor: pointer;" @click="toTeacherquizlist()">
                    <i style="font-weight: bold;" class="icon icon-collapse"></i>
                    <span style="font-family: 'wending';">返回上一页</span>
                </span>
            </div>
            <el-main>
                <img style="width: 100%;" :src="'http://121.37.109.0:8080/image/img/download?name='+ param" alt="">
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

let param = route.query.imgAddr
let imgaddr = 'http://121.37.109.0:8080/image/img/download?name='+param
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

// img = route.query.imgAddr
console.log(imgaddr);
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

.box{
    height: 200px;
}

.box0{
    height: 50px;
}

.box0 span{
    margin: 0 50px;
}

.img{
    width: 150px;
    height: 150px;
    background-color: #666;
    margin-left: 80px;
}

.box1 a{
    margin-right: 80px;
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