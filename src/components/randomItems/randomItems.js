import React, { Component } from 'react';
import './randomItems.css';
import GotService from "../../services/gotService";
import Loading from "../loading";

export default class RandomItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            loading: true,
        }
        this.generateNewRandomItem = this.generateNewRandomItem.bind(this);
    }

    gotService = new GotService();

    componentDidMount() {
        const { endIdItem } = this.props;
        this.updateItem(endIdItem);
        this.timerId = setInterval(() => { this.updateItem(endIdItem) }, 6000);
    }

    updateItem = (endId) => {
        this.setState({
            item: {},
        });

        const id = Math.floor(Math.random() * endId + 25);

        this.props.getItemFunction(id)
            .then(item => {
                this.props.itemKeys.forEach(key => {
                    if (item[key] === '') {
                        item[key] = "No data :(";
                    }
                });

                this.setState({
                    item: this.props.transformItemFunction(item),
                });
            })
    }

    generateNewRandomItem() {
        const { endIdItem } = this.props;

        this.updateItem(endIdItem);
        clearInterval(this.timerId);
    }

    renderItems(loading) {
        let result = {};

        if (loading === true) {
            result.name = <Loading />;
            result.gender = <Loading />;
            result.born = <Loading />;
            result.died = <Loading />;
            result.culture = <Loading />;
        } else {
            result = this.state.item;
        }

        const { name, gender, born, died, culture } = result;

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
        const { item } = this.state;
        const itemLenght = Object.keys(item).length;

        let result;

        if (itemLenght <= 0) {
            result = this.renderItems(true);
        } else {
            result = this.renderItems(false);
        }


        return (
            <>
                <div className="random-block rounded">
                    {result}
                </div>
                <button className='btn btn-primary' onClick={this.generateNewRandomItem}>Generate random character</button>
            </>
        );
    }
}
