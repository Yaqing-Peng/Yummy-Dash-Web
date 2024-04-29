<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App',
})
export default class extends Vue {
  // 打印当前的 NODE_ENV 到控制台
  mounted() {
    console.log('打印当前的 VUE_APP_URL 到控制台:', process.env.VUE_APP_URL);
    console.log('打印当前的 NODE_ENV 到控制台:', process.env.NODE_ENV);
  }
}
</script>
