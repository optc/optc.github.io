window.events = {
    879: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    880: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    }
};
