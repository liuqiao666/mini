<template>
<div>
<div class="container" style="margin-top: 10px;">
  <div class="cartBox">
    <div class="order_lists">
      <div class="row">
		<div class="col-4"><img src="img/MINI-STYLE1_01.gif" class="img-fluid"></div>
        <div class="col-6">
	      <div class="row">
	      	<div class="col">
	      	MINI行李包
	      	</div>
	      </div>
	     <div class="row" style="margin-top: 30px;">
	     	<div class="col-6">
	         <div class="list_price">
	            <h6 class="price">￥320</h6>
	         </div>
	        </div>
           <div class="col-6" align="center">
	        <div class="amount_box">
	        <a href="javascript:;" class="reduce reSty">-</a>
	        <input name="" value="1" class="sum" style="padding-left: 10px;"></input>
	        <a href="javascript:;" class="plus">+</a>
	       </div>
	       </div>
      </div>
    </div>
   </div>
  </div>
 </div>
</div>

<div class="container" style="margin-top: 50px;">
  <div class="row gmh">姓名：
        <input type="text" name="" class="form-control" style="border: none;"></th>
  </div>
  <div class="row gmh">电话：
        <input type="text" name="" class="form-control" style="border: none;"></th>
  </div>
  <div class="row gmh">身份证：
        <input type="text" name="" class="form-control" style="border: none;"></th>
  </div>
</div>
<p style="margin-top: 30px;">用于购买保险</p>
<div class="container">
  <div class="row" style="margin-top: 30px;">
   <div class="col-6">
    <b><label><input checked="checked" type="radio" name="optradio">微信支付</label></b>
   </div>
   <div class="col-6">
    <b><label><input type="radio" name="optradio"></label>积分支付</b>
   </div>
  </div>
 </div>

<div class="container"  style="margin-top: 100px;">
  <div class="row"  style="background: #E9ECEF;">
    <div class="calBtn"><a href="#">立即支付</a></div>
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