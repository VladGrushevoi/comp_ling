import { word_endings } from "../text-data/constants"

export function normalizeWord(word){
    if(word.length <= 3){
        return word
    }

    return deleteEnding(word)
}

export function deleteEnding(word, exit=false){
    if(exit){
        return word
    }
    for(let i = 0; i < word_endings.length; i++){
        if(word.substr(word.length - word_endings[i].length, word.length) === word_endings[i]){
            let new_word = word.slice(0,word.length - word_endings[i].length)
            if(new_word.length < 3){
                return deleteEnding(word, true)
            }else{
                return deleteEnding(new_word, false)
            }
        }
    }

    return deleteEnding(word, true)
}