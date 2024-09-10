<template>
    <div class="container">
        <div class="pagehead">
            <h1>考试详情</h1>
        </div>
        <div class="content">
            <div>
                <RouterLink :to="`/teacher?account=${route.query.account}`">返回上一页</RouterLink>
            </div>
            <hr>
            <ul>
                <li v-for="student in studentList">
                    <div class="box">
                        <ul>
                            <li v-for="grade in student">{{ grade }}</li>
                            <RouterLink :to="`/studentgrade?accountType=teachergrade&account=${route.query.account}`">详情</RouterLink>
                        </ul>
                    </div>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup name="Load">

import { RouterLink, useRoute } from 'vue-router';
import { reactive } from 'vue';
import axios from 'axios';

let route = useRoute()

let params1 = {
    teacherId:route.query.account,
    // quizId:route.query.quizId,
    // account:route.query.account
}

let studentList = reactive([
    {
        name: "xxx",
        科目1: "语文 110/150",
        科目2: "xx 得分/总分",
        科目3: "xx 110/150",
        科目4: "xx 110/150",
        科目5: "xx 110/150",
        科目6: "xx 110/150",
    },
    {
        name: "xxx",
        科目1: "语文 110/150",
        科目2: "xx 得分/总分",
        科目3: "xx 110/150",
        科目4: "xx 110/150",
        科目5: "xx 110/150",
        科目6: "xx 110/150",
    }
])

if (route.query.isupdata) {

}

axios({
    method: 'GET',
    url: "http://121.37.109.0:8080/quiz/grades",
    params: params1
}).then(response => {
    console.log(response);
    studentList = response.data.studentGrade;
}).catch(function (error) {
    console.log(error);
});




</script>

<style scoped>
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
</style>