import Sidebar from "components/Sidebar";
import Content from "components/Content";
import Player from "components/Player";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div id="container">
				<Sidebar></Sidebar>
				<Content></Content>
			</div>
			<div></div>
			<Player></Player>
		</Router>
	);
}

export default App;