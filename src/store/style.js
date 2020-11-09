// 有关样式的数据
export default {
    state: {
        // 控制 play-bar 与 play 组件的切换显示
        playPageShow: false,
        // 控制跳转搜索页面是隐藏 tab
        hiddenTab: true,
        // 控制 songlist 页面展示时隐藏头部
        showSonglist: true,
    },
    mutations: {
        // 控制切换播放页面与地下的 play-bar的状态
        changePlayBar(state){
            state.playPageShow = !state.playPageShow;
        },
        hiddenTab(state){
            state.hiddenTab = !state.hiddenTab;
        },
        reshowSonglist(state){
            state.showSonglist = !state.showSonglist;
        }
    },
    actions: {
    }
}