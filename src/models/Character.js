const master = [
  [0, "逆巻く炎", "ミティ", "楔形文字の読解",  "1056010201"],
  [1, "不倒の戦士", "アレン", "鉄拳",  "1396010201"],
  [2, "月と波の巫女", "オリビエ", "オラクル", "1169010201"],
  [3, "揺蕩うもの", "ソルブ", "詩吟",  "1196010201"]
]

export default class Character {
  constructor(id, title, name, ability, imageId) {
    this.id = id
    this.title = title
    this.name = name
    this.ability = ability
    this.imageId = imageId
    this.image = new Image()
    this.image.src = this.getFullBodyImageUrl()
    this.level = Math.floor(Math.random()*7) + 3
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
