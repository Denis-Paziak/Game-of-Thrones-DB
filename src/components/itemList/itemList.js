import React, { Component } from 'react';
import './itemList.css';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
    }

    componentDidMount() {
        this.getAllItem();
    }

    getAllItem() {
        this.props.getItemFunction()
            .then(items => {
                items = items.map((item, id) => {
                    return (
                        <li key={id} onClick={() => { this.props.getItemId(1 + id) }} className="list-group-item">
                            {item.name}
                        </li>
                    )
                })

                this.setState({
                    data: items
                })
            })
    }


    render() {
        return (
            <ul className="item-list list-group">
                {this.state.data}
            </ul>
        );
    }
}