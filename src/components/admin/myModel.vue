<template>
	<div id="MyModel">
		<p>{{ a }}</p>
			<div class="MM_body">
				<div class="tree-menu">
					<ul :key="value" v-for="(menuItem,value) in theModel">
					<my-tree :model="menuItem"></my-tree>
					</ul>
				</div>
			</div>
	</div>
</template>
<script>
import Bus from '../../router/bus.js'
	var myData = [{
		'id': '1',
		'menuName': '基础管理',
		'menuCode': '1',
		'children': [{
			'menuName': '用户管理',
			'menuCode': '2'
		},
		{
			'menuName': '角色管理',
			'menuCode': '2',
			'children': [{
				'menuName': '管理员',
				'menuCode': '3'
			},
			{
				'menuName': 'CEO',
				'menuCode': '3'
			},
			{
				'menuName': 'CFO',
				'menuCode': '3'
			},
			{
				'menuName': 'COO',
				'menuCode': '3'
			},
			{
				'menuName': '普通人',
				'menuCode': '3'
			}]
		},
		{
			'menuName': '权限管理',
			'menuCode': '2'
		}]
	},
	{
		'id': '2',
		'menuName': '商品管理',
		'menuCode': '1'
	},
	{
		'id': '3',
		'menuName': '订单管理',
		'menuCode': '1',
		'children': [{
			'menuName': '订单列表',
			'menuCode': '2'
		},
		{
			'menuName': '退货列表',
			'menuCode': '2',
		}]
	},
	{
		'id': '4',
		'menuName': '商家管理',
		'menuCode': '1',
	}];
import myTree from './mymodel/treeMenu.vue'
export default {
	data () {
		return {
			a: 'this is MyModel',
			// 向父组件发送的数据
			elementValue: [0,0,0,0,0,0,0,0,1,0],
			theModel: myData
		}
	},
	mounted () {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)
	},
	methods: {
	},
	components: {
		myTree
	},
}
</script>
<style scoped lang="stylus">
	.MM_body {
		width 200px
	}
</style>
