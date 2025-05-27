<!--
 * @Author: xiejun xiejun@keeprisk.com
 * @Date: 2025-05-26 15:17:23
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @LastEditTime: 2025-05-27 11:01:07
 * @FilePath: /dana-clone/src/components/helpDrawer.vue/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <CustomerDrawer
      :visible.sync="showDrawer"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 主要内容 -->
      <div v-if="type === 'help'">
        <div class="help-core">
          <div class="help-core__wrap">
            <div class="help-core__header">
              <img
                src="https://a.m.dana.id/resource/imgs/ipg/help-background-blue.svg"
                alt="help"
              />
            </div>
            <div class="help-core__content">
              <div class="help-core__title">Hi, we're ready to help!</div>
              <div class="help-core__desc">
                Please contact Customer Care in
                <span class="text-blue"> 1500445 </span>
                or send an email to
                <span class="text-blue"> help@dana.id </span>
              </div>
            </div>
            <div class="help-core__button-container">
              <el-button
                type="primary"
                class="help-core__button"
                @click="showDrawer = false"
                >GOT IT!</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="help-core">
          <div class="help-core__wrap">
            <div class="help-core__header">
              <img
                src="https://a.m.dana.id/resource/imgs/ipg/blue-forgot-pin-square-background.svg"
                alt="help"
              />
            </div>
            <div class="help-core__content">
              <div class="help-core__title">Hi, we're ready to help!</div>
              <div class="help-core__desc">
                To reset DANA PIN, please contact Customer Care in 1500445
              </div>
            </div>
            <div class="help-core__button-container">
              <el-button
                type="primary"
                class="help-core__button"
                @click="showDrawer = false"
                >GOT IT!</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </CustomerDrawer>
  </div>
</template>

<script>
import CustomerDrawer from "../common/customerDrawer.vue";

export default {
  components: {
    CustomerDrawer,
  },
  props: {
    type: {
      type: String,
      default: "help",
    },
  },
  data() {
    return {
      showDrawer: false,
      form: {
        name: "",
        email: "",
      },
    };
  },
  mounted() {
    console.log(
      "%c [  ]-101",
      "font-size:13px; background:pink; color:#bf2c9f;",
      this.type
    );
  },
  methods: {
    handleOpen() {
      console.log("抽屉打开了");
    },
    handleClose() {
      console.log("抽屉关闭了");
    },
    handleSubmit() {
      console.log("提交表单", this.form);
      this.showDrawer = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.help-core__content {
  padding: 0.12rem 0.16rem 0;
  text-align: center;
}
.help-core__button {
  background-color: #108ee9;
  border: 0;
  border-radius: 0.04rem;
  color: #fff;
  cursor: pointer;
  font-size: 0.16rem;
  font-weight: 600;
  padding: 0.16rem;
  width: 100%;
}
@media (max-width: 480px) {
  .help-core__title {
    font-size: 0.2rem;
    line-height: 0.26rem;
    margin-bottom: 0.1rem;
  }
  .help-core__desc {
    font-size: 0.14rem;
    line-height: 0.22rem;
    margin-bottom: 0.1rem;
  }
  .help-core__button-container {
    padding: 0 0.17rem 0.2rem;
  }
}
</style>
