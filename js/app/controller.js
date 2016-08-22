angular.module('appApp')
	.controller('MainCtrl', _mainCtrl);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
_mainCtrl.$inject = ['$scope'/*, 'commonServices'*/, '$http'];

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* @ngInject */
function _mainCtrl ($scope/*, commonServices*/, $http) {
    'use strict';

    var vm = this;
    vm.init = init;

    //--------------------------------------------------------------------------------------------------------------------------

    function init () {
    	 // can't inject the service...why??
    	 /*commonServices.find(function (err, data) {
	    	if (err) {
	    		console.log('error', err);
	    		return;
	    	}

	    	console.log(data);
	    	return;
	    });*/

	    var url = 'https://gist.githubusercontent.com/michaelfbradley/ced357ae693110f2d9343b85ac99d61d/raw/009a47f72b2d45ffe9e3a7a6cea4e2b0e1e1299a/athletic_medalists.json';

		$http.get(url)
		.then(function (data) {
			//success
			var results = data.data.map(function(el) {
				var country = {};
				country.country = el.country;
				country.medal = el.medal;
				return country;
			});
			console.log(results);
			return;
		},
		function () {
			//error
			var err = true;
			console.log('error on getting data', err);
			return;
		});
    }
}