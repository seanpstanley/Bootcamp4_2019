import React, {Component} from 'react';

export default({data, selectedUpdate, filterText}) => {
	const buildingList = data
		.filter(directory => {
			return (
				// from babyname tutorial
				directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			)
		})
		.map(directory => {
			return (
				<tr key = {directory.id}>
					<button onClick = { () => selectedUpdate(directory.id) }>
						{directory.code} 
						{' '}
						{directory.name} 
					</button>
				</tr>
			)
		});
	return (
		<div>
			<p>
				<i>Click on a building to view listing information</i>
			</p>
			{buildingList}
		</div>
	)
}
