<template>
	<div id="Method">
		<div class="MT_body">
			<el-tabs type="border-card"  @tab-click="a1">
				<el-tab-pane :label="item.title" :key="index" v-for="(item,index) in data1">
					<div class="MT_content clearfix">
						<ul class="clearfix">
							<!-- 方案列表 -->
							<li :key="index1" v-for="(item1,index1) in item.data2">
								<!-- 图片 -->
								<div class="MT_img"><img :src="('https://picsum.photos/400/400?image='+ index1)" alt=""></div>
								<!-- 名字，价格 -->
								<div class="MT_t1">
									<span class="MT_name">保利林海山庄</span>
									<span class="MT_price">价格：免费</span>
								</div>
								<!-- 地址，发表时间 -->
								<div class="MT_t2">
									<!-- 状态 -->
									<span class="MT_state">装修</span>
									<!-- 地址 -->
									<span class="MT_address">
										<i class="el-icon-location-outline"></i>
										<em>广州 保利林海山庄</em>
									</span>
									<!-- 时间 -->
									<span class="MT_time">
										<i class="el-icon-time"></i>
										<em>9天前</em>
									</span>
								</div>
								<!-- 装修设计，查看，下载按钮 -->
								<div class="MT_t3">
									<el-button>默认按钮</el-button>
									<div class="MT3_right">
										<el-button>查看</el-button>
										<el-button>下载</el-button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script>
import Bus from '../../router/bus.js'
export default {
	data () {
		return {
			// 向父组件发送的数据
			elementValue: [0,0,0,0,0,0,0,1,0,0],
			// 用于判断是否重复点击当前
			tabname: '全部',
			data1: [{
				title: '全部',
				id: 1,
				data2: [1,1,1,1,1,1,1,1]
			},
			{
				title: '收藏的方案',
				id: 2,
				data2: [1,1,1,1]
			},
			{
				title: '购买的方案',
				id: 3,
				data2: [1,1,1,1,1,1]
			}]
		}
	},
	mounted () {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
	},
	methods : {
		a1 (tab, event) {
			if (tab.label == this.tabname) {
				console.log('重复不请求数据')
				return false
			} else {
				if(tab.label == '全部') {
					this.tabname = '全部'
					console.log(this.tabname)
				} else if (tab.label == '收藏的方案') {
					this.tabname = '收藏的方案'
					console.log(this.tabname)
				} else if(tab.label == '购买的方案') {
					this.tabname = '购买的方案'
					console.log(this.tabname)
				}
			}
		}
	}
}
</script>
<style scoped lang="stylus">
	.MT_body
		width 98%
		margin auto
		margin-top 20px
		border-top: 3px solid #007bff;
		border-radius 4px
		.MT_content
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
					.MT_img
						width 100%
						height auto
						img
							display block
							width 100%
							height auto
					.MT_t1
						padding 10px 0
						margin-bottom 10px
						.MT_name
							display inline-block
							margin-left 10px
							font-size 14px
						.MT_price
							display inline-block
							float right
							margin-right 15px
							font-size 15px
							font-weight bold
					.MT_t2
						padding 10px 10px
						span
							display inline-block
						.MT_state
							padding 2px 7px
							background #409EFF
							font-size 12px
							color #fff
						.MT_address
							font-size 12px
							color #ccc
							em
								display inline-block
								width 70px
								vertical-align -3px
								overflow hidden
								text-overflow ellipsis 
								white-space nowrap
						.MT_time
							float right
							padding 2px 7px
							font-size 12px
							color #ccc
					.MT_t3
						padding 10px 10px
						.el-button
							padding 7px 10px
							width auto
							font-size 12px
						.MT3_right
							float right
				li:hover
					box-shadow 0 2px 12px 0 rgba(0,0,0,.2)
</style>
