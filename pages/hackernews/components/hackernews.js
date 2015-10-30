import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../../actions/hackernews';
import Top10List from '../../../components/top10list';

class HackerNews extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetch());
	}

	render() {
		return (
			<div>
				<Top10List
					title="hacker news"
					items={this.props.hackernews.items}
					/>
			</div>
		);
	}
}

HackerNews.propTypes = {
	hackernews: PropTypes.object.isRequired
}

export default connect((state) => {
	return {
		hackernews: state.hackernews
	};
})(HackerNews);
