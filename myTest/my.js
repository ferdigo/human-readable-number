function toReadable(number) {
    let teens = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozens = [
        '',
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundreds;
    let thousands = "thousand";
    let splitter = [];
    let string = ''
    string +=  number.toString();
    if (string.length <3) {
        // console.log(number.toString());

        console.log(teens.length);
        if (number < 20) {
            let result = teens.find((item, index, array) => {
                if (index == number) return item;
            });
            console.log(result);

            return result;
        }

        if (number >= 20 ) {
            console.log(string[0]);

            let firstNum = dozens.find((item, index, array) => {
                if (index == string[0]) return item;
            });
            console.log(string[1]);
            let secondNum = teens.find((item, index, array) => {
                if (index == string[1]) return item;
            });


            console.log(`${firstNum} ${secondNum}`);
        }
    }
    if(string.length > 2){
            let hundreds =  teens.find((item, index, array) => {
                if (index == string[0]) return item;
            }) + ' hundred';

            if (string[1] < 20) {
                let firstNum = teens.find((item, index, array) => {
                    if (index == number) return item;
                });
            
            }
    
            if (string[1] >= 20 ) {
                console.log(string[0]);
    
                let firstNum = dozens.find((item, index, array) => {
                    if (index == string[0]) return item;
                });
                console.log(string[1]);
                let secondNum = teens.find((item, index, array) => {
                    if (index == string[1]) return item;
                });
    
    
                console.log(`${firstNum} ${secondNum}`);
            }

            console.log(`${hundreds} ${firstNum} ${secondNum}`);

    }

    // console.log(number.toString().length);
}


console.log(toReadable(187));
