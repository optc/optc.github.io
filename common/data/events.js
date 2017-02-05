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
    },
    900: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    901: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    989: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1036: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1037: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1243: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1244: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1291: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1292: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1305: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1306: {
        onInsertion: function($scope) {
            if (++$scope.options.gOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [G] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.gOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [G] orbs support.' });
        }
    },
    1313: {
        onInsertion: function($scope) {
            if(window.specials[1221].turnedOn || window.specials[1222].turnedOn)
                $scope.notify({ text: 'While a beneficial orbs special is active, [STR] orbs will have no effect. Please use matching orbs as [STR] orbs' });
            else if (++$scope.options.strOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [STR] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.strOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [STR] orbs support.' });
        }
    },
    1314: {
        onInsertion: function($scope) {
            if(window.specials[1221].turnedOn || window.specials[1222].turnedOn)
                $scope.notify({ text: 'While a beneficial orbs special is active, [STR] orbs will have no effect. Please use matching orbs as [STR] orbs' });
            else if (++$scope.options.strOrbsEnabled == 1)
                $scope.notify({ text: 'Enabling [STR] orbs support.' });
        },
        onRemoval: function($scope) {
            if (--$scope.options.strOrbsEnabled === 0)
                $scope.notify({ text: 'Disabling [STR] orbs support.' });
        }
    },
};
