import { Link } from "react-router-dom";
import noPhotoFound from "../img/noPhotoFound.png";

//MaterialUI Imports
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = ({ data, search }) => {
	let result = null;
	// console.log(character);
	function showCard(index) {
		let { name, house, image, alternate_names } = index;

		// .replace(/\s+/g, "")} To Remove Space
		return (
			<Card id="galleryCard" sx={{ width: 245, maxHeight:400 }} elevation={10} key={[name, alternate_names]}>
				<CardActionArea >
					<Link to={`/ReactApps/${name.substring(0, name.indexOf(" "))}`}>
						<CardMedia
							component="img"
							height="280"
							image={image ? image : noPhotoFound}
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								House: {house ? house : "Wizard World"}
							</Typography>
						</CardContent>
					</Link>
				</CardActionArea>
			</Card>
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
		result = "Loading";
	}

	return (
		<>
			<div className="showingResults">
				<h4>{result.length? "Showing "+result.length+" results" : "No Characters Found :("}</h4>
			</div>
			{result}
		</>
	);
};

export default Cards;
