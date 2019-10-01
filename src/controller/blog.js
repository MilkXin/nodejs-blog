const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `

    if (author) {
        sql += `and author='${author}' `
    }

    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }

    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

const getDetail = (author, keyword) => {
    //先返回假数据，格式正确
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1569840523026,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    //blogData是一个博客对象，包含 title content 属性

    return {
        id: 3 //表示新建博客，插入到数据表里的id
    }
}

const updateBlogData = (id, blogData = {}) => {
    //id 要更新博客的id
    //blogData是一个博客对象，包含 title content 属性

    return true
}

const delBlog = (id) => {
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlogData,
    delBlog
}