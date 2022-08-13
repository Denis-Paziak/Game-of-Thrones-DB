class GotService {
    constructor() {
        this._apiBase = "https://anapioficeandfire.com/api"
    }

    async getResourse(url) {
        const res = await fetch(this._apiBase + url);
        return await res.json();
    }

    getCharacters(id) {
        return this.getResourse("/characters/" + id);
    }

    getAllCharacters() {
        return this.getResourse("/characters?page=5&pageSize=10");
    }

    getBooks(id) {
        return this.getResourse("/books/" + id);
    }

    getAllBooks() {
        return this.getResourse("/books");
    }

    getHouses(id) {
        return this.getResourse("/houses/" + id);
    }

    getAllHouses() {
        return this.getResourse("/houses");
    }

    transformCharacters(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    transformBooks(book) {
        return {
            name: book.name,
            region: book.region,
            words: book.words,
            titles: book.titles,
            overlord: book.overlord,
            ancestralWeapons: book.ancestralWeapons,
        }
    }

    transformHouses(house) {
        return {
            name: house.name,
            numberOfPages: house.numberOfPages,
            publiser: house.publiser,
            released: house.released,
        }
    }
}

export default GotService;