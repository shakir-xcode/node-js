const { Eng_v } = require('./data');
const { Urdu_v } = require('./urd');
const fs = require('fs');


const Result_data = [];

Eng_v.forEach((item, entry_index) => {

    let verseArray = [];

    item.verses.forEach((verse_item, verse_index) => {
        const verseEntry = {};

        verseEntry.id = verse_item.id,
            verseEntry.text = verse_item.text,
            verseEntry.etranslation = verse_item.etranslation,
            verseEntry.utranslation = Urdu_v[entry_index].verses[verse_index].utranslation
            verseArray.push(verseEntry)
    })

    const entry = {
        "id": item.id,
        "name": item.name,
        "transliteration": item.transliteration,
        "etranslation": item.etranslation,
        "utranslation": Urdu_v[entry_index].utranslation,
        "type": item.type,
        "total_verses": item.total_verses,
        "verses": verseArray
    }

    Result_data.push(entry);
})

fs.writeFileSync('resultDataset.json', JSON.stringify(Result_data))

// for (let i = 0; i < 3; i++)
// console.log(Result_data[0])

fs.writeFileSync('./resultDataset.json', JSON.stringify(Result_data, null, 2))

