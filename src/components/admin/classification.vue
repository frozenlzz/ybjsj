<template>
	<div id="Classification">
		<div class="CF_body card card-primary card-outline">
			<div style="font-size: 24px;margin-bottom:20px;">分类管理</div>
			<el-input
				placeholder="输入关键字进行过滤"
				v-model="filterText" style="width:300px;margin-bottom:30px">
			</el-input>
			<div class="CF_head">
				<div class="CF_name">分类名称</div>
				<div class="CF_date">创建日期</div>
				<div class="CF_operation">操作</div>
				<el-button type="primary" class="CF_button" @click="open1"><i class="el-icon-plus"></i> 添加分类</el-button>
			</div>
			<el-tree
				class="filter-tree"
				:data="data2"
				:props="defaultProps"
				default-expand-all
				highlight-current	
				:render-content="renderContent"
				:filter-node-method="filterNode"
				ref="tree2">
			</el-tree>
			<div class="Mask">
				<div class="box1">
					<i class="el-icon-close" @click="SignOut"></i>
					<p>添加分类</p> 
					</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bus from '../../router/bus.js'
// 按钮节点渲染组件的引入
import TreeRender from '@/components/admin/classification/tree_render'
export default {
	data () {
		return {
			// 向父组件发送的数据
			elementValue: [0,0,0,0,0,1,0,0,0,0],
			filterText: '',
			data2: [{
				id: 1,
				label: '一级 1',
				date: '2018-3-2',
				children: [{
					id: 4,
					label: '二级 1-1',
					date: '2018-3-2',
					children: [{
						id: 9,
						label: '三级 1-1-1',
						date: '2018-3-2',
					}, {
						id: 10,
						label: '三级 1-1-2',
						date: '2018-3-2',
					}]
				}]
			}, {
				id: 2,
				label: '一级 2',
				date: '2018-3-2',
				children: [{
					id: 5,
					label: '二级 2-1',
					date: '2018-3-2',
				}, {
					id: 6,
					label: '二级 2-2',
					date: '2018-3-2',
				}]
			}, {
				id: 3,
				label: '一级 3',
				date: '2018-3-2',
				children: [{
					id: 7,
					label: '二级 3-1',
					date: '2018-3-2',
				}, {
					id: 8,
					label: '二级 3-2',
					date: '2018-3-2',
				}]
			}],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
		}
	},
	watch: {
		// 搜索框
		filterText(val) {
			this.$refs.tree2.filter(val);
		}
	},
	methods: {
		// 搜索框
		filterNode(value, data) {
			if (!value) return true;
			return data.label.indexOf(value) !== -1;
		},
		// 渲染编辑、删除按钮节点start
		renderContent(h,{node,data,store}){
			let that = this;//指向vue
			return h(TreeRender,{
				props: {
				DATA: data,//节点数据
				NODE: node,//节点内容
				STORE: store,//完整树形内容
				},
				on: {//绑定方法
				nodeEdit: ((s,d,n) => that.handleEdit(s,d,n)),
				nodeDel: ((s,d,n) => that.handleDelete(s,d,n))
				}
			});
		},
		handleEdit(s,d,n){//编辑节点
			console.log('点击编辑对象对应的ID值：'+d.id)
		},
		handleDelete(s,d,n){//删除节点
			console.log('点击删除对象对应的ID值：'+d.id)
		},
		// 渲染编辑、删除按钮节点end
		open1 () {
			console.log(111)
			$('.Mask').css('display','block')
		},
		SignOut () {
			$('.Mask').css('display','none')
		}
	},
	mounted () {
		// 向父组件发送数据
		Bus.$emit('val', this.elementValue)		
		// 设置定位
		$('.el-tree-node__content').css({'position':'relative'})
	}
}
</script>
<style scoped lang="stylus">
	.CF_body
		width 95%
		margin auto
		margin-top 20px
		padding 20px 40px 30px
		.CF_head
			position relative
			width 100%
			height 40px
			background #eee
			margin-bottom 10px
			div
				position absolute
				height 40px
				line-height 40px
			.CF_name
				top 0
				left 50px
			.CF_date
				top 0
				right 200px
			.CF_operation
				top 0
				right 30px
			.CF_button
				position absolute
				top -70px
				right 10px
		.Mask
			display none
			position fixed
			top 0 
			left 0
			z-index 10000
			width 100%
			height 100%
			background rgba(0,0,0,.3)
			.box1
				position absolute
				top 0
				left 0
				right 0
				bottom 0
				margin auto
				width 500px
				height 300px
				background #fff
				border-radius 4px
				box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
				i
					display inline-block
					position absolute 
					top 15px
					right 20px
					font-size 24px
				p
					border-bottom 1px solid #ddd
					padding 15px 20px
					font-size 20px
					font-weight bold
</style>
