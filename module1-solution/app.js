var LunchCheck = angular.module("LunchCheck", []);

LunchCheck.controller("LunchCheckController", ["$scope", function($scope) {

    $scope.itemsForLunch = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function(){
        
        if( !($scope.itemsForLunch === "") )
        {
            var listItemsForLunch = $scope.itemsForLunch.split(',');

            if(listItemsForLunch.length <= 3)
            {
                $scope.message = "Enjoy!";
            }
            else
            {
                $scope.message = "Too much!";
            }
        }
        else
        {
            $scope.message = "Please enter data first"
        }

        console.log(listItemsForLunch);
    };
}]);