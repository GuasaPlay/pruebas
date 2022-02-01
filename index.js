const fs = require("fs");
const { nanoid } = require("nanoid");

const S3Uploader = require("./aws/s3Uploader");

async function uploadFiles() {
    const file1 = fs.readFileSync("./test-files/1.jpg");
    const file2 = fs.readFileSync("./test-files/2.jpg");
    const file3 = fs.readFileSync("./test-files/3.jpg");

    const files = [file1, file2, file3];

    const promiseofFiles = files.map(async (file) => {
        const Key = `rigori/complaint-files/${nanoid(8)}.jpg`;
        return await S3Uploader({ Body: file, Key, ContentType: "image/jpg" });
    });

    const response = await Promise.all(promiseofFiles);
    console.log(response);
}

uploadFiles();
