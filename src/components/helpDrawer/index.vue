<!--
 * @Author: xiejun xiejun@keeprisk.com
 * @Date: 2025-05-26 15:17:23
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @LastEditTime: 2025-05-26 15:34:55
 * @FilePath: /dana-clone/src/components/helpDrawer.vue/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-button @click="showDrawer = true">打开抽屉</el-button>

    <CustomerDrawer
      :visible.sync="showDrawer"
      size="40%"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 主要内容 -->
      <div v-if="type === 'help'">
        <p>这里是help的内容区域</p>
        <el-form>
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div v-else>
        <p>这里是失败的内容区域</p>
        <el-form>
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-form>
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
    // 是否显示抽屉
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
