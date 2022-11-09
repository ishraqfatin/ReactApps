import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";
import logo from "./img/logo.png";

function App() {
	let [data, setData] = useState(null);
	let [search, setSearch] = useState("");

	// console.log(search);

	useEffect(() => {
		const getData = async () => {
			try {
				const api = `https://hp-api.herokuapp.com/api/characters`;
				const actualData = await fetch(api).then((res) => res.json());
				setData(actualData);
			} catch (err) {
				console.log("Error");
			}
		};
		getData();
	}, []);

	return (
		<div id="main">
			<img src={logo} alt="" id="logo" />
			<SearchBox setSearch={setSearch} />
			<div id="gallery">
				<Cards data={data} search={search} />
			</div>
		</div>
	);
}

export default App;

