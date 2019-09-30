const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method // GET POST

    //登录
    if (method === 'POST' && res.path === '/api/user/login') {
        const { userName, passWord } = req.body
        const result = loginCheck(userName, passWord)
        if (result) {
            return new SuccessModel()
        }

        return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter