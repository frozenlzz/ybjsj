<template>
  <div id="homePage">
		<!-- 首页轮播图start -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
				<div class="swiper-slide">Slide 4</div>
			</div>
			<!-- 分页器 -->
			<div class="swiper-pagination"></div>
			<!-- 左右按钮 -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
		<!-- 首页轮播图end -->
		<!-- 教程与介绍start -->
		<div class="hp_introduce">
			<ul class="clearfix">
				<!-- 商学院教程 -->
				<li class="Course">
					<span><i class="el-icon-star-on"></i> 商学院教程</span>
					<a href="javascript:;">软件使用不熟练？戳着 <i class="el-icon-arrow-right"></i></a>
				</li>
				<!-- 新功能介绍 -->
				<li class="newf">
					<span><i class="el-icon-star-on"></i> 新功能介绍</span>
					<a href="javascript:;">戳此处查看软件的最新功能 <i class="el-icon-arrow-right"></i></a>
				</li>
			</ul>
		</div>
		<!-- 教程与介绍end -->
		<div class="hp_content clearfix">
			<!-- 快速学习start -->
			<div class="Study">
				<div class="S_head">
					<div class="S_title">
						<em></em>
						<span>快速学习</span>
					</div>
					<a href="javascript:;">收起 <i class="el-icon-arrow-up"></i></a>
				</div>
				<div class="S_content clearfix">
					<div class="S_list clearfix">
						<ul class="clearfix">
							<li><a href="javascript:;">基础设置</a></li>
							<li><a href="javascript:;">账号管理</a></li>
							<li><a href="javascript:;">上传商品/材质</a></li>
							<li><a href="javascript:;">设计工具</a></li>
							<li><a href="javascript:;">获取帮助</a></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 快速学习end -->	
			<!-- 数据浏览start -->
			<div class="D_browsing">
				<div class="D_box">
					<div class="D_head">
						<div class="D_title">
							<em></em>
							<span>数据浏览</span>
						</div>
						<a href="javascript:;">更多数据 <i class="el-icon-arrow-right"></i></a>
					</div>
					<div class="D_content clearfix">
						<div class="D_list clearfix">
							<ul class="clearfix">
								<li style="border:none;"><span>新增订单</span><p>0</p></li>
								<li><span>新增户型</span><p>2</p></li>
								<li><span>新增方案</span><p>2</p></li>
								<li><span>渲染效果图</span><p>41</p></li>
								<li><span>使用酷比</span><p>0</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- 数据浏览end -->
			<!-- 我的方案，通知中心start -->
			<div class="programme clearfix">
				<!-- 我的方案start -->
				<div class="P_me clearfix">
					<div class="PM_head">
						<div class="PM_title">
							<em></em>
							<span>我的方案</span>
						</div>
					</div>
					<div class="PM_content clearfix">
						<ul class="clearfix">
							<!-- 方案列表 -->
							<li :key="index" v-for="(item,index) in [1,2,2,3]">
								<!-- 图片 -->
								<div class="PM_img"><img src="https://picsum.photos/400/400?image=2" alt=""></div>
								<!-- 名字，价格 -->
								<div class="PM_t1">
									<span class="PM_name">保利林海山庄</span>
									<span class="PM_price">价格：免费</span>
								</div>
								<!-- 地址，发表时间 -->
								<div class="PM_t2">
									<!-- 状态 -->
									<span class="PM_state">装修</span>
									<!-- 地址 -->
									<span class="PM_address">
										<i class="el-icon-location-outline"></i>
										<em>广州 保利林海山庄</em>
									</span>
									<!-- 时间 -->
									<span class="PM_time">
										<i class="el-icon-time"></i>
										<em>9天前</em>
									</span>
								</div>
								<!-- 装修设计，查看，下载按钮 -->
								<div class="PM_t3">
									<el-button>默认按钮</el-button>
									<div class="PM3_right">
										<el-button>查看</el-button>
										<el-button>下载</el-button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- 我的方案end -->
				<!-- 通知中心start -->
				<div class="P_notice">
					<div class="col-md-12">
            <div class="card card-default">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fa fa-bullhorn"></i>
                  通知中心
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="callout callout-info" :key="index" v-for="(item,index) in [1,2,3,3,3]">
                  <h5 style="color:#000;font-weight:bold;">[系统通知] 厨房插座，冷热水阀该怎么安装<div class="PN_details"><a href="javascript:;">详情点击</a></div></h5>
                  <p style="color:#aaa;">There is a problem that we need to fix. A wonderful serenity has taken possession of my entire
                    soul,
                    like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
				</div>
				<!-- 通知中心end -->
			</div>
			<!-- 我的方案，通知中心end -->
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
import Swiper from 'swiper'
import Bus from '../../router/bus.js'
export default {
	data () {
		return {
			// msg1: 'Welcome to homePage'
			elementValue: [1,0,0,0,0],
			selected1: "2"
		}
	},
	mounted () {
		Bus.$emit('val', this.elementValue)
		// 轮播图部分start
		new Swiper ('.swiper-container', {
			slidesPerView: 1,
     		spaceBetween: 30,
			loop: true,
			// 自动轮播
			autoplay: {
				// 轮播间隔时长
        delay: 3000,
        disableOnInteraction: false
      },
			// 如果需要分页器
			pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
			// 如果需要前进后退按钮
			navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
		})
		// 轮播图部分end
  },
	created () {
		// 设置轮播图播放间隔时长
		$('#carousel-example-generic').carousel({
			// 自动4秒播放
			interval : 4000
		})
	}
}
</script>
<style scoped lang="stylus">
	.swiper-container 
		width 100%
		// min-width 1024px
		height 300px
		overflow hidden
		margin-left auto
		margin-right auto
		.swiper-wrapper
			.swiper-slide
				text-align center
				font-size 18px
				background #fff
				display -webkit-box
				display -ms-flexbox
				display -webkit-flex
				display flex
				-webkit-box-pack center
				-ms-flex-pack center
				-webkit-justify-content center
				justify-content center
				-webkit-box-align center
				-ms-flex-align center
				-webkit-align-items center
				align-items center
	a
		text-decoration none
		color #aaa
	.hp_introduce
		margin-top 20px
		width 100%
		// min-width 1024px
		padding 0 30px
		ul
			width 100%
			li
				width 46%
				height 50px
				line-height 50px
				background #ffffff
				border-radius 6px
				box-shadow 0px 0px 5px rgba(0,0,0,.2)
				font-size 15px
				span
					display inline-block
					margin-left 30px
				a
					display inline-block
					float right
					margin-right 25px
					font-size 13px
				a:hover
					color #ffa500
			.Course
				float left
			.newf
				float right
			li:hover
				box-shadow 0px 0px 12px rgba(0,0,0,.2)
	.hp_content
		width 100%
		// min-width 1024px
		padding 0 30px
		padding-bottom 30px
		background #fff
		.Study
			margin-bottom 30px
			.S_head
				height 50px
				line-height 50px
				.S_title
					display inline-block
					em
						display inline-block
						margin-top -1px
						margin-right 2px
						vertical-align middle
						width 3px
						height 15px
						background 	#2894FF
					span
						display inline-block
						color #666
						font-weight bold
				a
					display inline-block
					margin-right 20px
					float right
					font-size 13px
			.S_content
				.S_list
					ul
						display flex
						justify-content space-between
						width 100%
						li
							width 18%
							height 70px
							line-height 70px
							text-align center
							border 1px solid #eee
							border-radius 2px
							background rgba(0,0,0,.03)
							border-radius 6px
							a
								display block
								color #000
								font-weight bold
						li:hover
							box-shadow 0px 0px 10px #848484
		.D_browsing
			border-top 1px solid #ddd
			margin-bottom 50px
			.D_box
				margin-top 30px
				border 1px solid #ddd
				box-shadow 2px 2px 2px rgba(0,0,0,0.2)
				.D_head
					position relative
					height 50px
					line-height 50px
					&::after
						content ''
						display block
						position absolute
						bottom 0px
						left 2%
						margin auto
						height 1px
						width 96%
						background #ddd
					.D_title
						display inline-block
						margin-left 20px
						em
							display inline-block
							margin-top -1px
							margin-right 2px
							vertical-align middle
							width 3px
							height 15px
							background 	#2894FF
						span
							display inline-block
							font-weight bold
							color #666
					a
						display inline-block
						margin-right 20px
						float right
						font-size 13px
				.D_content
					.D_list
						ul
							margin 20px 0
							padding 0 2%
							display flex
							justify-content space-between
							width 100%
							li
								padding 0 20px
								width 18%
								height 70px
								border-left 2px solid #eee
								color #000
								span
									display block
									margin-bottom 10px
									color #000
								p
									font-size 28px
									color #2c74ea
		.programme
			width 100%
			min-height 100px
			.P_me
				width 100%
				margin-bottom 50px
				.PM_head
					height 50px
					line-height 50px
					border-bottom 1px solid #C0C4CC
					.PM_title
						display inline-block
						em
							display inline-block
							margin-top -1px
							margin-right 2px
							vertical-align middle
							width 3px
							height 15px
							background 	#2894FF
						span
							display inline-block
							color #666
							font-weight bold
				.PM_content
					padding-top 20px 
					height auto
					ul
						max-height 700px
						margin-bottom 0
						overflow auto
						margin-left -25px
						li
							float left
							margin-bottom 20px
							margin-left 2%
							width 23%
							min-height 100px
							border-radius 4px
							border 1px solid #ebeef5
							box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
							overflow hidden
							.PM_img
								width 100%
								height auto
								img
									display block
									width 100%
									height auto
							.PM_t1
								padding 10px 0
								margin-bottom 10px
								.PM_name
									display inline-block
									margin-left 10px
									font-size 14px
								.PM_price
									display inline-block
									float right
									margin-right 15px
									font-size 15px
									font-weight bold
							.PM_t2
								padding 10px 10px
								span
									display inline-block
								.PM_state
									padding 2px 7px
									background #409EFF
									font-size 12px
									color #fff
								.PM_address
									font-size 12px
									color #ccc
									em
										display inline-block
										width 70px
										vertical-align -3px
										overflow hidden
										text-overflow ellipsis 
										white-space nowrap
								.PM_time
									float right
									padding 2px 7px
									font-size 12px
									color #ccc
							.PM_t3
								padding 10px 10px
								.el-button
									padding 7px 10px
									width auto
									font-size 12px
								.PM3_right
									float right
			.P_notice
				width 100%
				min-height 100px
				.callout
					h5
						position relative
						.PN_details
							position absolute
							right 0
							display inline-block
							a
								color #2c74ea
								font-size 14px
						.PN_details:hover 
							a
								color #FFA500
							
</style>

