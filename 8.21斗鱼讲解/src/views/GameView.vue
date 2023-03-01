<template>
    <div>
        <el-row :gutte="5">
            <el-col 
                :xs="12" 
                :sm="8" 
                :md="8" 
                :lg="4" 
                :xl="4"
                v-for="(item,index) in game" :key="index">
                    <el-card>
                        <router-link :to="'/live?id='+item.cate_id+'&name='+item.game_name">
                            <el-image lazy :src="item.game_icon">
                                <template #placeholder>
                                    <div>
                                        <img src="../assets/all_cate_default@2x_fc75dd6.png" alt="">
                                    </div>
                                </template>
                            </el-image>
                            <p class="game_name ellipsis">{{item.game_name}}</p>
                            <p class="game_hot">
                                <span class="hot"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"> <path class="st0" d="M5.4 1s.3 3.1-2.6 4.6C-.1 7 .4 12 4.7 13c-1.4-2.1-.9-3.8 1.5-5.1.3 1.2 1 1.8 2 1.8 1.6 0 .6 3.2-.3 3.2s6.4 0 4.8-6.1c-.4-1-1.4-1.7-3.1-2.1C8.9 2.9 7.5 1.6 5.4 1z"></path></svg></span>
                                <span class="id">{{item.cate_id}}</span>
                            </p>
                        </router-link> 
                    </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import { mapActions } from "vuex"
export default {
    data() {
        return {
            game: []
        }
    },
    methods: {
        ...mapActions(["requestGame"])
    },
    mounted() {
        this.requestGame().then(data => {
            this.game = data;
        });
    },
}
</script>

    <style scoped>
    .el-card{
        margin: 15px;
        border-radius:8px ;
    }
    .el-card:hover{
        transform: scale(1.1);
    }
    .el-card:hover .game_name{
        color: orangered;
    }
    
    .game_name{
        font-size: 20px;
        color: #666;
        line-height: 20px;
    }
    .game_hot{
        margin-top: 15px;
    }
    .game_hot .hot svg{
        width: 14px;
        height: 14px;
        stroke:black;
        fill:#666;
        margin-right: 10px;
    }
    
    .el-card:hover .game_hot .hot svg{
        fill: orangered;
    }
    .game_hot .id{
        color: #666;
     }
     .el-card:hover .game_hot .id{
        color: orangered;
    }
</style>