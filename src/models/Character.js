const master = [
    ["ミティ",   "1056010201"],
    ["アレン",   "1396010201"],
    ["オリビエ", "1169010201"],
    ["ソルブ",   "1196010201"]
]

export default class Character {
    constructor(name, imageId) {
        this.name = name;
        this.imageId = imageId;
    }

    getFullBodyImageUrl() {
        return `/characters/${this.imageId}.png`
    }

    static create (id) {
        return new Character(...master[id])
    }
}