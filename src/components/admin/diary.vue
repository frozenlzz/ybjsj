<template>
  <div id="diary">
	  <div class="box-content">
			<div class="card card-info collapsed-card card-outline">
				<div class="card-header">
					<h3 class="card-title" style="font-size:24px;">操作日记</h3>
				</div>
				<!-- /.card-header -->
				<div class="card-body" style="display: block;">
					<table id="example1" class="table table-bordered table-striped">
						<thead>
						<tr>
							<th>人员</th>
							<th>操作内容</th>
							<th>操作模块</th>
							<th>时间</th>
						</tr>
						</thead>
						<tbody>
						<tr :key="index" v-for="(item,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]">
							<td>老王</td>
							<td>新增方案A</td>
							<td>方案管理</td>
							<td>2018-7-7</td>
						</tr>
						</tbody>
						<tfoot>
              <tr>
                <th>All personnel</th>
                <th>Operation content</th>
                <th>Operation module</th>
                <th>Time</th>
              </tr>
            </tfoot>
					</table>
				</div>
				<!-- /.card-body -->
				<div style="display:inline-block;margin:20px auto;">
					<el-pagination
						@current-change="handleCurrentChange"
						:current-page.sync="currentPage3"
						:page-size="number"
						layout="prev, pager, next, jumper"
						:total="total">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bus from '../../router/bus.js'
export default {
	data () {
		return {
			msg1: 'Welcome to diary',
			// 向父组件发送的数据
			elementValue: [0,0,0,0,1,0,0,0,0,0],
			// 当前页
			currentPage3: 1,
			// 每页条数
			number: 10,
			// 总条数
			total: 100
		}
	},
	mounted () {
		$("#example1").DataTable()
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
		// 禁用默认的分页样式
		$('#example1_wrapper .row').eq(2).css('display','none')
		// 一次显示的条数
		$('#example1_length .form-control').change(() => {
			// 修改每页显示的条数
			this.number = parseInt($('#example1_length .form-control').val())
			// 点击修改每页显示的条数时，初始化为第一页开始
			this.currentPage3 = 1
			console.log('每页'+this.number +'条')
			console.log('当前页:'+this.currentPage3)
		})
	},
	methods: {
		handleCurrentChange(val) {
			console.log('每页'+ this.number +'条')
			console.log(`当前页: ${val}`);
		}
	}
}
</script>
<style scoped lang="stylus">
#diary
	color #000
	.box-content
		width 90%
		margin auto
		padding-top 30px
</style>

