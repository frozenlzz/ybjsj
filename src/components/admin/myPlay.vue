<template>
	<div id="MyPlay">
		<div class="MP_body card card-primary card-outline">
			<div style="font-size: 24px;margin-bottom:40px;border-bottom:1px solid #ddd;"><span>我的方案</span> <el-button type="primary" style="float:right;"><i class="el-icon-plus"></i> 新建设计</el-button></div>
			<div style="font-size: 16px;margin-bottom:20px;">
				全部分类 
				<i class="el-icon-arrow-right"></i>
				<div style="float:right;margin-right:20px;"><a href="javascript:;"><i class="el-icon-delete"></i> 回收站</a></div>
			</div>
			<div class="MP_content">
				<p class="MP_head">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '' }">一级分类</el-breadcrumb-item>
						<el-breadcrumb-item>我的</el-breadcrumb-item>
						<el-breadcrumb-item>未分类</el-breadcrumb-item>
					</el-breadcrumb>
				</p>
				<div class="MPC_content clearfix">
					<ul class="clearfix">
						<!-- 方案列表 -->
						<li :key="index" v-for="(item,index) in [1,2,2,3,3,1,1,1,1,11,1,1,1,1]">
							<!-- 图片 -->
							<div class="MPC_img"><img src="https://picsum.photos/400/400?image=2" alt=""></div>
							<!-- 名字，价格 -->
							<div class="MPC_t1">
								<span class="MPC_name">保利林海山庄</span>
								<span class="MPC_price">价格：免费</span>
							</div>
							<!-- 地址，发表时间 -->
							<div class="MPC_t2">
								<!-- 状态 -->
								<span class="MPC_state">装修</span>
								<!-- 地址 -->
								<span class="MPC_address">
									<i class="el-icon-location-outline"></i>
									<em>广州 保利林海山庄</em>
								</span>
								<!-- 时间 -->
								<span class="MPC_time">
									<i class="el-icon-time"></i>
									<em>9天前</em>
								</span>
							</div>
							<!-- 装修设计，查看，下载按钮 -->
							<div class="MPC_t3">
								<el-button>默认按钮</el-button>
								<div class="MPC3_right">
									<el-button>查看</el-button>
									<el-button>下载</el-button>
								</div>
							</div>
						</li>
					</ul>
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
			elementValue: [0,0,0,0,0,0,1,0,0,0]
		}
	},
	mounted () {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
	}
}
</script>
<style scoped lang="stylus">
	.MP_body
		width 95%
		margin auto
		margin-top 20px
		padding 20px 40px 30px
		.MP_content
			width 100%
			padding-bottom 20px
			border 1px solid #ddd
			border-radius 2px
			.MP_head
				padding 20px 0 20px 20px
				border-bottom 1px solid #ddd
			.MPC_content
				padding-top 20px 
				height auto
				ul
					// max-height 700px
					padding 0 20px
					margin-bottom 0
					overflow auto
					margin-left -20px
					li
						float left
						margin-bottom 20px
						margin-left 2.5%
						width 22%
						min-height 100px
						border-radius 4px
						border 1px solid #ebeef5
						box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
						overflow hidden
						.MPC_img
							width 100%
							height auto
							img
								display block
								width 100%
								height auto
						.MPC_t1
							padding 10px 0
							margin-bottom 10px
							.MPC_name
								display inline-block
								margin-left 10px
								font-size 14px
							.MPC_price
								display inline-block
								float right
								margin-right 15px
								font-size 15px
								font-weight bold
						.MPC_t2
							padding 10px 10px
							span
								display inline-block
							.MPC_state
								padding 2px 7px
								background #409EFF
								font-size 12px
								color #fff
							.MPC_address
								font-size 12px
								color #ccc
								em
									display inline-block
									width 70px
									vertical-align -3px
									overflow hidden
									text-overflow ellipsis 
									white-space nowrap
							.MPC_time
								float right
								padding 2px 7px
								font-size 12px
								color #ccc
						.MPC_t3
							padding 10px 10px
							.el-button
								padding 7px 10px
								width auto
								font-size 12px
							.MPC3_right
								float right
					li:hover
						box-shadow 0 2px 12px 0 rgba(0,0,0,.2)
</style>