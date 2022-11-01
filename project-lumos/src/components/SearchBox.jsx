import React from "react";

const SearchBox = ({ setSearch }) => {
	return (
		<div>
			<input
				type="text"
				className="searchbox"
				placeholder="Search"
				onChange={(text) => {
					setSearch(text.target.value);
				}}
			/>
		</div>
	);
};

export default SearchBox;
