<template>
  <div id="rolePermission">
		<div class="RP_body card card-primary card-outline">
			<div class="RP_head">角色管理</div>
			<div style="margin:20px 0;">
				<!-- <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button> -->
				<el-button type="primary" style="float:right;margin-right:10px;">新增角色</el-button>
				<el-button @click="toggleSelection()">取消选择</el-button>
				<el-button>删除</el-button>
			</div>
			<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange" stripe>
				<el-table-column
					type="selection"
					width="55">
				</el-table-column>
				<el-table-column
					label="编号"
					width="120">
					<template slot-scope="scope">{{ scope.row.number }}</template>
				</el-table-column>
				<el-table-column
					prop="name"
					label="角色名称"
					width="120">
				</el-table-column>
				<el-table-column
					prop="roleDescription"
					label="角色描述"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					label="操作"
					width="260">
					<template slot-scope="scope"><a href="javascript:;">权限设置</a>  | <a href="javascript:;">使用者名单</a> | <a href="javascript:;">编辑</a> | <a href="javascript:;">删除</a></template>
				</el-table-column>
			</el-table>
			<button type="button" class="btn btn-block btn-outline-primary btn-sm" style="margin:20px auto 20px;width:50%;">点击查看更多</button>
		</div>
	</div>
</template>
<script>
import Bus from '../../router/bus.js'
export default {
	data () {
		return {
			msg1: 'Welcome to rolePermission',
			// 向父组件发送的数据
			elementValue: [0,0,0,1,0,0,0,0,0,0],
			tableData3: [{
          number: '12342352',
          name: '赵四',
          roleDescription: '上海市普陀区金沙江路 1518 弄'
				},
				{
          number: '12342352',
          name: '赵四',
          roleDescription: '上海市普陀区金沙江路 1518 弄'
				},
				{
          number: '12342352',
          name: '赵四',
          roleDescription: '上海市普陀区金沙江路 1518 弄'
				},
				{
          number: '12342352',
          name: '赵四',
          roleDescription: '上海市普陀区金沙江路 1518 弄'
				},
				{
          number: '12342352',
          name: '赵四',
          roleDescription: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
		}
	},
	methods: {
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	},
	mounted() {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
	},
}
</script>
<style scoped lang="stylus">
#rolePermission
	color #000
	.RP_head
		font-size 24px
	.RP_body
		width 95%
		margin auto
		margin-top 20px
		padding 20px 20px 0px
</style>
