import ParticleMatrix from "./ParticleMatrix"
import renderParticleMatrix from "./ParticleMatrix/view"


let elementsCanvas = null
let elementsCanvasContext = null

function onLoad() {
    elementsCanvas = document.getElementsByClassName(
        "elements-canvas"
    )[0]
    elementsCanvasContext = elementsCanvas.getContext("2d")

    //Draw
    let c = elementsCanvasContext

    let particleMatrix = new ParticleMatrix(160, 120)
    particleMatrix.initialise()

    setInterval(() => {
        particleMatrix.step()
    }, 1)

    setInterval(() => {
        renderParticleMatrix(c, particleMatrix, 4.0)
    }, 100)
}

onLoad()