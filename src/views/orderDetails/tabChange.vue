<!--  -->
<template>
  <div class="tab-change">
    <div v-for="item in changedOrderList"
         :key="item.value"
         class="tab-item"
         :class="{ active: item.value === activeIndex }"
         @click="tabChange(item.value)">
      <el-badge :class="{'special-item':item.num<10}"
                class="item"
                :value="item.num > 99 ? '99+' : item.num"
                :hidden="!([2, 3, 4].includes(item.value) && item.num)">
        {{ item.label }}
      </el-badge>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { getOrderDetailPage } from '@/api/order'

@Component({
  name: 'TabChange'
})
export default class extends Vue {
   @Prop({ default: '' }) orderStatics: any
   @Prop({ default: '' }) defaultActivity: any
  // private activeIndex: number = this.defaultActivity || 0

  private activeIndex: number = 0;  // 默认初始化为 0

  created() {
    this.activeIndex = Number(this.defaultActivity) || 0;  // 在组件创建后设置
  }

  @Watch('defaultActivity')
  private onChange(val) {
    this.activeIndex = Number(val)
  }

  get changedOrderList() {
    return [
      {
        label: 'All Orders',
        value: 0
      },
      {
        label: 'Pending Confirmation',
        value: 2,
        num: this.orderStatics.toBeConfirmed
      },
      {
        label: 'Pending Delivery',
        value: 3,
        num: this.orderStatics.confirmed
      },
      {
        label: 'In Delivery',
        value: 4,
        num: this.orderStatics.deliveryInProgress
      },
      {
        label: 'Completed',
        value: 5
      },
      {
        label: 'Canceled',
        value: 6
      }
    ];
  }


  private tabChange(activeIndex) {
    this.activeIndex = activeIndex
    this.$emit('tabChange', activeIndex)
  }
}
</script>


<style lang="scss">
.tab-change {
  display: flex;
  border-radius: 4px;
  margin-bottom: 20px;

  .tab-item {
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #333;
    border: 1px solid #e5e4e4;
    background-color: white;
    border-left: none;
    cursor: pointer;
    .special-item {
      .el-badge__content {
        width: 20px;
        padding: 0 5px;
      }
    }
    .item {
      .el-badge__content {
        background-color: #fd3333 !important;
        line-height: 18px;
        height: auto;
        min-width: 18px;
        min-height: 18px;
        // border-radius: 50%;
      }
      .el-badge__content.is-fixed {
        top: 14px;
        right: 2px;
      }
    }
  }
  .active {
    width: 180px;
    background-color: #ffc200;
    font-weight: bold;
  }
  .tab-item:first-child {
    border-left: 1px solid #e5e4e4;
  }
}
</style>
