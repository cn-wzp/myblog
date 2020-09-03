<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
        <el-row  :gutter="30" style="margin-left: -15px; margin-right: -15px;">
            <el-col :sm="24" :md="16" style="padding-left: 15px;padding-right: 15px;transition: all 0.5s ease-out 0s;margin-bottom: 30px;">
                <wbc-sharelist></wbc-sharelist>
                <!-- <wbc-artclelist></wbc-artclelist> --> 
            </el-col>
            <el-col :sm="24" :md="8">
                <wbc-rightlist></wbc-rightlist>
            </el-col>
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>
<script>
import header from '../components/header.vue'
import temRightlist from '../components/temRightlist.vue'
import footer from '../components/footer.vue'
// import ArticleList from "../components/ArticleList.vue"
import sharelist from '../components/temSharelist.vue'
export default {
        name:'Home',
        data() { //选项 / 数据
            return {
                
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-rightlist':temRightlist,
            'wbc-footer': footer,
            'wbc-sharelist': sharelist
        },
        created(){
        }
}
</script>