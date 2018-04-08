<template>
  <div>
    <div class="container" align="center" style="margin-top: 34px;">
      <div class="row">
        <div class="col">
          <img src="img/2.jpg" class="rounded-circle" width="150px" height="150px" alt="Cinque Terre"> 
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b>用户名</b>
        </div>
      </div>
    </div>  
    <div class="container" style="margin-top: 50px;">
      <div id="accordion">
        <div class="card">
          <div class="card-header">
            <div class="has-feedback">
              <a @click="changeFeedback('feedback-menu1')" class="card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                  	消息中心
                <span style="float: right;" class="glyphicon glyphicon-menu-down" id="feedback-menu1" ></span>
              </a>
            </div>
          </div>
          <div id="collapseOne" class="collapse show">
            <div class="card-block">
              <div class="container">
                <div class="row">
                  <div class="col-9">
                    ● 欢迎入会，您的积分已删除。
                  </div>
                  <div class="col-3">
                    1月1日
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div class="card">
            <div class="card-header">
              <div class="has-feedback">
                <a @click="changeFeedback('feedback-menu2')" class="collapsed card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                  	我的积分
                  <span style="float: right;" class="glyphicon glyphicon-menu-right" id="feedback-menu2" ></span>
                </a>
              </div>      
            </div>
            <div id="collapseTwo" class="collapse">
              <div class="card-block">
                <div class="container">
                  <div class="row">
                    <div class="col" style="border-bottom: solid 1px; padding: 10px;">
                      <h6>当前积分：500</h6>
                    </div>
                  </div>
                  <div class="row" style="padding-top: 10px;">
                    <div class="col">
                      ● 2018.1.11
                    </div>
                    <div class="col">
                                               参加活动
                    </div>
                    <div class="col">
                      -100     
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    changeFeedback(id) {
      let str = document.getElementById(id).className;
      let tag = str.substring(25,str.length);
      if(tag == "right") {
        document.getElementById(id).className = "glyphicon glyphicon-menu-down";
      }
      else {
        document.getElementById(id).className = "glyphicon glyphicon-menu-right";
      }
    }
  }
}
</script>
