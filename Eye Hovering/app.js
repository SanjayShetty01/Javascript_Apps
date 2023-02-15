
const author = document.getElementById('author')
const rekt = author.getBoundingClientRect();
const authorX = rekt.left + rekt.right / 2
const authorY = rekt.top + rekt.height/2


document.addEventListener('mousemove', (e) =>{
    console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;


    const angleDeg = angle(mouseX, mouseY, authorX, authorY)
    console.log(angleDeg)

    //console.log(`rotate(${90 + angleDeg}deg)`)

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        console.log(eye)
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
        author.style.filter = `hue-rotate(${angleDeg}deg)`
    });
})


function angle(cx, cy,ex,ey){
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI

    return deg;
}