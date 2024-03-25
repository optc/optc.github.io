angular.module('app')

	.controller('LocaleCtrl', function ($scope, $translate, localStorageService) {
		var self = this;
		self.locale = localStorageService.get('locale');
		self.flag = localStorageService.get('flag');
		if (self.locale !== null){
			$translate.use(self.locale);
			moment.locale(self.locale);
		} else
			moment.locale('en');

		$scope.$on('pls.onLanguageChanged', function(evt, lang){
			self.locale = (lang.lang.id.substring(0,2));
			$translate.use(self.locale);
			localStorageService.set('locale', self.locale);
			localStorageService.set('flag', lang.lang.id);
		});

		$scope.plsModel = {
			languages: [
				{id: 'en_US',title: 'English (US)',name: ' English (US)',flagImg: 'images/flags/us.png',flagTitle: 'United States'},
				{id: 'fr_FR',title: 'French (France)',name: ' Français (France)',flagImg: 'images/flags/fr.png',flagTitle: 'France'},
				// {id: 'it_IT',title: 'Italian',name: ' Italiano',flagImg: 'images/flags/it.png',flagTitle: 'Italy'},
				{id: 'de_DE',title: 'German',name: ' Deutsch',flagImg: 'images/flags/de.png',flagTitle: 'Germany'},
				{id: 'es_ES',title: 'Spanish',name: ' Español',flagImg: 'images/flags/es.png',flagTitle: 'Spain'},
				// {id: 'jp_JP',title: 'Japanese',name: ' 日本語',flagImg: 'images/flags/jp.png',flagTitle: 'Japan'},
				// {id: 'cn_CN',title: 'Simplified Chinese (China)',name: ' 中文(简体)',flagImg: 'images/flags/cn.png',flagTitle: 'China'},
			]
		};
	});