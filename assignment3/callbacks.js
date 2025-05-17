//1
function downloadData(url,callback){
  console.log(`Starting download from ${url}...`);
  setTimeout(()=>{
    const data=`Data from ${url}`;
    console.log('Download complete.');
    callback(null,data);
  },1000);
}
//2
function writeToFile(data, callback) {
  console.log('Writing data to file...');
  setTimeout(()=>{
    const filename='output.txt';
    console.log('File written:',filename);
    callback(null,filename);
  },1000);
}
//3
function uploadFile(filename,callback){
  console.log(`Uploading ${filename} to server...`);
  setTimeout(()=>{
    const response=`${filename} uploaded successfully.`;
    console.log('Upload complete.');
    callback(null,response);
  },1000);
}
//4
downloadData('https://example.com',(err,data)=>{
  if(err)return console.error('Download error:',err);
  writeToFile(data,(err,filename)=>{
    if(err)return console.error('File write error:',err);
    uploadFile(filename,(err,response)=>{
      if(err)return console.error('Upload error:',err);
      console.log('Final Result:',response);
    });
  });
});