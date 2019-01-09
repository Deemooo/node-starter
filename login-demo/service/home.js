module.exports = {
    register: async (name, pwd) => {
        let data;
        if (name === 'ikamp' && pwd === '123456') {
            data = `Hello, ${name}`;
        } else {
            data = 'password error!';
        }
        return data;
    }
};