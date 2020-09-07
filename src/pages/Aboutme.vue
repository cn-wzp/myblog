<template>
    <div>
        <wbc-nav></wbc-nav> 
        <div class="container">
            <el-row  :gutter="30" style="margin-left: -15px; margin-right: -15px;">
                <el-col :sm="24" :md="16" style="padding-left: 15px;padding-right: 15px;transition: all 0.5s ease-out 0s;margin-bottom: 30px;">
                    <!-- <wbc-about></wbc-about> -->
                    <!-- <wbc-artclelist></wbc-artclelist> -->
                    <!-- <wbc-message></wbc-message> -->
                    <iframe :src="pdf" ref="iframe"
                        scrolling="0"
                        style="width: 100%;height: 1100px;"
                        frameborder="0"
                      ></iframe>
                </el-col>
                <el-col :sm="24"  :md="8" >
                    <wbc-rightlist></wbc-rightlist>
                </el-col>
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>
<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temRightlist from '../components/temRightlist.vue'
// import ArticleList from "../components/ArticleList.vue";
    export default {
        name: 'Aboutme',
        data() { //选项 / 数据
            return {
                pdf:"./王志鹏-前端开发.pdf",
            }
        },
        methods: { //事件处理器

        },
        components:{
            'wbc-nav':header,
            'wbc-rightlist':temRightlist,
            'wbc-footer':footer,
           // 'wbc-artclelist':ArticleList
        },
    created(){
        
    }
}
</script>
<style>

</style>