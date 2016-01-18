blogSample.controller('photoController', function($scope, $route){
    $scope.currentImage = "hi";     
    $scope.index = 0;
    $scope.imageArray = ["img/image0.jpg", "img/image1.jpg", "img/image2.gif", "img/image3.jpg"];
    $scope.phoneText = "";
    $scope.text0 = "This is the first phone";
    $scope.text1 = "This is the second phone";
    $scope.text2 = "This is the third phone";
    $scope.text3 = "Here is another phone";
    $scope.textArray = [$scope.text0, $scope.text1, $scope.text2, $scope.text3];
    
    $scope.getImage = function() {
        return $scope.imageArray[$scope.index];
    };
    
    $scope.addOne = function() {
        if($scope.index+2 > $scope.imageArray.length) {
            $scope.index = 0;
        }else {
            $scope.index = $scope.index+1;
        }
        $scope.phoneText = "";
    }
    
    $scope.minusOne = function() {
        if($scope.index-1 < 0) {
            $scope.index = $scope.imageArray.length-1;
        }else {
            $scope.index = $scope.index-1;
        }
        $scope.phoneText = "";
    }
    
    $scope.getText = function() {
        $scope.phoneText = $scope.textArray[$scope.index];
    }
});