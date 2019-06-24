var Datastore = require('nedb');

module.exports = (function () {
    var db = {
        names: [
            'keys'
        ],
        collections: {}
    };
    var loadDb = false;
    if (!loadDb) {
        db.names.forEach(collectionName => {
            db.collections[collectionName] = new Datastore({
                autoload: true,
                filename: `${collectionName}.db`
            });
        })
    }
    return db;
})();
