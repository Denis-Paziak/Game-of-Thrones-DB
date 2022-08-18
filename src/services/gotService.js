class GotService {
    constructor() {
        this._apiBase = "https://anapioficeandfire.com/api"
    }

    getResourse = async (url) => {
        const res = await fetch(this._apiBase + url);
        return await res.json();
    }

    getCharacters = (id) => {
        id = 40 + id;
        return this.getResourse("/characters/" + id);
    }

    getAllCharacters = () => {
        return this.getResourse("/characters?page=5&pageSize=10");
    }

    getBooks = (id) => {
        return this.getResourse("/books/" + id);
    }

    getAllBooks = () => {
        return this.getResourse("/books");
    }

    getHouses = (id) => {
        console.log(this.getResourse("/houses"));
        return this.getResourse("/houses/" + id);
    }

    getAllHouses = () => {
        return this.getResourse("/houses");
    }

    transformCharacters = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    transformBooks = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,
        }
    }

    transformHouses = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        }
    }
}

export default GotService;