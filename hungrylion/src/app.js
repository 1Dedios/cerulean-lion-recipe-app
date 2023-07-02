import { h, Component, render } from "preact";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>stuff going on here</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
