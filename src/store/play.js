// import { config } from "vue/types/umd";

// import { config } from "vue/types/umd";

export default {
    state: {
        playUrl: "http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400001z4tFZ2VvIoX.m4a?guid=4112508990&vkey=D64634620FEC2054E190A85DD47D6C9D34ED9CBD08938EB40CEED3E21A2688B87758D23423D30A9BDA79C633918B05E56769B5B9CE79700A&uin=0&fromtag=38",
        song: {},
        playing: false,
        playList: [],
        searchList: []
    },
    mutations: {
        setSearchList(state,list){
            state.searchList = list;
        },
        setUrl(state,url){
            state.playUrl = url;
        },
        setSong(state,song){
            state.song = song;
        },
        setPlaying(state,status){
            state.playing = status;
        }
    },
    actions: {
        setSearchList(context,step){
            context.commit('setSearchList',step);
        },
        aSetUrl(context,step){
            context.commit('setUrl',step);
        },
        aSetSong(context,step){
            context.commit('setSong',step)
        }
    }
}
