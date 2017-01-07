/*global $, alert, jQuery, console, split*/
(function ($) {
    'use strict';
    
    $.fn.generatePassword = function (options) {
        
        var settings = {
          
            passCharachterSet: "a-z,#",
            passSize: "15",
            "passSeparate": ","
            
        };
       
        
        $.extend(settings, options);
        
        function generatePasswordString(elem) {
             
            $(elem).attr('dataCharachterSet', settings.passCharachterSet);
			
			var dataSet = settings.passCharachterSet.split(settings.passSeparate),
				
                possible = '',
				
                text = '',
				
                i = 0;
			
            
            if ($.inArray('a-z', dataSet) >= 0) {

                possible += 'abcdefghijklmnopqrstuvwxyz';

            }
            
            if ($.inArray('A-Z', dataSet) >= 0) {

                possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            }
            
            if ($.inArray('0-9', dataSet) >= 0) {

                possible += '0123456789';

            }
            
            if ($.inArray('#', dataSet) >= 0) {

                possible += '![]{}()%&*$#^<>~@|';

            }
            
            $(elem).attr('dataSize', settings.passSize);
			
            for (i; i < $(elem).attr('dataSize'); i = i + 1) {
                
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            }
            
            
            return text;
             
        }
        
        
        // Create a new password on page load
        
        this.children('input').each(function () {
            
            $(this).val(generatePasswordString($(this)));
            
        });
     
         
        
        // Create a new password When click Button
		
		var select = [];
        
        this.children(select).on('click', function () {
            
            $(this).siblings('input').val(generatePasswordString($(this).siblings('input')));
            
             
        });
		
		
        this.children('input').on('click', function () {
            
            $(this).select();
             
        });
        
    };
    
    
})(jQuery);