import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lifecycles from "./lifecycles.component";

class App extends React.Component {
	constructor() {
		super();
		console.log("1 constructor");

		this.state = {
			showChild: true,
			text: "",
		};
	}

	handleClick = () => {
		this.setState((state) => {
			return { showChild: !state.showChild };
		});
	};

	handleHelloClick = () => {
		this.setState((state) => {
			return { text: state.text + "_hello" };
		});
	};

	render() {
		console.log("2. render");
		return (
			<div className="App">
				<header className="App-header">
					<button onClick={this.handleClick}>toggle lifescycles</button>
					<button onClick={this.handleHelloClick}>update text</button>
					{this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
				</header>
			</div>
		);
	}
}

export default App;
