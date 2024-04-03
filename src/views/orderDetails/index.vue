<template>
  <div class="dashboard-container">
    <TabChange :order-statics="orderStatics" :default-activity="defaultActivity" @tabChange="change" />

    <div class="container" :class="{ hContainer: tableData.length }">
      <!-- Search Items -->
      <div class="tableBar">
        <label style="margin-right: 10px">Order Number:</label>
        <el-input v-model="input" placeholder="Please fill in the order number" style="width: 15%" clearable
          @clear="init(orderStatus)" @keyup.enter.native="initFun(orderStatus)" />
        <label style="margin-left: 20px">Phone Number:</label>
        <el-input v-model="phone" placeholder="Please fill in the phone number" style="width: 15%" clearable
          @clear="init(orderStatus)" @keyup.enter.native="initFun(orderStatus)" />
        <label style="margin-left: 20px">Order Time:</label>
        <el-date-picker v-model="valueTime" clearable value-format="yyyy-MM-dd HH:mm:ss" range-separator="To"
          :default-time="['00:00:00', '23:59:59']" type="daterange" start-placeholder="Start Date"
          end-placeholder="End Date" style="width: 25%; margin-left: 10px" @clear="init(orderStatus)" />
        <el-button class="normal-btn continue" @click="init(orderStatus, true)">
          Search
        </el-button>
      </div>
      <el-table v-if="tableData.length" :data="tableData" stripe class="tableBox">
        <el-table-column key="number" prop="number" label="Order Number" />
        <el-table-column v-if="[2, 3, 4].includes(orderStatus)" key="orderDishes" prop="orderDishes"
          label="Ordered Dishes" />
        <el-table-column v-if="[0].includes(orderStatus)" key="status" prop="orderStatus" label="Order Status">
          <template slot-scope="{ row }">
            <span>{{ getOrderType(row) }}</span>
          </template>
        </el-table-column>
        <!-- Other columns omitted for brevity -->
      </el-table>
      <Empty v-else :is-search="isSearch" />
      <el-pagination v-if="counts > 10" class="pageList" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="counts" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>

    <!-- 查看弹框部分 -->
    <el-dialog title="Order Information" :visible.sync="dialogVisible" width="53%" :before-close="handleClose"
      class="order-dialog">
      <el-scrollbar style="height: 100%">
        <div class="order-top">
          <div>
            <div style="display: inline-block">
              <label style="font-size: 16px">Order Number:</label>
              <div class="order-num">
                {{ diaForm.number }}
              </div>
            </div>
            <div style="display: inline-block" class="order-status"
              :class="{ status3: [3, 4].includes(dialogOrderStatus) }">
              {{
              orderList.filter((item) => item.value === dialogOrderStatus)[0]
              .label
              }}
            </div>
          </div>
          <p><label>Order Time:</label>{{ diaForm.orderTime }}</p>
        </div>

        <div class="order-middle">
          <div class="user-info">
            <div class="user-info-box">
              <div class="user-name">
                <label>User Name:</label>
                <span>{{ diaForm.consignee }}</span>
              </div>
              <div class="user-phone">
                <label>Phone Number:</label>
                <span>{{ diaForm.phone }}</span>
              </div>
              <div v-if="[2, 3, 4, 5].includes(dialogOrderStatus)" class="user-getTime">
                <label>{{
                  dialogOrderStatus === 5 ? 'Delivery Time:' : 'Estimated Delivery Time:'
                  }}</label>
                <span>{{
                  dialogOrderStatus === 5
                  ? diaForm.deliveryTime
                  : diaForm.estimatedDeliveryTime
                  }}</span>
              </div>
              <div class="user-address">
                <label>Address:</label>
                <span>{{ diaForm.address }}</span>
              </div>
            </div>
            <div class="user-remark" :class="{ orderCancel: dialogOrderStatus === 6 }">
              <div>{{ dialogOrderStatus === 6 ? 'Cancellation Reason' : 'Remark' }}</div>
              <span>{{
                dialogOrderStatus === 6
                ? diaForm.cancelReason || diaForm.rejectionReason
                : diaForm.remark
                }}</span>
            </div>
          </div>

          <div class="dish-info">
            <div class="dish-label">Dishes</div>
            <div class="dish-list">
              <div v-for="(item, index) in diaForm.orderDetailList" :key="index" class="dish-item">
                <div class="dish-item-box">
                  <span class="dish-name">{{ item.name }}</span>
                  <span class="dish-num">x{{ item.number }}</span>
                </div>
                <span class="dish-price">￥{{ item.amount ? item.amount.toFixed(2) : '' }}</span>
              </div>
            </div>
            <div class="dish-all-amount">
              <label>Subtotal:</label>
              <span>￥{{
                (diaForm.amount - 6 - diaForm.packAmount).toFixed(2)
                }}</span>
            </div>
          </div>
        </div>

        <div class="order-bottom">
          <div class="amount-info">
            <div class="amount-label">Costs</div>
            <div class="amount-list">
              <div class="dish-amount">
                <span class="amount-name">Dishes Subtotal:</span>
                <span class="amount-price">￥{{
                  ((diaForm.amount - 6 - diaForm.packAmount).toFixed(2) *
                  100) /
                  100
                  }}</span>
              </div>
              <div class="send-amount">
                <span class="amount-name">Delivery Fee:</span>
                <span class="amount-price">￥{{ 6 }}</span>
              </div>
              <div class="package-amount">
                <span class="amount-name">Packaging Fee:</span>
                <span class="amount-price">￥{{
                  diaForm.packAmount
                  ? (diaForm.packAmount.toFixed(2) * 100) / 100
                  : ''
                  }}</span>
              </div>
              <div class="all-amount">
                <span class="amount-name">Total:</span>
                <span class="amount-price">￥{{
                  diaForm.amount
                  ? (diaForm.amount.toFixed(2) * 100) / 100
                  : ''
                  }}</span>
              </div>
              <div class="pay-type">
                <span class="pay-name">Payment Method:</span>
                <span class="pay-value">{{
                  diaForm.payMethod === 1 ? 'WeChat Pay' : 'Alipay'
                  }}</span>
              </div>
              <div class="pay-time">
                <span class="pay-name">Payment Time:</span>
                <span class="pay-value">{{ diaForm.checkoutTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <span v-if="dialogOrderStatus !== 6" slot="footer" class="dialog-footer">
        <el-checkbox v-if="dialogOrderStatus === 2 && orderStatus === 2" v-model="isAutoNext">Auto Jump to Next after
          Processing</el-checkbox>
        <el-button v-if="dialogOrderStatus === 2"
          @click="orderReject(row), (isTableOperateBtn = false)">Reject</el-button>
        <el-button v-if="dialogOrderStatus === 2" type="primary"
          @click="orderAccept(row), (isTableOperateBtn = false)">Accept</el-button>

        <el-button v-if="[1, 3, 4, 5].includes(dialogOrderStatus)" @click="dialogVisible = false">Return</el-button>
        <el-button v-if="dialogOrderStatus === 3" type="primary"
          @click="cancelOrDeliveryOrComplete(3, row.id)">Delivery</el-button>
        <el-button v-if="dialogOrderStatus === 4" type="primary"
          @click="cancelOrDeliveryOrComplete(4, row.id)">Complete</el-button>
        <el-button v-if="[1].includes(dialogOrderStatus)" type="primary" @click="cancelOrder(row)">Cancel
          Order</el-button>
      </span>
    </el-dialog>

    <!-- 拒单，取消弹窗 -->
    <el-dialog :title="cancelDialogTitle + ' Reason'" :visible.sync="cancelDialogVisible" width="42%"
      :before-close="() => ((cancelDialogVisible = false), (cancelReason = ''))" class="cancelDialog">
      <el-form label-width="90px">
        <el-form-item :label="cancelDialogTitle + ' Reason:'">
          <el-select v-model="cancelReason" :placeholder="'Please select ' + cancelDialogTitle + ' Reason'">
            <el-option v-for="(item, index) in cancelDialogTitle === 'Cancel'
                    ? cancelReasonList
                    : cancelOrderReasonList" :key="index" :label="item.label" :value="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="cancelReason === 'Custom Reason'" label="Reason:">
          <el-input v-model.trim="remark" type="textarea"
            :placeholder="'Please provide your ' + cancelDialogTitle + ' reason (limited to 20 characters)'"
            maxlength="20" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click=";(cancelDialogVisible = false), (cancelReason = '')">Cancel</el-button>
        <el-button type="primary" @click="confirmCancel">Confirm</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeadLable from '@/components/HeadLable/index.vue'
import InputAutoComplete from '@/components/InputAutoComplete/index.vue'
import TabChange from './tabChange.vue'
import Empty from '@/components/Empty/index.vue'
import {
  getOrderDetailPage,
  queryOrderDetailById,
  completeOrder,
  deliveryOrder,
  orderCancel,
  orderReject,
  orderAccept,
  getOrderListBy,
} from '@/api/order'

@Component({
  components: {
    HeadLable,
    InputAutoComplete,
    TabChange,
    Empty,
  },
})
export default class extends Vue {
  private defaultActivity: any = 0
  private orderStatics = {}
  private row = {}
  private isAutoNext = true
  private isTableOperateBtn = true
  private currentPageIndex = 0 //记录查看详情数据的index
  private orderId = '' //订单号
  private input = '' //搜索条件的订单号
  private phone = '' //搜索条件的手机号
  private valueTime = []
  private dialogVisible = false //详情弹窗
  private cancelDialogVisible = false //取消，拒单弹窗
  private cancelDialogTitle = '' //取消，拒绝弹窗标题
  private cancelReason = ''
  private remark = '' //自定义原因
  private counts: number = 0
  private page: number = 1
  private pageSize: number = 10
  private tableData = []
  private diaForm = []
  private isSearch: boolean = false
  private orderStatus = 0 //列表字段展示所需订单状态,用于分页请求数据
  private dialogOrderStatus = 0 //弹窗所需订单状态，用于详情展示字段
  private cancelOrderReasonList = [
  {
    value: 1,
    label: 'Too many orders, unable to accept new orders',
  },
  {
    value: 2,
    label: 'Items sold out, unable to accept orders',
  },
  {
    value: 3,
    label: 'Restaurant closed, unable to accept orders',
  },
  {
    value: 0,
    label: 'Custom reason',
  },
];

private cancelrReasonList = [
  {
    value: 1,
    label: 'Too many orders, unable to accept new orders',
  },
  {
    value: 2,
    label: 'Items sold out, unable to accept orders',
  },
  {
    value: 3,
    label: 'Insufficient delivery riders',
  },
  {
    value: 4,
    label: 'Customer canceled order by phone',
  },
  {
    value: 0,
    label: 'Other reasons',
  },
];

private orderList = [
  {
    label: 'All Orders',
    value: 0,
  },
  {
    label: 'Pending Payment',
    value: 1,
  },
  {
    label: 'Pending Confirmation',
    value: 2,
  },
  {
    label: 'Pending Delivery',
    value: 3,
  },
  {
    label: 'In Delivery',
    value: 4,
  },
  {
    label: 'Completed',
    value: 5,
  },
  {
    label: 'Canceled',
    value: 6,
  },
];


  created() {
    this.init(Number(this.$route.query.status) || 0)
  }

  mounted() {
    //如果有值说明是消息通知点击进来的
    if (
      this.$route.query.orderId &&
      this.$route.query.orderId !== 'undefined'
    ) {
      this.goDetail(this.$route.query.orderId, 2)
    }
    if (this.$route.query.status) {
      this.defaultActivity = this.$route.query.status
    }
    // console.log(this.$route.query, 'this.$route')
  }

  initFun(orderStatus) {
    this.page = 1
    this.init(orderStatus)
  }

  change(activeIndex) {
    if (activeIndex === this.orderStatus) return
    this.init(activeIndex)
    this.input = ''
    this.phone = ''
    this.valueTime = []
    this.dialogOrderStatus = 0
    this.$router.push('/order')
    console.log(activeIndex, '接收到了子组件的index')
  }

  //获取待处理，待派送，派送中数量
  getOrderListBy3Status() {
    getOrderListBy({})
      .then((res) => {
        if (res.data.code === 1) {
          this.orderStatics = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
      .catch((err) => {
        this.$message.error('Bad request: ' + err.message)
      })
  }

  init(activeIndex: number = 0, isSearch?) {
    this.isSearch = isSearch
    const params = {
      page: this.page,
      pageSize: this.pageSize,
      number: this.input || undefined,
      phone: this.phone || undefined,
      beginTime:
        this.valueTime && this.valueTime.length > 0
          ? this.valueTime[0]
          : undefined,
      endTime:
        this.valueTime && this.valueTime.length > 0
          ? this.valueTime[1]
          : undefined,
      status: activeIndex || undefined,
    }
    getOrderDetailPage({ ...params })
      .then((res) => {
        if (res.data.code === 1) {
          this.tableData = res.data.data.records
          this.orderStatus = activeIndex
          this.counts = Number(res.data.data.total)
          this.getOrderListBy3Status()
          if (
            this.dialogOrderStatus === 2 &&
            this.orderStatus === 2 &&
            this.isAutoNext &&
            !this.isTableOperateBtn &&
            res.data.data.records.length > 1
          ) {
            const row = res.data.data.records[0]
            this.goDetail(row.id, row.status, row)
          } else {
            return null
          }
        } else {
          this.$message.error(res.data.msg)
        }
      })
      .catch((err) => {
        this.$message.error('Bad request:' + err.message)
      })
  }

  getOrderType(row: any) {
    if (row.status === 1) {
      return 'Pending Payment';
    } else if (row.status === 2) {
      return 'Pending Confirmation';
    } else if (row.status === 3) {
      return 'Pending Delivery';
    } else if (row.status === 4) {
      return 'In Delivery';
    } else if (row.status === 5) {
      return 'Completed';
    } else if (row.status === 6) {
      return 'Canceled';
    } else {
      return 'Refund';
    }
  }


  // 查看详情
  async goDetail(id: any, status: number, row?: any) {
    // console.log(111, index, row)
    this.diaForm = []
    this.dialogVisible = true
    this.dialogOrderStatus = status
    this.orderId = id
    const { data } = await queryOrderDetailById({ orderId: id })
    this.diaForm = data.data
    this.row = row || { id: this.$route.query.orderId, status: status }
    if (this.$route.query.orderId) {
      this.$router.push('/order')
    }
  }

  //打开拒单弹窗
  orderReject(row: any) {
    this.cancelDialogVisible = true
    this.orderId = row.id
    this.dialogOrderStatus = row.status
    this.cancelDialogTitle = '拒绝'
    this.dialogVisible = false
    this.cancelReason = ''
  }

  //接单
  orderAccept(row: any) {
    this.orderId = row.id
    this.dialogOrderStatus = row.status
    orderAccept({ id: this.orderId })
      .then((res) => {
        if (res.data.code === 1) {
          this.$message.success('操作成功')
          this.orderId = ''
          // this.dialogOrderStatus = 0
          this.dialogVisible = false
          this.init(this.orderStatus)
        } else {
          this.$message.error(res.data.msg)
        }
      })
      .catch((err) => {
        this.$message.error('Bad request:' + err.message)
      })
  }

  //打开取消订单弹窗
  cancelOrder(row: any) {
    this.cancelDialogVisible = true
    this.orderId = row.id
    this.dialogOrderStatus = row.status
    this.cancelDialogTitle = '取消'
    this.dialogVisible = false
    this.cancelReason = ''
  }

  //确认取消或拒绝订单并填写原因
  confirmCancel(type) {
    if (!this.cancelReason) {
      return this.$message.error(`Please select the reason to ${this.cancelDialogTitle} `);
    } else if (this.cancelReason === 'Other Reasons' && !this.remark) {
      return this.$message.error(`Please enter other reasons to ${this.cancelDialogTitle} `);
    }

    ; (this.cancelDialogTitle === 'Cancel' ? orderCancel : orderReject)({
      id: this.orderId,
      [this.cancelDialogTitle === 'Cancel' ? 'cancelReason' : 'rejectionReason']:
        this.cancelReason === 'Other Reasons' ? this.remark : this.cancelReason,
    })
      .then((res) => {
        if (res.data.code === 1) {
          this.$message.success('Operation successful');
          this.cancelDialogVisible = false;
          this.orderId = '';
          this.init(this.orderStatus);
        } else {
          this.$message.error(res.data.msg);
        }
      })
      .catch((err) => {
        this.$message.error('Bad request: ' + err.message);
      });
  }


  // 派送，完成
  cancelOrDeliveryOrComplete(status: number, id: string) {
    const params = {
      status,
      id,
    }
    ;(status === 3 ? deliveryOrder : completeOrder)(params)
      .then((res) => {
        if (res.data.code === 1) {
          this.$message.success('Operation successful')
          this.orderId = ''
          // this.dialogOrderStatus = 0
          this.dialogVisible = false
          this.init(this.orderStatus)
        } else {
          this.$message.error(res.data.msg)
        }
      })
      .catch((err) => {
        this.$message.error('Bad request:' + err.message)
      })
  }

  handleClose() {
    this.dialogVisible = false
  }

  private handleSizeChange(val: any) {
    this.pageSize = val
    this.init(this.orderStatus)
  }

  private handleCurrentChange(val: any) {
    this.page = val
    this.init(this.orderStatus)
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    // height: 100%;
    min-height: 700px;
    .container {
      background: #fff;
      position: relative;
      z-index: 1;
      padding: 30px 28px;
      border-radius: 4px;
      // min-height: 650px;
      height: calc(100% - 55px);

      .tableBar {
        // display: flex;
        margin-bottom: 20px;
        justify-content: space-between;

        .tableLab {
          span {
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            padding: 0 20px;
            color: $gray-2;
            border-right: solid 1px $gray-4;
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
    .hContainer {
      height: auto !important;
    }
  }
}

.search-btn {
  margin-left: 20px;
}

.info-box {
  margin: -15px -44px 20px;
  p {
    display: flex;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    text-align: left;
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
    label {
      width: 100px;
      display: inline-block;
      color: #666;
    }
    .des {
      flex: 1;
      color: #333333;
    }
  }
}

.order-top {
  // height: 80px;
  border-bottom: 1px solid #e7e6e6;
  padding-bottom: 26px;
  padding-left: 22px;
  padding-right: 22px;
  // margin: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .order-status {
    width: 57.25px;
    height: 27px;
    background: #333333;
    border-radius: 13.5px;
    color: white;
    margin-left: 19px;
    text-align: center;
    line-height: 27px;
  }
  .status3 {
    background: #f56c6c;
  }
  p {
    color: #333;
    label {
      color: #666;
    }
  }
  .order-num {
    font-size: 16px;
    color: #2a2929;
    font-weight: bold;
    display: inline-block;
  }
}

.order-middle {
  .user-info {
    min-height: 140px;
    background: #fbfbfa;
    margin-top: 23px;

    padding: 20px 43px;
    color: #333;
    .user-info-box {
      min-height: 55px;
      display: flex;
      flex-wrap: wrap;
      .user-name {
        flex: 67%;
      }
      .user-phone {
        flex: 33%;
      }
      .user-getTime {
        margin-top: 14px;
        flex: 80%;
        label {
          margin-right: 3px;
        }
      }
      label {
        margin-right: 17px;
        color: #666;
      }

      .user-address {
        margin-top: 14px;
        flex: 80%;
        label {
          margin-right: 30px;
        }
      }
    }
    .user-remark {
      min-height: 43px;
      line-height: 43px;
      background: #fffbf0;
      border: 1px solid #fbe396;
      border-radius: 4px;
      margin-top: 10px;
      padding: 6px;
      display: flex;
      align-items: center;
      div {
        display: inline-block;
        min-width: 53px;
        height: 32px;
        background: #fbe396;
        border-radius: 4px;
        text-align: center;
        line-height: 32px;
        color: #333;
        margin-right: 30px;
        // padding: 12px 6px;
      }
      span {
        color: #f2a402;
        line-height: 1.15;
      }
    }
    .orderCancel {
      background: #ffffff;
      border: 1px solid #b6b6b6;

      div {
        padding: 0 10px;
        background-color: #e5e4e4;
      }
      span {
        color: #f56c6c;
      }
    }
  }
  .dish-info {
    // min-height: 180px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 40px;
    border-bottom: 1px solid #e7e6e6;
    .dish-label {
      color: #666;
    }
    .dish-list {
      flex: 80%;
      display: flex;
      flex-wrap: wrap;
      .dish-item {
        flex: 50%;
        margin-bottom: 14px;
        color: #333;
        .dish-num {
        }
        .dish-item-box {
          display: inline-block;
          width: 120px;
        }
      }
    }
    .dish-label {
      margin-right: 65px;
    }
    .dish-all-amount {
      flex: 1;
      padding-left: 92px;
      margin-top: 10px;
      label {
        color: #333333;
        font-weight: bold;
        margin-right: 5px;
      }
      span {
        color: #f56c6c;
      }
    }
  }
}
.order-bottom {
  .amount-info {
    // min-height: 180px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 40px;
    padding-bottom: 0px;
    .amount-label {
      color: #666;
      margin-right: 65px;
    }
    .amount-list {
      flex: 80%;
      display: flex;
      flex-wrap: wrap;
      color: #333;
      // height: 65px;
      .dish-amount,
      .package-amount,
      .pay-type {
        display: inline-block;
        width: 300px;
        margin-bottom: 14px;
        flex: 50%;
      }
      .send-amount,
      .all-amount,
      .pay-time {
        display: inline-block;
        flex: 50%;
        padding-left: 10%;
      }
      .package-amount {
        .amount-name {
          margin-right: 14px;
        }
      }
      .all-amount {
        .amount-name {
          margin-right: 24px;
        }
        .amount-price {
          color: #f56c6c;
        }
      }
      .send-amount {
        .amount-name {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.dashboard-container {
  .cancelReason {
    padding-left: 40px;
  }
  .cancelTime {
    padding-left: 50px;
  }
  .orderTime {
    padding-left: 50px;
  }
  td.operate .cell {
    .before,
    .middle,
    .after {
      height: 39px;
      width: 48px;
    }
  }
  td.operate .cell,
  td.otherOperate .cell {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .order-dialog {
    .el-dialog {
      max-height: 764px !important;
      display: flex;
      flex-direction: column;
      margin: 0 !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: calc(100% - 30px);
      max-width: calc(100% - 30px);
    }
    .el-dialog__body {
      height: 520px !important;
    }
  }
}
.el-dialog__body {
  padding-top: 34px;
  padding-left: 30px;
  padding-right: 30px;
}
.cancelDialog {
  .el-dialog__body {
    padding-left: 64px;
  }
  .el-select,
  .el-textarea {
    width: 293px;
  }
  .el-textarea textarea {
    height: 114px;
  }
}
.el-dialog__footer {
  .el-checkbox {
    float: left;
    margin-left: 40px;
  }
  .el-checkbox__label {
    color: #333333 !important;
  }
}
.empty-box {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 0 !important;
  }
}
</style>
