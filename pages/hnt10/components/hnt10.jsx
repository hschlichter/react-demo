var React = require('react');
var Top10List = React.createFactory(require('../../../shared/components/top10list'));

var HNT10 = React.createClass({
	render: function () {
		return (
			<div>
				<Top10List
					title="hacker news"
					url="https://www.kimonolabs.com/api/c30pdwri"
					/>

				<Top10List
					title="olbg football tips"
					url="https://www.kimonolabs.com/api/3tjqsp0k"
					/>
			</div>
		);
	}
});

module.exports = HNT10;
