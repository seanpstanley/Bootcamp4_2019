import React, {Component} from 'react';

class RemoveBuilding extends Component {
	render() {
        const { removedUpdate, selectedBuilding } = this.props;
		return (
			<div>
				<button onClick = { () => removedUpdate(selectedBuilding) }>
					<i>Remove selected building</i>
				</button>
			</div>
		);
	}
}

export default RemoveBuilding;