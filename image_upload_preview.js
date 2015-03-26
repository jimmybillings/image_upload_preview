'use strict';

angular.module('').directive('inputThumbnail', function(){
  return {
    
    restrict: 'A',
    link: function($scope, $element) {

      $element.find('input').on('change', function(event) {

        if (event.target.files && event.target.files[0]) {
          
          var reader = new FileReader();
          
          reader.onload = function (e) {
            $element.append('<img src="'+e.target.result+'" width="150" height="200" />');
          };

          reader.readAsDataURL(event.target.files[0]);
        
        }

      });

    };

  };

});
