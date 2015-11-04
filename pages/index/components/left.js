import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sub from '../../../shared/components/sub';
import CountButton from '../../../shared/components/countbutton';
import { increment } from '../../../shared/actions/countbutton';

export default class Left extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<div>
				<h1>Left!</h1>
				<p>Rendered on the client.</p>
				<Sub msg="hello" />

				<CountButton count={this.props.countbutton.count} handleClick={event => dispatch(increment())}/>
			</div>
		);
	}
}

Left.propTypes = {
	countbutton: PropTypes.object.isRequired
}

export default connect((state) => {
	return {
		countbutton: state.countbutton
	};
})(Left);
