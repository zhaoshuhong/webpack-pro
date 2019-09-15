/**
 * Created by 24596 on 2019/9/7.
 */
let path = require('path');
class p{
    apply(compiler){
        console.log('compiler');
        compiler.hooks.emit.tap('emit',function(){
            console.log('emit')
        })
    }
}
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    path.resolve(__dirname,'loader','style-loader'),
                    path.resolve(__dirname,'loader','less-loader')
                ]
            }
        ]
    },
    plugins: [
        new p()
    ]
}