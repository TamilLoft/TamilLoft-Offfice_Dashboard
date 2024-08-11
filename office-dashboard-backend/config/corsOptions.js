const WhiteList = ['https://www.google.com', 'http://localhost:5500/']
const Acces = {
    origin: (origin, callback) => {
        if (WhiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('not allowed in this web site'));
        }
    },
    optionSuccessStatus: 200
}

export default Acces;