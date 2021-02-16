<template>
	<div>
		<div class="services">
			<div class="container">
				<div class="services-head">
					<h2>RANGE OF SERVICES</h2>
					<div class="flex jlr">
						<div class="left">
							<h3>服务领域</h3>
						</div>
						<!--左侧-->
						<div class="right">
							<ul class="services-nav flex">
								<li v-for="(item,index) in list" :class="{'active':index==reId}" @mouseenter="tab(index)">{{item.label}}</li>
							</ul>
						</div>
						<!--导航-->
					</div>
				</div>
			</div>
			<!--头部区域-->
			<div class="swiper-container services-banner">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in list"><img :src="item.url"></div>
				</div>
			</div>
			<!--轮播图-->
		</div>
	</div>
</template>
<script>
	import a1 from '../../public/img/uploads/images/20200608/d82a9b0651ee357b32dc439e4e730833.jpg'
	import a2 from '../../public/img/uploads/images/20200608/83314e8ddbeb331a5cd1289b7bc99e94.jpg'
	import a3 from '../../public/img/uploads/images/20200608/2d576e60322f1b9796f253311b39a21f.jpg'
	import a4 from '../../public/img/uploads/images/20200608/dcc73884c8079ee0a04ec97544db0074.jpg'
	import a5 from '../../public/img/uploads/images/20200608/576d95a1488c72281797472bceea532c.jpg'
	import a6 from '../../public/img/uploads/images/20200608/740d7c5174cfc6fb9ae59b96a1a77890.jpg'
	export default {
		data() {
			return {
				swiper: null, //swiper 变量
				reId: 0, //当前在第几个swiper-item
				list: [{ //图文列表
					label: '文旅度假区',
					url: a1
				}, {
					label: '室内乐园',
					url: a2
				}, {
					label: '主题公园',
					url: a3
				}, {
					label: '特色小镇',
					url: a4
				}, {
					label: '田园综合体',
					url: a5
				}, {
					label: '创意产品',
					url: a6
				}]
			}
		},
		methods: {
			tab(i) {
				this.reId = i //鼠标滑过添加样式
				this.swiper.slideTo(i, 300, false); //切换到第I个slide，速度为300ms
			}
		},
		mounted() {
			const that = this
			that.swiper = new Swiper('.swiper-container', { //初始化Swiper插件
				spaceBetween: 30,
				effect: 'fade',
				on: {
					transitionEnd: function() {//滚动结束
						that.reId = that.swiper.realIndex//手动滑动改变Tab
					}
				},
			});
		}
	}
</script>
<style scoped="scoped">
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul li {
	list-style: none;
}

img {
	max-width: 100%;
	max-height: 100%;
	display: block;
}
body{
	width: 100%;
	height: 100%;
	overflow: auto;
	background: #fff;
	font-size: 14px;
	color: #333;
}

a {
	text-decoration: none;
}
.flex {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}

.flex.jlr {
	justify-content: space-between;
}
.container {
	width: 1440px;
	margin: 0 auto;
}

.services-head {
	margin-bottom: 55px;
}

.services-head h2 {
	font-weight: bold;
	font-size: 46px;
	margin: 0 0 26px;
	transition: 0.3s;
}

.services-head .left h3 {
	font-size: 30px;
	margin: 0;
	font-weight: 400;
	transition: 0.3s;
}
.services-head .right .services-nav{margin-top: 20px;}
.services-head .right .services-nav li {
	font-size: 16px;
	color: #666;
	margin: 0 20px 0 0;
	padding: 0 15px 20px;
	border-bottom: 2px solid transparent;
	cursor: pointer;
	-webkit-user-select: none;
	user-select: none;
	transition: 0.3s;
}

.services-head .right .services-nav li.active {
	color: #faa635;
	border-bottom: 2px solid #faa635;
}
.services-banner{height: 650px; overflow: hidden;}
.services-banner img{width: 100%; height: 100%; object-fit: cover;}
</style>
