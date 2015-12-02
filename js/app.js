var myVideo = angular.module('myVideo', [])

myVideo.directive('videoThumbnail', function() {
	return {
		restrict : 'E',
		templateUrl : '/directives/video-thumbnail.html'
	}
})

myVideo.directive('videoDetail', function() {
	return {
		restrict : 'E',
		templateUrl : '/directives/video-detail.html'
	}
})

myVideo.controller('PlayListController', ['$http', '$scope', '$sce', function($http, $scope, $sce){
	var playList = this
	playList.videos = []

	$http.get('/datas/videos.json').success(function(data){
		playList.videos = data.result
	})

	$scope.viewDetails = function(index) {
		if(playList.videos.length > 0) {
			var modalArea = $('#videoModal')
			var videoData = playList.videos[index]

			// stop video when we
			modalArea.on('hide.bs.modal', function(e){
				modalArea.find('.video-frame').attr('src', '')
			})

			modalArea.find('.modal-title').text(videoData.snippet.title)
			modalArea.find('.video-desc').text(videoData.snippet.description)
			modalArea.find('.video-frame').attr('src', 'http://www.youtube.com/embed/' + videoData.snippet.resourceId.videoId);
			modalArea.modal('show')
		}
	}
}])