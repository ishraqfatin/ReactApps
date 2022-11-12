import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";
import logo from "./img/logo.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Character from "./components/Character";

function App() {
	let [data, setData] = useState(null);
	let [search, setSearch] = useState("");
	let [character, setCharacter] = useState("");

	console.log(character);
	useEffect(() => {
		const getData = async () => {
			try {
				const api = `https://hp-api.herokuapp.com/api/characters`;
				const actualData = await fetch(api).then((res) => res.json());
				setData(actualData);
			} catch (err) {
				console.log("Error: Cannot find Object");
			}
		};
		getData();
	}, []);

	return (
		<Router>
			<div id="main">
				<Switch>
					<Route exact path="/ReactApps/">
						<img src={logo} alt="" id="logo" />
						<SearchBox setSearch={setSearch} />
						<div id="gallery">
							<Cards data={data} search={search} setCharacter={setCharacter} />
						</div>
					</Route>
					<Route path="/ReactApps/:name">
						<Character data={data} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

