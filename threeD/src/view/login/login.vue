<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="0" class="demo-ruleForm">
            <el-form-item>
                <p class="title">Three D</p>
            </el-form-item>
            <el-form-item   prop="user">
                <el-input prefix-icon="el-icon-user" v-model="ruleForm.user" :clearable="true" autocomplete="on"></el-input>
            </el-form-item>
            <el-form-item  prop="pass">
                <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.pass" :clearable="true" autocomplete="on"></el-input>
            </el-form-item>
            <el-button style="width:100%" :loading="loading" type="primary">login</el-button>
        </el-form>
  </div>
</template>
<script>
export default {
    data(){
        return{
            loading:false,
            ruleForm:{
                user:'',
                pass:'',
            }
        }
    }
}
</script>
<style>
.login {
    margin: auto;
    width: 80%;
    top:50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%)
}
.title{
    font-size: 20px;
    color: rgb(79, 79, 241);
    text-align: center;
    margin: auto;
}
</style>



