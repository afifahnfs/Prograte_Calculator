//definisikan function u/ memperbarui layar tampilan
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    //perbarui layar saat tombol angka di tekan
    calculatorScreen.value = number
}

//mengambil element HTML di code JS
const numbers = document.querySelectorAll(".number")

//dapatkan setiap angka dari constant "numbers"
numbers.forEach((number) => {
    //menambahkan even click ke setiap element
    number.addEventListener("click",(event) => {
        //menampilkan angka saat menekan tombol
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//definisikan variable u/ melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//memberikan the number yg di klik ke variable currentNumber
const inputNumber = (number) => {
    //memperbaiki jika 0 di pencet terlebih dahulu
    if (currentNumber === '0') {
        currentNumber = number 
    } else {
        //menginput lebih dari 2 digit angka
        currentNumber += number
    }
}

//ambil element2 button menggunakan class "operator"
const operators = document.querySelectorAll(".operator")

//menambahkan Click event ke operator tombol2 &
// jalankan function inputOperator saat operator di klik
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//definisikan function inputOperator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        //memberikan nilai yg tersimpan di currentNumber ke prevNumber
        prevNumber = currentNumber
    }
    //berikan operator ke calculationOperator sebagai suatu argument
    calculationOperator = operator 
    //kosongkan currentNumber
    currentNumber = '0'
}

//ambil element sama-dengan(=)
const equalSign = document.querySelector('.equal-sign')

//tambahkan click event ke tombol sama-dengan (=) &
//jalankan function calculate saat tombol sama-dengan (=) di klik
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//definifikan function calculator
//parseInt = mengganti angka2 menjadi integer
//parsefloat = dapat mengkalkulasi angka desimal
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    //simpan hasil kalkulasi ke currentNumber
    currentNumber = result
    calculationOperator = ''
}

// membuat tombol AC
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//ambil element button (=) dan tambahkan click event
const clearBtn = document.querySelector('.all-clear')

//definisikan dan jalankan function clearAll
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

//mengkalkulasi angka desimal
inputDecimal = (dot) => {
    //mencegah peng-inputan titik desimal berulang kali
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

//tambahkan click event ke element button (deciaml)
const decimal = document.querySelector('.decimal')

//definisikan dan jalankan function inputDecimal
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
