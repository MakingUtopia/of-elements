const assert = require("assert")
import Particle from '../../src/Particle'

describe("Particle", function () {
    it ("Properties recorded.", function () {
        let particle = new Particle(3, 6, 1)
        assert(particle.x === 3)
        assert(particle.y === 6)
        assert(particle.type === 1)
    }),
    it ("Opposite types correct.", function () {
        let particle = new Particle(0, 0, 1)
        assert(particle.oppositeType === 2)
        particle = new Particle(0, 0, 2)
        assert(particle.oppositeType === 1)
        particle = new Particle(0, 0, 0)
        assert(particle.oppositeType === null)
    })
})