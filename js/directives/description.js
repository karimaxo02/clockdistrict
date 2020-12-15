(function() {

    let app = angular.module('descriptiontab', []);

    app.directive('descriptionTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/description-tab.html',
            controller: function(){
                console.log("description tab")
            }
        }
    })
})();