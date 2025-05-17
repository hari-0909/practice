//1
function downloadData(url) {
  return new Promise((resolve) => {
    console.log(`Downloading from ${url}...`);
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}
//2
function writeToFile(data) {
  return new Promise((resolve) => {
    console.log('Writing data...');
    setTimeout(() => {
      resolve('output.txt');
    }, 1000);
  });
}
//3
function uploadFile(filename) {
  return new Promise((resolve) => {
    console.log(`Uploading ${filename}...`);
    setTimeout(() => {
      resolve(`${filename} uploaded`);
    }, 1000);
  });
}
//4
downloadData('https://example.com')
  .then(data => writeToFile(data))
  .then(filename => uploadFile(filename))
  .then(result => console.log('Result:', result));