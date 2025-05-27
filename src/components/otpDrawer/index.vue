<!--
 * @Author: xiejun xiejun@keeprisk.com
 * @Date: 2025-05-27 21:58:00
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @LastEditTime: 2025-05-27 22:47:04
 * @FilePath: /dana-clone/src/components/otpDrawer/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="na-otp-drawer">
    <PinCodeDrawer
      :visible.sync="showOtpDrawer"
      :size="showKeyboard ? '80%' : '50%'"
    >
      <div class="otp_code_container">
        <div class="title">Input OTP code</div>
        <div class="send_desc">Code send to {{ account }} via</div>
        <div class="otp_type"><span></span> SMS</div>
        <div class="otpCode_input">
          <!-- 密码输入框 -->
          <van-password-input
            :value="otpCode"
            :focused="showKeyboard"
            :mask="false"
            :length="4"
            :gutter="15"
            @focus="showKeyboard = true"
          />

          <!-- 数字键盘 -->
          <van-number-keyboard
            @input="onInput"
            @delete="onDelete"
            :show="showKeyboard"
            @blur="showKeyboard = false"
            :hide-on-click-outside="false"
          />
        </div>
        <el-button
          style="width: 100%"
          type="text"
          @click="handleDrawer('forget')"
          class="resend_btn"
          :disabled="isCounting"
        >
          {{ buttonText }}
        </el-button>
      </div>
    </PinCodeDrawer>
    <CustomerDrawer
      :visible.sync="showDrawer"
      :hasHeader="true"
      :showClose="true"
      :size="'60%'"
      :title="'Resend OTP code?'"
    >
      <div></div>
      <!-- 主要内容 -->
      <div class="help-core">
        <div class="help-core__wrap">
          <div class="help-core__header">
            <img
              src="https://a.m.dana.id/resource/imgs/ipg/blue-forgot-pin-square-background.svg"
              alt="help"
            />
          </div>
          <div class="help-core__content">
            <div class="help-core__title">Resend OTP code?</div>
            <div class="help-core__desc">
              A new code will be sent to +62881*****4017
            </div>
          </div>
          <div class="help-core__button-container">
            <el-button
              type="primary"
              class="help-core__button"
              @click="showDrawer = false"
              >RESEND CODE</el-button
            >
          </div>
        </div>
      </div>
    </CustomerDrawer>
  </div>
</template>

<script>
import PinCodeDrawer from "@/components/common/actionDrawer.vue";
import CustomerDrawer from "../common/customerDrawer.vue";

export default {
  components: {
    PinCodeDrawer,
    CustomerDrawer,
  },
  computed: {
    // 动态按钮文字
    buttonText() {
      return this.isCounting ? `RESEND（${this.countdown}）` : "RESEND";
    },
  },
  data() {
    return {
      showOtpDrawer: false,
      showDrawer: true,
      showKeyboard: false,
      otpCode: "",
      account: "+6288134254325",
      countdown: 60,
      isCounting: false, // 是否正在倒计时
      timer: null, // 定时器对象
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    onInput(key) {
      this.otpCode = (this.otpCode + key).slice(0, 6);

      console.log(
        "%c [  ]-370",
        "font-size:13px; background:otpk; color:#bf2c9f;",
        this.otpCode
      );
    },
    onDelete() {
      this.otpCode = this.otpCode.slice(0, this.otpCode.length - 1);
    },
    // 开始倒计时
    startCountdown() {
      this.isCounting = true;
      this.countdown = 60; // 重置倒计时

      this.timer = setInterval(() => {
        this.countdown--;

        if (this.countdown <= 0) {
          this.stopCountdown();
        }
      }, 1000);
    },

    // 停止倒计时
    stopCountdown() {
      clearInterval(this.timer);
      this.isCounting = false;
    },
  },
  // 组件销毁时清除定时器
  beforeDestroy() {
    this.stopCountdown();
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
  ::v-deep .el-drawer__header {
    margin-bottom: 0px;
  }
  ::v-deep #el-drawer__title {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid #ebedf0;
    color: #000;
  }
}
</style>
