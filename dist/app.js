/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
        this.output(this.select())
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
}

const winnerMessage = ()=>{
    const resultMessage = document.querySelector('#resultMessage')
    const p = document.createElement('p')
    p.innerText = 'おめでとうございます'
    resultMessage.appendChild(p)
}

const onClick = document.getElementById('onClick')
onClick.addEventListener('click',()=>{ 
    const lottery = new Lottery()

    lottery.execute()
    winnerMessage()
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

/***/ })
/******/ ]);