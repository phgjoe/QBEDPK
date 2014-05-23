jQuery.noConflict();

jQuery(document).ready(function() {	

	if(jQuery('.ie9').length){
		jQuery('body').click();
	}
	
	jQuery( 'div[class="leftpanel3"]' ).on( "panelopen", function( event, ui ) {
	
		jQuery('div[id="panelX"]').show();
		jQuery('div[id="panelLines"]').hide();
	} );
	jQuery( 'div[class="leftpanel3"]' ).on( "panelclose", function( event, ui ) {
		
		jQuery('div[id="panelX"]').hide();
		jQuery('div[id="panelLines"]').show();
	} );


	if(jQuery(window).height() < 683){
		jQuery('#footer .ten').css('padding-left', '300px');
	}

	jQuery( window ).resize(function() {
		if(jQuery(window).height() < 683){
			jQuery('#footer .ten').css('padding-left', '300px');
		}
		else{
			jQuery('#footer .ten').css('padding-left', '20px');
		}
	});
	

});

