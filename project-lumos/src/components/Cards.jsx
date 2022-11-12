import { Link } from "react-router-dom";
import noPhotoFound from "../img/noPhotoFound.png";

const Cards = ({ data, search }) => {
	let result = null;
	// console.log(character);
	function showCard(index) {
		let { name, house, image, alternate_names } = index;

		// .replace(/\s+/g, "")} To Remove Space
		return (
			<div className="container" key={[name, alternate_names]}>
				<Link
					to={`/ReactApps/${name}`}
					className="card"
					// onClick={() => {
					// 	setCharacter(index);
					// }}
				>
					<img
						src={image ? image : noPhotoFound}
						alt="character"
						className="characterImage"
					/>
					<div className="content">
						<div className="characterName">{name}</div>
						<div className="characterHouse">
							House: {house ? house : "Wizard World"}
						</div>
					</div>
				</Link>
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

			{result}
		</>
	);
};

export default Cards;
