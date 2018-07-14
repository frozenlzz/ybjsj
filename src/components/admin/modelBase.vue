<template>
	<div id="ModelBase">
		<p>{{ a }}</p>
	</div>
</template>
<script>
import Bus from '../../router/bus.js'
// 引入ajax数据处理模块
import { jsonData } from '@/common/Handle.js'
export default {
	data () {
		return {
			a: 'this is ModelBase',
			// 向父组件发送的数据
			elementValue: [0,0,0,0,0,0,0,0,0,1]
		}
	},
	mounted () {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
		// 要传给后台的数据
		let simpleObject = {
			age: 0,
			img: "string",
			name: "string",
			tips: "string",
			user: "string"
		}
		// 调用ajax数据处理方法
		let data = jsonData(simpleObject)
		console.log(data)
		/*
		this.$http.post('/app/hello', data)
			.then(res => {
				console.log(res)
			})
			.catch(error => {
				console.log(error)
			})
		*/	
		/*
		$.ajax({
			url:"http://192.168.0.137:8080/app/hello",
			type:"post",
			dataType:"json",
			data:jsonData1,
			beforeSend: function(request) {
				request.setRequestHeader("Authorization", 'Bearer ' + localStorage.token);
			},
			headers: {'Content-Type': 'application/json'},
			success: function (ret) {
				console.log(ret)
			},
			error: function(res) {
				console.log('失败',ret)
			}
		}) 
		*/
	}
}
</script>
<style scoped lang="stylus">

</style>
