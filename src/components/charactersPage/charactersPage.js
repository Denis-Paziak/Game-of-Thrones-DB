import React, { Component } from "react";
import { Col, Row } from 'reactstrap';

import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class CharactersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charId: 130
        }
    }

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
                        <RandomChar />
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList getCharId={(id) => this.getCharId(id)} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.charId} />
                    </Col>
                </Row>
            </>
        )
    }
}