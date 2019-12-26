const assert = require("assert")
import ParticleMatrix from '../../src/ParticleMatrix'

describe("ParticleMatrix", function () {
    it ("Can construct.", function () {
        new ParticleMatrix()
    })
    it ("Can initialise", function () {
        let particleMatrix = new ParticleMatrix()
        particleMatrix.initialise()
    })
    it ("Neighbours correct.", function () {
        let particleMatrix = new ParticleMatrix()
        let particle = particleMatrix.particles[320][240]
        particleMatrix.initialise()
        let neighbours = []
        neighbours.push(particleMatrix.particles[319][239])
        neighbours.push(particleMatrix.particles[319][240])
        neighbours.push(particleMatrix.particles[319][241])
        neighbours.push(particleMatrix.particles[320][239])
        neighbours.push(particleMatrix.particles[320][241])
        neighbours.push(particleMatrix.particles[321][239])
        neighbours.push(particleMatrix.particles[321][240])
        neighbours.push(particleMatrix.particles[321][241])
        assert.equal(particle.neighbours.length, neighbours.length)
        assert.deepEqual(particle.neighbours, neighbours)
    })
    it ("Edge particle - neighbours correct.", function () {
        let particleMatrix = new ParticleMatrix()
        let particle = particleMatrix.particles[639][240]
        particleMatrix.initialise()
        let neighbours = []
        neighbours.push(particleMatrix.particles[638][239])
        neighbours.push(particleMatrix.particles[638][240])
        neighbours.push(particleMatrix.particles[638][241])
        neighbours.push(particleMatrix.particles[639][239])
        neighbours.push(particleMatrix.particles[639][241])
        assert.equal(particle.neighbours.length, neighbours.length)
        assert.deepEqual(particle.neighbours, neighbours)
    })
})