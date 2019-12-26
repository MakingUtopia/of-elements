import Particle from "../Particle"

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default class ParticleMatrix {
    constructor(columns=640, rows=480) {
        this.particles = []
        this.columns = columns
        this.rows = rows
        for (let x=0; x<this.columns; x++) {
            let column = []
            for (let y=0; y<this.rows; y++) {
                let type = null
                if (y < this.rows / 3)
                    type = 0
                else
                    type = ((x+y) % 2 === 0) ? 2 : 1
                    //type = (x > this.columns / 2) ? 2 : 1
                column.push(new Particle(x, y, type))
            }
            this.particles.push(column)
        }
    }

    initialiseParticle(particle) {
        let neighbours = []
        for (
            let x = particle.x - 1; 
            x <= particle.x + 1 && x < this.columns && x >= 0; 
            x ++
        ) {
            for (
                let y = particle.y - 1;
                y <= particle.y + 1 && y < this.rows && y >= 0;
                y ++
            ) {
                if (
                    x !== particle.x || y !== particle.y
                ) {
                    neighbours.push(
                        this.particles[x][y]
                    )
                }
            }
        }
        particle.initialise(neighbours)
    }

    initialise() {
        for (let x=0; x<this.columns; x++) {
            for (let y=0; y<this.rows; y++) {
                let particle = this.particles[x][y]
                this.initialiseParticle(particle)
            }
        }
    }

    step() {
        let shuffledColumns = shuffle(this.particles)
        for (let column of shuffledColumns) {
            let shuffledParticles = shuffle(column)
            for (let particle of shuffledParticles) {
                particle.step()
            }
        }
    }
}