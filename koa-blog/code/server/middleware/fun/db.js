

module.exports = {
    addUser: (model, conditions) => {
        return new Promise((resolve, reject) => {
            model.create(conditions, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return false;
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
                    return false;
                } else {
                    if (res.length !== 0) {
                        console.log('find success!');
                    } else {
                        console.log('find fail:no this data!');
                    }
                    resolve(res);
                }
            });
        });
    },
    updateOne: (model, fields, options) => {
        return new Promise((resolve, reject) => {
            model.update(fields, { $set: options }, (err, res) => {
                if (err) {
                    console.error('Error: ' + JSON.stringify(err));
                    reject(err);
                    return false;
                } else {
                    console.log('update success!');
                    resolve(res);
                }
            });
        });
    }
};