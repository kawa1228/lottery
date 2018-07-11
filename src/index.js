class lottery{
    execute(){
        this.output(this.select())
    }

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
    const lottery = new lottery()

    lottery.execute()
}) 