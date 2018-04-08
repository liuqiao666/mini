<template>
	<div>
		<div class="container">
	<div class="row">
		<div class="col-12">
			<div id="demo" class="carousel slide" data-ride="carousel">
			<ul class="carousel-indicators">
			    <li data-target="#demo" data-slide-to="0" class="active"></li>
			    <li data-target="#demo" data-slide-to="1"></li>
			    <li data-target="#demo" data-slide-to="2"></li>
			</ul>
		</div>
	</div>
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/1.jpg" class="img-fluid">
        <div class="carousel-caption">
    	<h3>MINI style</h3>
  		</div>
    </div>
    
    <div class="carousel-item">
      <img src="img/2.jpg" class="img-fluid">
        <div class="carousel-caption">
    	<h3>MINI style</h3>
    	</div>
    </div>   

    <div class="carousel-item">
      <img src="img/3.jpg" class="img-fluid">
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

<div class="container" style="margin-top: 20px;">
	<div class="row">
		<div class="col" style="box-shadow: 4px 4px 4px #888888;">
		<img src="img/MINI-STYLE1_01.gif" class="img-fluid"  style="box-shadow:none ;"/>
		<p>MINI儿童侵染T桖</p>
		<p>￥166积分</p>
		</div>
		<div class="col" style="box-shadow: 4px 4px 4px #888888;margin-left: 5px;">
		<img src="img/MINI-STYLE1_01.gif" class="img-fluid"  style="box-shadow:none ;"/>
		<p>MINI儿童侵染T桖</p>
		<p>￥166积分</p>
		</div>
	</div>
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