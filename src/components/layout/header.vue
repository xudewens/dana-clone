<template>
  <div class="na-header-page">
    <div class="header__header-box">
      <div class="header__container">
        <span class="content-left icon icon-logodana">
          <img
            alt="logo-dana-protection"
            style="width: 100%; height: 100%;"
            src="../../assets/dana-icon/DANA.png"
            class="logo"
          />
        </span>
        <div class="content-right">
          <img
            alt="logo-dana-protection"
            src="https://a.m.dana.id/resource/imgs/ipg/dana-protection.svg"
            class="logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.na-header-page {
  box-shadow: 0 0.02rem 0.12rem -0.02rem rgba(0, 0, 0, 0.16);
  position: relative;
  .header__header-box {
    background-color: #108ee9;
    min-height: 0.7rem;
    width: 100%;
  }
  .content-left {
    float: left;
    height: 0.3rem;
    margin-left: 0.32rem;
    position: relative;
    top: 0.21rem;
    width: 1rem;
    background-color: aliceblue;

    // .icon{
    //     display: inline-block;
    // width: 1em;
    // height: 1em;
    // vertical-align: middle;
    // fill: currentColor;

    // }
  }
  .content-right {
    float: right;
    .logo {
      float: right;
      height: 0.3rem;
      margin: 0 0.16rem 0 0.24rem;
      position: relative;
      top: 0.19rem;
      width: 1.4rem;
    }
  }
  @media (max-width: 480px) {
    .na-header-page {
      box-shadow: none;
    }

    .header__container {
      display: flex;
      justify-content: center;
    }

    .header__header-box {
      min-height: 0.42rem;
    }

    .header__header-box .content-left {
      margin-left: 0;
      top: 0.06rem;
    }

    .header__header-box .content-right {
      display: none;
    }
  }
}
</style>
