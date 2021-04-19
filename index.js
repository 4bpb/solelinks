var fetch = require('node-fetch');
const fs =require('fs')

function getData(){
    fetch('https://solelinks.com/api/portal/releases?page=1&searchKey=&upcoming=1', {
        headers: {
            'Host': 'solelinks.com',
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'User-Agent': 'SoleLinks/1.0.8 (com.SoleLinks.SoleLinksApp; build:1; iOS 14.4.2) Alamofire/4.9.0',
            'Authorization': 'Bearer 8tvP',
            'app-version': '1.0.8',
            'Accept-Language': 'en-US;q=1.0',
            'Cookie': ''
        }
    })    
    .then(res => res.text())
    .then(body => {
        let wait = JSON.parse(body)
        fs.writeFileSync('log.txt',wait,function(err){
            if(err){
                console.log(err)
            }
        })
    });
}

getData()