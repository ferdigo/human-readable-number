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
        "",
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
    let string = "";

    let dozensNum = "";
    let singleNum = "";

    string += number.toString();

    if(string <10){
        singleNum = teens.find((item, index, array) => {
            if (index == string[0]) return item;
        });
        return singleNum;
    }

    if (string.length < 3) {
        if (string[0] > 1) {
            dozensNum = dozens.find((item, index, array) => {
                if (index == string[0]) return item;
            });

            if (string[1] > 0) {
                singleNum = teens.find((item, index, array) => {
                    if (index == string[1]) return item;
                });
            }
        } else if (string < 20) {
            singleNum = teens.find((item, index, array) => {
                if (index == string) return item;
            });
            
        }

        return `${dozensNum} ${singleNum}`.trim();
    }

    if (string.length > 2) {
        let hundreds =
            teens.find((item, index, array) => {
                if (index == string[0]) return item;
            }) + " hundred";

        if (string[1] > 1) {
            dozensNum = dozens.find((item, index, array) => {
                if (index == string[1]) return item;
            });
            if (string[2] > 0) {
                singleNum = teens.find((item, index, array) => {
                    if (index == string[2]) return item;
                });
            }
        } else if (string[1] + string[2] < 20 && string[1] + string[2] > 0) {
            singleNum = teens.find((item, index, array) => {
                if (index == string[1] + string[2]) return item;
            });

            return `${hundreds} ${singleNum}`.trim();
        } else if (string[1] + string[2] == 0) return `${hundreds}`;

        return `${hundreds} ${dozensNum} ${singleNum}`.trim();
    }
}

console.log(toReadable(900));
