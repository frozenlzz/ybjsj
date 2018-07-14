<template>
	<li>
		<span @click="toggle" >
				<div class="icontree" :class="{'folder':model.children}">
					<i v-if="isFolder && open" class=" el-icon-arrow-down"></i>
					<i v-else class="el-icon-arrow-right"></i>
					<i v-if="!isFolder" class=" el-icon-arrow-down"></i>
				</div>
		<a href="javascript:;" class="MM_memu" :data-id="model.menuCode" @click="change($event)">{{ model.menuName }}</a> 
		</span>
		<ul v-show="open" v-if="isFolder">
			<tree-menu v-for="(item,value) in model.children" :model="item" :key="value"></tree-menu>
		</ul>
	</li>
</template>
 <script>
export default {
	name: 'treeMenu',
	props: ['model'],
	data() {
		return {
			open: false,
			isFolder: true
		}
	},
	computed: {
		isFolder1: function() {
			return this.model.children && this.model.children.length
		}
	},
	methods: {
		toggle: function() {
			if (this.isFolder) {
				this.open = !this.open
			}
		},
		change(event) {
			$('.MM_memu').css({"background":'none',"color":"#000"})
			// console.log(event.currentTarget)
			event.currentTarget.style.background = '#ed6c00'
			event.currentTarget.style.color = '#fff'
			console.log(event.currentTarget.getAttribute("data-id"))
		}
	}
}
</script>
 <style>
ul {
 list-style: none;
}
i.icon {
 display: inline-block;
 width: 15px;
 height: 15px;
 background-repeat: no-repeat;
 vertical-align: middle;
}
.icontree {
	display:inline-block;
	visibility:hidden;
}
.folder {
 	/* background-image: url(/src/assets/folder.png); */
 	visibility:visible;
}
.tree-menu li {
	position:relative;
 	line-height: 1.5;
}
.tree-menu li i{
	position: absolute;
	top: 5px;
	left: 0;
	z-index: 100;
}
.tree-menu ul {
	margin-bottom:0;
}
.tree-menu>ul>li>ul>li>span>a {
	text-indent: 1em;
}
.tree-menu>ul>li>ul>li>span>div>i {
	margin-left: 1em;
}
.tree-menu>ul>li>ul>li>ul>li>span>a {
	text-indent: 2em;
}
.MM_memu {
	position:absolute;
	width:100%;
	top:0;
	left:0;
	padding-left:20px;
	color:#000;
}
</style>