import React from "react";

const Cards = ({ data, search }) => {
	let result;
	function showCharacterDetails(index) {
		let { name, house, image } = index;
		console.log(index);
		return (
			<div className="card">
				<img src={image} alt="" className="characterImage" />
				<div className="content">
					<div className="characterName">{name}</div>
					<div className="characterHouse">House: {house}</div>
				</div>
			</div>
		);
	}
	function showCard(index) {
		let { name, house, image, alternate_names } = index;
		if (house === "") {
			house = "No Info";
		}
		if (!image) {
			image = new URL(
				"https://www.all-tools-online.com/wp-content/uploads/2018/06/noPhotoFound.png"
			);
		}
		return (
			<div
				className="container"
				key={[name, alternate_names]}
				onClick={(e) => {
					showCharacterDetails(index);
				}}
			>
				<div className="card">
					<img src={image} alt="" className="characterImage" />
					<div className="content">
						<div className="characterName">{name}</div>
						<div className="characterHouse">House: {house}</div>
					</div>
				</div>
			</div>
		);
	}

	if (data && search === "") {
		result = data.map((index) => {
			return showCard(index);
		});
	} else if (data && search !== "") {
		result = data
			.filter((card) => card.name.toLowerCase().includes(search.toLowerCase()))
			.map((index) => {
				// console.log(index);
				return showCard(index);
			});
	} else {
		result = "No Characters Found";
	}

	return (
		<>
			<div className="showingResults">
				<h4>Showing {result.length} results</h4>
			</div>
			{result}
		</>
	);
};

export default Cards;
