import * as React from "react";
import * as ReactDOM from "react-dom";

import Counter from "./components/Counter";

class Main extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("main"));