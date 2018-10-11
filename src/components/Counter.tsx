import * as React from "react";

export default class Counter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            result: 0
        }

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add() {
        this.setState({
            result: this.state.result + 1
        })
    }

    subtract() {
        this.setState({
            result: this.state.result - 1
        })
    }

    render() {
        return (
            <div>
                <div><button onClick={this.subtract}>-</button></div>
                <div><label>{this.state.result}</label></div>
                <div><button onClick={this.add}>+</button></div>
            </div>
        )
    }
}