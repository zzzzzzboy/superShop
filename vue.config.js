module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'router': '@/router',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}