<template>
  <el-drawer
    :title="title"
    :visible.sync="drawerVisible"
    direction="btt"
    :size="size"
    :wrapperClosable="wrapperClosable"
    :show-close="showClose"
    :before-close="handleBeforeClose"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :append-to-body="appendToBody"
    :custom-class="customClass"
    :with-header="hasHeader"
    :close-on-press-escape="closeOnPressEscape"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
  >
    <div class="in-page-risk-sheet__header">
      <div class="dana-protection-logo">
        <img
          src="https://a.m.dana.id/resource/imgs/ipg/dana-protection-full.svg"
          alt="dana-protection"
        />
      </div>
      <div class="help-grey">
        <div class="help-grey__text">Help</div>
        <img
          src="https://a.m.dana.id/resource/imgs/cashier/help-icon-small-grey.svg"
          alt="help"
        />
      </div>
    </div>
    <div class="in-page-risk-sheet__content">
      <div
        class="in-page-risk-sheet__content__top"
        @click="drawerVisible = false"
      >
        <i class="el-icon-arrow-left chevron"></i>
        <div class="title">Verification Process</div>
      </div>
      <!-- 默认插槽用于放置主要内容 -->
      <slot></slot>
    </div>

    <!-- 底部插槽用于放置底部按钮等 -->
    <div v-if="$slots.footer" slot="footer" class="drawer-footer">
      <slot name="footer"></slot>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "actionDrawer",
  props: {
    // 是否显示抽屉
    visible: {
      type: Boolean,
      default: false,
    },
    hasHeader: {
      type: Boolean,
      default: false,
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 抽屉方向 rtl / ltr / ttb / btt ，这里先写死，我只想要底部抽屉
    direction: {
      type: String,
      default: "btt",
      validator: (value) => ["rtl", "ltr", "ttb", "btt"].includes(value),
    },
    // 抽屉大小
    size: {
      type: [String, Number],
      default: "52%",
    },
    // 是否可以通过点击 modal 关闭 Drawer
    wrapperClosable: {
      type: Boolean,
      default: true,
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: false,
    },
    // 是否显示遮罩层
    modal: {
      type: Boolean,
      default: true,
    },
    // 遮罩层是否插入至 body 元素上
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    // Drawer 自身是否插入至 body 元素上
    appendToBody: {
      type: Boolean,
      default: false,
    },
    // 自定义类名
    customClass: {
      type: String,
      default: "customerDrawer",
    },
    // 是否可以通过按下 ESC 关闭 Drawer
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      drawerVisible: this.visible,
    };
  },
  watch: {
    visible(newVal) {
      this.drawerVisible = newVal;
    },
    drawerVisible(newVal) {
      this.$emit("update:visible", newVal);
    },
  },
  methods: {
    // 关闭前的回调
    handleBeforeClose(done) {
      if (this.$listeners["before-close"]) {
        this.$emit("before-close", done);
      } else {
        done();
      }
    },
    // 打开回调
    handleOpen() {
      this.$emit("open");
    },
    // 打开动画结束时的回调
    handleOpened() {
      this.$emit("opened");
    },
    // 关闭回调
    handleClose() {
      this.$emit("close");
    },
    // 关闭动画结束时的回调
    handleClosed() {
      this.$emit("closed");
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-footer {
  text-align: right;
}
.customerDrawer {
  // border-radius: 20px;
  // ::v-deep .el-drawer {
  //   border-radius: 20px 20px 0 0;
  // }
}
::v-deep .el-drawer {
  border-radius: 0.07rem 0.07rem 0 0;
}
.in-page-risk-sheet__header {
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  border-radius: 0.07rem;
  padding: 0.12rem 0.11rem;
}
.dana-protection-logo img {
  height: 0.2rem;
}
.help-grey img {
  height: 0.11rem;
  width: 0.11rem;
}
.help-grey {
  align-items: center;
  border: 1px solid #e3e3e3;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  gap: 0.05rem;
  height: 0.24rem;
  justify-content: center;
  width: 0.78rem;
}
.help-grey__text {
  color: #939393;
  font-size: 0.12rem;
  font-weight: 600;
  line-height: 0.16rem;
}
.in-page-risk-sheet__content__top {
  align-items: center;
  background: #108ee9;
  color: #fff;
  position: relative;
  padding: 0.11rem 0.08rem;
}
.in-page-risk-sheet__content__top .chevron {
  font-size: 0.25rem;
  //   transform: rotate(180deg);
  position: absolute;
  top: 0.08rem;
  left: 0;
}
.in-page-risk-sheet__content__top .title {
  font-size: 0.14rem;
  display: block;
  text-align: center;
  width: 100%;
}
</style>
