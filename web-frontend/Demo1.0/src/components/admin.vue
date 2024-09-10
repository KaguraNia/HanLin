<template>
    <link rel="stylesheet" href="../../css/reset.css">
    <el-container>
        <el-main>
            <el-main>
                <div class="mainview">
                    <el-header>
                        <br>
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item>
                                <span style="font-family: 'wending';">账号：</span>
                                <el-input v-model="account" style="width: 240px" placeholder="请输入账号" clearable />
                            </el-form-item>
                            <el-form-item>
                                <span style="font-family: 'wending';">密码：</span>
                                <el-input v-model="password" style="width: 240px" type="password" placeholder="请输入密码"
                                    show-password />
                            </el-form-item>
                            <el-form-item>
                                <span style="font-family: 'wending';">账号类型：</span>
                                <el-select style="font-family: 'wending';" v-model="accountType" placeholder=""
                                    clearable>
                                    <el-option label="学生" value="student" />
                                    <el-option label="教师" value="teacher" />
                                    <el-option label="管理员" value="admin" />
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button style="font-family: 'wending';" link type="primary" size="small"
                                    @click.prevent="addUser()">
                                    添加用户
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </el-header>
                    <el-divider />
                    <el-table :data="tableData" stripe max-height="100%" highlight-current-row style="width: 95%">
                        <el-table-column prop="name" label="账号" width="400" />
                        <el-table-column prop="password" label="密码" width="400" />
                        <el-table-column prop="accountType" label="账号类型" />
                        <el-table-column prop="id" label="用户编号" />
                        <el-table-column prop="teacherId" label="教师编号" />
                        <el-table-column slot-scope="scope" fixed="right" label="操作" width="120">
                            <template #default="scope">
                                <el-button style="font-family: 'wending';" link type="primary" size="small"
                                    @click.prevent="deleteUser(scope.row.account)">
                                    删除用户
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-main>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup name="Load">

import { ref, reactive } from 'vue'
import axios from 'axios';

let account = ref("");
let password = ref("");
let accountType = ref("");

var tableData = ref([
    {
        name: '',
        password: '',
        type: '',
        id: '',
        teacherId: '',
        accountType: '',
    },
])


let data = {
    name: account.value,
    password: password.value,
    id: 0,
    teacherId: 0,
    type: accountType.value
}


function addUser() {
    axios({
        method: 'POST',
        data: data,
        url: '/api' + '/user/create',
    }).then(response => {
        console.log(response);
        alert("添加成功");
    }).catch(function (error) {
        console.log(error);
    });
}

function deleteUser(data: string) {
    axios({
        method: 'DELETE',
        params: data,
        url: '/api' + '/user/delete',
    }).then(response => {
        console.log(response);
        alert("删除成功");
    }).catch(function (error) {
        console.log(error);
    });
}

axios({
    method: 'GET',
    url: '/api' + '/user/get',
}).then(response => {
    console.log(response.data.data);
    tableData.value = response.data.data
    tableData.value.forEach(function(item,index,arr){
        arr[index].accountType=(Number(arr[index].type)-1) ? '教师':'学生'
    })
}).catch(function (error) {
    console.log(error);
})

</script>

<style scoped>
.el-header {
    background-color: white;
}

.demo-form {
    display: inline-block;
}

.demo-form-inline .el-input {
    --el-input-width: 220px;
    display: inline-block;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
    display: inline-block;
}

.content button {
    width: 25%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
}

input{
    border: 1px dotted #999;
    border-radius:5px;
}

.user {
    background-color: white;
}

.notice {
    background-color: white;
}

textarea {
    resize: none;
    font-size: 24px;
    border: 1px dotted #999;
    border-radius:5px;
}

textarea:invalid {
    border: 2px dashed black;
}

textarea:valid {
    border: 2px solid black;
}

select{
    padding: 12px 20px;
    margin: 8px 0;
    margin-right: 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    background-color: #cccccc6d;
    font-size: 20px;
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