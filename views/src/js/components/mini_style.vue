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
			      <img src="/img/1.jpg" class="img-fluid">
			    </div>
    
			    <div class="carousel-item">
			      <img src="/img/2.jpg" class="img-fluid">
			    </div>   

			    <div class="carousel-item">
			      <img src="/img/3.jpg" class="img-fluid">
			    </div>
 				</div>
			</div>
		</div>

		<div class="container">
			<div class="row" style="padding-top: 30px;">
				<div class="col">
					<img src="/img/MINI-STYLE1_01.gif" class="img-fluid">
					<div class="heart" id="like1" rel="like">
						<div class="likeCount" id="likeCount1">14</div>
					</div>
				</div>
				<div class="col">
					<img src="/img/MINI-STYLE1_01.gif" class="img-fluid">
					<div class="heart " id="like2" rel="like">
						<div class="likeCount" id="likeCount2">14</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
$(document).ready(function(){

	$('body').on("click",'.heart',function(){
		
		var A=$(this).attr("id");
		var B=A.split("like");
		var messageID=B[1];
		var C=parseInt($("#likeCount"+messageID).html());
		$(this).css("background-position","")
		var D=$(this).attr("rel");
	   
		if(D === 'like') {      
			$("#likeCount"+messageID).html(C+1);
			$(this).addClass("heartAnimation").attr("rel","unlike");
		}
		else{
			$("#likeCount"+messageID).html(C-1);
			$(this).removeClass("heartAnimation").attr("rel","like");
			$(this).css("background-position","left");
		}
	});

});

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