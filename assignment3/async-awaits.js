//1
function downloadData(url) {
  return new Promise((resolve, reject) => {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
      const data = `Data from ${url}`;
      console.log('Download complete.');
      resolve(data);
    }, 1000);
  });
}
//2
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    console.log('Writing data to file...');
    setTimeout(() => {
      const filename = 'output.txt';
      console.log('File written:', filename);
      resolve(filename);
    }, 1000);
  });
}
//3
function uploadFile(filename) {
  return new Promise((resolve, reject) => {
    console.log(`Uploading ${filename} to server...`);
    setTimeout(() => {
      const response = `${filename} uploaded successfully.`;
      console.log('Upload complete.');
      resolve(response);
    }, 1000);
  });
}
//4
async function processData(url) {
  try {
    const data = await downloadData(url);
    const filename = await writeToFile(data);
    const response = await uploadFile(filename);
    console.log('Final Result:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

processData('https://example.com');