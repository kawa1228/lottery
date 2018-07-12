class Lottery{
    execute(){
        this.output(this.select())
    }
 
    select(){
        const name = document.getElementById('NameId0')
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

const onClick = document.getElementById('onClick')
onClick.addEventListener('click',()=>{ 
    const lottery = new Lottery()

    lottery.execute()
})

addForm()
function addForm(){
    const addWinnerList = document.getElementById('addWinnerList');
    const tmpNode = document.getElementById('NameId0');

    let textArray = new Array();
    textArray = []

    document.getElementById("addApplicant").onclick =()=>{
        textArray.push('')
        
            /*ひな型の要素ノードオブジェクトを複製*/
            const newNode = tmpNode.cloneNode(true);
            /*スタイルを変更し可視化する*/
            newNode.style.display = '';

        for(let j=1; j<textArray.length; j++) {
            /*id属性値を変更*/
            newNode.id = 'NameId' + j;
            /*コンテンツを挿入*/
            console.log(document.createTextNode(newNode.id))
            //※上にvalueが入ってしまう！！NameId1~..
            newNode.appendChild(document.createTextNode(newNode.id));
            /*新ノードを追加*/
            addWinnerList.appendChild(newNode);
        }
    }
}
// delete form
const deleteApplicant = document.getElementById('deleteApplicant')
deleteApplicant.addEventListener('click',()=>{
    deleteForms()
})

const deleteForms = ()=>{
    const addWinnerList = document.getElementById('addWinnerList')
//childNodes[0]だと#id0からdeleteされてしまう 
    if(addWinnerList.hasChildNodes()){
        addWinnerList.removeChild(addWinnerList.childNodes[0])
    }
}