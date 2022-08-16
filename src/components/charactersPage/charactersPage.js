import React, { Component } from "react";
import { Col, Row } from 'reactstrap';

import RandomItems from '../randomItems';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import GotService from "../../services/gotService";


export default class CharactersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charId: 130
        }
    }
    gotService = new GotService();
    getCharId(id) {
        this.setState({
            charId: id
        });
    }

    render() {
        return (
            <>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        <RandomItems
                            endIdItem={1000}
                            getItemFunction={this.gotService.getCharacters}
                            transformItemFunction={this.gotService.transformCharacters}
                            itemKeys={["name", "gender", "born", "died", "culture"]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList
                            getItemId={(id) => this.getCharId(id)}
                            getItemFunction={this.gotService.getAllCharacters}
                        />
                    </Col>
                    <Col md='6'>
                        <ItemDetails charId={this.state.charId} />
                    </Col>
                </Row>
            </>
        )
    }
}