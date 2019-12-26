
export default function renderParticle(canvasContext, particle, scale) {
    let fillStyle = "#000000"
    switch (particle.type) {
        case 0:
            fillStyle = "#c0c0ff"
            break;
        case 1:
            fillStyle = "#ff0000"
            break;
        case 2:
            fillStyle = "#0000ff"
            break;
    }
    canvasContext.fillStyle = fillStyle
    canvasContext.fillRect(
        particle.x * scale, particle.y * scale, 
        1 * scale, 1 * scale
    )
}