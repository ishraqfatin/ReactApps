// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchBox = ({ setSearch }) => {
	// return (
	// 	<div>
	// 		<input
	// 			type="text"
	// 			className="searchbox"
	// 			placeholder="Search"
	// 			onChange={(text) => {
	// 				setSearch(text.target.value);
	// 			}}
	// 		/>
	// 	</div>

	// );

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Search for Character"
				variant="outlined"
				color="warning"
				onChange={(text) => {
					setSearch(text.target.value);
				}}
			/>
		</Box>
	);
};

export default SearchBox;
