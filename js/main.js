var ellist =document.querySelector('.list')


function pokemon(_parama) {

    for (let i = 0; i < _parama.length; i++) {
        var newli = document.createElement('li')
        var newimg = document.createElement('img')
        var newspan = document.createElement('span')
        var newheading = document.createElement('h2')
        var newheading = document.createElement('h2')
        var newtext = document.createElement('p')
        var newbtn = document.createElement('button')
        var newkg = document.createElement('span')
        var newage = document.createElement('span')


        newli.setAttribute('class', 'item')
        newimg.setAttribute('class', 'item__pic')
        newimg.setAttribute('src', _parama[i].img)
        newimg.setAttribute('alt', _parama[i].name)
        newimg.setAttribute('width', 157)
        newimg.setAttribute('height', 157)
        newspan.setAttribute('class', 'line')
        newheading.setAttribute('class', 'heading')
        newtext.setAttribute('class', 'text')
        newbtn.setAttribute('data-uuid', 'close')
        newbtn.setAttribute('class', 'btn')
        newbtn.setAttribute('type', 'button')
        newkg.setAttribute('class', 'span__kg')
        newage.setAttribute('class', 'span__age')

        newheading.textContent = _parama[i].name
        newtext.textContent = _parama[i].type
        newbtn.textContent = "❤️"
        newkg.textContent = _parama[i].weight
        newage.textContent = _parama[i].avg_spawns + " age"

        newli.appendChild(newimg)
        newli.appendChild(newspan)
        newli.appendChild(newheading)
        newli.appendChild(newtext)
        newli.appendChild(newbtn)
        newli.appendChild(newkg)
        newli.appendChild(newage)
        ellist.appendChild(newli)

        console.log(newbtn);

    }
    
}

pokemon(pokemons)





var elbtn = document.querySelectorAll(".btn")
var elcount = document.querySelector(".count__text")

var cound = 0;

setInterval(function add(){
    elcount.textContent = cound
}, 500)

for (let i = 0; i < elbtn.length; i++) {
    elbtn[i].addEventListener("click", (e) => {
        if(e.target.dataset.uuid == "close"){
            cound += 1
            e.target.style.background = "red"
            e.target.dataset.uuid = "open"
        }
        else if(e.target.dataset.uuid == "open"){
            cound -= 1
            e.target.style.background = "none"
            e.target.dataset.uuid = "close"
        }
    })
    
}