var myVideo = angular.module('myVideo', [])

myVideo.controller('PlayListController', ['$http', '$scope', '$sce', function($http, $scope, $sce){
	var playList = this
	playList.videos = []

	$scope.test = function(videoId) {
		var src = "http://www.youtube.com/embed/" + videoId + "?rel=0"
		return $sce.trustAsResourceUrl(src)
	}

	$http.get('/datas/videos.json').success(function(data){
		playList.videos = data.result
	})

}])
