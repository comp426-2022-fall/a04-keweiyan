export function roll(sides, dices, rolls){
    let numbers = [];
    let results = [];

    for(let i = 0; i < rolls; i++){
        let sum = 0;
        for(let j = 0; j < dices; j++){
            numbers[j] = Math.floor(Math.random() * sides) + 1;
            sum += numbers[j]
        }
       results.push(sum)
    }

    return {
        "sides": sides,
        "dice": dices,
        "rolls": rolls,
        "results": results
    }
}
