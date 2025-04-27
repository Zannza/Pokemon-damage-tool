class Move {
    #name;
    #type;
    #power;
    #genre;
    #accuracy;
    constructor({name, type, power, genre, accuracy}) {
        this.#name = name;
        this.#type = type;
        this.#power = power;
        this.#genre = genre;
        this.#accuracy = accuracy;
    }

    // getter
    get name() { return this.#name; }
    get type() { return this.#type; }
    get power() { return this.#power; }
    get genre() { return this.#genre; }
    get accuracy() { return this.#accuracy; }

    // setter
    set name(name) { this.#name = name; }
    set type(type) { this.#type = type; }
    set power(power) { this.#power = power; }
    set genre(genre) { this.#genre = genre; }
    set accuracy(accuracy) { this.#accuracy = accuracy; }

}

export default Move;