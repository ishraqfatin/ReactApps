import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [num, setNum] = useState("");
	useEffect(() => {
		console.log(num);
	});

	return (
		<div>
			<h2>Search Characters</h2>
			<input type="text" placeholder="Search Here" onInput={() => setNum()}/>
			<br />
			<button onClick={() => setNum("1")}>1</button>
			<button onClick={() => setNum("2")}>2</button>
			<button onClick={() => setNum("3")}>3</button>
			<h3>Page {num}</h3>
		</div>
	);
}

export default App;

