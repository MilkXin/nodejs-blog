const loginCheck = (userName, passWord) => {
    if (userName === 'zhangsan' && passWord === '123456') {
        return true
    }

    return false
}

module.exports = {
    loginCheck
}