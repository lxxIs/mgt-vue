<template>
    <Card id="userManage">
        <Row style="border-bottom:1px solid #dee5f1; padding-bottom:10px;">
            <Col span="5">
                <Button @click="addUser" type="primary" icon="md-add">新增审核员</Button>         
            </Col>
        </Row>
        <el-table
            :data="newsListShow"  stripe
            style="width: 100%">
            <el-table-column
              type="index" align="center"
              width="70" header-align="center"
            label="序号">
            </el-table-column>
            <el-table-column
              property="title"
              width="170" header-align="center"
              label="审核员名"  prop="title" align="center">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="真实姓名"  property ="realName" align="center">
            </el-table-column>

            <el-table-column label="操作" header-align="center" width="200px" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="editUser(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)" @click.native.prevent="handleDelete(scope.$index, tableData4)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <pageNation  ref="myChid" :resourceUrl="resourceUrl" :searchData="searchData" @askData="listData"></pageNation>
          <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
          </el-dialog>
    </Card>
</template>

<script>
  import pageNation from '@/components/pageNation'   // 分页组件
export default {
  data(){
    return{
      newsListShow:[],
      searchData:{searchName:''},
      resourceUrl:{url:"/userList"},
      delVisible:false
    }
  },
  components:{
    pageNation
  },
  mounted(){
  },
  methods:{
    listData(data){
        this.newsListShow = data;
    },
    selectList(){
      this.$refs.myChid.setNewsApi();
    },
    editUser(index,row){
      this.$router.push({name:'addUser',params:{id:index}});
    },
    addUser(){
      this.$router.push("/addUser");
    },
    handleDelete(index, row) {
      this.idx = index;
      this.delVisible = true;
    },
    deleteRow(){
      this.newsListShow.splice(this.idx, 1);
      this.$message.success('删除成功');
      this.delVisible = false;
    }
  }
}
</script>

<style lang="less">
#userManage{
  .mgt-content-box .ibox .detail th.is-leaf {
    background: #409EFF !important;
    color: #ffffff;
  }
}

</style>
