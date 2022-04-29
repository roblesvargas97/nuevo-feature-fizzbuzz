class FizzBussService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number) {

        const pattern = /^[-]?[0-9]?[.]?[0-9]+$/;
        const validation = pattern.test(number);
        if(!validation){
            throw new Error("The value should be a number");
        }else{
            if(number%3 === 0 && number%5 === 0){
                return "FIZZBUZZ";
            } else if(number%5 === 0){
                return "BUZZ";
            } else if(number%3 === 0){
                return "FIZZ";
            } else{
                return number;
            }
        }
    }
}

module.exports = FizzBussService;
