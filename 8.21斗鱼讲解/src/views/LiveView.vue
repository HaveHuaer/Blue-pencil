<template>
    <div class="live" 
        infinite-scroll-immediate="false" 
        v-infinite-scroll="load" 
        infinite-scroll-distance="300"
        :infinite-scroll-disabled="isLoding">
        <el-row :gutte="10">
            <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4" v-for="(item, index) in live" :key="index">
                <el-card :body-style="{ padding: 0 }">
                    <a :href="item.url">
                        <el-image lazy :src="item.room_src">
                            <template #placeholder>
                                <div>
                                    <img src="../assets/all_cate_default@2x_fc75dd6.png" alt="">
                                </div>
                            </template>
                        </el-image>
                        <div class="game_info">
                            <p class="room_name ellipsis">{{ item.room_name}}</p>
                            <p class="game_name ellipsis">{{$route.query.name }}</p>
                        </div>
                        <div class="user_info">
                            <!-- 左边 -->
                            <div class="left">
                                <!-- 用户头像 -->
                                <p>
                                     <span class="user">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path class="st0" d="M12 13H2c-.6 0-1-.4-1-1v-1c0-1.6 1.2-2.8 2.7-3 1 .6 2.1 1 3.3 1 1.2 0 2.3-.4 3.3-1 1.5.1 2.7 1.4 2.7 3v1c0 .6-.4 1-1 1zM7 7C5.3 7 4 5.7 4 4s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path>
                                    </svg>
                                    </span>
                                </p>  
                                <!-- 昵称 + 在线人数(隐藏) -->
                                <div>
                                    <p class="nickname ellipsis"><span >{{ item.nickname}}</span></p> 
                                    <div class="hn">
                                        <span class="hot">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path class="st0" d="M5.4 1s.3 3.1-2.6 4.6 C-.1 7 .4 12 4.7 13c-1.4-2.1-.9-3.8 1.5-5.1.3 1.2 1 1.8 2 1.8 1.6 0 .6 3.2-.3 3.2s6.4 0 4.8-6.1c-.4-1-1.4-1.7-3.1-2.1 C8.9 2.9 7.5 1.6 5.4 1z"></path> </svg>
                                        </span>
                                        <span>{{wan(item.hn)}}</span>
                                    </div>
                                </div>    
                            </div>
                             <!-- 右边:在线人数(显示) -->
                            <div class="hn">
                                <span class="hot">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                        <path class="st0" d="M5.4 1s.3 3.1-2.6 4.6 C-.1 7 .4 12 4.7 13c-1.4-2.1-.9-3.8 1.5-5.1.3 1.2 1 1.8 2 1.8 1.6 0 .6 3.2-.3 3.2s6.4 0 4.8-6.1c-.4-1-1.4-1.7-3.1-2.1 C8.9 2.9 7.5 1.6 5.4 1z"></path>
                                    </svg>
                                </span>
                                <span>{{ wan(item.hn) }}</span>
                            </div>
                            <!-- 关注 -->
                            <div class="follow">
                                关注
                            </div>
                        </div>
                    </a>
                </el-card>
            </el-col>
        </el-row>
        <p>正在拼命加载中.....</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            live: [],
            limit: 50,
            offset: 0,
            // 是否正在发送网络请求
            isLoding:false
        }
    },
    methods: {
        ...mapActions(["requestLive"]),
        // 处理在线人数 转为万
        wan(num){
            return (num / 10000).toFixed(1) + "万"
        },
        load(){
            console.log("到底了");
            this.isLoding = true
            this.offset += this.limit
            this.requestLive({
                id: this.$route.query.id,
                limit: this.limit,
                offset: this.offset
            }).then(res => {
                this.live = this.live.concat(res.data)
                this.isLoding = false
            });
        }
    },
    mounted() {
        this.requestLive({
            id: this.$route.query.id,
            limit: this.limit,
            offset: this.offset
        }).then(res => {
            this.live = res.data
        });
    },
}
</script>

<style scoped>
    .live{
        width: 100%;
        height: calc(100vh - 50px);
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .el-card {
        margin: 10px;
        border-radius: 8px;
        height: 210px;
        overflow: hidden;
    }
    .el-card:hover{
        transform: scale(1.1);
        z-index: 100px;
        position: relative;
    }
    .game_info{
        display: flex;
        padding: 5px 10px;
    }
    .game_info .room_name{
        width: 70%;
        text-align: left;
        font-size: 15px;
        line-height: 24px;
        color:#333;
        font-weight: 500;
    }
    .game_info .game_name{
        width: 30%;
        text-align: right;
        color:#888;
        font-size: 12px;
        line-height: 24px;
    }
    .user_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
    }
    .user_info .left{
        display:flex;
        align-items: center;
        width: 60%;
    }
    .user_info .left .hn{
        display:none;
    }
    .user_info svg{
        width: 12px;
        height: 12px;
        stroke:#888;
        fill:#888;
        margin-right: 10px;
    }
    .el-card:hover .user_info span.user svg{
        width:35px;
        height:35px;
    }
    .user_info .left .nickname{
        line-height: 24px;
        font-size: 12px;
        color:#888;
    }
    .user_info .hn{
        line-height: 24px;
        font-size: 12px;
        color:#888;
    }
     .el-card:hover .user_info .hn{
        display:none;
     }
     
    .user_info .follow{
        display: none;
        width: 60px;
        line-height: 32px;
        font-size: 14px;
        color: white;
        border-radius: 16px;
        background: linear-gradient(0deg,#ff7d23,#ff5d23);
    }
   .el-card:hover .user_info .follow{
        display:block;
     }
</style> 