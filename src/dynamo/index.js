const AWS = require('aws-sdk');
const Promise = require('bluebird');

module.exports = function (funcName, params, config) {
    params = {};
    return new Promise((resolve, reject) => {
        if (!config) {
            reject(new Error('Configuration params missing'));
        } else {
            if (!config.accessKeyId || !config.secretAccessKey) {
                reject(new Error('Access keys missing'));
            } else if (!config.region) {
                reject(new Error('Region not mentioned'));
            } else {
                const dynamodb = new AWS.DynamoDB({
                    region: config.region,
                    accessKeyId: config.accessKeyId,
                    secretAccessKey: config.secretAccessKey,
                    endpoint: 'http://localhost:8000'
                });
                dynamodb[funcName](params, function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            }
        }
    });
};
