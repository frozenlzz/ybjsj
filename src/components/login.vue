<template>
  <div id="login">
		<div class="LG_box">
			<div class="LG_bg"></div>
			<div class="LG_content">
				<el-tabs stretch v-model="activeName2" type="border-card" @tab-click="handleClick" >
					<!-- 商家登陆界面start -->
					<el-tab-pane label="商家登录" name="first" >
						<el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="60px" class="demo-ruleForm">
							<el-form-item  label="账号" prop="businessName">
								<el-input prefix-icon="el-icon-edit" type="text" v-model.number="ruleForm2.businessName" placeholder="请输入账号"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="businessPass">
								<el-input prefix-icon="el-icon-edit" type="password" v-model="ruleForm2.businessPass" auto-complete="off" placeholder="请输入密码"></el-input>
							</el-form-item>
							<div class="BS_Apply"><router-link to="/registrationBu">没有账号？立即申请<i class="el-icon-d-arrow-right"></i><i class="el-icon-d-arrow-right"></i></router-link></div>
							<el-form-item>
								<el-button size="medium" style="padding:12px 85px;" type="primary" @click="submitForm('ruleForm2')"  id="RB_login">登录</el-button>
								<el-button @click="resetForm('ruleForm2')">重置</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<!-- 商家登录界面end -->
					<!-- 个人登录界面start -->
					<el-tab-pane label="个人登录" name="second">
						<el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="60px" class="demo-ruleForm">
							<el-form-item label="账号" prop="personalName">
								<el-input prefix-icon="el-icon-edit" type="text" v-model.number="ruleForm1.personalName" placeholder="请输入账号"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="personalPass">
								<el-input prefix-icon="el-icon-edit" type="password" v-model="ruleForm1.personalPass" auto-complete="off"  placeholder="请输入密码"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" style="padding:12px 130px;" @click="submitForm1('ruleForm1')" id="Rp_login">登录</el-button>
							</el-form-item>
							<el-form-item style="margin-left:130px">
								<router-link to="/registrationPe" style="margin-left:10px;"><el-button>注册</el-button></router-link>
								<el-button @click="resetForm1('ruleForm1')">重置</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<!-- 个人登录界面end -->
				</el-tabs>
			</div>
		</div>  
  </div>
</template>
<script>
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
export default {
	data () {
		// 商家登陆start
		var accountNumber = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('账号不能为空'))
			} else {
				callback()
			}
		}
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				callback()
			}
		}
		// 商家登陆end
		// 个人登陆start
		var accountNumber1 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('账号不能为空'))
			} else {
				callback()
			}
		}
		var validatePass1 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				callback()
			}
		}
		// 个人登陆end
		return {
			// 商家登陆start
			activeName2: 'first',
			// 商家账号密码
			ruleForm2: {
				businessPass: '',
				businessName: ''
			},
			rules2: {
				businessPass: [
					{ validator: validatePass, trigger: 'blur' }
				],
				businessName: [
					{ validator: accountNumber, trigger: 'blur' }
				]
			},
			// 商家登陆end
			// 个人账号密码
			ruleForm1: {
				personalPass: '',
				personalName: ''
			},
			rules1: {
				personalPass: [
					{ validator: validatePass1, trigger: 'blur' }
				],
				personalName: [
					{ validator: accountNumber1, trigger: 'blur' }
				]
			},
			// 个人登陆end
			// 账号密码JSON格式
			jsonData: null,
		}
	},
	methods: {
		handleClick (tab, event) {
			// console.log(tab, event)
		},
		// 商家登陆start
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// 禁止重复登录请求
					$('#RB_login').attr('disabled',true)
					let userName = this.ruleForm2.businessName
					let password = this.ruleForm2.businessPass
					let data = new FormData()
					data.append("userName",userName)
					data.append("password",password)
					// 将data数据转为json字符串
					console.log(data)
					// 定义一个对象
					let objData = {}
					// 将formData数据便利并存到objData里
					data.forEach((value, key) => objData[key] = value);
					console.log(objData)
					// 将数据转换成json字符串
					// this.jsonData = JSON.stringify(objData)
					// console.log(this.jsonData)	
					$.ajax({
						url:"http://192.168.0.137:8080/app/login",
						type:"post",
						data:objData,
						success: function (res) {
							console.log(res)
							if(res.data.token) {
								// 储存 token
								localStorage.token = res.data.token		
							}
							if(res.data.randomKey) {
								localStorage.randomKey = res.data.randomKey
							}
							this.$notify({
								title: '登录成功',
								message: '欢迎来到后台界面',
								type: 'success'
							})
						},
						error: function (ret) {
							console.log(ret)
							if(ret.status === 400) {
								this.$notify.error({
									title: '登录失败',
									message: '账号密码错误'
								})
							}
						}
					})
					/*
					this.$http.post('/app/login', data)
						.then(res => {
						// 登录成功
							console.log(res.data)
							if(res.data.token) {
								// 储存 token
								localStorage.token = res.data.token		
							}
							if(res.data.randomKey) {
								localStorage.randomKey = res.data.randomKey
							}
							// 将要向后台发送的JSON字符串、随机码
							let json = this.jsonData
							let salt = res.data.randomKey
							const data1 = {
								json,
								salt,
							}
							console.log(data1)
							this.$notify({
								title: '登录成功',
								message: '欢迎来到后台界面',
								type: 'success'
							})
							// 二次请求，向后台发送JSON字符串、随机码
							this.$http.post('/app/decrypt', data1)
							.then(res => {
								// 返回之后验证登录状态的数据
								console.log(res)
							})
							.catch(error => {
								console.log(error)
							})
						})
						.catch(error => {
							// 登录失败
							// 验证后端返回的错误字段，如果匹配，提示用户是密码错误还是账号错误
							// axios 配置里必须要 return Promise.reject(error.response.data) 才能拿到错误字段
							console.log('失败')
							console.log(error)
							if(error.code === 400) {
								this.$notify.error({
									title: '登录失败',
									message: '账号密码错误'
								})
							}
						})
						*/
					// 登录成功，跳转到对应的界面
					// window.location.replace("/#/Admin/homePage")
					// 取消禁止重复登录请求 
					$('#RB_login').removeAttr('disabled')
					// this.$router.push({path:'/Admin/homePage'})
					return false;
				} else {
					console.log('error submit!!')
					return false;
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		// 商家登陆end
		// 个人登陆start
		submitForm1(formName1) {
			this.$refs[formName1].validate((valid) => {
				if (valid) {
					console.log(this.ruleForm1.personalName,this.ruleForm1.personalPass)
					// 登录成功，跳转到对应的界面
					// this.$router.push({path:'/'})
					return false;
				} else {
					console.log('error submit!!')
					return false;
				}
			})
		},
		resetForm1(formName1) {
			this.$refs[formName1].resetFields();
		}
		// 个人登陆end
	}
}
</script>
<style scoped lang="stylus">
#login
	color #000
	min-width 1024px
	position absolute
	height 100%
	width 100%
	left 0
	top 0
	.LG_box
		position absolute
		height 100%
		width 100%
		left 0
		top 0
		.LG_bg
			position absolute
			height 100%
			width 100%
			left 0
			top 0
			background url("../assets/img/login-bg1.jpg") no-repeat
			background-size cover
		.LG_content
			position absolute
			top 0
			left 0
			right 0
			bottom 50px
			margin auto
			width 500px
			height 300px
			.el-tabs
				.el-tabs__content
					.demo-ruleForm
						margin 0 auto
						margin-top 40px
						margin-bottom 20px
						margin-left 50px
						width 350px
					.BS_Apply
						display inline-block
						margin-left 190px
						margin-bottom 47px
						height 40px
						line-height 40px
						font-size 14px
</style>

