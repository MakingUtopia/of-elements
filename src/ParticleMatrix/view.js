import renderParticle from "../Particle/view"

export default function renderParticleMatrix(
    canvasContext,
    particleMatrix,
    scale=1.0
) {
    for (let x=0; x<particleMatrix.columns; x++) {
        for (let y=0; y<particleMatrix.rows; y++) {
            renderParticle(
                canvasContext, particleMatrix.particles[x][y], scale
            )
        }
    }
}