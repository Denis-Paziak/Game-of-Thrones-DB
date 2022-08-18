import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import GotService from "../../services/gotService";


export default class CharactersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: 1,
        }
    }
    gotService = new GotService();

    getItemId(id) {
        if (id !== this.state.prevId) {
            this.setState({
                itemId: id
            });
        }
    }

    render() {
        return (
            <>
                <Row>
                    <Col md='6'>
                        <ItemList
                            getItemId={(id) => this.getItemId(id)}
                            getItemFunction={this.gotService.getAllCharacters}
                        />
                    </Col>
                    <Col md='6'>
                        <ItemDetails
                            transformFunction={this.gotService.transformCharacters}
                            getItemFunction={this.gotService.getCharacters}
                            itemId={this.state.itemId}
                        />
                    </Col>
                </Row>
            </>
        )
    }
}