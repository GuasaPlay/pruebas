const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    credentials: {
        accessKeyId: "AKIARXPM75LSJES4ICJF",
        secretAccessKey: "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",
    },
    region: "us-east-1",
    params: {
        ACL: "public-read",
        Bucket: "ticsga",
    },
});

module.exports = s3;
