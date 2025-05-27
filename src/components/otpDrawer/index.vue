<!--
 * @Author: xiejun xiejun@keeprisk.com
 * @Date: 2025-05-27 21:58:00
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @LastEditTime: 2025-05-27 22:27:39
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
  </div>
</template>

<script>
import PinCodeDrawer from "@/components/common/actionDrawer.vue";

export default {
  components: {
    PinCodeDrawer,
  },
  computed: {
    // 动态按钮文字
    buttonText() {
      return this.isCounting ? `RESEND（${this.countdown}）` : "RESEND";
    },
  },
  data() {
    return {
      showOtpDrawer: true,
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
.na-otp-drawer {
  .otp_code_container {
    text-align: center;
    padding: 0.2rem;
    box-sizing: border-box;
    // margin-top: 0.2rem;
    .title {
      font-weight: 600;
    }
    .send_desc {
      //   margin-bottom: 0.07rem;
    }
    .otpCode_input {
      width: 80%;
      margin: auto;
    }
    .resend_btn {
      margin-top: 0.1rem;
    }
    .otp_type {
      font-weight: 600;
      color: #418ce3;
      margin-bottom: 0.07rem;
    }
  }
  ::v-deep .van-password-input__security li {
    border: 1px solid #ebedf0;
  }
}
</style>
