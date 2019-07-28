

module.exports = {
    add: (model, conditions) => {
        return new Promise((resolve, reject) => {
            model.create(conditions, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return;
                }
                console.log('Add success!');
                resolve(res);
            });
        });
    },
    findOne: (model, conditions, fields, options = {}) => {
        return new Promise((resolve, reject) => {
            model.find(conditions, fields, options, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return;
                }
                if (res.length !== 0) {
                    console.log('find success!');
                } else {
                    console.log('find fail:no this data!');
                }
                resolve(res);
            });
        });
    },
    updateOne: (model, fields, options) => {
        return new Promise((resolve, reject) => {
            model.update(fields, { $set: options }, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return;
                }
                console.log('update success!');
                resolve(res);
            });
        });
    },
    deleteOne: (model, fields, options) => {
        return new Promise((resolve, reject) => {
            model.remove(fields, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return;
                }
                console.log('delete success!');
                resolve(res);
            });
        });
    },
    findPage: async (model, conditions, fields, options = {}) => {
        options.sort = options.sort || { _id: -1 };
        const count = await new Promise((resolve, reject) => {
            model.find(conditions, fields).count({}, (err, res) => {
                if (err) {
                    console.log('查询长度错误!');
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
        return new Promise((resolve, reject) => {
            model.find(conditions, fields, options, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return;
                }
                if (res && res.length !== 0) {
                    console.log('find success!');
                    resolve({
                        list: res,
                        total: count
                    });
                } else {
                    console.log('find fail:no this data!');
                    resolve({
                        list: [],
                        total: 0
                    });
                }
            });
        });
    }
};