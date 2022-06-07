import React from "react";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import DetailScreen from "./components/Profile/DetailScreen";
import Register from "./components/Register/Register";
import SignIn from './components/Register/SignIn';
import ResetPassword from './components/Register/ResetPassword';
import NewPassword from "./components/Register/NewPassword";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return <div>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={ <HomeScreen /> } />
				<Route path="/DetailScreen" element={ <DetailScreen /> } />
				<Route path="/register" element={ <Register /> } />
				<Route path="/signIn" element={ <SignIn /> } />
				<Route path="/resetPassword" element={ <ResetPassword /> } />
				<Route path="/newPassword" element={ <NewPassword /> } />
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
