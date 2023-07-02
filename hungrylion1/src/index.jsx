import { render } from "preact";
import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./style.css";

export function App() {
  return (
    <>
      <div>
        <image src={preactLogo}></image>
        <h1>hello world</h1>
      </div>
    </>
  );
}

render(<App />, document.getElementById("app"));
