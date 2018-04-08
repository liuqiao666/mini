<template>
<div>
	<div class="container">
	<div class="row">
		<div class="col-4">
			<img src="img/MINI-STYLE1_01.gif" class="img-fluid" style="box-shadow: 4px 4px 4px #888888;">
		</div>
		<div class="col-6">
  		<div class="row">
  			<div class="col-9">
  				<p>MINI行李包</p>
  			</div>
  		</div>
  		<div class="row">
  		<div class="col" style="padding-top: 35px;">
			<img src="img/integral.png" style="box-shadow: none;">3900积分&nbsp;&nbsp;￥390.00
		</div>
       </div>
    </div>
   </div>
  </div>

<div class="container" style="padding-top: 25px;">
  <div class="row">
    <div class="col">颜色分类</div>
  </div>
  <div class="row">
    <div class="col d">  
    <div class="btn-group" style="margin-bottom: 5px;">
    <input name="" id="btn"  type="button" onclick="dj(this);" class="flag hq_hy" value="黑色"></input>
    <input name="" id="btn"  type="button" onclick="dj(this);" class="flag hq_zsh" value="红色"></input>
    </div>
  </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col">尺寸</div>
  </div>
  <div class="row">
    <div class="col d">  
    <div class="btn-group" style="margin-bottom: 5px;">
    <input name="" class="flag hq_hh" type="submit" onclick="djj(this);" value="S"/>
    <input name="" class="flag hq_zz" type="submit" onclick="djj(this);" value="M"/>
    </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col">购买数量</div>
  </div>
<div class="cartBox">
 <div class="order_lists">
  <div class="row d">
    <div class="col-8">
       <div class="list_price">
            <h6 class="price"></h6>
       </div>
     </div>
       <div class="col-4" align="center" style="padding-bottom: 8px;">
        <div class="amount_box">
        <a href="javascript:;" class="reduce reSty">-</a>
        <input name="" value="1" class="sum" style="padding-left: 5px;"></input>
        <a href="javascript:;" class="plus">+</a>
       </div>
       </div>
    </div>
  </div>
</div>
</div>

<div class="container">
	 <div class="row">
	    <div class="col">
	      <label>收货人</label>
	      <input type="text" name="" class="form-control dd">
	    </div>
	 </div>
	 <div class="row">
	    <div class="col">
	      <label>手机</label>
	      <input type="text" name="" class="form-control dd">
	    </div>
	 </div>
	 <div class="row">
	    <div class="col">
	      <label>收货地址</label>
	      <input type="text" name="" class="form-control dd">
	    </div>
	</div>
</div>

<div class="container" style="margin-top: 30px;">
  <div class="row" style="background-color: #E9ECEF;">
    <div class="col" style="border-bottom: none;margin-left: 240px;">
    	<a href="#"><b>立即购买>>></b></a>
    </div>
  </div>
</div>
	</div>
</template>

<script>
    $(function () {
    //加载事件
        var collection = $(".flag");
        $.each(collection, function () {
            $(this).addClass("start");
        });
    });
    //单击事件
    function dj(dom) {
        var collection = $(".flag");
        $.each(collection, function () {
            $(this).removeClass("end");
            $(this).addClass("start");
        });
        $(dom).removeClass("start");
        $(dom).addClass("end");
    }
    $(function () {
    //加载事件
        var collection = $(".flag");
        $.each(collection, function () {
            $(this).addClass("ss");
        });
    });
    //单击事件
    function djj(dom) {
        var collection = $(".flag");
        $.each(collection, function () {
            $(this).removeClass("ee");
            $(this).addClass("ss");
        });
        $(dom).removeClass("ss");
        $(dom).addClass("ee");
    }

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
<style type="text/css">
	.row{padding-top: 8px;}
</style>