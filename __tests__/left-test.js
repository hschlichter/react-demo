
jest.dontMock('../public/js/components/left.jsx');
describe('Left', function() {
	it('does something', function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;

		var Left = require('../public/js/components/left.jsx');
		var left = TestUtils.renderIntoDocument(
			<Left />
		);

		var h1 = TestUtils.findRenderedDOMComponentWithTag(left, 'h1');
		expect(React.findDOMNode(h1).textContent).toEqual('Left!');

		var p = TestUtils.findRenderedDOMComponentWithTag(left, 'p');
		expect(React.findDOMNode(p).textContent).toEqual('Rendered on the client.');
	});
});
