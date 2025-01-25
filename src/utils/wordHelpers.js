export const evaluateGuess = (guess, solution) => {
    const statuses = Array(5).fill("");

    guess.split("").forEach((letter, index) => {
        if (letter === solution[index]) {
            statuses[index] = "correct";
        } else if (solution.includes(letter)) {
            statuses[index] = "present";
        } else {
            statuses[index] = "absent";
        }
    });

    return statuses;
    };
