var React = require('react');
var superagent = require('superagent');
var Top10Item = require('./top10item.jsx');

var Top10List = React.createClass({
	getInitialState() {
		return {
			items: []
		};
	},
	componentDidMount() {
		superagent
			.get(this.props.url)
			.end((err, res) => {
				if (res.ok) {
					this.setState({
						items: res.body.results.collection1
					});
				}
			});
	},
	render() {
		var items = this.state.items.slice(0, 10).map((item) => {
			return (
				<Top10Item key={item.index} title={item.title.text} />
			);
		});

		return (
			<div>
				<h1>Top 10</h1>
				<h3>{this.props.title}</h3>
				{items}
			</div>
		);
	}
});

module.exports = Top10List;
