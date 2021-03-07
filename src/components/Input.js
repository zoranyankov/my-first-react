import { Component } from 'react';

function Show(props) {
    return (
        <p>{props.value}</p>
    )
}


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
    console.log(event.target);

        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <input
                    name="firstName"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Show value={this.state.value} />
            </div>
        );

    }
}

export default Input;