import React, { useState } from "react";

const Cards = ({ data, search }) => {
	let result = null;
	let [character, setCharacter] = useState(null);

	// console.log(character);
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
			<div className="container" key={[name, alternate_names]}>
				<div
					className="card"
					onClick={() => {
						setCharacter(index);
					}}
				>
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
		result = data.slice(0, 200).map((index) => {
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
			{character && (
				<div id="overlay">
					<div
						id="emptySpace"
						onClick={(e) => {
							setCharacter(null);
							console.log("me");
						}}
					></div>
					<div
						className="characterDetails"
						style={character.image? { backgroundImage: `url(${character.image})` }: { backgroundImage: `url(https://www.all-tools-online.com/wp-content/uploads/2018/06/noPhotoFound.png)` }}
					>
						<input
							type="button"
							id="exitBtn"
							value="🔙"
							onClick={(e) => {
								setCharacter(null);
							}}
						/>
						<div id="form">
							<p id="name">{character.name}</p>
							<div className="details">
								<p>Gender: {character.gender}</p>
								<p>House: {character.house !== ""
										? " " + character.house
										: " Not Available"}</p>
								<p>
									DOB:{" "}
									{character.dateOfBirth !== ""
										? " " + character.dateOfBirth
										: " Not Available"}
								</p>
								<p>
									Patronous Charm:
									{character.patronus !== ""
										? " " + character.patronus
										: " Not Available"}
								</p>
								<p>Actor: {character.actor} </p>
								<p>Alive? {character.alive ? "Yep" : "Niet"}</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{result}
		</>
	);
};

export default Cards;
