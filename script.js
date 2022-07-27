const controls = document.querySelectorAll('.button')
let current = 0;
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach((button)  => {
    button.addEventListener('click', (e) => {
        const left = e.target.classList.contains("esquerda");       

        if (left) {
            current -= 1;
        } else {
            current += 1;;
        }

        if(current >= maxItems) {
            current = 0;
        } 
        if (current < 0) {
            current = maxItems - 1;
        }

        console.log("items", current, left)

        items.forEach(item => 
            item.classList.remove('atual'));
        items[current].scrollIntoView({
            inline: "center",
            behavior: "smooth",

        })

        items[current].classList.add("atual");
    })
})