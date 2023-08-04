const rows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ];

    const result = [];

    for (const word of words) {
        const lowercaseWord = word.toLowerCase();
        let isSingleRowWord = true;

        for (let i = 0; i < rows.length - 1; i++) {
            const isInRow = rows[i].has(lowercaseWord[0]);
            for (const char of lowercaseWord) {
                if (rows[i].has(char) !== isInRow) {
                    isSingleRowWord = false;
                    break;
                }
            }
            if (isSingleRowWord) {
                result.push(word);
                break;
            }
        }
    }

    return result;
