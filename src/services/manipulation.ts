export function basicOperation(numA: number, numbB: number){

    var summation: number = Number(numA) + Number(numbB);
    var substraction: number = numA - numbB;
    var multiplication: number = numA * numbB;
    var results = {}

    if(numA !=0 && numbB != 0){

        let division = numA / numbB;
        results = {
            "Summation": summation,
            "Substraction": substraction,
            "Multiplacation": multiplication,
            "Division": division
        }
    }

    else {
        results = {
            "Summation": summation,
            "Substraction": substraction,
            "Multiplacation": multiplication,
            "Division": "Division by zero"
        }
    }

    return results;
}

interface manipulationBody{
    firstNumber: string;
    secondNumber: string;
}

export function validator(body: manipulationBody){

    if(!body.firstNumber || !body.secondNumber){
        return("Please provide two numbers")
    }
    
    if(!body.firstNumber.match(/^-?\d*\.?\d*$/)){
        return("Please provide a numerical value for the firstNumber body segment-- letters");

    }

    if(!body.secondNumber.match(/^-?\d*\.?\d*$/)){
        return("Please provide a numerical value for the secondNumber body segment-- letters");

    }

    const firstNumber: number = parseFloat(body.firstNumber || '');
    const secondNumber: number = parseFloat(body.secondNumber || '');

    if(isNaN(firstNumber) ){
        return("Please provide a numerical value for the firstNumber body segment");
    }
    if(isNaN(secondNumber)){
        return("Please provide a numerical value for the secondNumber body segment");
    }
    return null;
}