class Item {
    #item;
    #effect;
    constructor({item, effect}) {
        this.#item = item;
        this.#effect = effect;
    }

    getItem() { return this.item; }
}

export default Item;