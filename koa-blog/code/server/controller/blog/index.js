const blogModel = require('../../models/blog');
const marked = require('marked');
module.exports = {
    getArticleList: async (ctx, next) => {
        try {
            let { keyWord, pageIndex = 1, pageSize = 10 } = ctx.request.query;
            let reg = new RegExp(keyWord, 'i');
            let data = await ctx.findPage(blogModel, {
                $or: [
                    { type: { $regex: reg} },
                    { title: { $regex: reg} }
                ]
            }, { createTime: 0, html: 0}, { limit: pageSize * 1, skip: (pageIndex - 1) * pageSize });
            ctx.send(data);
        } catch (error) {
            ctx.sendError(error);
        }
    },
    getArticle: async (ctx, next) => {
        try {
            let { blogId } = ctx.request.query;
            let data = await ctx.findOne(blogModel, { blogId });
            ctx.send(data);
        } catch (error) {
            ctx.sendError(error);
        }
    },
    addArticle: async (ctx, next) => {
        try {
            let paramsData = ctx.request.body;
            paramsData.html = marked(paramsData.html);
            let data = await ctx.add(blogModel, paramsData);
            ctx.send(data, '文章添加成功!');
        } catch (error) {
            ctx.sendError(error);
        }
    },
    updateArticle: async (ctx, next) => {
        try {
            let paramsData = ctx.request.body;
            let { blogId, html } = paramsData.blogId;
            paramsData.html = marked(paramsData);
            let data = await ctx.updateOne(blogModel, { blogId }, { paramsData });
            ctx.send(data, '文章更新成功!');
        } catch (error) {
            ctx.sendError(error);
        }
    },
    deleteArticle: async (ctx, next) => {
        try {
            let blogId = ctx.request.body.blogId;
            let data = await ctx.deleteOne(blogModel, { blogId });
            ctx.send(data, '文章删除成功!');            
        } catch (error) {
            ctx.sendError(error);
        }
    }
};