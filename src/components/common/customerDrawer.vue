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
    :close-on-press-escape="closeOnPressEscape"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
  >
    <!-- 默认插槽用于放置主要内容 -->
    <slot></slot>

    <!-- 底部插槽用于放置底部按钮等 -->
    <div v-if="$slots.footer" slot="footer" class="drawer-footer">
      <slot name="footer"></slot>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "customerDrawer",
  props: {
    // 是否显示抽屉
    visible: {
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
      default: "30%",
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
  border-radius: 20px 20px 0 0;
}
</style>
