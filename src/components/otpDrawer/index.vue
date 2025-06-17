<template>
  <div class="na-otp-drawer">
    <PinCodeDrawer
      :visible.sync="showOtpDrawer"
      :size="showKeyboard && isMobile ? '80%' : '50%'"
      @closed="closeDrawer"
    >
      <div class="otp_code_container">
        <div class="title">Input OTP code</div>
        <div class="send_desc">Code send to {{ phoneNumber }} via</div>
        <div v-if="otpType === 'WHATSAPP_OTP' || !otpType" style="color: #2cbd79;display: flex;align-items: center;justify-content: center;" class="otp_type"><span style="color: #2cbd79;display: flex;align-items: center;justify-content: center;"><svg style="margin-right: 3px;" t="1749800435630" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2443" width="16" height="16"><path d="M636 556.571429q7.428571 0 55.714286 25.142857t51.142857 30.285714q1.142857 2.857143 1.142857 8.571429 0 18.857143-9.714286 43.428571-9.142857 22.285714-40.571429 37.428571t-58.285714 15.142857q-32.571429 0-108.571429-35.428571-56-25.714286-97.142857-67.428571t-84.571429-105.714286q-41.142857-61.142857-40.571429-110.857143l0-4.571429q1.714286-52 42.285714-90.285714 13.714286-12.571429 29.714286-12.571429 3.428571 0 10.285714 0.857143t10.857143 0.857143q10.857143 0 15.142857 3.714286t8.857143 15.714286q4.571429 11.428571 18.857143 50.285714t14.285714 42.857143q0 12-19.714286 32.857143t-19.714286 26.571429q0 4 2.857143 8.571429 19.428571 41.714286 58.285714 78.285714 32 30.285714 86.285714 57.714286 6.857143 4 12.571429 4 8.571429 0 30.857143-27.714286t29.714286-27.714286zm-116 302.857143q72.571429 0 139.142857-28.571429t114.571429-76.571429 76.571429-114.571429 28.571429-139.142857-28.571429-139.142857-76.571429-114.571429-114.571429-76.571429-139.142857-28.571429-139.142857 28.571429-114.571429 76.571429-76.571429 114.571429-28.571429 139.142857q0 116 68.571429 210.285714l-45.142857 133.142857 138.285714-44q90.285714 59.428571 197.142857 59.428571zm0-789.714286q87.428571 0 167.142857 34.285714t137.428571 92 92 137.428571 34.285714 167.142857-34.285714 167.142857-92 137.428571-137.428571 92-167.142857 34.285714q-111.428571 0-208.571429-53.714286l-238.285714 76.571429 77.714286-231.428571q-61.714286-101.714286-61.714286-222.285714 0-87.428571 34.285714-167.142857t92-137.428571 137.428571-92 167.142857-34.285714z" p-id="2444" fill="#2cbd79"></path></svg></span> whatsApp</div>
        <div v-if="otpType === 'SMS_OTP'" style="color: #5090b5;" class="otp_type"><span style="color: #2cbd79;display: flex;align-items: center;justify-content: center;"><svg t="1749802984640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4537" id="mx_n_1749802984641" width="16" height="16"><path d="M853.333333 170.666667a85.333333 85.333333 0 0 1 85.333334 85.333333v512a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V256a85.333333 85.333333 0 0 1 85.333334-85.333333h682.666666z m0 64H170.666667a21.333333 21.333333 0 0 0-21.333334 21.333333v512a21.333333 21.333333 0 0 0 21.333334 21.333333h682.666666a21.333333 21.333333 0 0 0 21.333334-21.333333V256a21.333333 21.333333 0 0 0-21.333334-21.333333z" fill="#5090b5" p-id="4538"></path><path d="M272.448 365.653333a32 32 0 0 1 41.962667-9.514666l2.602666 1.642666 176.64 123.648a32 32 0 0 0 33.877334 1.770667l2.816-1.770667 176.64-123.648a32 32 0 0 1 39.146666 50.56l-2.453333 1.877334-176.64 123.648a96 96 0 0 1-105.898667 2.773333l-4.202666-2.773333-176.64-123.648a32 32 0 0 1-7.850667-44.586667z" fill="#5090b5" p-id="4539"></path></svg></span> SMS</div>
        <div class="otpCode_input">
          <!-- 密码输入框 -->
          <van-password-input
            :value="otpCode"
            :class="{ 'error-msg': inputError }"
            :focused="showKeyboard"
            :mask="false"
            :length="4"
            :gutter="15"
            @focus="focusPass"
            @click="focusPass"
          />
          <el-input ref="inputOtp" v-model="otpCode" type="number" @input="onInput" :style="{ opacity: 0, position: 'absolute', pointerEvents: 'none',width: '1px' }"></el-input>
          <!-- 数字键盘 -->
          <van-number-keyboard
            @input="onInput"
            @delete="onDelete"
            :show="showKeyboard"
            v-if="isMobile"
            @blur="showKeyboard = false"
            :hide-on-click-outside="false"
          />
        </div>
        <div class="input-phone-error" v-if="inputError">
          <img
            src="https://a.m.dana.id/resource/icons/info-red.svg"
            alt="info-red"
          />
          <span>Please make sure you have the right OTP and try again.</span>
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
              A new code will be sent to +62 {{ phoneNumber }}
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
import { dana_login, } from '@/api/index'
export default {
  components: {
    PinCodeDrawer,
    CustomerDrawer,
  },
  props: {
    // 手机号
    phoneNumber: {
      type: String,
      default: '',
    },
    // 手机号
    otpType: {
      type: String,
      default: '',
    },
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
      showDrawer: false,
      showKeyboard: false,
      otpCode: "",
      account: "",
      countdown: 60,
      inputError: false,
      isCounting: false, // 是否正在倒计时
      timer: null, // 定时器对象
      isMobile: false
    };
  },
  watch: {
    // 监听窗口大小变化，在设备旋转时重新检测
    '$route'() {
      this.checkDevice();
    }
  },
  created(){
    this.checkDevice()
  },
  mounted() {
    this.startCountdown();
    this.$refs.inputOtp.focus()
  },
  methods: {
    checkDevice() {
      const userAgent = navigator.userAgent.toLowerCase();
      // 检测常见移动设备的关键字
      const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'windows phone'];
      this.isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword));
      console.log(this.isMobile,'=====this.isMobile====')
    },
    closeDrawer() {
      this.otpCode = ''
      this.showOtpDrawer = false
    },
    focusPass() {
      this.showKeyboard = true
      this.$refs.inputOtp.focus()
    },
    onInput(key) {
      if(this.isMobile){
        this.otpCode = (this.otpCode + key).slice(0, 4);
      }else{
        this.otpCode = (this.otpCode).slice(0, 4);
      }
      if (this.otpCode.length === 4) {
        const loading = this.$loading({
          lock: true,
          text: this.$t('loading...'),
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        dana_login({
          phoneNumber: this.phoneNumber,
          otp: this.otpCode
        }).then((res)=> {
       
          loading.close()
          if (res.data.pass) {
            this.showKeyboard = false
            this.otpCode = ''
            this.showOtpDrawer = false
            localStorage.setItem('DANA_Token', res.data.token)
            this.$router.push({
              path: '/checkout',
              query: { 
                referenceNo: this.$route.query.referenceNo
              }
            })
          } else {
            this.inputError = true
          }
        }).finally(() => {
          loading.close()
        })
      }
    },
    onDelete() {
      this.otpCode = this.otpCode.slice(0, this.otpCode.length - 1);
      this.inputError = false
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
        margin-bottom: 0.07rem;
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
  .input-phone-error {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #ff5d55;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    margin-top: 0.14rem;
  }
  .input-phone-error img {
    height: 0.2rem;
    width: 0.2rem;
  }
  .input-phone-error span {
    font-size: 0.12rem;
    margin-left: 0.06rem;
  }
  .van-password-input__security {
    width: 50%;
  }
  // @media (max-width: 480px) {
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
    ::v-deep .van-password-input__security li {
      border: 1px solid #ebedf0;
    }
  .error-msg ::v-deep.van-password-input__security li{
     border:1px solid #ff5d55 !important;
    }
    ::v-deep #el-drawer__title {
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid #ebedf0;
      color: #000;
    }
  }
  .van-password-input {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 600px) {
     .van-password-input__security {
        width: 100% !important;
      }
  }
</style>
