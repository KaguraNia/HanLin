<style scoped>
.content {
    min-width: 500px;
    max-width: 500px;
    height: 600px;

    position: absolute;
    top: 200px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    text-align: center;
    box-shadow: 0 -3px 7px 2px rgb(180, 180, 180);
    margin: 0 auto;
    background-color: white;

    border-radius: 10px;
}

.content button{
    width: 25%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
}

.LogIn{
    height: 250px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

select{
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    margin-right: 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 24px;
    font-family: 'wending';
    color: black;
}

.loadimg {
    /* height: 200px; */
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}

el-form {
    width: 500px;
    height: 250px;
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    margin: auto;
}

el-form-item {
    text-align: center;
}

el-button {
    width: 50%;
    font-size: 24px;
}

.form {
    height: 400px;
    width: 400px;
    position: absolute;
    left: 0;
    right: 0;
    top: 150px;
    margin: auto;
}

span,
div,
el-input,
option {
    font-size: 24px;
    font-family: 'wending';
    color: black;
}

input {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 24px;
    font-family: 'wending';
    color: black;
}

body {
    /* background-image: url("https://img2.imgtp.com/2024/05/05/soSEQv6l.jpg"); */
    background-image: url("@/public/背景图.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}

.Loadcontainer{
    width: 100%;
    height: 100%;
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

<template>
    <link rel="stylesheet" href="../../css/reset.css">
    <link rel="stylesheet" href="../../css/load.css">
    <div class="Loadcontainer">
        <div class="content">
            <!-- <div class="headimg"> -->
            <img src="../../public/logo+title.png" class="loadimg" alt="">
            <!-- </div> -->
            <div class="form">
                <center>
                    <el-form action="" label-position="left" status-icon ref="formRef" class="LogIn"
                        onsubmit="submitHandle()">
                        <el-form-item prop="account">
                            <span>账号:</span>
                            <el-input style="font-family: '仿宋';" type="text" id="account" placeholder="账号" v-model="form.account" minlength="6"
                                maxlength="16" required>
                            </el-input>
                        </el-form-item>
                        <!-- <br> -->
                        <el-form-item prop="password">
                            <span>密码:</span>
                            <el-input style="font-family: '仿宋';" type="password" id="password" placeholder="密码" v-model="form.password"
                                pattern="[0-9]+" required>
                            </el-input>
                        </el-form-item>
                        <!-- <br> -->
                        <el-form-item prop="type">
                            <span>账号类型：</span>
                            <select id="select" v-model="form.type">
                                <option @click="Getselect" value="1">学生</option>
                                <option @click="Getselect" value="2">教师</option>
                                <option @click="Getselect" value="3">管理员</option>
                            </select>
                        </el-form-item>
                        <el-button type="primary" plain id="btn" size="large" @click="login">
                            <span id="Test">登陆</span>
                        </el-button>
                    </el-form>
                </center>
            </div>
        </div>
    </div>

    <!-- </div> -->
</template>
<script lang="ts" setup name="Load">

// import { Router } from 'vue-router'
import { ref } from 'vue';
import axios from 'axios';
import { ElForm, ElFormItem } from 'element-plus'
import { reactive } from 'vue';
import router from '@/router';
import Vue from 'vue'

const form = ref({
    account: '',
    password: '',
    type: 1
})

var byClass = document.getElementById("Test")

let accountType = 'student';

let realpath = "/student";

const formRef = ref(null)

function Getselect() {
    if (form.value.type == 1) {
        accountType = "student"
        realpath = "/student"
    }
    if (form.value.type == 2) {
        accountType = "teacher"
        realpath = "/teacher"
    }
    if (form.value.type == 3) {
        accountType = "admin"
        realpath = "/admin"
    }
}

function login() {
    var obj = document.getElementById("btn");
    sessionStorage.setItem("type", "visitor");
    if (form.value.account != "" && form.value.password != "") {
        axios({
            method: 'POST',
            url: '/api' + '/user/login',
            data: {
                name: form.value.account,
                password: form.value.password,
                type: form.value.type
            }
        }).then(response => {
            if (response.data.code == 200) {
                console.log("OK");
                sessionStorage.setItem("account", form.value.account);
                sessionStorage.setItem("password", form.value.password);
                sessionStorage.setItem("type", accountType);
                router.push(realpath)
                // router.push("/quizList")
            }
            else {
                alert(response.data.msg);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
}

</script>
