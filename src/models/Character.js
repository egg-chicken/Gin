const master = [
    [0, "ミティ",   "1056010201"],
    [1, "アレン",   "1396010201"],
    [2, "オリビエ", "1169010201"],
    [3, "ソルブ",   "1196010201"]
]

export default class Character {
    constructor(id, name, imageId) {
        this.id = id;
        this.name = name;
        this.imageId = imageId;
        this.image = new Image();
        this.image.src = this.getFullBodyImageUrl();
    }

    getFullBodyImageUrl() {
        return `${process.env.PUBLIC_URL}/characters/${this.imageId}.png`
    }

    static create (id) {
        return new Character(...master[id])
    }

    static all() {
        return master.map((data) => new Character(...data))
    }
}