import React from "react";
import { Link, useParams } from "react-router-dom";
import noPhotoFound from "../img/noPhotoFound.png";
import backBtn from "../img/backBtn.png";

const Character = ({ data }) => {
	let { id } = useParams();
	console.log(id);
	let name = id;

	const [character] = data
		.filter((a) => a.name.includes(name))
		.map((i) => {
			return i;
		});

	console.log(character);

	return (
		<div id="overlay">
			<Link to="/ReactApps/" id="emptySpace"></Link>
			<div
				className="characterDetails"
				style={
					character.image
						? { backgroundImage: `url(${character.image})` }
						: {
								backgroundImage: `url(${noPhotoFound})`,
						  }
				}
			>
				<Link to="/ReactApps/">
					<input type="image" id="exitBtn" src={backBtn} alt="back" />
				</Link>

				<div id="form">
					<p id="name">{character.name}</p>
					<div className="details">
						<p>Gender: {character.gender}</p>
						<p>
							House:{" "}
							{character.house !== ""
								? " " + character.house
								: " Not Available"}
						</p>
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
	);
};

export default Character;
