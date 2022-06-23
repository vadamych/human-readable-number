module.exports = function toReadable (number) {
    let result;
    let arr1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let arr2 =  ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let arr3 = ["ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let numToStr = ('' + number);
    if(number == 0){
        return "zero";
    }
    if(numToStr.length == 1 || numToStr.charAt(0) == 1){
        result = arr1[number - 1];
    }
    if(numToStr.length == 2 && numToStr.charAt(0) == 1) {
        result = `${arr3[numToStr.charAt(1)]}`;
    }
    if(numToStr.length == 2 && numToStr.charAt(0) != 1 && numToStr.charAt(1) == 0){
        result = `${arr2[numToStr.charAt(0) - 2]}`;
    }
    if(numToStr.length == 2 && numToStr.charAt(0) != 1 && numToStr.charAt(1) > 0){
        result = `${arr2[numToStr.charAt(0) - 2]} ${arr1[numToStr.charAt(1) - 1]}`;
    }
    if(numToStr.length == 3 && numToStr.charAt(1) == 0 && numToStr.charAt(2) == 0){
        result = `${arr1[numToStr.charAt(0) -1]} hundred`;
    }
    if(numToStr.length == 3 && numToStr.charAt(1) == 0 && numToStr.charAt(2) != 0){
        result = `${arr1[numToStr.charAt(0) -1]} hundred ${arr1[numToStr.charAt(2) - 1]}`;
    }
    if(numToStr.length == 3 && numToStr.charAt(1) == 1){
        result = `${arr1[numToStr.charAt(0) -1]} hundred ${arr3[numToStr.charAt(2)]}`;
    }
    if(numToStr.length == 3 && numToStr.charAt(1) > 1 && numToStr.charAt(2) == 0){
        result = `${arr1[numToStr.charAt(0) -1]} hundred ${arr2[numToStr.charAt(1) - 2]}`;
    }
    if(numToStr.length == 3 && numToStr.charAt(1) > 1 && numToStr.charAt(2) > 0){
        result = `${arr1[numToStr.charAt(0) -1]} hundred ${arr2[numToStr.charAt(1) - 2]} ${arr1[numToStr.charAt(2) - 1]}`;
    }
    return result;
}
