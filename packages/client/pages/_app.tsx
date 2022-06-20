
import React from "react";

import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return <Component {...pageProps} />
}

export default App;