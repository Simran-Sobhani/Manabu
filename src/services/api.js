const API_URL = "https://kanjiapi.dev/v1"

async function fetchKanjiLetters(){
    const api = API_URL + "/kanji/grade-1";
    try {
        let response = await fetch(api);
        let data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchWords() {
    const api = API_URL + "/words/蠍";
    try {
        let response = await fetch(api);
        let data = await response.json();
        // console.log(data)
        return data;
    } catch (err){
        console.log(err);
    }

}

fetchWords()
