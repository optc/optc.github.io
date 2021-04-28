(function() {
  'use strict';

  angular.module('app')
  .controller('ModalCtrl', ModalCtrl);

  function ModalCtrl($modalInstance, $interval, $window) {
    var self = this;

    self.countdown = 10;
    var redirect = $interval(function() {
      self.countdown--;
      if (!self.countdown)
        $window.location.href = 'https://optctimer.com';
    }, 1000);

    self.ok = function() {
      $window.location.href = 'https://optctimer.com';
    }

    self.cancel = function() {
      $interval.cancel(redirect);
      $modalInstance.dismiss('cancel');
    };
  }

})();