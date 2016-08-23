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
    	 // can't inject the service...why?? I have to put all the logic in the controller... :(
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

			//manipulate the JSON of response to obtain medal table data
			var results = data.data.map(function (el) {
				var newEl = {};
				newEl.country = el.country;
				switch (el.medal) {
					case 'Gold': newEl.gold = 1; newEl.silver = 0; newEl.bronze = 0; break;
					case 'Silver': newEl.gold = 0; newEl.silver = 1; newEl.bronze = 0; break;
					case 'Bronze': newEl.gold = 0; newEl.silver = 0; newEl.bronze = 1; break;
				}
				return newEl;
			});

			var grouped = [];

			results.forEach(function (a) {
			    if (!this[a.country]) {
			        this[a.country] = { country: a.country };
			        grouped.push(this[a.country]);
			    }
			    Object.keys(a).forEach(function (k) {
			        if (k !== 'country') {
			            this[k] = this[k] || 0;
			            this[k] += a[k];
			        }
			    }, this[a.country]);
			}, Object.create(null));

			for (var i=0; i<grouped.length; ++i) {
				grouped[i].total = grouped[i].gold + grouped[i].silver + grouped[i].bronze;
			}

			
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