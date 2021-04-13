import React from 'react';
import axios from 'axios';
import "./App.css";

class App extends React.Component {

    state = {advice: ""}

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then( res => {
                const advice = res.data.slip.advice;
                this.setState({advice})
            })
            .catch (e => {
                console.log(e);
            })
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give some advice!</span>
                    </button>
                </div>
            </div>
        );
    };
}

export default App;