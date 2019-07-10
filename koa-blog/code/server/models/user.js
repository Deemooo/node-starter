const db = require('../db');
let userSchema = db.Schema({
    userId: Number,
    userName: String,
    pwd: String,
    name: String,
    avatar: String,
    roles: Array,
    createTime: {
        type: Date,
        default: Date.now
    },
    loginTime: Date
});

module.exports = db.model('user', userSchema);