<!--
 * @Author: xiejun xiejun@keeprisk.com
 * @Date: 2025-05-22 15:04:20
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @LastEditTime: 2025-05-27 15:23:23
 * @FilePath: /dana-clone/src/views/minerMail/minerMail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="na-login-page">
    <div class="ipg-new__wrapper">
      <div data-v-74d2324a="" class="new-background">
        <div data-v-74d2324a="" class="new-background__top"></div>
      </div>
      <div class="ipg-new__content">
        <div class="agreement__wrapper">
          <div class="wrapper">
            <div class="wrapper__step">
              <div class="wrapper__step__logo-container left-slide">
                <img
                  src="https://a.m.dana.id/resource/icons/dana.svg"
                  alt="dana-logo"
                  class="wrapper__step__logo"
                />
              </div>
              <div class="wrapper__step__direction">
                <div class="wrapper__step__direction__step-title">Step 1</div>
                <div class="wrapper__step__direction__title">
                  Input Phone Number
                </div>
                <div class="wrapper__status">
                  <div class="wrapper__status__progress">
                    <img
                      src="https://a.m.dana.id/resource/icons/icon-waiting-orange.svg"
                      alt="icon-waiting"
                    />
                    <div class="wrapper__status__text">IN PROGRESS</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wrapper__progress">
              <div class="wrapper__progress__dot"></div>
              <div class="wrapper__progress__dot"></div>
              <div class="wrapper__progress__dot"></div>
              <div class="wrapper__progress__dot"></div>
              <div class="wrapper__progress__dot"></div>
              <div
                class="wrapper__progress__dot wrapper__progress__dot-grey"
              ></div>
              <div
                class="wrapper__progress__dot wrapper__progress__dot-grey"
              ></div>
              <div
                class="wrapper__progress__dot wrapper__progress__dot-grey"
              ></div>
              <div
                class="wrapper__progress__dot wrapper__progress__dot-grey"
              ></div>
            </div>
            <div class="wrapper__step">
              <div class="wrapper__step__logo-container">
                <img
                  src="https://a.m.dana.id/resource/icons/icon-lock-step-1.png"
                  alt="icon-lock"
                  class="wrapper__step__logo lock-logo"
                />
              </div>
              <!---->
              <div class="wrapper__step__direction">
                <div class="wrapper__step__direction__step-title">Step 2</div>
                <div class="wrapper__step__direction__title">
                  Continue Payment
                </div>
                <!---->
              </div>
            </div>
          </div>
          <div class="mobile-overlap-background">
            <div class="mobile-overlap-background__top"></div>
          </div>
          <div class="card-agreement">
            <div class="card-agreement__header">
              <div class="card-agreement__guest-header">
                <img
                  src="https://a.m.dana.id/resource/icons/dana-full.svg"
                  alt="icon-dana"
                  class="icon-dana"
                />
              </div>
            </div>
            <main class="card-agreement__content">
              <!---->
              <!---->
              <div class="agreement__phone-wrapper">
                <div class="input-phone-header">
                  Input your phone number as DANA ID
                </div>
                <div class="input-phone-wrapper">
                  <div class="country-flag-wrapper">
                    <img
                      src="https://a.m.dana.id/resource/imgs/ipg/idn-flag.svg"
                      alt="idn-flag"
                    />
                  </div>
                  <div class="country-code-wrapper">
                    <span style="padding-left: 6px; display: inline-block"
                      >+62</span
                    >
                  </div>
                  <el-input
                    placeholder="12312345678"
                    v-model="inputValue"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    clearable
                    type="number"
                    ref="mainInput"
                  >
                    <!-- 解决部分机型数字键盘不唤起的兼容方案 -->
                    <template #prefix>
                      <input
                        type="number"
                        style="display: none"
                        ref="fakeInput"
                      />
                    </template>
                  </el-input>
                </div>
                <!---->
              </div>
              <div class="binding-feature-wrapper">
                <div class="binding-tagline">
                  Get many benefits for your daily life with DANA!
                </div>
                <div class="binding-feature">
                  <div class="binding-feature__item">
                    <img
                      src="https://a.m.dana.id/resource/icons/icon-new-card.svg"
                      alt="icon-dana"
                      class="icon-dana"
                    />
                    <div class="binding-feature__item__content">
                      <p class="binding-feature__item__content__title">
                        The digital wallet for you
                      </p>
                      <p class="binding-feature__item__content__desc">
                        Keep your cash as well as debit/credit cards seamlessly
                        in DANA.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="binding-feature">
                  <div class="binding-feature__item">
                    <img
                      src="https://a.m.dana.id/resource/icons/icon-proceed-trx.svg"
                      alt="icon-dana"
                      class="icon-dana"
                    />
                    <div class="binding-feature__item__content">
                      <p class="binding-feature__item__content__title">
                        Payments are easier than ever!
                      </p>
                      <p class="binding-feature__item__content__desc">
                        Shopping at merchants? Use scan QRIS. Online shopping?
                        Use send money!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="binding-feature">
                  <div class="binding-feature__item">
                    <img
                      src="https://a.m.dana.id/resource/icons/icon-trusted-device.svg"
                      alt="icon-dana"
                      class="icon-dana"
                    />
                    <div class="binding-feature__item__content">
                      <p class="binding-feature__item__content__title">
                        Stay safe with DANA!
                      </p>
                      <p class="binding-feature__item__content__desc">
                        DANA Protection secures your money and data, complete
                        with PIN code for a better security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
              <div class="agreement__button">
                <div class="agreement__button-info">
                  Your data is secured by DANA Protection.
                </div>
                <el-button style="width: 100%;"  type="primary" @click="pcContinue">CONTINUE</el-button>
                <!-- <button
                  type="button"
                  class="btn-continue fs-unmask btn btn-primary"
                  disabled="disabled"
                >
                  
                CONTINUE
                </button> -->
                <div
                  class="agreement__button-redirect btn-back-to-merchant"
                  style="display: none"
                >
                  GO TO MERCHANT PAGE
                </div>
              </div>
            </main>
            <div class="card-agreement__footer fs-unmask">
              <div class="btn-wrapper">
                <!---->
                <!---->
              </div>
              <div class="agreement-footer">
                <div class="dana-protection__wrapper">
                  <div class="dana-protection__text">Secured by</div>
                  <img
                    alt="dana-protection"
                    src="https://a.m.dana.id/resource/imgs/dana-protection/new-2025/dana-protection-two-lines.svg"
                    class="dana-protection__img"
                  />
                </div>
                <div class="help">
                  <button class="btn-help help__button">
                    HELP
                    <img
                      alt="help"
                      src="https://a.m.dana.id/resource/icons/help-blue.svg"
                      class="help__icon"
                    />
                  </button>
                </div>
                <!---->
              </div>
            </div>
          </div>
          <!---->
          <div class="sticky-button">
            <div class="sticky-button__content">
              <div class="sticky-button__content__tnc">
                Your data is secured by DANA Protection.
              </div>
              <el-button type="primary" @click="mobileContinue"
                >CONTINUE</el-button
              >
              <div>
                <div class="guest-checkout-footer">
                  <div class="dana-protection__wrapper">
                    <div class="dana-protection__text">Secured by</div>
                    <img
                      alt="dana-protection"
                      src="https://a.m.dana.id/resource/imgs/ipg/dana-protection-logo-in-line.svg"
                      class="dana-protection__img"
                    />
                  </div>
                  <div class="help">
                    <button
                      class="btn-help help__button"
                      @click="handleDrawer('help')"
                    >
                      HELP
                      <img
                        alt="help"
                        src="https://a.m.dana.id/resource/icons/help-blue.svg"
                        class="help__icon"
                      />
                    </button>
                  </div>
                </div>
                <div class="f-sheet__revamp scroll-lock-body help-sheet"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HelpDrawer ref="helpDrawerRef" :type="DrawerType"> </HelpDrawer>
    <PinCodeDrawer
      :visible.sync="showActionDrawer"
      :size="'40%'"
      ref="pinCodeRef"
    >
      <div class="pin_code_container">
        <div class="title">Enter your DANA PIN</div>
        <div class="password_input">
          <!-- 密码输入框 -->
          <van-password-input
            :value="password"
            :focused="showKeyboard"
            :mask="hasMask"
            @focus="showKeyboard = true"
            :class="{ show_dot: hasMask }"
          />
          <div class="input-pin__mask" @click="changeMask">
            <img
              v-if="hasMask"
              data-v-554f031f=""
              src="https://a.m.dana.id/resource/imgs/ipg/unmask-pin.svg"
              alt="show/hide"
              class=""
            />
            <img
              v-else
              data-v-554f031f=""
              src="https://a.m.dana.id/resource/imgs/ipg/mask-pin.svg"
              alt="show/hide"
              class="masked"
            />
          </div>
        </div>
        <el-button
          style="width: 100%"
          type="text"
          @click="handleDrawer('forget')"
        >
          FORGOT PIN?
        </el-button>
        <!-- 数字键盘 -->
        <!-- <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        /> -->
      </div>
    </PinCodeDrawer>
  </div>
</template>

<script>
import PinCodeDrawer from "@/components/common/actionDrawer.vue";
import HelpDrawer from "@/components/helpDrawer/index.vue";

export default {
  components: {
    HelpDrawer,
    PinCodeDrawer,
  },
  data() {
    return {
      inputValue: "",
      showActionDrawer: false,
      password: "",
      showKeyboard: false,
      hasMask: true,
      DrawerType: "help",
    };
  },
  mounted() {
    // 监听全局点击事件（处理空白处失焦）
    document.addEventListener("click", this.handleDocumentClick);
  },
  beforeUnmount() {
    // 移除全局事件监听
    document.removeEventListener("click", this.handleDocumentClick);
  },
  methods: {
    changeMask() {
      this.hasMask = !this.hasMask;
    },
    mobileContinue() {
      console.log(
        "%c [ 唤起弹窗 ]-311",
        "font-size:13px; background:pink; color:#bf2c9f;",
        this.$refs.pinCodeRef
      );
      this.showActionDrawer = true;
    },
    pcContinue() {
      console.log(
        "%c [ 跳转pc pin码 ]-315",
        "font-size:13px; background:pink; color:#bf2c9f;"
      );
    },
    handleDrawer(type) {
      this.DrawerType = type;
      this.$refs.helpDrawerRef.showDrawer = true;
    },
    // 聚焦时处理
    handleFocus() {
      // 唤起数字键盘（强制触发假输入框聚焦）
      this.$refs.fakeInput.focus();
      // 延迟滚动（避免键盘遮挡导致滚动失效）
      setTimeout(() => {
        window.scrollBy(0, 50);
      }, 100);
    },

    // 失焦时处理（包括主动失焦和空白点击）
    handleBlur() {
      // 先关闭键盘（确保键盘已收起）
      this.$refs.mainInput.blur(); // 主动触发失焦
      this.$refs.fakeInput.blur(); // 关闭假输入框键盘

      // 延迟滚动到顶部（等待键盘动画结束）
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300); // 延迟时间需根据键盘动画时长调整（通常200-300ms）
    },

    // 空白处点击处理
    handleDocumentClick(event) {
      // 判断点击位置是否在输入框外
      if (!this.$refs.mainInput.$el.contains(event.target)) {
        this.handleBlur(); // 触发失焦逻辑
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.na-login-page {
  background-color: #fff;
  ::v-deep .el-input__inner,
  .el-input__inner:focus {
    border: 1px solid #fff;
  }

  .ipg-new__wrapper {
    background-image: url(https://a.m.dana.id/resource/imgs/ipg/dot-background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    min-height: 6.5rem;
    .new-background__top {
      background-color: #108ee9;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 auto;
      min-height: 3rem;
    }
    .ipg-new__content {
      display: flex;
      justify-content: center;
      margin: -2.2rem auto 0;
      .agreement__wrapper {
        display: flex;
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #fff;
          border-radius: 0.12rem;
          box-shadow: 0 0.02rem 0.12rem -0.02rem rgba(0, 0, 0, 0.16);
          margin: 0.16rem 0.12rem;
          height: 2.78rem;
          min-width: 2.49rem;
          padding: 0.2rem;

          .wrapper__progress {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0.17rem;
          }
          .wrapper__step {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            .left-slide {
              padding-left: 0.04rem;
            }
            .wrapper__step__logo-container {
              height: 0.42rem;
              margin-right: 0.16rem;
              width: 0.42rem;
            }
            .wrapper__step__direction {
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              .wrapper__step__direction__step-title {
                color: #a4a4a4;
                font-size: 0.14rem;
                font-weight: 600;
                line-height: 0.18rem;
                margin-bottom: 0.04rem;
              }
              .wrapper__step__direction__title {
                color: #313131;
                font-size: 0.18rem;
                font-weight: 600;
                line-height: 0.24rem;
                margin-bottom: 0.04rem;
              }
              .wrapper__status {
                .wrapper__status__progress {
                  align-items: center;
                  display: flex;
                  flex-direction: row;
                  font-size: 0.12rem;
                  font-weight: 600;
                  justify-content: center;
                  line-height: 0.16rem;
                  color: #fca73e;
                  .wrapper__status__text {
                    margin-left: 0.06rem;
                  }
                }
              }
            }
            .wrapper__step__logo-container {
              height: 0.42rem;
              margin-right: 0.16rem;
              width: 0.42rem;

              .lock-logo {
                height: 0.42rem;
                width: 0.42rem;
              }
            }
          }
          .wrapper__progress {
            align-items: center;
            justify-content: center;
            padding: 0 0.17rem;
            .wrapper__progress__dot {
              background: #313131;
              border-radius: 50%;
              margin-bottom: 0.04rem;
            }
            wrapper__progress__dot:first-child {
              height: 0.04rem;
              width: 0.04rem;
            }
            wrapper__progress__dot:first-child {
              height: 0.04rem;
              width: 0.04rem;
            }
            .wrapper__progress__dot:last-child,
            .wrapper__progress__dot:nth-child(2) {
              height: 0.05rem;
              width: 0.05rem;
            }
            .wrapper__progress__dot:nth-child(3),
            .wrapper__progress__dot:nth-child(8) {
              height: 0.06rem;
              width: 0.06rem;
            }
            .wrapper__progress__dot:nth-child(4),
            .wrapper__progress__dot:nth-child(7) {
              height: 0.07rem;
              width: 0.07rem;
            }
            .wrapper__progress__dot:nth-child(5),
            .wrapper__progress__dot:nth-child(6) {
              height: 0.08rem;
              width: 0.08rem;
            }
            .wrapper__progress__dot:nth-child(6),
            .wrapper__progress__dot:nth-child(7),
            .wrapper__progress__dot:nth-child(8),
            .wrapper__progress__dot:nth-child(9) {
              background: #bfbfbf !important;
            }
          }
        }
        .mobile-overlap-background {
          z-index: 0;
        }
        .mobile-overlap-background__top {
          background-color: #108ee9;
          background-repeat: no-repeat;
          background-size: cover;
          margin: 0 auto;
          width: 0;
          min-height: 0;
        }
        .card-agreement {
          background: #fff;
          border-radius: 0.08rem;
          box-shadow: 0 0.02rem 0.12rem -0.02rem rgba(0, 0, 0, 0.16);
          flex-direction: column;
          justify-content: space-between;
          margin: 0.16rem 0.12rem 0.96rem;
          padding: 0.24rem;
          width: 4.48rem;
          .card-agreement__header {
            border-bottom: 0.01rem solid #d1d1d1;
            padding: 0 0 0.2rem;
            align-items: center;
            justify-content: center;
            .card-agreement__guest-header {
              display: flex;
              align-items: center;
              justify-content: center;
              .icon-dana {
                height: 0.4rem;
              }
            }
          }
          .card-agreement__content {
            margin: 0.24rem 0 0;
            .agreement__phone-wrapper {
              background: #fff;
              .input-phone-header {
                font-size: 0.14rem;
                line-height: 0.18rem;
                font-weight: 600;
              }
              .input-phone-wrapper {
                align-items: center;
                border: 0.01rem solid;
                border-color: #dcdce2;
                border-radius: 0.08rem;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                font-size: 0.18rem;
                height: 0.48rem;
                margin-top: 0.1rem;
                width: 100%;
              }
              .country-flag-wrapper {
                padding: 0.08rem;
              }

              .clearable-input {
                position: relative;
                width: 100%;
              }
              .country-code-wrapper {
                border-left: 0.01rem solid #e3e3e3;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
              }
              .input-phone-container {
                color: #313131;
                border: none;
                height: 0.48rem;
                width: 3rem;
              }
            }
            .binding-feature-wrapper {
              margin: 0.16rem 16px 0 0;
              .binding-feature__item {
                display: flex;
                align-items: center;
                gap: 0.12rem;
                padding: 0.08rem 0;
                .icon-dana {
                  height: 0.4rem;
                }
              }
              binding-feature__item__content {
                display: flex;
                flex-direction: column;
                gap: 0.04rem;
              }
              .binding-feature__item__content__title {
                font-size: 0.12rem;
                font-weight: 600;
                line-height: 0.16rem;
                color: #313131;
              }

              .binding-feature__item__content__desc {
                font-weight: 400;
                font-size: 0.12rem;
                line-height: 0.16rem;
                color: #727272;
              }
              .binding-tagline {
                font-weight: 600;
                font-size: 0.14rem;
                line-height: 0.18rem;
                color: #313131;
                padding: 0.16rem 0;
              }
              .binding-feature {
                display: flex;
                flex-direction: column;
                gap: 0.12rem;
              }
            }
            .agreement__button {
              .agreement__button-info {
                color: #727272;
                font-size: 0.12rem;
                font-weight: 400;
                line-height: 0.16rem;
                padding: 0.09rem 0 0.08rem;
                border-top: 0.01rem solid #d1d1d1;
                text-align: center;
              }
              .agreement__button-redirect {
                color: #108ee9;
                cursor: pointer;
                font-size: 0.16rem;
                font-weight: 600;
                line-height: 0.2rem;
                margin-top: 0.2rem;
                text-align: center;
              }

              .btn-continue:disabled {
                background: #bfbfbf;
              }
              .btn-primary:disabled {
                color: #fff;
              }

              .btn {
                display: block;
                width: 100%;
                height: 46px;
                margin: 0 auto;
                font-size: 0.15rem;
                line-height: 46px;
                white-space: nowrap;
                text-align: center;
                border: 0;
                border-radius: 0.05rem;
                outline: none;
                user-select: none;
                touch-action: manipulation;
              }
            }
          }
          .card-agreement__footer {
            margin-top: 0.24rem;
            padding: 0.08rem 0 0;
            border-top: 0.01rem solid #d1d1d1;
            .agreement-footer {
              align-items: center;
              display: flex;
              justify-content: space-between;
              .help__button {
                background: none;
                border: 0.01rem solid #108ee9;
                border-radius: 0.04rem;
                color: #108ee9;
                cursor: pointer;
                font-size: 0.12rem;
                font-weight: 600;
                line-height: 0.16rem;
                padding: 0.08rem;
                width: 100%;
              }
              .help__icon {
                display: inline-block;
                height: 0.13rem;
                width: 0.13rem;
                vertical-align: text-top;
              }
              .dana-protection__wrapper {
                display: flex;
              }
              .dana-protection__text {
                color: #727272;
                font-size: 0.12rem;
                font-weight: 600;
                line-height: 0.16rem;
                margin-right: 0.04rem;
              }
              .dana-protection__img {
                height: 0.19rem;
                width: auto;
              }
            }
          }
        }
      }
    }
    .ipg-new__wrapper {
      background-image: url(https://a.m.dana.id/resource/imgs/ipg/dot-background.svg);
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 auto;
      min-height: 6.5rem;
    }
    .sticky-button__content {
      background-color: #fff;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      position: fixed;
      padding: 0.16rem;
      right: 0;
      z-index: 99;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      gap: 0.08rem;
    }
    .sticky-button__content__tnc {
      color: #727272;
      font-size: 0.12rem;
      line-height: 0.16rem;
      text-align: center;
    }
    .sticky-button {
      display: none;
    }
  }
  // @media (min-width: 481px) {
  //   .sticky-button {
  //     display: block;
  //   }
  //   .agreement__phone-wrapper
  //     .input-phone-wrapper
  //     .input-phone-container
  //     .mobile-input {
  //     display: none !important;
  //   }
  //   .wrapper,
  //   .agreement__button,
  //   .agreement__footer {
  //     display: none !important;
  //   }
  // }
/* 隐藏 Chrome、Safari、Edge 等 WebKit/Blink 内核浏览器的步进器 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

/* 隐藏 Firefox 的步进器 */
input[type="number"] {
  -moz-appearance: textfield;
}

/* 隐藏 IE/Edge 的步进器 */
input[type="number"]::-ms-clear,
input[type="number"]::-ms-reveal {
  display: none;
}

/* 针对 Element UI 的输入框组件 */
::v-deep .el-input input[type="number"]::-webkit-inner-spin-button,
::v-deep .el-input input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::v-deep .el-input::placeholder {
  color: #999;         /* 文本颜色 */
  font-size: 30px;      /* 字号 */
  /* 其他样式属性 */
}
::v-deep .el-input .el-input__inner {
  padding-left: 5px;         /* 文本颜色 */
  font-size: 0.18rem;  
}
  @media (max-width: 480px) {
    .sticky-button {
      display: block !important;
    }
    .wrapper,
    .agreement__button,
    .agreement__footer,
    .card-agreement__footer {
      display: none !important;
    }
    .agreement__wrapper {
      flex-direction: column;
      // background-image: url(https://a.m.dana.id/resource/imgs/ipg/dot-background.svg);
      // background-repeat: no-repeat;
      // background-size: cover;
      margin: 0 auto;
      min-height: 8.5rem;
    }
    .mobile-overlap-background__top {
      width: 100%;
      min-height: 1.95rem;
    }
    .mobile-overlap-background {
      z-index: 0;
    }
    .agreement__wrapper .card-agreement {
      z-index: 10;
      margin-top: -1.2rem;
      margin-bottom: 1.4rem !important;
      width: calc(100vw - 0.24rem);
    }
    .card-agreement__guest-header .icon-dana {
      height: 0.4rem;
    }
    .guest-checkout-footer {
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
    }
    .guest-checkout-footer .dana-protection__wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .guest-checkout-footer .dana-protection__text {
      color: #727272;
      font-size: 0.12rem;
      font-weight: 600;
      line-height: 0.16rem;
    }
    .guest-checkout-footer .dana-protection__img {
      height: 0.19rem;
      width: 1.2rem;
    }
    .guest-checkout-footer .help__button {
      background: none;
      border: 0.01rem solid #108ee9;
      border-radius: 0.04rem;
      color: #108ee9;
      cursor: pointer;
      font-size: 0.12rem;
      font-weight: 600;
      line-height: 0.16rem;
      padding: 0.08rem;
      width: 100%;
    }
    .guest-checkout-footer .help__icon {
      height: 0.13rem;
      width: 0.13rem;
      vertical-align: text-top;
      display: inline-block;
    }
    .card-agreement {
      z-index: 10;
      margin-top: -1.2rem;
      width: calc(100vw - 0.24rem) !important;
    }
    .sticky-button__content__tnc {
      color: #727272;
      font-size: 0.12rem;
      line-height: 0.16rem;
      text-align: center;
    }
  }
  ::v-deep .pin_code_container {
    background-color: #fff;
    padding: 0.24rem 0.36rem;
    .title {
      color: #727272;
      font-weight: 400;
      font-size: 0.12rem;
      line-height: 0.16rem;
      margin-bottom: 0.16rem;
      text-align: center;
    }
    .password_input {
      // display: flex;
      position: relative;
      padding-right: 0.5rem;
      border: 1px solid #fca73e;
    }
  }
  .input-pin__mask {
    border-left: 0.01rem solid #e3e3e3;
    margin: 0.06rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .input-pin__mask img {
    cursor: pointer;
    height: 0.16rem;
    margin: 0.1rem;
    width: 0.2rem;
  }
  ::v-deep.van-password-input {
    margin: 0;
  }
  [class*="van-hairline"]::after {
    border: 0 solid #ebedf0;
  }
  ::v-deep .show_dot .van-password-input__item {
    position: relative; /* 必须设置relative以便absolute伪元素定位 */

    &::after {
      content: ""; /* 伪元素必需属性 */
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #e3e3e3;
      border-radius: 100%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }
  ::v-deep .show_dot .van-password-input__cursor {
    display: none;
  }
  ::v-deep .show_dot .van-password-input__cursor {
    bottom: 20%;
    width: 40%;
    height: 1px;
  }
  // ::v-deep .van-password-input__item  {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   width: 10px;
  //   height: 10px;
  //   background-color: #e3e3e3;
  //   border-radius: 100%;
  //   -webkit-transform: translate(-50%, -50%);
  //   transform: translate(-50%, -50%);
  //   visibility: visible;
  // }
  // ::v-deep .van-password-input__security i {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   width: 10px;
  //   height: 10px;
  //   background-color: #000;
  //   border-radius: 100%;
  //   -webkit-transform: translate(-50%, -50%);
  //   transform: translate(-50%, -50%);
  //   visibility: visible;
  // }
}
</style>
