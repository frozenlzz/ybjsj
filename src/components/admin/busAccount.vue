<template>
  <div id="busAccount">
		<div class="head">
			<div class="title">
				<em></em>
				<span>本账号信息</span>
			</div>
		</div>
		<div class="content clearfix">
			<ul>
				<li>
					<span>头像</span>
					<div class="BA_cont"><div class="BAC_img"><img src="../../assets/img/20150809005334_rxVJH.jpeg" alt="头像"></div></div>
					<div class="BA_modify1"><a href="javascript:;">修改</a></div>
				</li>
				<li>
					<span>账号名称</span>
					<div class="BA_cont">
						<div class="BAC_information" >{{name}}</div>
						<div class="BAC_input" style="display:none;"><el-input type="text" v-model="name" :placeholder="name"  autofocus></el-input></div>
					</div>
					<div class="BA_modify" val="0"><a href="javascript:;">修改</a></div>
					<div class="BA_determine"  style="display:none;" val="0"><a href="javascript:;">确定</a></div>
				</li>
				<li>
					<span>手机号码</span>
					<div class="BA_cont">
						<div class="BAC_information" >{{ phone }}</div>
						<div class="BAC_input" style="display:none;" ><el-input type="text" v-model="phone" :placeholder="phone"  autofocus></el-input></div>
					</div>
					<div class="BA_modify" val="1"><a href="javascript:;">修改</a></div>
					<div class="BA_determine"  style="display:none;" val="1"><a href="javascript:;">确定</a></div>
				</li>
				<li>
					<span>密码</span>
					<div class="BA_cont">
						<div class="BAC_information" >********</div>
						<div class="BAC_input" style="display:none;" ><el-input type="password" v-model="password"  autofocus></el-input></div>
					</div>
					<div class="BA_modify" val="2"><a href="javascript:;">修改</a></div>
					<div class="BA_determine" style="display:none;" val="2"><a href="javascript:;">确定</a></div>
				</li>
				<li>
					<span>门店地址</span>
					<div class="BA_cont"><div style="300px">
						<area-select type='all' :placeholders="placeholders" :level='1' v-model="send_search_form.selected" :data="pcaa" @change="address" size="small">
						</area-select>
					</div></div>
				</li>
				<li>
					<span>详细地址</span>
					<div class="BA_cont">
						<div class="BAC_information" >{{ detailedAddress }}</div>
						<div class="BAC_input" style="display:none;"><el-input type="text" v-model="detailedAddress" :placeholder="detailedAddress" autofocus></el-input></div>
					</div>
					<div class="BA_modify" val="3"><a href="javascript:;" >修改</a></div>
					<div class="BA_determine" style="display:none;" val="3"><a href="javascript:;">确定</a></div>
				</li>
				<li style="border-bottom:0">
					<span>账号二维码</span>
					<div class="BA_cont"><div class="BAC_QRcode"><img src="https://picsum.photos/100/100?image=1" alt="二维码"></div></div>
				</li>
			</ul>
			<div class="BA_Preservation">
				<div>
					<el-button type="primary" @click="preservation" v-if="modifystate === 0">保存</el-button>
					<el-button type="primary" disabled v-else>保存</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { AreaSelect } from "vue-area-linkage"
import AreaData from "area-data"
import { pca, pcaa } from "area-data"
import Bus from '../../router/bus.js'
export default {
	data () {
		return {
			// 向父组件发送的数据
			elementValue: [0,1,0,0,0,0,0,0,0,0],
			// 账号名称
			name: "宅非凡",
			// 手机号码
			phone: "18850519762",
			// 密码
			password: "",
			// 详细地址
			detailedAddress: "前海",
			// 城市级联部分start
			// 存选择的省份名
			Province: " ",
			// 存选择的市区名
			city: " ",
			pca: pca,
			pcaa: pcaa,
			placeholders: [this.Province, this.city, " "],
			send_search_form: {
				orderCode: "",
				itemName: "",
				orderTime: [],
				consigneeName: "",
				state: "",
				selected: []
			},
			// 城市级联部分end
			// 修改的状态，用于判断是否确定修改,当为0时，可以进行修改跟保存，当为1时，不能修改跟保存，只有当点击确认之后，状态变为1，可以继续修改
			modifystate: 0
		}
	},
	component: {
		AreaSelect: AreaSelect
	},
	methods: {
		// 改变地址时出发的事件start
		address () {
			// 因为获取的this.send_search_form.selected[0]为JSON格式，转成字符串，再进行截取
			this.Province = JSON.stringify(this.send_search_form.selected[0]).split(":")[1].slice(1,-2)
			this.city = JSON.stringify(this.send_search_form.selected[1]).split(":")[1].slice(1,-2)
			console.log(this.Province)
			console.log(this.city)
		},
		// 改变地址时出发的事件end
		preservation () {
			var th = this
			this.$confirm('是否保存修改？', '确认信息', {
				distinguishCancelAndClose: true,
				confirmButtonText: '保存',
				cancelButtonText: '放弃修改'
			})
				.then(() => {
					this.$message({
						type: 'info',
						message: '保存修改'
					});
					console.log("保存的信息为="+"账号名称:"+this.name+",手机号码:"+this.phone+",密码:"+this.password+",门店地址:"+this.Province+"/"+this.city+",详细地址:"+this.detailedAddress)
				})
				.catch(action => {
					this.$message({
						type: 'info',
						message: '放弃保存'
					})
					console.log("保存失败")
				});
		}
	},
	created() {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
	},
	mounted() {
		// 内容的修改确认事件start
		// 修改事件
		var th = this
		$(".BA_modify").click(function(){
			var val = $(this).attr("val")
			if(th.modifystate === 0) {
				$(".BAC_input").eq(val).css("display", "block")
				$(".BA_determine").eq(val).css("display", "block")
				$(this).css("display", "none")
				th.modifystate = 1
			} else {
				return
			}
		}),
		// 确认事件
		$(".BA_determine").click(function(){
			var val = $(this).attr("val")
			if(th.modifystate == 1) {
				$(".BAC_input").eq(val).css("display", "none")
				$(this).css("display", "none")
				$(".BA_modify").eq(val).css("display", "block")
				th.modifystate = 0
			} else {
				return
			}
		})
		// 内容的修改确认事件end
	}
}
</script>
<style scoped lang="stylus">
#busAccount
	padding 20px
	background #fff
	.head
		height 50px
		line-height 50px
		border-bottom 1px solid #c0c4cc
		.title
			display inline-block
			font-size 24px
			em
				display inline-block
				margin-top -3px
				margin-right 2px
				vertical-align middle
				width 5px
				height 24px
				background 	#2894FF
			span
				display inline-block
	.content
		position relative
		margin auto
		margin-top 20px
		padding-bottom 40px
		width 50%
		border 1px solid #ebeef5
		box-shadow 0 2px 12px 0 rgba(0,0,0,0.1)
		border-radius 4px
		overflow hidden
		ul
			width 100%
			height auto
			padding 20px 0
			li
				padding 10px 0
				width 100%
				display flex
				align-items center
				font-size 20px
				border-bottom 2px solid #ebeef5
				span
					display inline-block
					width 30%
					height 50px
					line-height 50px
					text-align center
					color #909399
				.BA_cont
					position relative
					display inline-block
					font-size 0
					.BAC_input
						position absolute
						top 0
						left 0
						width 200px
						height 30px
					.BAC_img
						display inline-block
						width 100px
						height 100px
						border-radius 50%
						overflow hidden
						img
							width 100%
					.BAC_information
						display inline-block
						width 200px
						font-size 20px
						span
							width 100%
					.BAC_QRcode
						width 100px
						height 100px
				.BA_modify1
					display inline-block
					margin-left 150px
					a
						color #409eff
						font-size 16px
				.BA_modify
					display inline-block
					margin-left 50px
					a
						color #409eff
						font-size 16px
				.BA_determine
					display inline-block
					margin-left 50px
					a
						color #409eff
						font-size 16px
		.BA_Preservation
			width 100%
			height auto
			div
				position absolute
				bottom 20px
				right 20px
</style>

