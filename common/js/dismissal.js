(function() {

var app = angular.module('optc');

app.controller('DismissalCtrl', function(ngDialog, $templateCache) {


    var dismissalPopupShown = true;

//    try { dismissalPopupShown = JSON.parse(localStorage.getItem('dismissalShown')) || false; }
//    catch (e) { }

    if (dismissalPopupShown) return;

    $templateCache.put('dismissal',
        '<div>' +
            '<h4>Important Notice</h4>' +
            '<div id="dismissalBody">' +
                '<div>I\'m picking up this project for now.<br> For the beggining you can at least expect updates for the DB part of the project. It will probably be a while before I understand the rest of the code.</div>' +
                '<div>That\'s it for now.</div>' +
                '<div><br>You won\'t be shown this popup again once you click on the button.</div>' +
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
