import React, {
	Component
} from 'react';
import './TestCss.css';

class TestCss extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		}
	}

	style() {
		return {
			display: 'inline-flex',
			margin: '0 auto',
			padding: '1.5vw 2.5vw',
			border: 'none',
			color: 'white',
			fontSize: '2vw',
			backgroundColor: this.state.isActive ? '#006600' : 'green',
			cursor: 'pointer',
			borderRadius: '0.5vw',
			outline: 0,
		}
	}

	render() {
		return <div className = "TestCss" >
			<
			button style = {
				this.style()
			}
		onMouseDown = {
			() => this.setState({
				isActive: true
			})
		}
		onMouseUp = {
				() => this.setState({
					isActive: false
				})
			} > {
				this.props.children
			} < /button>   <  
			/div>;
	}
}

export default TestCss;