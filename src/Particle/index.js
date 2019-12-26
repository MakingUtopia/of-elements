
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

    localAllies() {
        let localAllies = 1 //including self
        for (let neighbour of this.neighbours) 
            if (neighbour.type === this.type)
                localAllies ++
        return localAllies
    }

    odds(otherParticle) {
        let allyDifference = 
            this.localAllies() -
            otherParticle.localAllies() 
        let polarOdds = 
            allyDifference / 9
        let absoluteOdds = 
            (polarOdds + 1.0) / 2
        return absoluteOdds
    }

    compete(otherParticle) {
        let allyDifference = 
            this.localAllies() -
            otherParticle.localAllies() 
        let polarOdds = 
            allyDifference / 9
        let absoluteOdds = 
            (polarOdds + 1.0) / 2
        if (
            Math.random() < absoluteOdds
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