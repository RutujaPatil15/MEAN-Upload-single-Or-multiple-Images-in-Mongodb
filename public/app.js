var app = angular.module('myapp', ['ngFileUpload']);
  
app.controller('MyCtrl', function($scope,$http,Upload){
  
//Upload Single File//
  $scope.dis=true;
  $scope.uploadFiles = function(file, errFiles) {
    Upload.base64DataUrl(file).then(function(url){ 
      console.log(url);
      $scope.myfile=url;
        $scope.dis=false;
        
    });
};
$scope.storefile=function(){
$http.post('/fileupload',{singlefile:$scope.myfile}).then(function (data) {
  console.log(data.data);
  alert('success');
 },function (data, status, headers, config) {
 alert('server error timeout');
});
}

// Upload Multiple Files//
$scope.upload =function(files,errFiles){
    Upload.base64DataUrl(files).then(function(urls){ 
    console.log(urls)
    $scope.myfiles=urls;
    $scope.dis=false;
          
    })
 }  
 
   $scope.submitfiles=function(){
    $http.post('/fileupload',{multifiles:$scope.myfiles}).then(function (data) {
      console.log(data.data);
      alert('success');
      },function (data, status, headers, config) {
      alert('server error timeout');
    });
  }
});

