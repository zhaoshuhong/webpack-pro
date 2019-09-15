/**
 * Created by 24596 on 2019/9/7.
 */
let path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist')
    }
}