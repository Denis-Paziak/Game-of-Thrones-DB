import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../header';

import CharactersPage from '../charactersPage/charactersPage';

class App extends Component {
    render() {
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <CharactersPage />
                </Container>
            </>
        );
    }
};

export default App;