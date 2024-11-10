function passwordGenerator() {
    let result = "";
    let count = 0;
    for(let i = 0; i < 8; i++){
        const rnd = Math.floor(Math.random() * 123);

        if((rnd >= 48 && rnd <= 57) || (rnd >= 65 && rnd <= 90) || (rnd >= 97 && rnd <= 122)){
            result = result + String.fromCharCode(rnd);
        }else {
            i--;
        }

        count++;


    }

    return result
}