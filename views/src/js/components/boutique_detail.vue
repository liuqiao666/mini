<template>
	<div>
		<div class="container" style="padding: 0px;">
			<div class="row">
				<div class="col">
					<div id="demo" class="carousel slide" data-ride="carousel">
						<ul class="carousel-indicators">
					    <li data-target="#demo" data-slide-to="0" class="active"></li>
					    <li data-target="#demo" data-slide-to="1"></li>
					    <li data-target="#demo" data-slide-to="2"></li>
						</ul>
					</div>
  <!-- 轮播图片 -->
  				<div class="carousel-inner">
			    	<div class="carousel-item active">
			      	<img src="/img/1.jpg" class="img-fluid">
			        <div class="carousel-caption">
			    			<h3>MINI style</h3>
			  			</div>
			    	</div>
			    </div>
    
    <div class="carousel-item">
      <img src="/img/2.jpg" class="img-fluid">
        <div class="carousel-caption">
    	<h3>MINI style</h3>
    	</div>
    </div>   

    <div class="carousel-item">
      <img src="/img/3.jpg" class="img-fluid">
        <div class="carousel-caption">
    	<h3>MINI style</h3>
    	</div>
    </div>
 </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

<div class="container">
  <div class="row">
    <div class="col-8"><font size="2"><b>带拉链开口的周末旅行包</b></font></div>
    <div class="col-4"><font size="1">我的积分：400</font></div>
 </div>
 <div class="row">
 </div>
</div>

<div class="container" style="margin-top: 20px;">
	<div class="row">
		<div class="col-5" style="margin-left: 15px;">
		<img src="/img/MINI-STYLE1_01.gif" class="img-fluid"/>
		</div>
		<div class="col-5" style="margin-left: 20px;">
		<img src="/img/MINI-STYLE1_01.gif" class="img-fluid"/>
		</div>
	</div>
	<div class="row" style="margin-top: 25px;">
	 <button type="button" class="btn btn-outline-primary" style="margin-left: 20px;">￥393</button>
	 <button type="button" class="btn btn-outline-dark"  style="margin-left: 20px;">积分:666</button>
	</div>
    <div class="row">
    	<div class="col" style="padding: 20px 20px;">
    	<p>本章将讲解字体图标（Glyphicons），并通过一些实例了解它的使用。
    		Bootstrap 捆绑了 200 多种字体格式的字形。
    		首先让我们先来理解一下什么是字体图标。
    	</p>
    	</div>
    </div>
    </div>
</div>

<div class="container">
  <div class="row" style="background: #E9ECEF;">
    <div class="col"><img src="/img/cart.png" style="margin-left: 25px;box-shadow: none;"></div>
    <div class="col" style="margin-top: 9px;"><a href="#">加入购物车</a></div>
    <div class="col" style="margin-top: 9px;"><a href="#">立即购买</a></div>
  </div>
</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	    }
	  },
	  watch: {
	  },
	  methods: {
	    
	  }
	}
</script>