import React from "react";
import { Link, useParams } from "react-router-dom";
import noPhotoFound from "../img/noPhotoFound.png";
import backBtn from "../img/backBtn.png";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Character = ({ data }) => {
	console.log(data);
	let { id } = useParams();
	console.log(id);
	let name = id;

	const character = data.find((character) => character.name.includes(name));

	console.log(character);

	//MATERIAL UI FUNCTIONS
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen((prev) => !prev);
	};
	const handleClickAway = () => {
		setOpen(false);
	};

	const styles = {
		position: "absolute",
		top: 45,
		right: 0,
		left: 6,
		zIndex: 1,
		border: "none",
		borderRadius: 1,
		p: 1,
		bgcolor: "lightgrey",
		width: 70,
		textAlign: "center",
	};

	return (
		<Card id="characterCard">
			<CardMedia
				component="img"
				image={character.image ? character.image : noPhotoFound}
				alt="green iguana"
				id="avatar"
			/>
			<div id="cardActionArea">
				<CardContent id="cardContent">
					<Typography gutterBottom variant="h5" component="div">
						<p id="name">{character.name}</p>
					</Typography>
					<Typography variant="body2" color="text.secondary">
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
						</div>
					</Typography>
					<ClickAwayListener onClickAway={handleClickAway}>
						<Box sx={{ position: "relative" }}>
							<Button variant="contained" onClick={handleClick}>
								Alive?
							</Button>
							{open ? (
								<Box sx={styles}>{character.alive ? "Yep" : "Niet"}</Box>
							) : null}
						</Box>
					</ClickAwayListener>
				</CardContent>
				<CardActions id="cardAction">
					<Button size="large" color="primary" id="cardActionBtn">
						<Link id="goBack" to="/ReactApps/">Back to Gallery</Link>
					</Button>
				</CardActions>
			</div>
		</Card>
	);
};

export default Character;
