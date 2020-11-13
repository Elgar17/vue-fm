module.exports = {
    // 生成的静态文件可以访问
    lintOnSave: true,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',

    devServer: {
        proxy: {
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'https://autumnfish.cn/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            // 'music': 'QMplayer' // 配置使用CDN
        }
    }
}
