import React from "react";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import DetailScreen from "./components/Profile/DetailScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return <div>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={ <HomeScreen /> } />
				<Route path="/DetailScreen" element={ <DetailScreen /> } />
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
