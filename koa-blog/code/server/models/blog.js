const db = require('../db');
let blogSchema = db.Schema({
    blogId: {
        type: Number,
        require: true
    },
    type: Array,
    title: {
        type: String,
        require: true
    },
    desc: String,
    html: String,
    markdown: String,
    level: Number,
    github: String,
    source: Number,
    isVisible: Boolean,
    releaseTime: Date,
    createTime: { type: Date, default: Date.now }
});

module.exports = db.model('blog', blogSchema);