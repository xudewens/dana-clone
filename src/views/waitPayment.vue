<template>
  <div>
    <div class="loading-container">
      <img src="../assets/loading-dana.png" alt="" style="width: 1rem;">
      <p class="loading-text">{{ text }}</p>
      
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import { transaction_status } from '@/api/index'
export default {
  name: 'waitPayment',
  data() {
    return {
      referenceNo: '',
      text: 'loading...'
    }
  },
  created() {
    this.referenceNo = this.$route.query.referenceNo || ''
  },
  mounted() {
    this.getOrderStatus()
  },
  methods: {
    getOrderStatus() {
      transaction_status({
          referenceNo: this.referenceNo
      }).then((res)=> {
        // res.data.transactionStatus = 'SUCCESS' 
        if(res.data.transactionStatus === 'SUCCESS' || res.data.transactionStatus === 'FAILED') {
            this.$router.push({
              path: '/orderStatus',
              query: { 
                referenceNo: this.referenceNo
              }
            })
        } else {
          this.$router.push({
            path: '/login',
            query: { 
              referenceNo: this.referenceNo,
              amount: res.data.amount
            }
          })
        }
      }).finally(() => {
        
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 350px);
}

.loading-text {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 定义旋转动画 */
@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
