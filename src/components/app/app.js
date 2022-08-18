import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import Header from '../header';
import GotService from "../../services/gotService";
import RandomItems from '../randomItems';
import CharactersPage from '../charactersPage/';
import HousesPage from "../housesPage"
import BooksPage from '../booksPage/';

import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {
    gotService = new GotService();
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            <RandomItems
                                endIdItem={1000}
                                getItemFunction={this.gotService.getCharacters}
                                transformItemFunction={this.gotService.transformCharacters}
                            />
                        </Col>
                    </Row>
                    <Routes>
                        <Route path="/" element={<CharactersPage />} />
                        <Route path="/books" element={<BooksPage />} />
                        <Route path="/houses" element={<HousesPage />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        );
    }
};

export default App;