
function generate(phrase) {
    phrase = phrase.trim()

    if (phrase === "") {
        return false;
    }

    const words = phrase.split(" ").map(w => w.trim());
    if (words.reduce((length, word) => length + word.length, 0) > 139) {
        return false;
    }
    return words.reduce((hashtag, word) => `${hashtag}${capitlizeFirstLetter(word)}`, "#");
}

function capitlizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const [counter, setCounter] = useState(0)

