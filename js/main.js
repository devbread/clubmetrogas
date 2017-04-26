$(document).ready(function(){

     $("a[href='#top']").click(function() {
         $("html, body").animate({ scrollTop: 0 }, "slow");
         return false;
      });

});

function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    // $.backstretch("assets/img/backgrounds/1.jpg");
    
    // $('#top-navbar-1').on('shown.bs.collapse', function(){
    // 	$.backstretch("resize");
    // });
    // $('#top-navbar-1').on('hidden.bs.collapse', function(){
    // 	$.backstretch("resize");
    // });
    
    /*
        Form
    */
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.f1 .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	// fields validation
    	parent_fieldset.find('input[type="text"], input[type="password"], textarea, input[type="checkbox"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}

    	});
    	// fields validation
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.f1'), 20 );
	    	});
    	}
    	
    });
    
    // previous step
    $('.f1 .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
    
    // submit
    $('.f1').on('submit', function(e) {
    	
    	// fields validation
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    });
    
    //togglebutton
    $('#toggleButton').click(function (event) {
        var button=this;
        $('#disclaimer').slideToggle('slow', function () {
        });
        event.preventDefault();
    });
    $('#closer').click(function (event) {
        var button=this;
        $('#disclaimer').slideToggle('slow', function () {
        });
        event.preventDefault();
    });


});



var max_fields      = 10; //maximum input boxes allowed
var wrapper         = $(".input_fields_wrap"); //Fields wrapper
var add_button      = $(".add_field_button"); //Add button ID

var x = 1; //initlal text box count
$(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
                x++; //text box increment
                //$(wrapper).append('<div><div class="ed-item base-100 formulario-direcciones"><div id="formulario-comprobante" class="ed-container main-center"><div class="ed-item base-100 web-30 no-padding"><input type="text" placeholder="Nombre" name="nombre"></div><div class="ed-item base-100 web-30 no-padding"><input type="text" placeholder="Apellido" name="apellido"></div><div class="ed-item base-100 web-30 no-padding"><input type="email" placeholder="Email" type="email" placeholder="mail@ejemplo.com" class="validate" name="xemail" id="xemail" required></div><a href="#" class="remove_field"><i class="ion-close-circled"></i></a></div></div></div></div>'); //add input box
                //$(wrapper).append('<div><div class="row" style="position:relative;"><div class="col-xs-12 col-sm-6 col-lg-2"><div class="form-group"><label for="f1-first-name" class="sr-only">Nombre</label><input id="f1-first-name" type="text" name="f1-first-name" placeholder="Nombre" class="f1-first-name form-control"/></div></div><div class="col-xs-12 col-sm-6 col-lg-2"><div class="form-group"><label for="f1-last-name" class="sr-only">Apellido</label><input id="f1-last-name" type="text" name="f1-last-name" placeholder="Apellido" class="f1-last-name form-control"/></div></div><div class="col-xs-12 col-sm-4 col-md-4 col-lg-2"><div class="form-group"><label for="f1-email" class="sr-only">Email</label><input id="f1-email" type="text" name="f1-email" placeholder="Email..." class="f1-email form-control"/></div></div><div class="col-xs-12 col-sm-4 col-md-4 col-lg-2"><div class="form-group"><label for="f1-email" class="sr-only">Confirma tu Email</label><input id="f1-email" type="text" name="f1-email" placeholder="Confirma tu email" class="f1-email form-control"/></div></div><div class="col-xs-12 col-sm-3 col-md-3 col-lg-3"><div class="form-group"><label for="f1-email" class="sr-only">RUT</label><input id="f1-first-name" type="text" name="f1-first-name" placeholder="Confirma tu email" class="f1-first-name form-control"/></div></div><a href="#" class="remove_field"><i class="ion-close-circled"></i></a></row></div>'); //add input box
                $(wrapper).append('<div><div class="row" style="position:relative"> <div class="col-xs-12 col-sm-6 col-lg-2"> <div class="form-group"> <label for="f1-first-name" class="sr-only">Nombre</label> <input id="f1-first-name" type="text" name="f1-first-name" placeholder="Nombre" class="f1-first-name form-control"/> <div class="errorFields er"> <p>Debes ingresar su apellido</p> </div> </div> </div> <div class="col-xs-12 col-sm-6 col-lg-2"> <div class="form-group"> <label for="f1-last-name" class="sr-only">Apellido</label> <input id="f1-last-name" type="text" name="f1-last-name" placeholder="Apellido" class="f1-last-name form-control"/> <div class="errorFields er"> <p>Debes ingresar su apellido</p> </div> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2"> <div class="form-group"> <label for="f1-email" class="sr-only">Email</label> <input id="f1-email" type="text" name="f1-email" placeholder="Email..." class="f1-email form-control"/> <div class="errorFields er"> <p>Debes ingresar su email</p> </div> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2"> <div class="form-group"> <label for="f1-email" class="sr-only">Confirma tu Email</label> <input id="f1-email" type="text" name="f1-email" placeholder="Confirma tu email" class="f1-email form-control"/> <div class="errorFields er"> <p>Debes confirmar su email</p> </div> </div> </div> <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3"> <div class="form-group"> <label for="f1-email" class="sr-only">RUT</label> <input id="f1-first-name" type="text" name="f1-first-name" placeholder="Confirma tu email" class="f1-first-name form-control"/> <div class="errorFields er"> <p>Debes ingresar su RUT </p> </div> </div> </div> <a href="#" class="remove_field"> <i class="ion-close-circled"></i> </a> </row> </div>'); //add input box
        }
});

$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
});
