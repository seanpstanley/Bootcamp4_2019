import React, {Component} from 'react';

export default({data, selectedBuilding}) => {
	const buildingData = data
		.filter(building => {
			return (
				selectedBuilding == building.id
			)
		})
		.map(building => {
			let coordinates, address = '';
			if (typeof building.coordinates == 'undefined')
				coordinates = 'Not Available';
			else 
				coordinates = 'Latitude: ' + building.coordinates.latitude + ', Longitude: ' + building.coordinates.longitude;

			if (typeof building.address == 'undefined') 
				address = 'Not Available ';
			else
				address = building.address;
			return (
				<div>
					<tr>
						<row>
							<b> 
								Code: 
							</b>
							{building.code} 	
						</row>
					</tr>
					<tr>
						<row>
							<b> 
								Name: 
							</b>
							{building.name} 
						</row>
					</tr>
					<tr>
						<row>
							<b> 
								Coordinates: 
							</b>
							{coordinates} 
						</row>
					</tr>
					<tr>
						<row>
							<b> 
								Address:  
							</b>
							{address} 
						</row>
					</tr>
				</div>
			);
		});
	return (
		<div>
			<ul>
				{buildingData}
			</ul>
		</div>
	);
}
