<template>
    <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/App.css">
    <div class="app">
        <el-container id="main">
            <el-header>
                <br>
                <img src="../public/logo+title.png" id="logout" alt="" @click="toLoad">
            </el-header>
            <el-container>
                <router-view :key="$route.fullPath"></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView } from 'vue-router';
import router from '@/router';

function toLoad() {
    sessionStorage.removeItem("account");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("type");
    router.push("/Load")
}

let account = sessionStorage.getItem("account");

// function tomessage() {
//     router.push("/message")
// }

</script>

<style scoped>
.right{
    position: relative;
    right: -1600px;
}

.el-container {
    min-height: 100vh;
    min-width: 0;
}

.el-header {
    /* background-color: #B3C0D1; */
    background-color: white;
    color: #333;
    line-height: 10px;
    box-shadow: 0 3px 5px 0 rgb(180, 180, 180);
    position: relative;
}

.el-breadcrumb {
    position: relative;
    left: 10px;
}

.el-aside {
    color: rgb(0, 181, 253);
    background-color: snow;
    box-shadow: 2px 0 10px 0 rgb(180, 180, 180);
}

#logout {
    cursor: pointer;
    height: 70px;
    margin: 0;
    position: relative;
    top: -10px;
}

.main {
    height: 100vh;
}

.message {
    /* display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%; */
    right: -1400px;
    position: relative;
    top: -45px;
    font-family: 'wending';
}
</style>
