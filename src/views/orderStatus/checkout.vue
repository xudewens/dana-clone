<template>
  <div>
    <div class="fs-mask ipg-new">
      <div class="ipg-new__wrapper">
        <div class="new-background">
          <div class="new-background__top"></div>
        </div>
        <div class="ipg-new__content">
          <div class="new-web-checkout-wrapper">
            <div class="payment-modifier-card">
              <div class="payment-modifier-card__header">
                <div class="wrapper">
                  <div class="payment-modifier-card__header__merchant-logo thumb no-default">
                    <img src="https://a.m.dana.id/resource/imgs/merchant/smilepayid.jpg">
                  </div>
                  <p class="payment-modifier-card__header__title lbl-payment-description">Payment to merchant</p>
                  <div class="text-wrapper">
                    <p class="payment-modifier-card__header__merchant-name lbl-merchant-name">SYAIFUDIN</p>
                    <div class="phone-number-label phone-number-lbl">
                      <div class="avatar">
                        <img src="https://a.m.dana.id/resource/imgs/ipg/input-nickname-icon.svg" alt="avatar">
                      </div>
                      <div class="phone-number">62-*******7676</div>
                    </div>
                    <div class="phone-number-container">62-*******7676</div>
                    </div>
                  </div>
                </div>
                <div class="wrapper-card-title">
                  <div class="card-title">
                    <img alt="dana-protection" src="https://a.m.dana.id/resource/imgs/ipg/dana-protection-logo-small.svg" class="card-title__dana-protection">
                    <div class="card-title__title-wrapper">
                      <span class="card-title__dana-logo icon icon-dana">
                      <svg>
                        <!-- <use xlink:href="#icon-dana"></use> -->
                      </svg>
                    </span>
                  <div class="card-title__text"> PAY </div>
                </div>
              </div>
              <div class="card-sub-title">
                <p>Payment Confirmation</p>
              </div>
            </div>
            <div class="payment-modifier-card__content">
              <p class="payment-modifier-card__content__title payment-method"> Payment Method</p> <div class="payment-selector">
                <div class="payment-selector__guide">
                  <div class="payment-selector__guide__wrapper">
                    <button type="button" class="payment-selector__guide__toggle-btn f-btn f-btn-pills f-btn-small">CHANGE</button>
                    <div class="icon__wrapper">
                      <img src="https://a.m.dana.id/resource/imgs/ipg/wallet-blue.svg" alt="wallet-blue" class="payment-selector__guide__icon">
                    </div>
                    <div class="payment-selector__guide__selected closed"><div class="payment-selector__guide__selected__type">

                    </div>
                    <div class="payment-selector__guide__selected__info">
                      <span>Select payment method</span>
                    </div>
                  </div>
                  <section class="tooltip">
                    <div class="f-dialog"></div>
                  </section>
                </div>
              </div>
                <section class="payment-selector__installment-container">
                  <div class="payment-installment-list show-mobile" style="display: none;">
                    <div class="f-sheet__revamp scroll-lock-body installment-option-bottom-sheet"></div>
                    <div class="f-sheet__revamp scroll-lock-body early-repay-bottom-sheet"></div>
                  </div></section>
                  <section>
                    <div class="f-sheet__revamp scroll-lock-body bottom-sheet-iframe" id="fsheet"></div>
                  </section>
                  <div data-v-25358961="" class="f-dialog"></div>
                </div>
              </div>
              <div class="f-sheet__revamp scroll-lock-body help-sheet"></div>
            </div>
            <div class="payment-amount-wrapper">
              <div class="header">
                <span class="header__dana-logo icon icon-dana">
                <svg>
                  <!-- <use xlink:href="#icon-dana"></use> -->
                </svg>
              </span>
              <div class="header__title"> PAY </div>
            </div>
            <div class="sub-title">
              <p>Payment Confirmation</p>
            </div>
            <div class="mobile-sub-title">
              <p>Payment Details</p>
            </div>
            <div class="payment-detail">
              <div class="payment-detail__title">
                <span class="payment-detail__label">
                  Total Price
                </span> <span class="payment-detail__amount">
                  Rp20.000
                </span>
              </div>
            </div>
            <div class="content-wrapper content-wrapper--closed">
              <div class="order-id">
                <span class="label">
                  Order ID
                </span> 
                <span class="value lbl-order-id">
                  2537d0f4f5018c1bb25bcc7a189040a8
                </span>
              </div>
              <div class="order-subtotal">
                <span class="label lbl-subtotal-price">
                  Subtotal
                </span>
                <span class="value">
                  Rp20.000
                </span>
              </div>
              <div class="separator"></div> 
              <div class="paymethod-fee" style="display: none;">
                <p class="receipt-text lbl-platform-fee"><span>Handling Fee</span>
                </p>
                <p class="amount txt-platform-fee">
                  <span class="amount__free-charge-amount">
                    FREE
                  </span></p>
                </div>
                <div class="order-amount">
                  <p class="receipt-text">Total Price</p>
                  <p class="total-amount lbl-total-price">Rp20.000</p>
                </div>
              </div>
              <div class="btn-container">
                <button type="button" class="btn btn-primary btn-pay" disabled="disabled">PAY Rp20.000</button>
              </div>
              <div class="f-sheet__revamp scroll-lock-body payment-confirmation-sheet"></div>
              <div class="modal-otp-limit"></div>
              <section>
                <div class="f-sheet__revamp scroll-lock-body bottom-sheet-limit-info" id="fsheet"></div>
              </section>
              <section>
                <div class="f-sheet__revamp scroll-lock-body bottom-sheet-change-limit" id="fsheet"></div>
              <section>
                <div class="f-sheet__revamp scroll-lock-body bottom-sheet-risk" id="fsheet"></div>
              </section>
            </section>
            <section>
              <div class="f-sheet__revamp scroll-lock-body bottom-sheet-direct-debit-upgrade"></div>
            </section>
            <section>
              <div class="f-sheet__revamp scroll-lock-body bottom-sheet-verify-element"></div> 
            <section>
              <div class="f-sheet__revamp scroll-lock-body bottom-sheet-risk" id="fsheet"></div>
            </section>
          </section>
          <div class="footer1">
            <div class="dana-protection__wrapper">
              <div class="dana-protection__text">
                Secured by
              </div>
              <img alt="dana-protection" src="https://a.m.dana.id/resource/imgs/ipg/dana-protection-logo-in-line.svg" class="footer__dana-protection">
            </div>
            <img alt="footer-img" src="https://a.m.dana.id/resource/imgs/ipg/desktop-papper-footer.png" class="footer__image">
          </div>
        </div>
      </div>
    </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.na-header-page {
  display: none !important;
}
.ipg-new__wrapper {
    background-image: url(https://a.m.dana.id/resource/imgs/ipg/dot-background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    min-height: 6.5rem;
}
.ipg-new__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: -2.2rem auto 0;
}
.payment-modifier-card__header__merchant-logo img {
    border-radius: 50%;
    height: .64rem;
    width: .64rem;
}
.new-web-checkout-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.payment-modifier-card {
    background: #fff;
    border-radius: .08rem;
    -webkit-box-shadow: 0 .02rem .12rem -.02rem rgba(0, 0, 0, .16);
    box-shadow: 0 .02rem .12rem -.02rem rgba(0, 0, 0, .16);
    width: 4.24rem;
    margin: .16rem .12rem;
}
.payment-modifier-card__header {
    padding: .19rem 0 .08rem;
    background: url(https://a.m.dana.id/resource/imgs/cashier/payment-success-revamp-card.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    border-radius: .08rem .08rem 0 0;
}
.payment-modifier-card__header .wrapper {
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
}
.thumb.no-default {
    background-image: none;
}
.payment-modifier-card__header__merchant-logo {
    width: auto;
}
.thumb {
    width: 100%;
    min-height: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0iIzAwOTZGMSI+PHBhdGggZD0iTTIzLjggMTUuMWwtMS42LTEuNSAyLjItLjNjLjMgMCAuNS0uMi42LS40bDEtMiAxIDJjLjEuMi4zLjQuNi40bDIuMi4zLTEuNiAxLjVjLS4yLjItLjMuNC0uMi43bC40IDIuMi0yLTFjLS4xLS4xLS4yLS4xLS40LS4xLS4xIDAtLjIgMC0uNC4xbC0yIDEgLjQtMi4yYzAtLjMtLjEtLjYtLjItLjd6TTUyIDI2YzAgMTQuNC0xMS42IDI2LTI2IDI2UzAgNDAuNCAwIDI2IDExLjYgMCAyNiAwczI2IDExLjYgMjYgMjZ6TTIwIDEzLjZsMi40IDIuMy0uNiAzLjNjMCAuMy4xLjYuMy44LjIuMi42LjIuOC4xbDMtMS42IDMgMS42Yy4xLjEuMi4xLjQuMWguMWMuNC0uMS43LS41LjYtLjlsLS42LTMuMyAyLjQtMi4zYy4yLS4yLjMtLjUuMi0uOC0uMS0uMy0uMy0uNS0uNi0uNWwtMy4zLS41LTEuNS0zYy0uMS0uMi0uMi0uMy0uMy0uMy0uNC0uMi0uOCAwLTEgLjNsLTEuNSAzLTMuMy41Yy0uMiAwLS4zLjEtLjUuMi0uMy4yLS4zLjcgMCAxem0yMS43IDEwbC01LjktOC40Yy0uMi0uMy0uNS0uNC0uOC0uNGgtMS4xYy0uNSAwLS45LjQtLjkuOC0uMS41LjIgMSAuNyAxLjFoLjhsNS40IDcuN2MtLjEgMS4zLTEuNSAyLjItMi44IDEuNi0uNy0uMy0xLjEtMS4xLTEuMS0xLjggMC0uNS0uNS0xLTEtLjktLjUgMC0uOS41LS45IDEgMCAxLjMtMS4zIDIuNC0yLjcgMS44LS44LS4zLTEuMi0xLTEuMi0xLjkgMC0uNS0uNS0xLTEtMXMtLjkuNS0uOSAxYzAgMS4zLTEuMyAyLjQtMi43IDEuOC0uOC0uMy0xLjItMS0xLjItMS45IDAtLjUtLjUtMS0xLTFzLS45LjUtLjkgMWMwIDEuMy0xLjMgMi40LTIuNyAxLjgtLjgtLjMtMS4yLTEtMS4yLTEuOSAwLS41LS41LTEtMS0xcy0uOS41LTEgMWMwIDEuMS0uOSAyLTIgMi0xIDAtMS44LS43LTItMS43bDUuOC03LjhIMThjLjUgMCAuOS0uNCAxLS45di0uMmMtLjEtLjUtLjUtLjgtMS0uOGgtLjdjLS4zIDAtLjYuMS0uOC40bC02LjMgOC40Yy0uMS4yLS4yLjQtLjIuNiAwIDEuOSAxLjQgMy42IDMuMyAzLjl2MTAuOWMwIDEuNyAxLjQgMy4xIDMuMSAzLjFoMTkuM2MxLjcgMCAzLjEtMS40IDMuMS0zLjF2LTExYzEuNi0uNCAyLjgtMS44IDMtMy40LjEtLjIuMS0uNi0uMS0uOHpNMjMuOSA0MEgyOHYtOC40aC00LjFWNDB6bTEyLjktMTIuMWMtLjgtLjItMS41LS42LTItMS4yLS43LjgtMS44IDEuMy0zIDEuMy0xLjEgMC0yLjItLjUtMy0xLjMtLjguOS0xLjggMS4zLTMgMS4zLTEuMSAwLTIuMi0uNS0zLTEuMy0uNy44LTEuOCAxLjMtMyAxLjMtMS4xIDAtMi4yLS41LTMtMS4zLS41LjUtMSAuOS0xLjcgMS4xdjExLjFjMCAuNi41IDEuMSAxLjEgMS4xaDUuNXYtOS40YzAtLjUuNC0xIDEtMUgyOWMuNSAwIDEgLjQgMSAxVjQwaDUuN2MuNiAwIDEuMS0uNSAxLjEtMS4xdi0xMXoiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: 100%;
}

.payment-modifier-card__header__merchant-logo img {
    border-radius: 50%;
    height: .64rem;
    width: .64rem;
}
img {
    border: 0;
    border-style: none;
}
.payment-modifier-card__header__title {
    color: #727272;
    font-size: .14rem;
    font-weight: 600;
    line-height: .18rem;
    margin: .08rem 0 .04rem;
}
.payment-modifier-card__header .text-wrapper {
    display: inline;
    text-align: center;
}
.payment-modifier-card__header__merchant-name {
    color: #313131;
    font-size: .2rem;
    font-weight: 600;
    line-height: .26rem;
}
.phone-number-label {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    border: .01rem solid #e3e3e3;
    border-radius: .24rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: .08rem auto .14rem;
    max-width: -webkit-max-content;
    max-width: -moz-max-content;
    max-width: max-content;
    gap: .1rem;
    height: .4rem;
    padding: .08rem .12rem .08rem .08rem;
}
.payment-modifier-card__header .phone-number-lbl {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.phone-number-label .avatar img {
    height: .24rem;
    width: .24rem;
}
.phone-number-label .phone-number {
    color: #313131;
    font-weight: 400;
    font-size: .14rem;
    line-height: .18rem;
}
.payment-modifier-card__header .phone-number-container {
    display: none;
}
.payment-modifier-card .wrapper-card-title {
    display: none;
}
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
.new-web-checkout-wrapper {
    margin: .16rem .12rem;
}
.payment-selector, .payment-selector__guide {
    background-color: #fff;
    border-radius: 0 0 .08rem .08rem;
}
.payment-selector__guide {
    position: relative;
}
.payment-selector__guide__wrapper {
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: .18rem .16rem;
}
.payment-selector__guide__toggle-btn, .payment-selector__guide__toggle-btn.f-btn-pills {
    color: #108ee9;
    border-color: #108ee9;
    position: absolute;
    right: .16rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: .32rem;
    width: .68rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
}
.f-btn-pills {
    padding: 0 .08rem;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto, sans-serif;
    color: #313131;
    font-weight: 400;
    font-size: .12rem;
    line-height: 1.34;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: .16rem;
    border: solid .01rem #e3e3e3;
    background-color: #fff;
}
.f-btn-small, .f-btn-smallFixed {
    font-weight: 600;
    font-size: .12rem;
    font-family: OpenSans, sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    padding: 0 .12rem;
    height: .32rem;
}
.new-background__top {
    background-color: #108ee9;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    min-height: 3rem;
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
.payment-selector__guide__wrapper .icon__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.payment-selector__guide__icon {
    height: .24rem !important;
    width: .36rem !important;
}
.payment-selector__guide__selected, .payment-selector__guide__title.selected, .payment-selector__guide__title.selected.closed {
    display: none;
}
.payment-selector__guide__selected, .payment-selector__guide__title {
    color: #313131;
    margin-left: .08rem;
}
.payment-selector__guide__selected__type {
    color: #727272;
    font-size: .12rem;
    line-height: .16rem;
}
.payment-selector__guide__selected__info {
    color: #313131;
    font-size: .16rem;
    line-height: .2rem;
}
article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
}
.payment-amount-wrapper {
    background: #fff;
    border-radius: .08rem;
    -webkit-box-shadow: 0 .02rem .12rem -.02rem rgba(0, 0, 0, .16);
    box-shadow: 0 .02rem .12rem -.02rem rgba(0, 0, 0, .16);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 4.24rem;
    margin: .16rem .12rem;
}
.payment-amount-wrapper .header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: .12rem auto;
}
.payment-modifier-card__header__merchant-logo {
    width: auto;
}
.payment-amount-wrapper .header__dana-logo {
    margin-right: .06rem;
    height: .28rem;
    width: .28rem;
}
.payment-amount-wrapper .header__title {
    color: #108ee9;
    font-size: .28rem;
    font-weight: 700;
}
.payment-amount-wrapper .sub-title {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #108ee9;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#108ee9), to(#09a5f1));
    background-image: linear-gradient(#108ee9, #09a5f1);
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: .16rem;
    height: .42rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: .2rem;
    text-align: center;
}
.payment-amount-wrapper .sub-title p {
    font-weight: 600;
}
.payment-amount-wrapper .mobile-sub-title, .payment-amount-wrapper .payment-detail {
    display: none;
}
.payment-amount-wrapper .content-wrapper {
    margin: .19rem .16rem 0;
}
.payment-amount-wrapper .content-wrapper .order-id, .payment-amount-wrapper .content-wrapper .order-subtotal {
    float: left;
    width: 50%;
}
.payment-amount-wrapper .content-wrapper .order-id .label {
    font-size: .1rem;
    text-transform: uppercase;
}
.payment-amount-wrapper .content-wrapper .order-id .label, .payment-amount-wrapper .content-wrapper .order-subtotal .label {
    color: #727272;
    display: block;
    margin-bottom: .04rem;
}
.payment-amount-wrapper .content-wrapper .order-id .value {
    font-size: .14rem;
    font-weight: 400;
    line-height: .18rem;
    width: 1.87rem;
    word-break: break-all;
}
.payment-amount-wrapper .content-wrapper .order-subtotal {
    text-align: right;
}
.payment-amount-wrapper .content-wrapper .order-subtotal .label {
    font-size: .12rem;
}
.payment-amount-wrapper .content-wrapper .order-id .label, .payment-amount-wrapper .content-wrapper .order-subtotal .label {
    color: #727272;
    display: block;
    margin-bottom: .04rem;
}
.payment-amount-wrapper .content-wrapper .order-subtotal .value {
    font-size: .16rem;
    font-weight: 600;
}
.payment-amount-wrapper .content-wrapper .separator {
    border-bottom: .005rem solid #d1d1d1;
    clear: both;
    padding-bottom: .12rem;
}
.payment-amount-wrapper .content-wrapper .order-amount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: .12rem 0 .2rem;
}
.payment-amount-wrapper .content-wrapper .order-amount .receipt-text {
    font-size: .16rem;
}
.payment-amount-wrapper .content-wrapper .order-amount p {
    font-weight: 700;
}
.payment-amount-wrapper .content-wrapper .order-amount .total-amount {
    color: #fb8b01;
    font-size: .2rem;
}
.payment-amount-wrapper .content-wrapper .order-amount p {
    font-weight: 700;
}
.payment-amount-wrapper .btn-container {
    margin: 0 .16rem .16rem;
}
.btn-container {
    text-align: center;
}
.payment-amount-wrapper .btn-container .btn-pay {
    text-transform: none;
}
.btn-primary:disabled {
    color: #fff;
    background-color: #8e8e93;
}
.payment-amount-wrapper .btn-container {
    margin: 0 .16rem .16rem;
}
.btn-container {
    text-align: center;
}
.payment-amount-wrapper .footer1 {
    height: .32rem;
}
.payment-amount-wrapper .footer1 .dana-protection__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: .16rem;
}
.payment-amount-wrapper .footer1 .dana-protection__text {
    color: #727272;
    font-size: .12rem;
    font-weight: 600;
    line-height: .16rem;
}
.payment-amount-wrapper .footer__dana-protection {
    margin-left: .08rem;
    height: .19rem;
    width: 1.2rem;
}
.payment-amount-wrapper .footer__image {
    bottom: -.05rem;
    position: relative;
    width: -webkit-fill-available;
    width: -moz-available;
    width: stretch;
}
.footer {
    background-color: #108ee9;
    color: #fff;
    min-height: 2.8rem;
    /* padding: .48rem 0 .28rem 1.65rem; */
}
.payment-modifier-card__content__title {
    background-color: #f5f5f5;
    color: #bfbfbf;
    font-size: .12rem;
    font-weight: 400;
    line-height: .16rem;
    text-transform: uppercase;
    padding: .12rem .16rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between; 
  }
  .btn {
    display: block;
    width: 100%;
    height: 46px;
    margin: 0 auto;
    font-size: .15rem;
    line-height: 46px;
    white-space: nowrap;
    text-align: center;
    border: 0;
    border-radius: .05rem;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
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
    height: 3.05rem;
    opacity: .3;
    -webkit-transform: translateX(.5rem) translateY(-.4rem);
    transform: translateX(.5rem) translateY(-.4rem);
    width: 3.05rem;
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
@media (max-width: 890px) {
    .new-web-checkout-wrapper {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}
@media (max-width: 769px) {
    .new-web-checkout-wrapper {
        border-radius: .08rem;
        overflow: visible;
    }
    .new-web-checkout-wrapper {
        margin: 0;
    }
    .new-web-checkout-wrapper {
        margin: 0;
    }
    .new-web-checkout-wrapper {
        margin: 0;
    }
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
    .payment-amount-wrapper {
      margin: 0;
    }
}
@media (max-width: 640px) {
  .ipg-new__wrapper {
        background-image: none;
    }
    .ipg-new__content {
        margin: 0;
    }
    .new-web-checkout-wrapper {
        background-color: transparent;
        width: 100%;
    }
    .new-web-checkout-wrapper {
      margin: 0;
    }
    .payment-modifier-card {
        background-color: #f5f5f5;
        border-radius: 0;
        width: 100%;
        margin: 0;
    }
    .payment-modifier-card__header {
        background: #108ee9;
        padding: .16rem 0 .13rem .16rem;
        border-radius: 0;
    }
    .payment-modifier-card__header .wrapper {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: initial;
        -webkit-box-direction: initial;
        -ms-flex-direction: initial;
        flex-direction: row;
    }
    .payment-modifier-card__header__merchant-logo {
        margin-right: .1rem;
        width: auto;
    }
    .payment-modifier-card__header__merchant-logo img {
        border-radius: 50%;
        height: .64rem;
        width: .64rem;
    }
    .payment-modifier-card__header__title {
        display: none;
    }
    .payment-modifier-card__header .text-wrapper {
        display: inline;
        text-align: initial;
    }
    .payment-modifier-card__header__merchant-name {
        color: #fff;
        font-size: .18rem;
        font-weight: 600;
        line-height: .24rem;
    }
    .payment-modifier-card__header .phone-number {
        display: block;
    }
    .payment-modifier-card__header .phone-number-lbl {
        display: none !important;
    }
    .payment-modifier-card__header .text-wrapper .phone-number-container {
        color: #fff;
        display: block;
        font-size: .18rem;
        font-weight: 600;
        line-height: .24rem;
    }
    .payment-modifier-card .wrapper-card-title {
        display: inherit;
        background-color: #108ee9;
    }
    .payment-modifier-card .card-title {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #fff;
        border-radius: .12rem .12rem 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: .44rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .12rem .11rem;
    }
    .payment-modifier-card .card-title__dana-protection {
        display: initial;
        height: .2rem;
        width: .94rem;
    }
    .payment-modifier-card .card-title>* {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .payment-modifier-card .card-title__title-wrapper {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .payment-modifier-card .card-title__dana-logo {
        margin-right: .02rem;
        height: .18rem;
        width: .18rem;
    }
    .payment-modifier-card .card-title__text {
        color: #108ee9;
        font-size: .16rem;
        font-weight: 700;
    }
    .payment-modifier-card .card-title:after {
        content: "";
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
  
    .payment-modifier-card .card-sub-title, .payment-modifier-card .card-title__title-wrapper {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .payment-modifier-card .card-sub-title {
        background-color: #108ee9;
        color: #fff;
        font-size: .14rem;
        height: .42rem;
        line-height: .18rem;
        text-align: center;
    }
    .payment-modifier-card .card-sub-title p {
        font-weight: 600;
    }
    .payment-modifier-card__content {
        background-color: #fff;
        margin-bottom: .04rem;
    }
    .payment-modifier-card__content__title {
        background-color: #fff;
        color: #727272;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: .06rem .16rem;
        text-transform: capitalize;
    }
    .payment-modifier-card__content__title {
        color: #727272;
        font-size: .12rem;
        font-weight: 700;
        line-height: .16rem;
        padding: .06rem .16rem;
    }

    .payment-modifier-card__content__title.payment-method {
        padding: .18rem .16rem .08rem;
    }
  .payment-selector__guide__wrapper {
      padding: .08rem .16rem;
  }
  .payment-amount-wrapper {
      border-radius: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
      width: 100%;
      margin-bottom: 1.2rem;
  }
  .new-web-checkout-wrapper> {
      margin: 0;
  }
  .payment-amount-wrapper {
      margin: 0;
    }
  .payment-amount-wrapper .footer, .payment-amount-wrapper .header, .payment-amount-wrapper .sub-title {
      display: none;
  }
  .payment-amount-wrapper .footer, .payment-amount-wrapper .header, .payment-amount-wrapper .sub-title {
        display: none;
    }
  .payment-amount-wrapper .mobile-sub-title {
      display: block;
      padding: .06rem .16rem;
  }
  .payment-amount-wrapper .mobile-sub-title p {
        color: #727272;
        font-size: .12rem;
        font-weight: 700;
        line-height: .16rem;
    }
    .payment-amount-wrapper .payment-detail {
        display: block;
        padding: .12rem .16rem;
        position: relative;
    }
    .payment-amount-wrapper .payment-detail__title {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-right: .24rem;
    }
    .payment-amount-wrapper .payment-detail__label {
        color: #313131;
        font-size: .16rem;
        line-height: .2rem;
    }
    .payment-amount-wrapper .payment-detail__amount {
        color: #fb8b01;
        font-size: .2rem;
        font-weight: 600;
        line-height: .26rem;
    }
    .content-wrapper--closed {
        display: none;
    }
    .content-wrapper {
        margin: 0 !important;
    }
    .content-wrapper .order-id, .content-wrapper .promo-amount {
        border-bottom: none !important;
        display: -webkit-box !important;
        display: -ms-flexbox!important;
        display: flex !important;
        float: unset !important;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-top: 0 !important;
        padding: 0 .16rem .12rem;
        width: 100% !important;
    }
    .content-wrapper .order-id .label, .content-wrapper .promo-amount .label {
        color: #727272;
        font-size: .12rem !important;
        line-height: .16rem !important;
        margin-bottom: 0 !important;
        text-transform: none !important;
    }
    .payment-amount-wrapper .btn-container {
        background-color: #fff;
        bottom: 0;
        -webkit-box-shadow: 0 -.02rem .12rem .02rem rgba(0, 0, 0, .16);
        box-shadow: 0 -.02rem .12rem .02rem rgba(0, 0, 0, .16);
        margin: 0;
        padding: .09rem .16rem .5rem;
        position: fixed;
        width: 100%;
    }
    .payment-amount-wrapper .footer, .payment-amount-wrapper .header, .payment-amount-wrapper .sub-title {
        display: none;
    }
    .footer {
        display: none;
    }
    .new-background{
        display: none;
    }
    .ipg-new__content {
      margin: 0 auto 0;
    }
} 
</style>