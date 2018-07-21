//当選者数plus minus ボタン
document.querySelector('#formPlus').addEventListener('click',()=>{
    document.querySelector('#numOfWinners').value++;
})
document.querySelector('#formMinus').addEventListener('click',()=>{
    if(document.querySelector('#numOfWinners').value > 0){
        document.querySelector('#numOfWinners').value--;
    }
})

class Lottery{
    execute(){
        if(this.validation()){
            this.output(this.select())
            document.querySelector('#resultMessage').style.display='block'
            this.changeColor()

        } else {
            alert('当選者数が多すぎます')
        }
    }

    select(){
        const nameBox = document.querySelectorAll('.nameBox')
        const winnerCount = document.querySelector('#numOfWinners').value

        const selectList =[]
        //応募者一覧
        for(let i=0;i<nameBox.length;i++){
            selectList.push(nameBox[i].value)
        }
        //応募者一覧をシャッフル
        for (let i = selectList.length - 1; i >= 0; i--){
            var rand = Math.floor( Math.random() * ( i + 1 ) );
            [selectList[i], selectList[rand]] = [selectList[rand], selectList[i]]
        }
        //当選者数分セレクト
        const selector =[]
        for(let i=0;i<winnerCount ;i++){
            selector.push(selectList[i])
        }
        return selector
    }
    
    output(name){
        const elem = document.getElementById('winnerList')
        elem.innerText = ''
        const ul = document.createElement('ul')
        for (let i = 0; i < name.length; i++) {
            let li = document.createElement('li');
            li.className = 'winnersList';
            li.innerText = name[i]+' さん';
            ul.appendChild(li);
          }
        elem.appendChild(ul)
    }
    validation(){
        const numOfWinners = document.querySelector('#numOfWinners').value
        const nameBox = document.querySelectorAll('.nameBox').length
        
        if(numOfWinners <= nameBox){
            return true
        }
    }
    changeColor(){
        const stateConfig = document.querySelector('.stateConfig')
        const stateResult = document.querySelector('.stateResult')

        stateConfig.classList.add('stateConfigAfter')
        stateConfig.classList.remove('stateConfig')
        stateResult.classList.add('stateResultAfter')
        stateResult.classList.remove('stateResult')
    }
}

const onClick = document.getElementById('onClick')
onClick.addEventListener('click',()=>{ 
    const lottery = new Lottery()

    lottery.execute()
})
// add form
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

        let p = document.createElement('p');
        for(let j=1; j<textArray.length; j++) {
            /*id属性値を変更*/
            newNode.id = 'NameId0' + j;
            /*新ノードを追加*/
            p.appendChild(newNode);
            addWinnerList.appendChild(p);
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
    if(addWinnerList.hasChildNodes()){
        addWinnerList.removeChild(addWinnerList.lastChild)
    }
}