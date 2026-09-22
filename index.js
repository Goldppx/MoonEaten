const fs=require('node:fs');
const path=require('node:path');
module.exports=(req,res)=>{
  res.setHeader('Content-Type','text/html; charset=utf-8');
  res.setHeader('Cache-Control','public, max-age=0, must-revalidate');
  res.end(fs.readFileSync(path.join(__dirname,'index.html')));
};
