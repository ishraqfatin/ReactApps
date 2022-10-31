import React from "react";

const Cards = ({ data }) => {
	let result;

	if (data) {
		result = data.slice(0, 20).map((index) => {
			let { name, house, image } = index;

			if (house === "") {
				house = "No Info";
			}
			return (
				<div key={index.name}>
					<div className="card">
						<img src={image} alt="" className="characterImage" />
						<div className="content">
							<div className="characterName">{name}</div>
							<div className="characterHouse">House: {house}</div>
						</div>
					</div>
				</div>
			);
		});
	} else {
		result = "No Characters Found";
	}
	return (
		<>
			{console.log(result)}
			{result}
			<div className="showingResults">
				<h4>Showing {result.length} results</h4>
			</div>
		</>
	);
};

export default Cards;
