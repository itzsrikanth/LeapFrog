const db = require('../public/db');

// db.collections.keys.insert([{
//     abc: 1,
//     def: 2
// }, {
//     abcd: 3,
//     defg: 4
// }], (err, doc) => {
//     if (err !== null) {
//         console.error('Error: ', err);
//     } else {
//         console.log('Success: ', doc);
//     }
// });

db.collections.keys.find({}, (err, doc) => {
    if (err !== null) {
        console.error('Error: ', err);
    } else {
        console.log('Success: ', doc);
    }
});
