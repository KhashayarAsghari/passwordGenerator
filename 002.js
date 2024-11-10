function passwordGenerator() {
    let result = "";

    let randomNumberIndex = 0;
    let randomLoweCaseIndex = 0;
    let randomUpperCaseIndex = 0;

    while (
        randomNumberIndex === randomUpperCaseIndex ||
        randomNumberIndex === randomLoweCaseIndex ||
        randomUpperCaseIndex === randomLoweCaseIndex
    ) {

        randomNumberIndex = Math.floor(Math.random() * 8)
        randomUpperCaseIndex = Math.floor(Math.random() * 8)
        randomLoweCaseIndex = Math.floor(Math.random() * 8)
    }

    for (let i = 0; i < 8; i++) {

        if (i === randomNumberIndex) {
            const rnd = Math.floor(Math.random() * 10);
            result += rnd;
        } else if (i === randomUpperCaseIndex) {
            const rnd = Math.floor(Math.random() * 26) + 65;
            result += String.fromCharCode(rnd)
        } else if (i === randomLoweCaseIndex) {
            const rnd = Math.floor(Math.random() * 26) + 97;
            result += String.fromCharCode(rnd)
        } else {
            const rndCharType = Math.floor(Math.random() * 3);

            if (rndCharType === 0) {
                const rnd = Math.floor(Math.random() * 10);
                result += rnd;
            }

            if (rndCharType === 1) {
                const rnd = Math.floor(Math.random() * 26) + 97;
                result += String.fromCharCode(rnd);
            }

            if (rndCharType === 2) {
                const rnd = Math.floor(Math.random() * 26) + 65;
                result += String.fromCharCode(rnd)
            }
        }
    }

    return result
}