class ArrayOperation {
    constructor() { }

    printEven() {
        console.log("Even numbers are:");
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0)
                console.log(array[i])
        }
    }
    printOdd() {
        console.log("Odd numbers are:");
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0)
                console.log(array[i])
        }
    }
    printPerfect() {
        console.log("perfect numbers are:");
        for (let j = 0; j < array.length; j++) {
            var temp = 0
            for (let i = 1; i <= array[j] / 2; i++) {
                if (array[j] % i === 0)
                    temp += i;
            }
            if (temp == array[j] && temp !== 0)
                console.log(array[j]);

        }
    }
    searchNo(number) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == number) {
                console.log("number is present ");
                break;
            }
        }
    }
}
let array = [26, 56, 43, 78, 28, 87, 12];
let arroper = new ArrayOperation();
arroper.printEven();
arroper.printOdd();
arroper.printPerfect();
arroper.searchNo(56);

