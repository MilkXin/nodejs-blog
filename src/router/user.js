const { login} = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

//获取 cookie的过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    return d.toGMTString()
}
const handleUserRouter = (req, res) => {
    const method = req.method // GET POST

    //登录
    if (method === 'POST' && res.path === '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                //操作 cookie
                // res.setHeader('Set-Cookie', `username=${username}; path=/; httpOnly; expires=${getCookieExpires()}`)

                //设置 session
                req.session.username = data.username
                req.session.realname = data.realname
                return new SuccessModel()
            }

            return new ErrorModel('登录失败')
        })
    }
}

module.exports = handleUserRouter