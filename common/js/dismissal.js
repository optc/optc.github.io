(function() {

var app = angular.module('optc');

app.controller('DismissalCtrl', function(ngDialog, $templateCache) {


    var dismissalPopupShown = true;

    try { dismissalPopupShown = JSON.parse(localStorage.getItem('dismissalShown')) || false; }
    catch (e) { }

    if (dismissalPopupShown) return;

    $templateCache.put('dismissal',
        '<div>' +
            '<h4>Discontinuation Notice</h4>' +
            '<div id="dismissalBody">' +
                '<div>The site will be no longer kept updated due to dwindling interest and lack of time. ' +
                'All past, present and future bugs will now become features.</div>' +
                '<div>Existing data will not be removed, you will still be able to browse it.</div>' +
                '<div>If someone is interested in picking up ' + 
                    '<a href="https://github.com/optc/optc.github.io">the torch</a>, you are welcome to do so.</div>' +
                '<div>You won\'t be shown this popup again once you click on the button.</div>' +
            '</div>' +
            '<br/>' +
            '<div class="ngdialog-buttons">' +
                '<button title="You\'re gonna carry that weight\" type="button" ' +
                    'class="ngdialog-button ngdialog-button-primary" ng-click="gotIt()">Got it</button>' +
            '</div>' +
        '</div>');

    ngDialog.open({
        template: 'dismissal',
        controller: function($scope) {
            $scope.gotIt = function() {
                try { localStorage.setItem('dismissalShown', JSON.stringify(true)); }
                catch (e) { }
                $scope.closeThisDialog();
            };
        }
    });


});

})();
