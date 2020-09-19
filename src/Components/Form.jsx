import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input name="city" placeholder="City"/>
                <input name="country" placeholder="Country"/>
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;
