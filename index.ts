#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
        
           name: "pin",
           message:"Enter Your Pin Number:",
           type:"number"
        }
    ]
)

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices:["withdraw", "check balance"]
            }
        ]
    );

    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt (
            [
                {
                    name: "amount",
                    message: "enter Your Amount",
                    type: "number"
                }
            ]
        );

        myBalance -= amountAns.amount;

        console.log("Your Current Balance is :" + myBalance); 

       
    }else if (operationAns.operation === "check Balance") {
        console.log("Your current Balance is :" + myBalance );  
    }
    
}

else {
    console.log("Your Pin is Incorrect Please try to Push a correct Pin NUmber!");
    
}

