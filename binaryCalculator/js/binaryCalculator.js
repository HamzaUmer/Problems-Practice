const Calculator = class Calculator {
    init() {
        this.firstNumber = "";
        this.firstSet = false;
        this.secondNumber = "";
        this.secondSet = false;
        this.operand = "";
        this.opSet = false;
        this.inputArray = [];
        this.result = "";
    }

    setFirstNumber(number){
        this.firstNumber += number;
    }

    setSecondNumber(number){
        this.secondNumber += number;
    }

    setOperand(oper){
        this.operand = oper;
        // this.firstSet = true;
    }

    setFirstTrue() {
        this.firstSet = true;
    }

    setSecondTrue(){
        this.secondSet = true;
    }

    setOpTrue() {
        this.opSet = true;
    }

    handleButtonPress(e){
        const input = e.target.innerHTML;
        if(e.target.className.indexOf("btn") != -1){
            if(this.result !== ""){
                this.init();
            } 
            if(input != "C" && input != "="){
                if(input === "0" || input === "1"){
                    this.handleDigit(input);
                } else {
                    this.handleOperand(input);
                }
                this.show();
            } else if(input === "="){
                this.handleEquals();
            } else {
                this.handleClear();
            }
        }
    }

    handleDigit(number){
        if(!this.firstSet){
            this.setFirstNumber(number);
        } else {
            if(this.opSet && this.secondNumber === ""){
                this.inputArray.push(this.operand);
            }
            this.setSecondNumber(number);
        }
    }

    handleOperand(op){
        if(this.opSet){
            console.log("can't do that yet!");
        } else {
            this.setOpTrue();
            if(!this.firstSet){
                this.setFirstTrue();
                this.inputArray.push(this.firstNumber);
            }
            this.setOperand(op);
        }
    }

    handleEquals() {
        if(!this.secondSet){
            if(!this.opSet || !this.firstSet){
                this.show(this.firstNumber);
            } else {
                this.setSecondTrue();
                this.inputArray.push(this.secondNumber);
            }
        }
        const result = this.calculate(this.inputArray);
        this.result = result;
        this.show(result);
    }

    handleClear() {
        let screen = document.getElementById("res");
        screen.innerHTML = "";
        this.init();
    }

    show(result) {
        let screen = document.getElementById("res");
        if(!this.result){
            screen.innerHTML = `${this.firstNumber}${this.operand}${this.secondNumber}`;
        } else {
            screen.innerHTML = result;
            this.init();
            this.handleDigit(result);
        }
        
        
    }

    calculate(arr){
        console.log(arr);
        const a = parseInt(arr[0],2);
        const b = parseInt(arr[2],2);
        
        switch(arr[1]){
            case "+":
                return this.add(a, b);
                break;
            case "-":
                return this.subtract(a, b);
                break;
            case "/":
                return this.divide(a, b);
                break;
            case "*":
                return this.multiply(a, b);
                break;
        }
    }

    add(a,b){
        let res = a + b;
        return res.toString(2);
    }

    subtract(a,b){
        let res = a - b;
        return res.toString(2);
    }

    divide(a,b){
        let res =  a / b;
        return res.toString(2);
    }

    multiply(a,b){
        let res =  a * b;
        return res.toString(2);
    }

}

let calc = new Calculator();
document.body.onclick = e => {
    calc.handleButtonPress(e);
}
