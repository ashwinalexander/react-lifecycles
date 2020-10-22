import React from "react";

class Lifecycles extends React.Component {
	constructor() {
		super();
		console.log("1 constructor");
	}

	componentDidMount() {
		console.log("3 componentdidmount");
	}

	componentDidUpdate() {
		console.log("4.componentdidupdate");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldcomponentupdate", nextProps);
		return nextProps.text !== this.props.text;
	}

	render() {
		console.log("Render");
		return (
			<div>
				<h3>lifecycle component</h3>
				{this.props.text}
			</div>
		);
	}
}

export default Lifecycles;
