import React from "react";
import { createRoot } from "react-dom";
import App from './app';


const root = document.getElementById('root');
const app = <App />;

createRoot(root).render(app);
