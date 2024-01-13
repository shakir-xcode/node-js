const { dataset } = require("./dataset");
const fs = require('fs');

const newDataset = dataset.map((surah, index) => {

    let verseArr = surah.verses.map(verse => {

        let id_value = verse.id;        //saving previous id value
        let entry = { ...verse };           // copy previous verse into entry variable
        delete entry.id;                       // delete previous 'id' property
        entry.vid = id_value;               // new 'vid' property added , 'vid' can be changed to anything, like: entry.myId

        return entry
    })

    if (index === 0)
        console.log(verseArr)
    return {
        ...surah,
        verses: verseArr
    }
})

// console.log(newDataset[113]);
fs.writeFileSync('./dataset101.json', JSON.stringify(newDataset));

