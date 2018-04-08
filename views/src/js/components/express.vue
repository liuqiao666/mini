<template>
	<div>
		<div class="container" style="margin-top: 50px;">
	  <div class="row">
	    <div class="col-2"></div>
	    <div class="col-3"><img src="img/coordinates_fill.png" style="box-shadow: none;"></div>
	    <div class="col-7"><font face="微软雅黑" size="1">四川省成都市青羊区宽巷子22号</font></div>
	  </div>
	</div>

	<div class="container">
	    <div class="row">
			<div class="track-rcol">
				<div class="track-list">
					<ul>
						<li class="first">
							<i class="node-icon"></i>
							<span class="txt">已签收</span>
							<span class="txt">感谢您在京东购物，欢迎您再次光临！</span>
						</li>
						<li>
							<i class="node-icon"></i>
							<span class="txt">【京东到家】京东配送员【申国龙】已出发，联系电话【18410106883，感谢您的耐心等待，参加评价还能赢取京豆呦】</span>
						</li>
						<li>
							<i class="node-icon"></i>
							<span class="txt">运输中</span>
							<span class="txt">货物已到成都</span>
						</li>
						<li>
							<i class="node-icon"></i>
							<span class="txt">运输中</span>
							<span class="txt">货物已到重庆</span>
						</li>
						<li>
							<i class="node-icon"></i>
							<span class="txt">运输中</span>
							<span class="txt">货物已到南京</span>
						</li>
						<li>
							<i class="node-icon"></i>
							<span class="txt">已发货</span>
						</li>
					</ul>
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

<style scoped>
	body{font-size: 12px;}
		ul li{list-style: none;}
		.track-rcol{width: 900px}
		.track-list{margin: 20px; padding-left: 5px; position: relative;}
		.track-list li{position: relative; padding: 9px 0 0 25px; line-height: 40px; border-left: 1px solid #d9d9d9; color: #999;}
		.track-list li.first{color: red; padding-top: 0; border-left-color: #fff;border-left: 1px solid #d9d9d9;}
		.track-list li .node-icon{position: absolute; left: -6px; top: 50%; width: 11px; height: 11px; background: url(/img/order-icons.png)  -21px -72px no-repeat;}
		.track-list li.first .node-icon{background-position:0 -72px;}
		.track-list li .time{margin-right: 20px; position: relative; top: 4px; display: inline-block; vertical-align: middle;}
		.track-list li .txt{max-width: 600px; position: relative; top: 4px; display: inline-block; vertical-align: middle;}
		.track-list li.first .time{margin-right: 20px; }
		.track-list li.first .txt{max-width: 600px; }
</style>