import React, { Component } from 'react';
import './randomChar.css';
import GotService from "../../services/gotService";
import Loading from "../loading";

export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char: null,
            loading: true,
            keysChar: ["name", "gender", "born", "died", "culture"]
        }
        this.generateNewRandomChar = this.generateNewRandomChar.bind(this);
    }

    gotService = new GotService();

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 6000);
    }

    updateChar = () => {
        this.setState({
            char: null,
        });
        const id = Math.floor(Math.random() * 2000 + 25);
        this.gotService.getCharacters(id)
            .then(char => {
                this.state.keysChar.forEach(key => {
                    if (char[key] === '') {
                        char[key] = "No data :(";
                    }
                });
                this.setState({
                    char: this.gotService.transformCharacters(char),
                });
            })
    }

    generateNewRandomChar() {
        this.updateChar();
        clearInterval(this.timerId);
    }

    myRender(loading) {
        let res = {};

        if (loading === true) {
            res.name = <Loading />;
            res.gender = <Loading />;
            res.born = <Loading />;
            res.died = <Loading />;
            res.culture = <Loading />;
        } else {
            res = this.state.char;
        }

        const { name, gender, born, died, culture } = res;

        return (
            <>
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </>
        )
    }

    render() {
        let result;

        if (this.state.char == null) {
            result = this.myRender(true);
        } else {
            result = this.myRender(false);
        }


        return (
            <>
                <div className="random-block rounded">
                    {result}
                </div>
                <button className='btn btn-primary' onClick={this.generateNewRandomChar}>Generate random character</button>
            </>
        );
    }
}
