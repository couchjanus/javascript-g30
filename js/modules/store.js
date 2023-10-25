export class Store {

    static init(key) {

        if (!Store.isset(key)) { 
            Store.set(key, []);
        }

        return Store.get(key);
    }

    static get(key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static isset(key) {
        return this.get(key) !== null;
    }
}