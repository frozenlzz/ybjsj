<template>
  <div class="hello">
    <!-- 头部导航栏start -->
    <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <router-link to="/Admin/homePage" class="nav-link">首页</router-link>
        </li>
      </ul>
      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="javascript:;">
            <i class="fa fa-comments-o"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="javascript:;" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img src="../assets/img/timg.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"><i class="fa fa-star"></i></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="javascript:;" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img src="../assets/img/timg.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"><i class="fa fa-star"></i></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="javascript:;" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img src="../assets/img/timg.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"><i class="fa fa-star"></i></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="javascript:;" class="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="javascript:;">
            <i class="fa fa-bell-o"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fa fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fa fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fa fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
      </ul>
    </nav>
    <!-- 头部导航栏end-->
    <!-- 左边导航栏start -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar Menu -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="../assets/img/20150809005334_rxVJH.jpeg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">用户名</a>
          </div>
        </div>
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
            <!-- <li class="nav-item has-treeview  menu-open"> -->
            <li class="nav-item has-treeview">
              <a href="javascript:;" class="nav-link"  :class="{'active':name[0] === 1}">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  首页
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/Admin/homePage" class="nav-link" :class="{'active':name[0] === 1}">
                    <p style="margin-left:30px;">首页</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item has-treeview">
              <a href="javascript:;" class="nav-link" :class="{'active':this.name[1] === 1 || this.name[2] === 1 || this.name[3] === 1 || this.name[4] === 1}">
                <i class="nav-icon fa fa-table"></i>
                <p>
                  账号管理
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/Admin/busAccount" class="nav-link" :class="{'active':name[1] === 1}">
                    <p style="margin-left:30px;">商家账号管理</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Admin/subaccount" class="nav-link" :class="{'active':name[2] === 1}">
                    <p style="margin-left:30px;">子账号管理</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Admin/rolePermission" class="nav-link" :class="{'active':name[3] === 1}">
                    <p style="margin-left:30px;">角色权限</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Admin/diary" class="nav-link" :class="{'active':name[4] === 1}">
                    <p style="margin-left:30px;">操作日记</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item has-treeview">
              <a href="javascript:;" class="nav-link" :class="{'active':this.name[5] === 1 || this.name[6] === 1 || this.name[7] === 1}">
                <i class="nav-icon fa fa-pie-chart"></i>
                <p>
                  方案管理
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/Admin/classification" class="nav-link" :class="{'active':name[5] === 1}">
                    <p style="margin-left:30px;">分类管理</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Admin/myPlay" class="nav-link" :class="{'active':name[6] === 1}">
                    <p style="margin-left:30px;">我的方案</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Admin/method" class="nav-link" :class="{'active':name[7] === 1}">
                    <p style="margin-left:30px;">方案库</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item has-treeview">
              <a href="javascript:;" class="nav-link" :class="{'active':this.name[8] === 1 || this.name[9] === 1}">
                <i class="nav-icon fa fa-th"></i>
                <p>
                  模型管理
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/Admin/myModel" class="nav-link" :class="{'active':name[8] === 1}">
                    <p style="margin-left:30px;">我的模型</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Admin/modelBase" class="nav-link" :class="{'active':name[9] === 1}">
                    <p style="margin-left:30px;">模型库</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
    <!-- 左边导航栏end -->
    <!-- 右边主体内容start -->
    <div class="content-wrapper clearfix">
      <router-view></router-view>
    </div>
    <!-- 右边主体内容end -->
  </div>
</template>

<script>
// import '@/assets/css/adminlte.min.css'
// import '../assets/js/adminlte.min.js'
import Bus from '../router/bus.js'
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Welcome to admin',
      hre: '',
      // 用于接收子组件传来的数据
      name: [1,0,0,0,0,0,0,0,0,0]
    }
  },
  methods: {
    
  },
  created() {
    // 子组件传来的数据start
    var vm = this
    // 用$on事件来接收参数
    Bus.$on('val', (data) => {
      vm.name = data
    })
    // 子组件传来的数据end
  },
  watch: {
    // 用于左侧导航栏点击动态收缩样式start
    name :function(){
      if(this.name[0] === 1) {
        $('.has-treeview').removeClass('menu-open')
        $('.nav-treeview').css('display','none')
        $('.has-treeview').eq(0).addClass('menu-open')
        $('.nav-treeview').eq(0).css('display','block')
      } else {
        $('.has-treeview').eq(0).removeClass('menu-open')
         $('.nav-treeview').eq(0).css('display','none')
      }
      if(this.name[1] === 1 || this.name[2] === 1 || this.name[3] === 1 || this.name[4] === 1) {
        $('.has-treeview').removeClass('menu-open')
        $('.nav-treeview').css('display','none')
        $('.has-treeview').eq(1).addClass('menu-open')
        $('.nav-treeview').eq(1).css('display','block')
      } else {
        $('.has-treeview').eq(1).removeClass('menu-open')
        $('.nav-treeview').eq(1).css('display','none')
      }
      if(this.name[5] === 1 || this.name[6] === 1 || this.name[7] === 1) {
        $('.has-treeview').removeClass('menu-open')
        $('.nav-treeview').css('display','none')
        $('.has-treeview').eq(2).addClass('menu-open')
        $('.nav-treeview').eq(2).css('display','block')
      } else {
        $('.has-treeview').eq(2).removeClass('menu-open')
        $('.nav-treeview').eq(2).css('display','none')
      }
      if(this.name[8] === 1 || this.name[9] === 1) {
        $('.has-treeview').removeClass('menu-open')
        $('.nav-treeview').css('display','none')
        $('.has-treeview').eq(3).addClass('menu-open')
        $('.nav-treeview').eq(3).css('display','block')
      } else {
        $('.has-treeview').eq(3).removeClass('menu-open')
        $('.nav-treeview').eq(3).css('display','none')
      }
    }
    // 用于左侧导航栏点击动态收缩样式end
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
header
  position fixed
  top 0
  left 0
  z-index 2
  height 50px
  width 100%
  line-height 50px
  text-align center
  background #fff
  border 1px solid #ccc
  box-shadow 0 3px 7px rgba(0,0,0,.25), 0 2px 5px rgba(0,0,0,.22)
  font-size 24px
  color #000
aside
  // margin-top 50px
.content-wrapper
  height auto
  // 设置右边内容最小宽度为1024px
  min-width 1024px
  background #f4f6f9
  overflow hidden
</style>
