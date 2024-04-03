<template>
  <div class="addBrand-container">
    <div class="container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px">
        <el-form-item label="User Name" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Employee Name" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="Gender" prop="sex">
            <el-radio v-model="ruleForm.sex" label="1">Male</el-radio>
            <el-radio v-model="ruleForm.sex" label="2">Female</el-radio>
        </el-form-item>
        <el-form-item label="ID" prop="idNumber">
          <el-input v-model="ruleForm.idNumber"></el-input>
        </el-form-item>
        <div class="subBox">
          <el-button type="primary" @click="submitForm('ruleForm',false)">Save</el-button>
          <el-button 
            v-if="this.optType === 'add'" 
            type="primary" 
            @click="submitForm('ruleForm',true)">Save and Continue Add
          </el-button>
          <el-button @click="() => this.$router.push('/employee')">Return</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {addEmployee,queryEmployeeById,updateEmployee} from '@/api/employee'
import router from '@/router';

export default {
  data() {
    return {
      optType: '',//edit or update
      ruleForm: {
        name: '',
        username: '',
        sex: '1',
        phone: '',
        idNumber: ''
      },
      rules: {
        name: [
            { required: true, message: 'Please input employee name', trigger: 'blur' }
        ],
        username: [
            { required: true, message: 'Please input username', trigger: 'blur' }
        ],
        phone: [
          { required: true, trigger: 'blur',validator: (rule,value,callback) => {
              if(value === '' || (!/^1(3|4|5|6|7|8)\d{9}$/.test(value))){
                callback(new Error('Please input correct phone number！'))
              }else{
                callback()
              }
            } 
          }
        ],
        idNumber: [
          { required: true, trigger: 'blur',validator: (rule,value,callback) => {
              if(value === '' || (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(X|x)$)/.test(value))){
                callback(new Error('Please input correct phone number！'))
              }else{
                callback()
              }
            } 
          }
        ]
      }
    }
  },
  created() {
    //get route param, if exists, it an update operation
    this.optType = this.$route.query.id ? 'update' : 'add'
    if(this.optType === 'update') {
      //get emp info back to page
      queryEmployeeById(this.$route.query.id).then(res => {
        if(res.data.code === 1){
          this.ruleForm = res.data.data
        }
      })
    }
  },
  methods: {
    submitForm(formName,isContinue){
      //form validation
      this.$refs[formName].validate((valid) => {
        if(valid) {
          //request server based on opt type
          if(this.optType === 'add'){//add
            addEmployee(this.ruleForm).then((res) => {
                if(res.data.code === 1){
                  this.$message.success('Employee added successfully！')
                  if(isContinue){
                  this.ruleForm = {
                      name: '',
                      username: '',
                      sex: '1',
                      phone: '',
                      idNumber: ''
                    }
                  }else {
                    this.$router.push('/employee')
                  }
                }else {
                  this.$message.error(res.data.msg)
                }
              })
          }else{//update
            updateEmployee(this.ruleForm).then(res => {
              if(res.data.code === 1){
                this.$message.success('Employee updated successfully！')
                this.$router.push('/employee')
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addBrand {
  &-container {
    margin: 30px;
    margin-top: 30px;
    .HeadLable {
      background-color: transparent;
      margin-bottom: 0px;
      padding-left: 0px;
    }
    .container {
      position: relative;
      z-index: 1;
      background: #fff;
      padding: 30px;
      border-radius: 4px;
      // min-height: 500px;
      .subBox {
        padding-top: 30px;
        text-align: center;
        border-top: solid 1px $gray-5;
      }
    }
    .idNumber {
      margin-bottom: 39px;
    }

    .el-form-item {
      margin-bottom: 29px;
    }
    .el-input {
      width: 293px;
    }
  }
}
</style>
