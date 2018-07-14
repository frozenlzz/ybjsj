<template>
  <div id="subaccount">
    <div class="card-left">
      <div class="cl_top">
        <div class="small-box bg-info">
          <div class="inner">
            <h3>{{ total }}/1000</h3>
            <p>账号数</p>
          </div>
          <div class="icon">
            <i class="fa fa-user"></i>
          </div>
          <a href="#" class="small-box-footer">新建子账号 <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
      <div class="cl_body">
        <div class="card card-info collapsed-card card-outline">
          <div class="card-header">
            <h3 class="card-title"><i class="fa fa-user"></i> &nbsp;&nbsp;全部账号</h3>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="card-body p-0" style="display: block;">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item active" :key="index" v-for="(item,index) in tableData3">
                <a href="#" class="nav-link">
                  <i class="fa fa-user"></i> &nbsp;&nbsp;{{ item.name }}
                </a>
              </li>
            </ul>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
    <div class="card-right">
      <div class="card card-info collapsed-card card-outline">
        <div class="card-header">
          <h3 class="card-title">子账号管理</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body" style="display: block;">
          <table id="example1" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>全部账号</th>
                <th>手机</th>
                <th>开通日期</th>
                <th>全部小组</th>
                <th>酷币</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="index" v-for="(item,index) in tableData3">
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.group }}</td>
                <td>{{ item.currency }}</td>
                <td style="min-width:124px;"><a href="javascript:;">查看</a>  | <a href="javascript:;">编辑</a> | <a href="javascript:;">删除</a></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>All accounts</th>
                <th>Phone number</th>
                <th>Date of opening</th>
                <th>All groups</th>
                <th>Cool money</th>
                <th>Operation</th>
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
      // 向父组件发送的数据
      elementValue: [0,0,1,0,0,0,0,0,0,0],
      // 当前页
			currentPage3: 1,
			// 每页条数
			number: 10,
			// 总条数
			total: 100,
      // 账号信息
			tableData3: [{
					date: '2016-05-03',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-04',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-05',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-06',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-07',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-08',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-09',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-09',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-09',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }, {
          date: '2016-05-09',
					name: '陈工',
					phone: '18850519762',
					group: '未分配小组',
          currency: '999'
        }],
        multipleSelection: []
		}
  },
  mounted () {
    this.number = this.tableData3.length
    // console.log(this.number)
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
  .card-left
    float left
    margin-left 10px
    width 20%
    .cl_top
      padding 20px 0
      width 100%
      height 200px
    .cl_body
      height 580px
      overflow auto
  .card-right
    margin-top 20px
    margin-right 10px
    float right
    width 78%
</style>

