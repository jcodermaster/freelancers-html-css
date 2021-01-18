jQuery(document).ready(function() {
    
    jQuery('.select-job').select2();

    jQuery('.business-category').select2();

	jQuery("#edu-description").maxLength({
		maxChars: 200,
		clearChars: false,
		countHolder: '.chars-count2',
		remainHolder: '.chars-remaining2',
		maxHolder: '.chars-max2',
		onLimitOver: function(){ jQuery('#edu-description').css('color', 'red'); jQuery('.chars-remaining2-container').css('color', 'red'); },
		onLimitUnder: function(){ jQuery('#edu-description').css('color', '#000'); jQuery('.chars-remaining2-container').css('color', '#000'); }
	});
	jQuery("#experience-description").maxLength({
		maxChars: 200,
		clearChars: false,
		countHolder: '.chars-count2',
		remainHolder: '.chars-remaining2',
		maxHolder: '.chars-max2',
		onLimitOver: function(){ jQuery('#experience-description').css('color', 'red'); jQuery('.chars-remaining2-container').css('color', 'red'); },
		onLimitUnder: function(){ jQuery('#experience-description').css('color', '#000'); jQuery('.chars-remaining2-container').css('color', '#000'); }
	});
	jQuery("#user-edit-about").maxLength({
		maxChars: 200,
		clearChars: false,
		countHolder: '.chars-count2',
		remainHolder: '.chars-remaining2',
		maxHolder: '.chars-max2',
		onLimitOver: function(){ jQuery('#user-edit-about').css('color', 'red'); jQuery('.chars-remaining2-container').css('color', 'red'); },
		onLimitUnder: function(){ jQuery('#user-edit-about').css('color', '#000'); jQuery('.chars-remaining2-container').css('color', '#000'); }
	});
	jQuery("#job-description-edit").maxLength({
		maxChars: 200,
		clearChars: false,
		countHolder: '.chars-count2',
		remainHolder: '.chars-remaining2',
		maxHolder: '.chars-max2',
		onLimitOver: function(){ jQuery('#job-description-edit').css('color', 'red'); jQuery('.chars-remaining2-container').css('color', 'red'); },
		onLimitUnder: function(){ jQuery('#job-description-edit').css('color', '#000'); jQuery('.chars-remaining2-container').css('color', '#000'); }
	});

	jQuery("#business-edit-about-1").maxLength({
		maxChars: 200,
		clearChars: false,
		countHolder: '.chars-count2',
		remainHolder: '.chars-remaining2',
		maxHolder: '.chars-max2',
		onLimitOver: function(){ jQuery('#business-edit-about-1').css('color', 'red'); jQuery('.chars-remaining2-container').css('color', 'red'); },
		onLimitUnder: function(){ jQuery('#business-edit-about-1').css('color', '#000'); jQuery('.chars-remaining2-container').css('color', '#000'); }
	});
	jQuery("#business-edit-about").maxLength({
		maxChars: 200,
		clearChars: false,
		countHolder: '.chars-count2',
		remainHolder: '.chars-remaining2',
		maxHolder: '.chars-max2',
		onLimitOver: function(){ jQuery('#business-edit-about').css('color', 'red'); jQuery('.chars-remaining2-container').css('color', 'red'); },
		onLimitUnder: function(){ jQuery('#business-edit-about').css('color', '#000'); jQuery('.chars-remaining2-container').css('color', '#000'); }
	});
	
	

    add_items('.skill-btn span', '#skills', '#selected-skills');
    delete_item('.delete-skill', '#selected-skills');

    add_items('.personal-skill-btn span', '#personal-skills', '#personal-selected-skills');
    delete_item('.delete-skill', '#personal-selected-skills');

    addBlockInfo('.add-education-btn', 'delete_education', '#education-form', '#education-holder');
    delete_item('.delete_education', '#education-holder');

    addBlockInfo('.add-experience-btn', 'delete_experience', '#experience-form', '#experience-holder');
    delete_item('.delete_experience', '#experience-holder');

    jQuery('.add-job-hour span').click( function(){

    	var hourOutput = "";
    	var jobDay = jQuery('#job-day').val();
    	var jobFrom = jQuery('#job-from').val();
    	var jobTo = jQuery('#job-to').val();
    	var jobFromID = jQuery('#job-from').find(':selected').attr('data-index');
    	var jobToID = jQuery('#job-to').find(':selected').attr('data-index');

    	hourOutput +='<div class="month-section month-section-last '+jobDay+'-'+jobFromID+'-'+jobToID+'"  data-name="'+jobDay+'-'+jobFromID+'-'+jobToID+'">';
              hourOutput +='<div class="month-select">';
                hourOutput +='<p>'+jobDay+'</p>';
              hourOutput +='</div>';
              hourOutput +='<div class="time-select">';
                hourOutput +='<p>'+jobFrom+'</p>';
              hourOutput +='</div>';
              hourOutput +='<div class="day-select">';
                hourOutput +='<p>'+jobTo+'</p>';
              hourOutput +='</div>';
              hourOutput +='<div class="icon-close delete_hour">';
                hourOutput +='<span><i class="fas fa-times"></i></span>';
              hourOutput +='</div>';
        hourOutput +='</div>';

        jQuery('#job-hour-holder').append(hourOutput);

    });

    delete_item('.delete_hour', '#job-hour-holder');

});

function add_items(add_btn, item_name, appendHolder){

			//var item_array = [];

    	    jQuery(add_btn).click( function(){

		    	var item_name_input = jQuery(item_name).val();
		    	var item_input_id = jQuery(item_name).find(':selected').attr('data-id');
		    	var item_date_title = jQuery(item_name).find(':selected').attr('data-title');

		    	

		    	if(jQuery(appendHolder).hasClass(item_input_id)) {
				    alert('Sorry the skill is already selected, please select another one!');
				} else {
				    //item_array.push(item_input_id);
				    jQuery(appendHolder).append('<div class="college-art skills-item '+item_date_title+'" data-index="'+item_input_id+'" data-name="'+item_date_title+'"><div class="modern-bachlor-text"><h5><b>' + item_name_input + '</b></h5></div><div class="icon-close delete-skill"><span><i class="fas fa-times"></i></span></div></div>');
				    jQuery(appendHolder).addClass(item_input_id);
				}

		    	
	    		

	    });

    }

function delete_item( delete_btn, appendHolder ){
    	jQuery(appendHolder).on('click', delete_btn, function(){
    		
    		var parentDiv = jQuery(this).parent().attr('data-name');
    		var parentId = jQuery(this).parent().attr('data-index');

    		jQuery('.' + parentDiv).fadeOut("slow", function(){
    			jQuery(this).remove();
    		});

    		jQuery(appendHolder).removeClass(parentId);

    		console.log(parentDiv);
	    });
}

function addBlockInfo(add_btn, deleteBtnClass, formID, appendHolder){

	jQuery(add_btn).click( function(){

		var values = {};

	    jQuery.each(jQuery(formID).serializeArray(), function (i, field) {
	        values[field.name] = field.value;
	    });

	    var getValue = function (valueName) {
	        return values[valueName];
	    };

	    var dateFrom = getValue('edu-date-from');
	    var dateTo = getValue('edu-date-to');
	    var inputCourse = getValue('edu-course');
	    var inputDesc = getValue('edu-description');

		var output = "";
		output +='<div class="college-art '+dateFrom+'-'+dateTo+'" data-name="'+dateFrom+'-'+dateTo+'">';
	        output +='<div class="modern-bachlor-text">';
	            output +='<p>'+dateFrom+' - '+dateTo+'</p>';
	            output +='<h5><b>'+inputCourse+'</b></h5>';
	            output +='<p>'+inputDesc+'</p>';
	        output +='</div>';
	        output +='<div class="icon-close '+deleteBtnClass+'">';
	            output +='<span><i class="fas fa-times"></i></span>';
	        output +='</div>';
	    output +='</div>';

    	jQuery(appendHolder).append(output);

	});

}