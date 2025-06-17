<template>
  <div>
    <CustomerDrawer
      :visible.sync="showDrawer"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="f-card f-card--rounded-top">
        <div class="dash"></div> 
        <div class="f-card__content unregistered-number">
          <img alt="" src="https://a.m.dana.id/resource/imgs/ipg/unregistered-number.svg" class="unregistered-number__image">
          <div class="unregistered-number__title">
            Oops, 0{{ phoneNumber }} isn't registered in DANA
          </div>
          <div class="unregistered-number__desc">
            Please change the registered number to associate.
          </div>
        </div>
        <div class="f-card__actions unregistered-number__action">
          <button @click="showDrawer = false" type="button" class="btn-close-pop-up f-btn f-btn-secondary f-btn-large">
            CLOSE
          </button>
          <button @click="showDrawer = false" type="button" class="btn-register-pop-up f-btn f-btn-primary f-btn-large">
            BACK
          </button>
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
    // 手机号
    phoneNumber: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showDrawer: false,
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
.f-sheet__revamp .f-sheet--swipe .f-card {
    position: relative;
    -ms-flex-item-align: end;
    align-self: flex-end;
    pointer-events: auto;
    width: 100%;
    max-height: 100%;
}
.f-card--rounded-top {
    border-radius: .08rem .08rem 0 0;
}
.f-card {
    background-color: #fff;
    display: block;
    max-width: 100%;
    position: relative;
    outline: 0;
    text-decoration: none;
    -webkit-transition-property: background, opacity;
    transition-property: background, opacity;
    overflow-wrap: break-word;
    position: relative;
    height: 100%;
    white-space: normal;
    -webkit-transition: background 280ms ease;
    transition: background 280ms ease;
    will-change: background;
    border-radius: .08rem;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-height: 99999999px;
    margin: 0;
    padding: 0;
}
.f-sheet__revamp .f-sheet .dash {
    margin-top: .08rem;
    margin-bottom: .08rem;
}
.f-sheet__revamp .f-sheet .dash::after {
    content: '';
    width: .56rem;
    height: .04rem;
    background-color: #e3e3e3;
    border-radius: .07rem;
    display: block;
    margin: 0 auto;
}
.unregistered-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .16rem;
    align-items: center;
    div {
      text-align: center;
    }
}
.f-card__content {
    height: 100%;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto, sans-serif;
    color: #313131;
    font-weight: 400;
    font-size: .16rem;
    line-height: 1.25;
}
.unregistered-number__image {
    height: 1.56rem;
    margin-bottom: .20rem;
    width: 1.56rem;
}
.unregistered-number__title {
    font-size: .2rem;
    font-weight: 600;
    line-height: .26rem;
}
.unregistered-number__desc {
    font-size: .14rem;
    font-weight: 400;
    line-height: .18rem;
    margin: .1rem 0;
}
.f-sheet__revamp .f-sheet--swipe .f-card__actions {
    position: sticky;
    bottom: 0;
}
.unregistered-number__action {
    padding: .08rem .16rem .16rem;
    border-top: 1px solid #e3e2e2;
}
.f-card__actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.f-card__actions:not(.f-card__actions--stacked) .f-btn {
    width: 50%;
}
.f-card__actions>.f-btn {
    margin-top: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.f-btn-large {
    height: .44rem;
    padding-right: .12rem;
    padding-left: .12rem;
    font-size: .16rem;
    font-weight: 600;
    font-family: OpenSans, sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
}
.f-btn-primary {
    color: #fff;
    background-color: #108ee9;
}
.f-btn {
    position: relative;
    display: block;
    white-space: nowrap;
    border: 0;
    border-radius: .04rem;
    outline: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
.f-btn-secondary::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: solid .01rem #108ee9;
    border-radius: .04rem;
    content: '';
}
.f-btn-secondary {
    background-color: #fff;
}
.f-card__actions>.f-btn.f-btn+.f-btn {
    margin-left: .08rem;
}
.f-btn-secondary {
    color: #108ee9;
    position: relative;
}
</style>
