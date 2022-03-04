const { VueLoaderPlugin } = require('vue-loader');
const path = require('path'); //nodejs自带
const glob = require('glob');  //nodejs自带
const list = {};
/***** list数据格式
{
    card:"./components/lib/card/index.js",
    demo:"./components/lib/demo/index.js"
} 
******/

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files', files);//files [ 'components/lib/card/index.js', 'components/lib/demo/index.js' ]
    files.forEach((item) => {
        const component = item.split(/[/.]/)[2];
        console.log('component', component);//component card  component demo

        list[component] = `./${item}`;
    });
}

makeList('components/lib', list);

module.exports = {
    entry: list,//入口文件
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),//使用绝对路径
        library: "mui",
        libraryTarget: "umd",
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,//vue文件使用什么样得loader
                use: [{
                    loader: 'vue-loader'
                }]
            }
        ]
    }
}