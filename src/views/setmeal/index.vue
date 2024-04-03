<template>
  <div class="dashboard-container">
    <div class="container">
      <div class="tableBar">
        <div class="tableBar">
          <label style="margin-right: 5px">
            Setmeal Name:
          </label>
          <el-input v-model="name" placeholder="Please input name" style="width: 20%" />

          <label style="margin-right: 5px">
            Setmeal Category:
          </label>
          <el-select v-model="categoryId" placeholder="Please choose" style="width: 15%">
            <!-- label 显示在前端, id是提交数据时的值 -->
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>

          <label style="margin-right: 5px">
            Sales Status:
          </label>
          <el-select v-model="status" placeholder="Please choose" style="width: 15%">
            <el-option v-for="item in statusArr" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

          <el-button type="primary" style="margin-left: 25px" @click="pageQuery()">Search</el-button>
          <div style="float: right;">
            <el-button type="danger" @click="handleDelete('B')"> - Batch Delete</el-button>
            <el-button type="info" @click="() => this.$router.push('/setmeal/add')">+ Add A Setmeal</el-button>
          </div>
        </div>
      </div>

      <el-table :data="records" stripe class="tableBox" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="25" />
        <el-table-column prop="name" label="Setmeal Name" />
        <el-table-column label="Image">
          <template slot-scope="scope">
            <el-image style="width: 80px; height: 40px; border: none" :src="scope.row.image"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="categoryName" label="Setmeal Category" />
        <el-table-column prop="price" label="Setmeal Price" />
        <el-table-column label="Sales Status">
          <template slot-scope="scope">
            <div class="tableColumn-status" :class="{ 'stop-use': scope.row.status === 0 }">
              {{ scope.row.status === 0 ? 'Off Sale' : 'On Sale' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="Last Operation Time" />
        <el-table-column label="Operation" align="center" width="250px">
          <template slot-scope="scope">
            <el-button type="text" size="small"> Edit </el-button>
            <el-button type="text" size="small" @click="handleStartOrStop(scope.row)">
              {{ scope.row.status == '1' ? 'Off Sale' : 'On Sale' }}
            </el-button>
            <el-button type="text" size="small" @click="handleDelete('S', scope.row.id)"> Delete </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="pageList"
                      :page-sizes="[10, 20, 30, 40]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="total"
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import {getCategoryByType} from '@/api/category';
import {getSetmealPage} from '@/api/setMeal';
import {enableOrDisableSetmeal} from '@/api/setMeal';
import {deleteSetmeal} from '@/api/setMeal';

export default {
  data() {
    return {
      name: '',
      page: 1,
      pageSize: 10,
      total: 0,
      records: [],
      options: [],
      categoryId: '',
      statusArr:[{
        value: '0',
        label: 'Off Sale'
      },{
        value: '1',
        label: 'On Sale'
      }],
      status: '',
      multipleSelection: ''
    }
  },
  created(){
    getCategoryByType({type : 2}).then((res) =>{
      if(res.data.code === 1){
        this.options = res.data.data
      }
    }),
    //每次页面加载后执行
    this.pageQuery()
  },
  methods:{
    pageQuery(){
      const params = {
        page: this.page,
        pageSize: this.pageSize,
        name: this.name,
        status: this.status,
        categoryId: this.categoryId
      }
      getSetmealPage(params).then(res =>{
        if(res.data.code === 1){
          this.total = res.data.data.total
          this.records = res.data.data.records
        }
      })
    },
    handleSizeChange(pageSize){
      this.pageSize = pageSize
      this.pageQuery()
    },
    handleCurrentChange(page){
      this.page = page;
      this.pageQuery();
    },
    handleStartOrStop(row){
    const p = {
        id: row.id,
        status: !row.status ? 1: 0
      }

      this.$confirm('Are you sure you want to change the status of current seatmeal?', 'Prompt', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          enableOrDisableSetmeal(p).then(res => {
            if(res.data.code === 1) {
              this.$message.success('Seatmeal status has been changed!')
              this.pageQuery()
            }
          })
        })
    },
    handleDelete(type: string, id: string) {
      this.$confirm('Are you sure you want to delete current seatmeal?', 'Prompt', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          let param = ''
          if(type == 'B'){//batch delete
            const arr = new Array
            this.multipleSelection.forEach(element => {//1,2,3
              arr.push(element.id)
            })
            param = arr.join(',')
          }else{//single delete
            param = id
          }

          deleteSetmeal(param).then(res => {
            if(res.data.code === 1){
              this.$message.success('Seatmeal has been deleted!')
              this.pageQuery()
            }else{
              this.$message.error(res.data.msg)
            }
          })
        })
    },
    //获取前端回调参数的值, 赋给模型数据
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>



<style lang="scss">
.el-table-column--selection .cell {
  padding-left: 10px;
}
</style>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;

    .container {
      background: #fff;
      position: relative;
      z-index: 1;
      padding: 30px 28px;
      border-radius: 4px;

      .tableBar {
        margin-bottom: 20px;
        .tableLab {
          float: right;
          span {
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            padding: 0 20px;
            color: $gray-2;
          }
        }
      }

      .tableBox {
        width: 100%;
        border: 1px solid $gray-5;
        border-bottom: 0;
      }

      .pageList {
        text-align: center;
        margin-top: 30px;
      }
      //查询黑色按钮样式
      .normal-btn {
        background: #333333;
        color: white;
        margin-left: 20px;
      }
    }
  }
}
</style>
