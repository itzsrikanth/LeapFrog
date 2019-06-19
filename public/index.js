const AWS = require('aws-sdk');
const { regions } = require('../src/constants');

const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://localhost:4569',
  region: regions[0]
});

Promise.all(
  regions.map(async region => {
    AWS.config.update({
      region
    });
    return await dynamodb.listTables({})
      .promise()
      .then(data => {
        data.region = region
        return data;
      });
  })
).then(console.log);
