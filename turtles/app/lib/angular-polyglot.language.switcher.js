/*! Polyglot Language Switcher 2 - v1.0.0 - 2015-02-20
 * https://github.com/ixtendo/Polyglot-Language-Switcher-2/
 *
 * Copyright (c) 2015 Ixtendo;
 * Licensed under the MIT license */

angular.module('polyglotLanguageSwitcher', [])
    .directive('pls', ['$document', '$timeout', function ($document, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                id: '@',
                hoverTimeout: '@',
                openMode: '@',
                gridColumns: '@',
                showFlag: '@',
                selectedLang: '@'
            },
            controller: ['$scope', function ($scope) {
                var selectedLang = $scope.selectedLang;
                var columns = Math.round($scope.items.length / parseInt($scope.gridColumns));
                var hoverTimeout = $scope.hoverTimeout;
                if (!hoverTimeout) {
                    hoverTimeout = 200;
                }

                var hoverTimeoutPromise = null;
                var documentClickHandler = function () {
                    closePopup();
                    $scope.$apply();
                };
                var documentKeyHandler = function (evt) {
                    if (evt.keyCode === 27) {
                        closePopup();
                        $scope.$apply();
                    }
                };

                var prepareModel = function () {
                    $scope.model = {
                        opened: false,
                        selectedLang: null,
                        showFlag: ($scope.showFlag === 'true'),
                        columns: []
                    };

                    var column = [];
                    var i = 1;
                    angular.forEach($scope.items, function (item) {
                        item.selected = false;
                        if (!$scope.model.selectedLang && item.id === selectedLang) {
                            item.selected = true;
                            $scope.model.selectedLang = item;
                        }
                        column.push(item);
                        if (i % columns === 0) {
                            $scope.model.columns.push(column);
                            column = [];
                        }
                        i++;
                    });
                    if (column.length > 0) {
                        $scope.model.columns.push(column);
                        column = null;
                    }
                    if (!$scope.model.selectedLang) {
                        $scope.model.selectedLang = $scope.items[0];
                        $scope.items[0].selected = true;
                    }
                };

                var openPopup = function () {
                    if (!$scope.model.opened) {
                        $scope.$emit('pls.popupOpening', {id: $scope.id});
                        $scope.model.opened = true;
                        $document.on('click', documentClickHandler);
                        $document.on('keydown', documentKeyHandler);
                        $scope.$emit('pls.popupOpened', {id: $scope.id});
                    }
                    return false;
                };

                var closePopup = function () {
                    if ($scope.model.opened) {
                        $scope.$emit('pls.popupClosing', {id: $scope.id});
                        $document.off('click', documentClickHandler);
                        $document.off('keydown', documentKeyHandler);
                        $scope.model.opened = false;
                        $scope.$emit('pls.popupClosed', {id: $scope.id});
                    }
                    return false;
                };

                $scope.onMouseEnterOrLeave = function (mouseEnter) {
                    if (mouseEnter) {
                        if (hoverTimeoutPromise) {
                            $timeout.cancel(hoverTimeoutPromise);
                            hoverTimeoutPromise = null;
                        }
                        openPopup();
                    } else {
                        if (!hoverTimeoutPromise) {
                            hoverTimeoutPromise = $timeout(function () {
                                closePopup();
                            }, hoverTimeout);
                        }
                    }
                    return false;
                };

                $scope.onClick = function (evt) {
                    evt.stopPropagation();
                    if (!$scope.model.opened) {
                        openPopup();
                    } else {
                        closePopup();
                    }
                    return false;
                };

                $scope.onLanguageChanged = function (evt, selectedLang) {
                    evt.stopPropagation();
                    closePopup();
                    angular.forEach($scope.items, function (item) {
                        item.selected = false;
                    });
                    selectedLang.selected = true;
                    $scope.model.selectedLang = selectedLang;
                    $scope.$emit('pls.onLanguageChanged', {
                        id: $scope.id,
                        lang: angular.copy(selectedLang)
                    });
                    return false;
                };

                prepareModel();
            }],
            template: function (context, $scope) {
                var template = '<div class="polyglot-language-switcher ng-polyglot-language-switcher">';
                if ($scope.openMode === 'hover') {
                    template += '<a class="pls-selected-locale" href="#" data-ng-mouseenter="onMouseEnterOrLeave(true)" data-ng-mouseleave="onMouseEnterOrLeave(false)"><img data-ng-if="model.showFlag" data-ng-src="{{model.selectedLang.flagImg}}" alt="{{model.selectedLang.flagTitle}}"> {{model.selectedLang.name}}</a>' +
                    '<div class="pls-language-container-scrollable" data-ng-show="model.opened" data-ng-mouseenter="onMouseEnterOrLeave(true)" data-ng-mouseleave="onMouseEnterOrLeave(false)">';
                } else if ($scope.openMode === 'click') {
                    template += '<a class="pls-selected-locale" href="#" data-ng-click="onClick($event)"><img data-ng-if="model.showFlag" data-ng-src="{{model.selectedLang.flagImg}}" alt="{{model.selectedLang.flagTitle}}"> {{model.selectedLang.name}}</a>' +
                    '<div class="pls-language-container-scrollable" data-ng-show="model.opened">';
                }
                template += '<table class="pls-language-container"><tbody><tr>' +
                '<td data-ng-repeat="column in model.columns"><ul>' +
                '<li data-ng-repeat="item in column">' +
                '<a href="#" title="{{item.title}}" data-ng-click="onLanguageChanged($event, item)" data-ng-class="item.selected? \'pls-selected-locale\':\'\'"><img data-ng-if="model.showFlag" data-ng-src="{{item.flagImg}}" alt="{{item.flagTitle}}"> {{item.name}}</a>' +
                '</li>' +
                '</ul></td>' +
                '</tr></tbody></table>' +
                '</div>' +
                '</div>';
                return template;
            }
        };
    }]);