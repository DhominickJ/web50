const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    // console.log(load)
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    // console.log(scale(load, 0, 100, 0, 1))
}

let scale = (num, in_min, in_max, out_min, out_max) => {
    // val1 = (num - in_min)
    // val2 = (out_max - out_min)
    // val3 = (in_max - in_min)
    // val4 = out_min
    value = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    // console.log()
    return value
}