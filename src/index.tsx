import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";
import Counter from "./components/Counter";

class Main extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Counter />
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("main"));