<template>
	<div>
		<template v-if="$route.params.addr == 'other'">
			<div class="container" align="center">
		  	<div class="row">
		      <div class="col">
		        >>>非4S店购车的MINI车主（成都地区）认证
		      </div>
		  	</div>
			</div>
	   
			<div class="container" style="margin-top: 20px;">
			  <div class="row">
		      <div class="col-6">
		        <div class="form-group" id="uploadForm" enctype='multipart/form-data'>
		          <div class="fileinput fileinput-new" data-provides="fileinput"  id="exampleInputUpload">
		            <div class="fileinput-new thumbnail" id="imgg">
		              <img class="imgz" src="img/相机.png" alt="" style="box-shadow:none;"/>
		            </div>
		            <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;">
		            </div>
		            <div>
		              <span class="btn btn-file">
		              	<span class="fileinput-new">上传身份证件照</span>
		              	<span class="fileinput-exists">换一张</span>
		              	<input type="file" name="pic1" id="picID" accept="image/gif,image/jpeg,image/x-png">
		              </span>
		              <a href="javascript:;" class="btn btn-warning fileinput-exists" data-dismiss="fileinput">移除</a>
		            </div>
		          </div>
		        </div>
		    	</div>
		      <div class="col-6">
		        <div class="form-group" id="uploadForm" enctype='multipart/form-data'>
		          <div class="fileinput fileinput-new" data-provides="fileinput"  id="exampleInputUpload">
		            <div class="fileinput-new thumbnail" id="imgg">
		              <img class="imgz" src="img/相机.png" alt="" style="box-shadow:none;"/>
		            </div>
		            <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"></div>
		            <div>
		              <span class="btn btn-file">
		              	<span class="fileinput-new">上传行驶证件照</span>
		              	<span class="fileinput-exists">换一张</span>
		                  <input type="file" name="pic1" id="picID" accept="image/gif,image/jpeg,image/x-png">
		              </span>
		              <a href="javascript:;" class="btn btn-warning fileinput-exists" data-dismiss="fileinput">移除</a>
		            </div>
		          </div>
		        </div>
		    	</div>
		  	</div>
			</div>
		</template>
	    
		<div class="container" align="center" style="padding:0px 30px 30px 30px;">
		  <div class="row" style="margin-top: 20px;" align="left">
		    <div class="col">
		    	<form>
		    		<div class="row" style="border-bottom: solid 1px;">
			  			<div class="col-7">
			  				<div class="form-group">
			   					<label>姓氏:</label>
			   					<input type="text" class="form-control" placeholder="请填写购车人姓氏" style="border: none;">
			    			</div>
			  			</div>
			  			<div class="col-5">
								<div class="radio" style="margin-top: 30px;">
		    					<label>先生<input checked="checked" type="radio" name="optradio"></label>
		   						<label>女士<input type="radio" name="optradio"></label>
			 					</div>
							</div>
						</div>
			 			<div class="row" style="border-bottom: solid 1px;">
							<div class="col-8">
			   				<div class="form-group">
			     				<label>手机:</label>
			      			<input type="text" class="form-control" placeholder="请填写购车时预留电话" style="border: none;">
			    			</div>
			    		</div>
			  			<div class="col-4" style="margin-top: 32px;">
			  				<button type="button" name="button" id="button" class="btn btn-primary" data-toggle="button" onclick="myFunction()">获取验证码</button>
							</div>
						</div>
					</form>
			  </div>
			  </div>
			<div class="row" align="left" style="border-bottom: solid 1px;">
		    <div class="col">
		     <div class="form-group">
		      <label>验证码:</label>
		      <input type="text" class="form-control" style="border: none;" placeholder="请输入验证码">
		     </div>
		    </div>
			</div>
		</div>
		<div class="container" align="center" style="margin-top: 30px;">
		  <div class="row">
		   	<div class="col-12">
			  	<button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#myModal">提交</button>
			    <!-- 模态框（Modal） -->
					<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-body" style="background-color: #000000;color: #FFFFFF;">
									提交申请
								</div>
								<div class="modal-footer" style="height: 150px; margin-right: 59px;">
									<button type="button" class="btn btn-primary" data-dismiss="modal">等待审核
									</button>
								</div>
							</div><!-- /.modal-content -->
						</div><!-- /.modal -->
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
function myFunction() {
    x = document.getElementById("button");
    x.innerHTML = "已发送";
}
$(function () {
    $('#uploadSubmit').click(function () {
        var data = new FormData($('#uploadForm')[0]);
        $.ajax({
            url: 'xxx/xxx',
            type: 'POST',
            data: data,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status){
                    console.log('upload success');
                }else{
                    console.log(data.message);
                }
            },
            error: function (data) {
                console.log(data.status);
            }
        });
    });

})
+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer';

  var Fileinput = function (element, options) {
    this.$element = $(element);
    
    this.$input = this.$element.find(':file');
    if (this.$input.length === 0) return;

    this.name = this.$input.attr('name') || options.name;

    this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]');
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
    }

    this.$preview = this.$element.find('.fileinput-preview');
    var height = this.$preview.css('height');
    if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
      this.$preview.css('line-height', height)
    }
        
    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    };
    
    this.listen()
  };
  
  Fileinput.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this));
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this));
    
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this));
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  };

  Fileinput.prototype.change = function(e) {
    var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files;
    
    e.stopPropagation();

    if (files.length === 0) {
      this.clear();
      return
    }

    this.$hidden.val('');
    this.$hidden.attr('name', '');
    this.$input.attr('name', this.name);

    var file = files[0];

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader();
      var preview = this.$preview;
      var element = this.$element;

      reader.onload = function(re) {
        var $img = $('<img>');
        $img[0].src = re.target.result;
        files[0].result = re.target.result;
        
        element.find('.fileinput-filename').text(file.name);
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10));
        
        preview.html($img);
        element.addClass('fileinput-exists').removeClass('fileinput-new');

        element.trigger('change.bs.fileinput', files)
      };

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name);
      this.$preview.text(file.name);

      this.$element.addClass('fileinput-exists').removeClass('fileinput-new');
      
      this.$element.trigger('change.bs.fileinput')
    }
  };

  Fileinput.prototype.clear = function(e) {
    if (e) e.preventDefault();
    
    this.$hidden.val('');
    this.$hidden.attr('name', this.name);
    this.$input.attr('name', '');

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('');
    this.$element.find('.fileinput-filename').text('');
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists');
    
    if (e !== undefined) {
      this.$input.trigger('change');
      this.$element.trigger('clear.bs.fileinput')
    }
  };

  Fileinput.prototype.reset = function() {
    this.clear();

    this.$hidden.val(this.original.hiddenVal);
    this.$preview.html(this.original.preview);
    this.$element.find('.fileinput-filename').text('');

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new');
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists');
    
    this.$element.trigger('reset.bs.fileinput')
  };

  Fileinput.prototype.trigger = function(e) {
    this.$input.trigger('click');
    e.preventDefault()
  };

  var old = $.fn.fileinput;
  
  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('bs.fileinput');
      if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)));
      if (typeof options == 'string') data[options]()
    })
  };

  $.fn.fileinput.Constructor = Fileinput;

  $.fn.fileinput.noConflict = function () {
    $.fn.fileinput = old;
    return this
  };

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this);
    if ($this.data('bs.fileinput')) return;
    $this.fileinput($this.data());
      
    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault();
      $target.trigger('click.bs.fileinput');
    }
  });

}(window.jQuery);
</script>
<style type="text/css">
input{
box-shadow: none !important;
border: none;
outline: none;
}
.btn-file {
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}
.btn-file > input {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 23px;
  cursor: pointer;
  filter: alpha(opacity=0);
  opacity: 0;

  direction: ltr;
}
.fileinput {
  display: inline-block;
  margin-bottom: 9px;
}
.fileinput .form-control {
  display: inline-block;
  padding-top: 7px;
  padding-bottom: 5px;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: text;
}
.fileinput .thumbnail {
  display: inline-block;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
}
.fileinput .thumbnail > img {
  max-height: 100%;
}
.fileinput .btn {
  vertical-align: middle;
}
.fileinput-exists .fileinput-new,
.fileinput-new .fileinput-exists {
  display: none;
}
.fileinput-inline .fileinput-controls {
  display: inline;
}
.fileinput-filename {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.form-control .fileinput-filename {
  vertical-align: bottom;
}
.fileinput.input-group {
  display: table;
}
.fileinput.input-group > * {
  position: relative;
  z-index: 2;
}
.fileinput.input-group > .btn-file {
  z-index: 1;
}
.fileinput-new.input-group .btn-file,
.fileinput-new .input-group .btn-file {
  border-radius: 0 4px 4px 0;
}
.fileinput-new.input-group .btn-file.btn-xs,
.fileinput-new .input-group .btn-file.btn-xs,
.fileinput-new.input-group .btn-file.btn-sm,
.fileinput-new .input-group .btn-file.btn-sm {
  border-radius: 0 3px 3px 0;
}
.fileinput-new.input-group .btn-file.btn-lg,
.fileinput-new .input-group .btn-file.btn-lg {
  border-radius: 0 6px 6px 0;
}
.form-group.has-warning .fileinput .fileinput-preview {
  color: #8a6d3b;
}
.form-group.has-warning .fileinput .thumbnail {
  border-color: #faebcc;
}
.form-group.has-error .fileinput .fileinput-preview {
  color: #a94442;
}
.form-group.has-error .fileinput .thumbnail {
  border-color: #ebccd1;
}
.form-group.has-success .fileinput .fileinput-preview {
  color: #3c763d;
}
.form-group.has-success .fileinput .thumbnail {
  border-color: #d6e9c6;
}
.input-group-addon:not(:first-child) {
  border-left: 0;
}
</style>