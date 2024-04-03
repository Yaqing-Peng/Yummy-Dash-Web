<template>
  <div class="dashboard-container">
    <div class="container">
      <div class="tableBar">
        <label style="margin-right: 5px">
          Employee Name:
        </label>
        <el-input v-model="name" placeholder="Please input name" style="width: 20%" />
        <el-button type="primary" style="margin-left: 25px" @click="pageQuery()">Search</el-button>
        <el-button type="primary" style="float: right" @click="handleAddEmp">+ Add</el-button>
      </div>

      <el-table :data="records" stripe style="width: 100%">
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="username" label="User Name" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="Phone">
        </el-table-column>
        <el-table-column prop="status" label="Status">
          <template slot-scope="scope">
            {{ scope.row.status === 0 ? 'Enable' : 'Disable' }}
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="Update Time">
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button type="text" @click="handleUpdateEmp(scope.row)">Edit</el-button>
            <el-button type="text" @click="handleStartOrStop(scope.row)">{{ scope.row.status === 1 ? 'Enable' :
          'Disable' }}</el-button>
          </template>
        </el-table-column>
    </el-table>
      <el-pagination class="pageList" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="page" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>


<script lang="ts">
import {getEmployeeList,enableOrDisableEmployee} from '@/api/employee'
import router from '@/router';

export default {
  data() {
    return {
      name: '',
      page: 1,
      pageSize: 10,
      total: 0,
      records: []
    }
  },
  created() {
    this.pageQuery()
  },
  methods: {
    pageQuery() {
      //page query
      const params = {name:this.name,page:this.page,pageSize:this.pageSize}
      getEmployeeList(params).then(res => {
        if(res.data.code === 1) {
          this.total = res.data.data.total
          this.records = res.data.data.records
        }
      }).catch(err => {
        this.$message.error('Request Error: ' + err.message)
      })
    },
    //change pageSize
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.pageQuery()
    },
    //change page
    handleCurrentChange(page) {
      this.page = page
      this.pageQuery()
    },
    //enable/disable 
    handleStartOrStop(row) {
      if(row.username === 'admin'){
        this.$message.error('Admin status cannot be changed!')
        return
      }

    //confirm alert
    this.$confirm('Are you confirmed to change the status?', 'Info', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          const p = {
            id: row.id,
            status: !row.status ? 1 : 0
          }
          enableOrDisableEmployee(p).then(res => {
            if(res.data.code === 1) {
              this.$message.success('Employee status has been successfully changed!')
              this.pageQuery()
            }
          })
        })
    },
    //change to add page
    handleAddEmp(){
      this.$router.push('/employee/add')
    },
    //change to edit page
    handleUpdateEmp(row) {
      if(row.username === 'admin'){
        this.$message.error('Admin profile cannot be changed!')
        return 
      }
      this.$router.push({
        path: '/employee/add',
        query: {id: row.id}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled-text {
  color: #bac0cd !important;
}
</style>
