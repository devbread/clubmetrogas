function scroll_to_class(e,s){var l=$(e).offset().top-s;$(window).scrollTop()!=l&&$("html, body").stop().animate({scrollTop:l},0)}function bar_progress(e,s){var l=e.data("number-of-steps"),a=e.data("now-value"),i=0;"right"==s?i=a+100/l:"left"==s&&(i=a-100/l),e.attr("style","width: "+i+"%;").data("now-value",i)}$(document).ready(function(){$("a[href='#top']").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})}),jQuery(document).ready(function(){$(".f1 fieldset:first").fadeIn("slow"),$('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on("focus",function(){$(this).removeClass("input-error")}),$(".f1 .btn-next").on("click",function(){var e=$(this).parents("fieldset"),s=!0,l=$(this).parents(".f1").find(".f1-step.active"),a=$(this).parents(".f1").find(".f1-progress-line");e.find('input[type="text"], input[type="password"], textarea, input[type="checkbox"]').each(function(){""==$(this).val()?($(this).addClass("input-error"),s=!1):$(this).removeClass("input-error")}),s&&e.fadeOut(400,function(){l.removeClass("active").addClass("activated").next().addClass("active"),bar_progress(a,"right"),$(this).next().fadeIn(),scroll_to_class($(".f1"),20)})}),$(".f1 .btn-previous").on("click",function(){var e=$(this).parents(".f1").find(".f1-step.active"),s=$(this).parents(".f1").find(".f1-progress-line");$(this).parents("fieldset").fadeOut(400,function(){e.removeClass("active").prev().removeClass("activated").addClass("active"),bar_progress(s,"left"),$(this).prev().fadeIn(),scroll_to_class($(".f1"),20)})}),$(".f1").on("submit",function(e){$(this).find('input[type="text"], input[type="password"], textarea').each(function(){""==$(this).val()?(e.preventDefault(),$(this).addClass("input-error")):$(this).removeClass("input-error")})}),$("#toggleButton").click(function(e){var s=this;$("#disclaimer").slideToggle("slow",function(){}),e.preventDefault()}),$("#closer").click(function(e){var s=this;$("#disclaimer").slideToggle("slow",function(){}),e.preventDefault()})});var max_fields=10,wrapper=$(".input_fields_wrap"),add_button=$(".add_field_button"),x=1;$(add_button).click(function(e){e.preventDefault(),max_fields>x&&(x++,$(wrapper).append('<div><div class="row" style="position:relative"> <div class="col-xs-12 col-sm-6 col-lg-2"> <div class="form-group"> <label for="f1-first-name" class="sr-only">Nombre</label> <input id="f1-first-name" type="text" name="f1-first-name" placeholder="Nombre" class="f1-first-name form-control"/> <div class="errorFields er"> <p>Debes ingresar su apellido</p> </div> </div> </div> <div class="col-xs-12 col-sm-6 col-lg-2"> <div class="form-group"> <label for="f1-last-name" class="sr-only">Apellido</label> <input id="f1-last-name" type="text" name="f1-last-name" placeholder="Apellido" class="f1-last-name form-control"/> <div class="errorFields er"> <p>Debes ingresar su apellido</p> </div> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2"> <div class="form-group"> <label for="f1-email" class="sr-only">Email</label> <input id="f1-email" type="text" name="f1-email" placeholder="Email..." class="f1-email form-control"/> <div class="errorFields er"> <p>Debes ingresar su email</p> </div> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2"> <div class="form-group"> <label for="f1-email" class="sr-only">Confirma tu Email</label> <input id="f1-email" type="text" name="f1-email" placeholder="Confirma tu email" class="f1-email form-control"/> <div class="errorFields er"> <p>Debes confirmar su email</p> </div> </div> </div> <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3"> <div class="form-group"> <label for="f1-email" class="sr-only">RUT</label> <input id="f1-first-name" type="text" name="f1-first-name" placeholder="Confirma tu email" class="f1-first-name form-control"/> <div class="errorFields er"> <p>Debes ingresar su RUT </p> </div> </div> </div> <a href="#" class="remove_field"> <i class="ion-close-circled"></i> </a> </row> </div>'))}),$(wrapper).on("click",".remove_field",function(e){e.preventDefault(),$(this).parent("div").remove(),x--});