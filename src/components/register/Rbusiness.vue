<template>
  <div id="Rbusiness">
		<div class="Rb_box">
			<div class="Rb_bg"></div>
			<div class="Rb_content">
				<div class="Rb_head">样板间商家注册</div>
				<div class="Rb_body">
					<el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="85px" class="demo-ruleForm">
						<el-form-item  label="企业名称" prop="enterpriseName">
							<el-input prefix-icon="el-icon-edit" type="text" v-model.number="ruleForm2.enterpriseName" placeholder="请输入企业名"></el-input>
						</el-form-item>
						<el-form-item label="联系人" prop="contacts">
							<el-input prefix-icon="el-icon-edit" type="text" v-model="ruleForm2.contacts"  placeholder="请输入联系人"></el-input>
						</el-form-item>
						<el-form-item label="省市区" prop="businessPass">
							<area-select type='all' :placeholders="placeholders" :level='2' v-model="send_search_form.selected" :data="pcaa" @change="address" size="small">
							</area-select>
						</el-form-item>
						<el-form-item label="详细地址" prop="address">
							<el-input prefix-icon="el-icon-edit" type="text" v-model="ruleForm2.address"  placeholder="请输入详细地址"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phoneNumber">
							<el-input prefix-icon="el-icon-edit" type="tel" v-model="ruleForm2.phoneNumber"  placeholder="请输入手机号码"></el-input>
						</el-form-item>
						<el-form-item label="短信验证码" prop="verificationCode" class="VC_style">
							<el-input prefix-icon="el-icon-edit" type="text" v-model="ruleForm2.verificationCode"  placeholder="请输入验证码"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button size="medium" style="padding:12px 139px;" type="primary" @click="submitForm('ruleForm2')">立即申请</el-button>
						</el-form-item>
					</el-form>
					<input type="button" class="VC_button" id="send" value="获取短信"  @click="send">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { AreaSelect } from "vue-area-linkage"
import AreaData from "area-data"
import { pca, pcaa } from "area-data"
export default {
	data () {
		// 商家注册start
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('内容不能为空'))
			} else {
				callback()
			}
		}
		// 商家注册end
		// 手机注册验证start
		var isPoneAvailable = (rule, value, callback) => {
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
			if (!myreg.test(value)) {
				callback(new Error('请输入正确的手机号码'))
			} else {
				callback()
			}
		}
		// 手机注册验证end
		return {
			// 商家注册start
			activeName2: 'first',
			// 商家注册内容
			ruleForm2: {
				// 企业名称
				enterpriseName: '',
				// 联系人
				contacts: '',
				// 详细地址
				address: '',
				// 手机号码
				phoneNumber: '',
				// 短信验证码
				verificationCode: ''
			},
			rules2: {
				enterpriseName: [
					{ validator: validatePass, trigger: 'blur' }
				],
				contacts: [
					{ validator: validatePass, trigger: 'blur' }
				],
				address: [
					{ validator: validatePass, trigger: 'blur' }
				],
				phoneNumber: [
					{ validator: validatePass, trigger: 'blur' },
					{ validator: isPoneAvailable, trigger: 'blur' }
				],
				verificationCode: [
					{ validator: validatePass, trigger: 'blur' }
				]
			},
			// 城市级联部分start
			// 存选择的省份名
			Province: " ",
			// 存选择的市区名
			city: " ",
			// 存选择的区名
			County: " ",
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
			// 验证码发送时间
			times: 60,
			timer: null,
			// 商家注册end
		}
	},
	methods: {
		// 商家注册start
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					let data = {
						enterpriseName: this.ruleForm2.enterpriseName,
						contacts: this.ruleForm2.contacts,
						phoneNumber: this.ruleForm2.phoneNumber,
						Province: this.Province,
						city: this.city,
						County: this.County,
						address: this.ruleForm2.address
					}
					console.log(data)
					this.$notify({
						title: '注册成功',
						message: '即将跳转到登录页',
						type: 'success'
					})
					// 注册成功，跳转到对应的界面
					this.$router.push({path:'/Login'})
					// $.ajax({
					// 	url:'http://c.m.163.com/nc/article/DESBV25T0529B6P0/full.html',
					// 	type:'get',
					// 	data: {
					// 	},
					// 	dataType: 'json',
					// 	success: function(msg){
					// 			console.log(msg)
					// 	}
					// })
					return false;
				} else {
					console.log('error submit!!')
					return false;
				}
			})
		},
		// 商家注册end
		// 改变地址时出发的事件start
		address () {
			// 因为获取的this.send_search_form.selected[0]为JSON格式，转成字符串，再进行截取
			this.Province = JSON.stringify(this.send_search_form.selected[0]).split(":")[1].slice(1,-2)
			this.city = JSON.stringify(this.send_search_form.selected[1]).split(":")[1].slice(1,-2)
			this.County = JSON.stringify(this.send_search_form.selected[2]).split(":")[1].slice(1,-2)
			console.log(this.Province)
			console.log(this.city)
			console.log(this.County)
		},
		// 改变地址时出发的事件end
		// 点击获取短信触发事件start
		send () {
			let th = this
			$('#send').attr('disabled','true')
			$('#send').val(this.times + '秒后重试')
			this.timer = setInterval(function () {
				th.times =  th.times - 1
				$('#send').val(th.times + '秒后重试')
				if (th.times <= 0) {
					$('#send').val('获取短信')
					$('#send').removeAttr('disabled')
					clearInterval(th.timer)
					th.times = 60
				}
			},1000)
		}
		// 点击获取短信触发事件end
	},
	mounted() {
		$('.el-form-item__label').css({'color':'#fff'})
		// 城市级联选择框样式修改
		$('.area-select-wrap').css('margin-top','5px')
		$('.area-select').css('height','40px')
		$('.area-select .area-selected-trigger').css('padding','0px 20px 7px 24px')
		$('.area-select.small').css('width','100px')
		$('.VC_style').css('width','280px')
		// 清除定时器
		clearInterval(this.timer)
	},
	// 修复组件刷新时，定时器还没有删除的BUG
	beforeDestroy() {
		clearInterval(this.timer)
	}
}
</script>
<style scoped lang="stylus">
#Rbusiness
	color #000
	.Rb_box
		position absolute
		height 100%
		width 100%
		left 0
		top 0
		.Rb_bg
			position absolute
			height 100%
			width 100%
			left 0
			top 0
			background url("../../assets/img/u=1006234461,2550164607&fm=214&gp=0.jpg") no-repeat
			background-size cover
		.Rb_content
			position absolute
			top 0
			left 0
			right 0
			bottom 50px
			margin auto
			padding 100px 57px 0px 20px
			width 500px
			height 600px
			border-radius 4px
			background rgba(0,0,0,0.5)
			.Rb_head
				position absolute
				top 20px
				left 50%
				width 300px
				margin-left -150px
				font-size 35px
				text-align center
				letter-spacing 3px
				color #fff
				font-weight bold
			.Rb_body
				.VC_button
					position absolute
					bottom 111px
					right 58px
					width 120px
					height 38px
					line-height 38px
					text-align center
					background #fff
					border-radius 4px
					cursor pointer
					font-weight bold
</style>
