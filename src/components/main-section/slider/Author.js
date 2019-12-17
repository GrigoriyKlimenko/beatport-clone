import React from "react";

class Author extends React.PureComponent {
	render() {
		return (
			<a href >{this.props.children}</a>
		)
	}
}

export default Author