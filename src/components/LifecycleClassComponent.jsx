import { Component } from "react";


export default class LifecycleClassComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            counter : 8
        }
        console.log('LifecycleComponent => constructor')
    }

    componentDidMount() {
        console.log('lifecycleClassComponent => componentDidMount')
    }
    componentWillUnmount() {
        console.log('lifecycleClassComponent => componentDidMount')
    }
    increment = () => {
        console.log('increment')
        // this.state.counter = 20
        this.setState((state) => ({
            counter : state.counter + 10
        }))
    }

    render() {

        console.log('LifecycleComponent => render')

        return <div>
            <hr />
            Class Component
            <br />
            counter : {this.state.counter}

            <br />
            <button onClick={this.increment}>Increment</button>

        </div>
    }
}