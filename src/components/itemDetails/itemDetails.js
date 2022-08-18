import React, { Component } from 'react';
import './itemDetails.css';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        }
    }

    getItem(id) {
        this.props.getItemFunction(id)
            .then(data => {
                this.setState({
                    item: data
                });
            });
    }
    componentDidMount() {
        this.getItem(this.props.itemId);
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.getItem(this.props.itemId);
        }
    }

    renderItem(keys) {
        const data = this.props.transformFunction(this.state.item);
        const result = [];

        for (keys in data) {
            result.push(
                <li key={keys} className="list-group-item d-flex justify-content-between">
                    <span className="term">{keys}</span>
                    <span>{this.state.item[keys]}</span>
                </li>
            );
        }

        return result;
    }

    render() {
        let result = this.renderItem(this.props.itemKeys)
        return (
            <div className="char-details rounded">
                <h4>Detailed information</h4>
                <ul className="list-group list-group-flush">
                    {result}
                </ul>
            </div>
        );
    }
}