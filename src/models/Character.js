const master = [
  [0, "逆巻く炎", "ミティ", "楔形文字の読解",  "1056010201", "1056010302"],
  [1, "不倒の戦士", "アレン", "鉄拳",  "1396010201", "1381010303"],
  [2, "月と波の巫女", "オリビエ", "オラクル", "1169010201", "1169010301"],
  [3, "揺蕩うもの", "ソルブ", "詩吟",  "1196010201", "1196010301"]
]

export default class Character {
  constructor(id, title, name, ability, imageId, spriteId) {
    this.id = id
    this.title = title
    this.name = name
    this.ability = ability
    this.imageId = imageId
    this.image = new Image()
    this.image.src = this.getFullBodyImageUrl()
    this.spriteId = spriteId
    this.sprite = new Image()
    this.sprite.src = this.getSpriteImageUrl()
    this.level = Math.floor(Math.random()*7) + 3
  }

  getFullBodyImageUrl() {
    return `${process.env.PUBLIC_URL}/characters/${this.imageId}.png`
  }

  getSpriteImageUrl() {
    return `${process.env.PUBLIC_URL}/characters/${this.spriteId}.png`
  }

  static create (id) {
    return new Character(...master[id])
  }

  static all() {
    return master.map((data) => new Character(...data))
  }
}
