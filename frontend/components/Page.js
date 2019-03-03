import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
	background: orange;
	font-size: ${(props) => (props.huge ? '100px' : '50px')};

	span {
		font-size: 100px;
	}
`;

class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				<MyButton huge>
					Click Me
					<span>:smile:</span>
				</MyButton>
				{this.props.children}
			</div>
		);
	}
}

export default Page;
