import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";

// import store from "./store";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* <ReduxProvider store={store}> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* </ReduxProvider> */}
	</React.StrictMode>
);

// https://bit.ly/CRA-vitals
reportWebVitals();
