import * as React from "react";

export default class Counter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            result: 0,
            lableStyle: "boxPos"
        }

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add() {
        const result = this.state.result + 1;

        this.setState({
            result: result,
            lableStyle: result >= 0 ? "boxPos" : "boxNeg"
        })
    }

    subtract() {
        const result = this.state.result - 1;

        this.setState({
            result: this.state.result - 1,
            lableStyle: result >= 0 ? "boxPos" : "boxNeg"
        })
    }

    render() {
        return (
            <div className="container">
                <div className="box"><button id="btnDecrement" onClick={this.subtract}>-</button></div>
                <div className="box"><label className={this.state.lableStyle}>{this.state.result}</label></div>
                <div className="box"><button id="btnIncrement" onClick={this.add}>+</button></div>
            </div>
        )
    }
}