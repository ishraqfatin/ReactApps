import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";

function App() {
	const [data, setData] = useState(null);
	const api = `https://hp-api.herokuapp.com/api/characters`;

	if (data != null) {
		// console.log(data);
	}

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
			<SearchBox />
			<div id="gallery">
				<Cards data={data} />
			</div>
		</div>
	);
}

export default App;

