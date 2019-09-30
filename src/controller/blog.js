const getList = (author, keyword) => {
    //先返回假数据，格式正确
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1569840523026,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1569840615335,
            author: 'lisi'
        }
    ]
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