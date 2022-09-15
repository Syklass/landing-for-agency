import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import CasesPage from "./pages/CasesPage";
import CaseDetailsPage from "./pages/CaseDetailsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<MainPage />} />
				<Route path="/services" exact element={<ServicesPage />} />
				<Route path="/cases" exact element={<CasesPage />} />
				<Route path="/cases/:id" exact element={<CaseDetailsPage />} />
				<Route path="*" replace element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
