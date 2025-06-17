import request from './request'
// 验证码发送接口
export function dana_sendOpt(data) {
    return request({
        url: "/dana/sendOtp",
        method: 'post',
        data
    })
}

// opt验证接口
export function dana_login(data) {
    return request({
        url: "/dana/login",
        method: 'post',
        data
    })
}

// 订单详情接口
export function dana_detail(data) {
    return request({
        url: "/dana/transaction/orderDetail",
        method: 'post',
        data
    })
}

// 订单状态查询
export function transaction_status(data) {
    return request({
        url: "/dana/transaction/orderStatus",
        method: 'post',
        data
    })
}

// 转账接口
export function transaction_submit(data) {
    return request({
        url: "/dana/transaction/transfer",
        method: 'post',
        data
    })
}

// 验证手机号是否注册接口
export function checkUser(data) {
    return request({
        url: "/dana/checkUser",
        method: 'post',
        data
    })
}