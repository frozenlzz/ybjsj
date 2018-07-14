<template>
  <!-- 分类管理页面的按钮组件 -->
  <span class="tree-expand">
    <span class="tree-label">
      <span>{{DATA.label}}</span>
      <span class="tree-date">{{DATA.date}}</span>
    </span>
    <span class="tree-btn">
      <i class="el-icon-edit" @click.stop="nodeEdit(STORE,DATA,NODE)"></i>
      <i class="el-icon-delete" @click.stop="nodeDel(STORE,DATA,NODE)"></i>
    </span>
  </span>
</template>
<script>
export default{
  props: ['NODE', 'DATA', 'STORE'],
  methods: {
   nodeEdit(s,d,n){//编辑
    this.$emit('nodeEdit',s,d,n)
   },
   nodeDel(s,d,n){//删除
    this.$emit('nodeDel',s,d,n)
   }
  }
}
</script>
<style scoped lang="stylus">
  .tree-date
    position absolute
    top 0
    right 200px
  .tree-btn
    position absolute
    top 0
    right 20px
    .el-icon-edit
      margin-right 10px
</style>
