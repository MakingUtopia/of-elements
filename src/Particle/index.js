
// 0 - air
// 1 - red
// 2 - blue

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default class Particle {
    constructor(x, y, type=0) {
        if (type < 0 || type > 2)
            throw new Error("Invalid particle type")
        this.x = x
        this.y = y
        this.type = type
        this.oppositeType = (type===0) ? null :
            (type===1) ? 2 : (type===2) ? 1 : null
        this.neighbours = null
    }

    initialise(neighbours) {
        this.neighbours = neighbours
    }

    convert(newType) {
        this.type = newType
    }

    compete(otherParticle) {
        if (
            this.type === 1 && Math.random() > 0.5 ||
            this.type === 2 && Math.random() > 0.5
        )
            otherParticle.convert(this.type)
        else
            this.convert(otherParticle.type)
    }

    step() {
        if (this.type===0)
            return
        let shuffledNeighbours = shuffle(this.neighbours)
        for (let neighbour of shuffledNeighbours) {
            if (neighbour.type === this.oppositeType) {
                this.compete(neighbour)
            }
        }
    }
}