<template>
  <div id="Rpersonal">
		<div class="Rp_box">
			<div class="Rp_bg"></div>
			<div class="Rp_content">
				<div class="Rp_head">个人注册</div>
				<div class="Rp_body">
					<el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="85px" class="demo-ruleForm">
						<el-form-item  label="用户名" prop="name">
							<el-input prefix-icon="el-icon-edit" type="text" v-model.number="ruleForm2.name" placeholder="请输入账号"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="pass">
							<el-input prefix-icon="el-icon-edit" type="text" v-model="ruleForm2.pass"  placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phoneNumber">
							<el-input prefix-icon="el-icon-edit" type="tel" v-model="ruleForm2.phoneNumber"  placeholder="请输入手机号码"></el-input>
						</el-form-item>
						<el-form-item label="短信验证码" prop="verificationCode" class="VC_style">
							<el-input prefix-icon="el-icon-edit" type="text" v-model="ruleForm2.verificationCode"  placeholder="请输入验证码"></el-input>
						</el-form-item>
						<el-checkbox v-model="checked" class="agreement">我已阅读并接受</el-checkbox><span>《样板间用户服务协议》</span>
						<el-form-item>
							<el-button v-if="checked" size="medium" style="padding:12px 139px;"  id="registerButton" type="primary" @click="submitForm('ruleForm2')">立即申请</el-button>
							<el-button v-else size="medium" style="padding:12px 139px;" disabled id="registerButton" type="primary" @click="submitForm('ruleForm2')">立即申请</el-button>
						</el-form-item>
					</el-form>
					<input type="button" class="VC_button" id="Rp_send" value="获取短信"  @click="Rp_send">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
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
		return {
			// 商家注册start
			activeName2: 'first',
			// 商家注册内容
			ruleForm2: {
				// 账号
				name: '',
				// 密码
				pass: '',
				// 手机号码
				phoneNumber: '',
				// 短信验证码
				verificationCode: ''
			},
			rules2: {
				name: [
					{ validator: validatePass, trigger: 'blur' }
				],
				pass: [
					{ validator: validatePass, trigger: 'blur' }
				],
				phoneNumber: [
					{ validator: validatePass, trigger: 'blur' }
				],
				verificationCode: [
					{ validator: validatePass, trigger: 'blur' }
				]
			},
			// 验证码发送时间
			times: 60,
			timer: null,
			// 商家注册end
			// 用于判断是否接受协议
			checked: false
		}
	},
	methods: {
		// 商家注册start
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					console.log(this.ruleForm2.businessPass)
					// 注册成功，跳转到对应的界面
					this.$router.push({path:'/Login'})
					return false;
				} else {
					console.log('error submit!!')
					return false;
				}
			})
		},
		// 商家注册end
		// 点击获取短信触发事件start
		Rp_send () {
			let th = this
			$('#Rp_send').attr('disabled','true')
			$('#Rp_send').val(this.times + '秒后重试')
			this.timer = setInterval(function () {
				th.times =  th.times - 1
				$('#Rp_send').val(th.times + '秒后重试')
				if (th.times <= 0) {
					$('#Rp_send').val('获取短信')
					$('#Rp_send').removeAttr('disabled')
					clearInterval(th.timer)
					th.times = 60
				}
			},1000)
		}
		// 点击获取短信触发事件end
	},
	mounted() {
		$('.el-form-item__label').css({'color':'#fff'})
		// 短信验证码样式
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
#Rpersonal
	color #000
	.Rp_box
		position absolute
		height 100%
		width 100%
		left 0
		top 0
		.Rp_bg
			position absolute
			height 100%
			width 100%
			left 0
			top 0
			background url("../../assets/img/u=1006234461,2550164607&fm=214&gp=0.jpg") no-repeat
			background-size cover
		.Rp_content
			position absolute
			top 0
			left 0
			right 0
			bottom 50px
			margin auto
			padding 100px 57px 0px 20px
			width 500px
			height 480px
			border-radius 4px
			background rgba(0,0,0,0.5)
			.Rp_head
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
			.Rp_body
				.VC_button
					position absolute
					bottom 131px
					right 58px
					width 120px
					height 38px
					line-height 38px
					text-align center
					background #fff
					border-radius 4px
					cursor pointer
					font-weight bold
				.agreement
					color #eeeeee
					margin-left 90px
				span
					color #99ffcc
					font-size 14px
					cursor pointer
</style>
