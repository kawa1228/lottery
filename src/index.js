class Execue{

    select(){
        const name = document.getElementById('name')
        return name.value
    }
    
    output(name){
        const elem = document.getElementById('winnerList')
        //elem.innerText = ''
        const div = document.createElement('div')
        div.innerText = name
        elem.appendChild(div)
    }
}

addEventListener('click',()=>{
    const name = new Execue().select()
    console.log(name)

    new Execue().output(name)
})