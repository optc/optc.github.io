angular.module('app')
	.controller('ContactCtrl', function ($scope, $http, $log, promiseTracker, $timeout) {
		$scope.subjectListOptions = [
			'Report a bug',
			'Make a suggestion',
			'Other'
			];

		$scope.subjectList = $scope.subjectListOptions[0];

		// Inititate the promise tracker to track form submissions.
		$scope.progress = promiseTracker();

		// Form submit handler.
		$scope.submit = function(form) {
			// Trigger validation flag.
			$scope.submitted = true;

			// If form is invalid, return and let AngularJS show validation errors.
			if (form.$invalid) {
				return;
			}

			var formData = {
					'From': $scope.name,
					'Email': $scope.email,
					'Subject': $scope.subjectList,
					'Comments': $scope.comments
			};
			console.log('formData = ', formData);
			// var $promise = $http.post('process.php', formData)
			var $promise = $http({
				url: 'process.php',
				method: 'POST',
				data: $.param(formData),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.success(function(data, status, headers, config) {
				console.log('data', data);
				console.log('status', status);
				console.log('headers', headers);
				console.log('config', config);
				if (data == 'OK') {
					$scope.name = null;
					$scope.email = null;
					$scope.subjectList = null;
					$scope.url = null;
					$scope.comments = null;
					$scope.messages = 'Your form has been sent!';
					$scope.submitted = false;
				} else {
					$scope.messages = 'Oops. We received your request, but there was an error processing it.';
					$log.error(data);
				}
			})
			.error(function(data, status, headers, config) {
				$scope.progress = data;
				$scope.messages = 'There was a network error. Try again later.';
				$log.error(data);
			})
			.finally(function() {
				// Hide status messages after three seconds.
				$timeout(function() {
					$scope.messages = null;
				}, 3000);
			});

			// Track the request and show its progress to the user.
			$scope.progress.addPromise($promise);
		};
	});