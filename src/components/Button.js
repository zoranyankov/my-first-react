import { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            counter: 0
        }
    }

    increase() {
        this.setState((oldState) => ({ counter: oldState.counter + 1 }))
    }
    
    decrease() {
        this.setState((oldState) => ({ counter: oldState.counter - 1 }))
    }
    
    clearCounter() {
        this.setState((oldState) => ({ counter: 0}))
    }

    render() {
        return (
            <div className="buttons">
                <h3>Counter is {this.state.counter}</h3>
            <button onClick={this.increase}>Increase Counter</button>
            <button onClick={this.decrease}>Decrease Counter</button>
            <button onClick={this.clearCounter.bind(this)}>Display Counter</button>
            </div>
        );
    }
    
}


export default Button;