<template>
  <div class="footer">
    <div class="left-content">
      <span class="logo icon icon-logodana">
        <svg>
          <!-- <use xlink:href="#icon-logodana"></use> -->
        </svg>
      </span>
      <div class="footer__notes">
        <div class="footer__container">
          <div class="footer__title">
          MONEY BACK GUARANTEE
        </div>
        <div class="footer__desc">
          DANA Protection guarantees your money and data security with also with a money back guarantee.
        </div>
      </div>
      <div class="footer__container">
        <div class="footer__title">
          WORLD-CLASS SECURITY
        </div>
        <div class="footer__desc">
          DANA system security meets the PCI-DSS &amp; ISO standard. Verified by Bank Indonesia.
        </div>
      </div>
      <div class="footer__container">
        <div class="footer__title">
          LIVE THE #BEBASDRAMA LIFE
        </div>
        <div class="footer__desc">
          Experience the convenience of digital payments that understands your wants and needs.
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p>© 2025 DANA - PT. Espay Debit Indonesia Koe. All Rights Reserved.</p>
    </div>
    </div>
    <div class="right-content">
      <img alt="icon-dana" src="https://a.m.dana.id/resource/icons/icon-dana-blue.svg" class="img-background">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }

</script>
<style lang="scss" scoped>
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
}
.icon svg {
    display: block;
    width: 100%;
    height: 100%;
}
svg:not(:root) {
    overflow: hidden;
}
.footer {
    background-color: #108ee9;
    color: #fff;
    min-height: 2.8rem;
    padding: .48rem 0 .28rem 1.65rem;
}

.footer .left-content {
    float: left;
}
.payment-amount-wrapper .footer {
    height: .32rem;
}
.footer .logo {
    height: .32rem;
    width: 1.05rem;
}
.footer__container {
    margin-right: .24rem;
    width: 2.62rem;
}
.footer__title {
    font-size: .16rem;
    font-weight: 700;
    line-height: .2rem;
    margin-bottom: .04rem;
}
.footer__desc {
    font-size: .14rem;
    line-height: .22rem;
}
.footer__container {
    margin-right: .24rem;
    width: 2.62rem;
}
.footer__copyright {
    font-size: .14rem;
    line-height: .18rem;
}
.footer .right-content {
    float: right;
    height: 2.3rem;
    right: 0;
    position: absolute;
}
.footer .img-background {
    float: right;
    height: 2.7rem;
    opacity: .3;
    -webkit-transform: translateX(.5rem) translateY(-.4rem);
    transform: translateX(.5rem) translateY(-.4rem);
    width: 2.7rem;
}
.footer__notes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: .32rem 0;
}
@media (max-width: 1024px) {
    .footer {
        min-height: 4.5rem;
    }
    .footer__notes {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .footer__container {
        margin-bottom: .2rem;
        width: 3.5rem;
    }
    .footer__container {
        margin-bottom: .2rem;
        width: 3.5rem;
    }
    .footer .right-content {
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .payment-modifier-card {
        margin: 0;
    }
}
@media (max-width: 769px) {
    .footer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: .48rem 0 .28rem;
    }
}
@media (max-width: 640px) {
    .footer {
        display: none;
    }
} 
</style>
