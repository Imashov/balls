const scoop_1 = document.querySelector('.scoop-1');
const scoop_2 = document.querySelector('.scoop-2');
const scoop_3 = document.querySelector('.scoop-3');
const btn_1 = document.getElementById('scoop_select-1')
const btn_2 = document.getElementById('scoop_select-2')
const btn_3 = document.getElementById('scoop_select-3')
console.log(btn_1)

function getColor(color) {
    switch (color) {
        case 'lavender':
            return taste = '#9e9ee2'
        case 'pistachio':
            return taste = '#93c572'
        case 'raspberry':
            return taste = '#f984e5'
        default:
            return taste = '#ffffff'
    }
}

btn_1.addEventListener('change', function () {
    scoop_1.style.background = getColor(btn_1.value)

})
btn_2.addEventListener('change', function () {
    scoop_2.style.background = getColor(btn_2.value)
})

btn_3.addEventListener('change', function () {
    scoop_3.style.background = getColor(btn_3.value)
})