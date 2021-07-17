import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { SignUp } from "./views/SignUp";
import { Navbar } from "./component/navbar";
import { SignIn } from "./views/SignIn";
import { DashboardMeds } from "./views/DashboardMeds";
import { DashboardSymptoms } from "./views/DashboardSymptoms";
import { DashboardVitals } from "./views/DashboardVitals";
import { SectionCard } from "./component/SectionCard";
import { YourMedications } from "./component/YourMedications";
import { DashboardHome } from "./views/DashboardHome";
import { DemoView } from "./views/DemoView";
import { FindDoctor } from "./views/FindDoctor";
import { DashboardMedDetails } from "./views/DashboardMedDetails";
import { DashboardSymptomDetails } from "./views/DashboardSymptomDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route exact path="/">
					<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/demo">
					<Demo />
				</Route>
				<Route exact path="/single/:theid">
					<Single />
				</Route>
				<Route exact path="/AboutUs" component={SectionCard} />
				<Route exact path="/YourMedications" component={YourMedications} />

				<Route exact path="/SignUp" component={SignUp} />
				<Route exact path="/SignIn">
					<SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DashboardVitals">
					<DashboardVitals loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DashboardSymptoms">
					<DashboardSymptoms loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DashboardHome">
					<DashboardHome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DashboardMeds">
					<DashboardMeds loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DashboardMedDetails/:theid">
					<DashboardMedDetails loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DashboardSymptomDetails/:theid">
					<DashboardSymptomDetails loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				</Route>
				<Route exact path="/DemoView" component={DemoView} />
				<Route exact path="/FindDoctor" component={FindDoctor} />
				<Route>
					<h1>Not found!</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
