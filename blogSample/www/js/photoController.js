blogSample.controller('photoController', function($scope, $route){
    $scope.currentImage = "hi";     
    $scope.index = 0;
    $scope.imageArray = ["img/image0.jpg", "img/image1.jpg", "img/image2.gif", "img/image3.jpg"];
    $scope.getImage = function() {
        return $scope.imageArray[$scope.index];
    };
    
    $scope.addOne = function() {
        if($scope.index+2 > $scope.imageArray.length) {
            $scope.index = 0;
        }else {
            $scope.index = $scope.index+1;
        }
    }
    
    $scope.minusOne = function() {
        if($scope.index-1 < 0) {
            $scope.index = $scope.imageArray.length-1;
        }else {
            $scope.index = $scope.index-1;
        }
    }
});