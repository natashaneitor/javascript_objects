function Pokemon(id, name, height, hp, defense, aP) {
    this.id = id
    this.name = name,
    this.height = height,
    this.hp = hp
    this.defense = defense
    this.attackPoints = aP
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/ ${this.id} png`
    this.sayName = function () {
        return `Mi nombre es ${this.name}`
    }
    this.showStats = () => {
        return `Nombre: ${this.name}, Altura: ${this.height}, Vida: ${this.hp}, Defensa: ${this.defense}, Ataque: ${this.attackPoints}, id: ${this.id}`
    }
    this.attack = (enemy) => {
        enemy.hp -= (this.attackPoints - enemy.defense)
    }
}

//const fighters = []

const pikachu = new Pokemon(25, 'Pikachu', 4, 35, 40, 55)
const charmander = new Pokemon(4, 'Charmander', 6, 39, 52, 43)


pikachu.attack(charmander)
charmander.attack(pikachu)
console.log(charmander);
console.log(pikachu);