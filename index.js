const input1 = document.querySelector('.param1')
const input2 = document.querySelector('.param2')
const form = document.querySelector('form')
const matrixBox = document.querySelector('.matrix')
const stringBox = document.querySelector('.string')
const resultBox = document.querySelector('.result')

form.addEventListener( 'submit', (event) => {
    event.preventDefault()
    matrixBox.innerHTML = ''
    const param1 = input1.value.toUpperCase()
    const param2 = input2.value.toUpperCase()
    script(param1, param2)
})

const script = (param1, param2) => {
    // param1 = 'QLGNAEKIRLRNGEAE'
    // param2 = 'KING'
    if( !isNaN(param1) || param1===undefined || (Math.sqrt(param1.length)^0)!==Math.sqrt(param1.length)){
        return alert('Wrong value of "string"')
    }else if(!isNaN(param2) || param2===undefined){
        return alert('Wrong value of "word"')       
    }
    const size = Math.sqrt(param1.length)
    const matrix = [] 
    const result = []
    let row = []
    let cell= []

    for(let i=0; i <= param1.length; i++){
        if(row.length !== size){
            row.push(param1[i])
        } else {
            matrix.push(row)
            row=[]
            row.push(param1[i])
        }
    }
    matrix.map(item => {
        const showRow = document.createElement('p')
        showRow.innerHTML = `${item}`;
        matrixBox.appendChild(showRow)
    })
    stringBox.innerHTML = param2

    for(let i=0; i < param2.length; i++){
        for(let j=0; j < size; j++){
            const check = matrix[j].indexOf(param2[i])
            if(check !== -1){
                cell.push(j)
                cell.push(check)
                result.push(cell)
                cell=[]
                break
            }
        }
    }
    result.map((item, index) => {
        const span = document.createElement('span')
        if(index !== result.length-1){
            span.innerHTML = `[${item}]=>`
            resultBox.appendChild(span)
        } else {
            span.innerHTML = `[${item}]<br>`
            resultBox.appendChild(span)
        }
    })
}
