import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";


function App() {
	let [data, setData] = useState(null);
	let [search, setSearch] = useState("");
	const api = `https://hp-api.herokuapp.com/api/characters`;

	// console.log(search);

	useEffect(() => {
		const getData = async () => {
			try {
				const actualData = await fetch(api).then((res) => res.json());
				setData(actualData);
			} catch (err) {
				console.log("Error");
			}
		};
		getData();
	}, [api]);

	return (
		<div id="main">
			<img src="./logo.png" alt="" id="logo" />
			<SearchBox setSearch={setSearch} />
			<div id="gallery">
				<Cards data={data} search={search} />
			</div>
		</div>
	);
}

export default App;

