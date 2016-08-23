describe('Medals controller', function () {

	beforeEach(module('appApp'));

	var controller;
	beforeEach(inject(function (_$controller_, _$httpBackend_) {
	    $scope = {};
	    controller = _$controller_('MainCtrl', { $scope: $scope });

	    $httpBackend = _$httpBackend_;

	    var mockInit = [
			{
			athlete: 'KOGO, Micah',
			country: 'KEN',
			sex: 'Men',
			event: '10000m',
			medal: 'Bronze'
			},
			{
			athlete: 'BEKELE, Kenenisa',
			country: 'ETH',
			sex: 'Men',
			event: '10000m',
			medal: 'Gold'
			},
			{
			athlete: 'SIHINE, Sileshi',
			country: 'ETH',
			sex: 'Men',
			event: '10000m',
			medal: 'Silver'
			},
			{
			athlete: 'FLANAGAN, Shalane',
			country: 'USA',
			sex: 'Women',
			event: '10000m',
			medal: 'Bronze'
			},
			{
			athlete: 'DIBABA, Tirunesh',
			country: 'ETH',
			sex: 'Women',
			event: '10000m',
			medal: 'Gold'
			},
			{
			athlete: 'ABEYLEGESSE, Elvan',
			country: 'TUR',
			sex: 'Women',
			event: '10000m',
			medal: 'Silver'
			},
			{
			athlete: 'DIX, Walter',
			country: 'USA',
			sex: 'Men',
			event: '100m',
			medal: 'Bronze'
			}
		];

	    $httpBackend.whenGET('https://gist.githubusercontent.com/michaelfbradley/ced357ae693110f2d9343b85ac99d61d/raw/009a47f72b2d45ffe9e3a7a6cea4e2b0e1e1299a/athletic_medalists.json')
	    .respond(200, mockInit);
	}));

	it('should load default grouped', function() {
		controller.init(); 
	    $httpBackend.flush();

	    expect(controller.valid).toBe(true);
	    expect(controller.grouped).not.toEqual(undefined);
	});
});