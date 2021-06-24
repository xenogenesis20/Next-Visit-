import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { SignUp } from "./views/SignUp";
import { Navbar } from "./component/navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import { SignIn } from "./views/SignIn";
import { Dashboard } from "./views/Dashboard";
import { SectionCard } from "./component/SectionCard";
import { DailyMeds } from "./views/DailyMeds";
<<<<<<< HEAD
import { DailyVitals } from "./views/DailyVitals";
import { DailySymptoms } from "./views/DailySymptoms";
=======
import { DailySymptoms } from "./views/DailySymptoms";
import { DailyVitals } from "./views/DailyVitals";
>>>>>>> 032746dba686104cbb8bfc47bca5f9a502a68e66

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<ParallaxProvider>
				<BrowserRouter basename={basename}>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/AboutUs" component={SectionCard} />
						<Route exact path="/DailyMeds" component={DailyMeds} />
						<Route exact path="/DailyVitals" component={DailyVitals} />
						<Route exact path="/DailySymptoms" component={DailySymptoms} />
						<Route exact path="/SignUp" component={SignUp} />
						<Route exact path="/SignIn" component={SignIn} />
						<Route exact path="/Dashboard" component={Dashboard} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</BrowserRouter>
			</ParallaxProvider>
		</div>
	);
};

export default injectContext(Layout);
