(function() {

var app = angular.module('optc', [ 'ui.router', 'ui.bootstrap', 'ngDialog' ]);

Utils.parseUnits(false);

/******************
 * STATE HANDLING *
 ******************/

app.run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess',function(e) {
            var state = $state.current.name;
            $rootScope.isPopupVisible = (state != 'main');
        });
    });
	
app.factory("SpecialProbability",['$q',function($q){
	
    return {
        compute : function(data){
			var worker = new Worker('js/specialprobability.js');
			var defer = $q.defer();
			worker.addEventListener('message', function(e) {
				//console.log('Worker said: ', e.data);
				defer.notify(e.data);
				if (e.data.finished == true) {
					defer.resolve(e.data);
					worker.terminate();
				} 
			}, false);
	
            worker.postMessage(data); // Send data to our worker. 
            return defer.promise;
        }
    };

}]);


app.factory("SocketProbability",['$q',function($q){
	
    return {
        compute : function(data){
			var worker = new Worker('js/socketprobability.js');
			var defer = $q.defer();
			worker.addEventListener('message', function(e) {
				//console.log('Worker said: ', e.data);
				defer.notify(e.data);
				if (e.data.finished == true) {
					defer.resolve(e.data);
					worker.terminate();
				}
			}, false);
	
            worker.postMessage(data); // Send data to our worker. 
            return defer.promise;
        }
    };

}]);
	
})();

