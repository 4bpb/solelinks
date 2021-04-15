var fetch = require('node-fetch');

fetch('https://solelinks.com/api/getToken', {
    headers: {
        'Host': 'solelinks.com',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'User-Agent': 'SoleLinks/1.0.8 (com.SoleLinks.SoleLinksApp; build:1; iOS 14.4.2) Alamofire/4.9.0',
        'Accept-Language': 'en-US;q=1.0',
        'app-version': '1.0.8'
    }
})       
.then(res => res.text())
.then(body => {
    let tojson = JSON.parse(body)
    //console.log(tojson.data.header_token)
})


fetch('https://solelinks.com/api/getToken', {
    headers: {
        'Host': 'solelinks.com',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'User-Agent': 'SoleLinks/1.0.8 (com.SoleLinks.SoleLinksApp; build:1; iOS 14.4.2) Alamofire/4.9.0',
        'Accept-Language': 'en-US;q=1.0',
        'app-version': '1.0.8'
    }
})       
.then(res => {
    let badCookie = res.headers.raw()['set-cookie']
    let goodCooke = String(badCookie).split('; ')
    let cookie = goodCooke[0]
    console.log(cookie)
});





function getCookies(res){
    if (res.ok) { // res.status >= 200 && res.status < 300
        let bf = (res.headers.raw()['set-cookie'])
        let Cookie = String(bf).split('; ')
        console.log(Cookie[0])
    } else {

    }
}

async function getJson(res){
    if (res.ok) { // res.status >= 200 && res.status < 300
        await console.log(res.Authorization) 
    } else {

    }
}





fetch('https://solelinks.com/api/portal/releases?page=1&searchKey=&upcoming=1', {
    headers: {
        'Host': 'solelinks.com',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'User-Agent': 'SoleLinks/1.0.8 (com.SoleLinks.SoleLinksApp; build:1; iOS 14.4.2) Alamofire/4.9.0',
        'Authorization': 'Bearer 8tvPsK1RNPUveCOaAvsWTzztyhneNw5xTr33G3fo9zY7H4RP38XYV6fdMCKZ_NrJp35lwnN=_x0mz_ijny60jnD4vNZt1d2qVXtqH3n2iv3DQzQLMPqCOaJOCvSvMddcB6=YRN_Dbjrkr8dOnvv3iOn2Ndd_cEgddjyAI-WD0f_fMA9dWKt_muqTpgGMsA_mRslxPk091614853239',
        'app-version': '1.0.8',
        'Accept-Language': 'en-US;q=1.0',
        'Cookie': 'solelinks_session=eyJpdiI6IkZcL0h3ajI1SlhXZWZKbkZ1MUwrZmF3PT0iLCJ2YWx1ZSI6InZtdmJUQWw3a241NTUrb1Z1Y0s3clJtcU1iXC82R1Y4WmVvWHNhS09oXC9zMVwvQ3JoTVplVWtCQmsxbGpcL2M5ZFByIiwibWFjIjoiN2I3MTZkMjAzNjJhMmUzY2ZkMDhjNDY0MTIxZGY4OWIwNDZhNDM1YjVlNzhkYmFmMWM1Njg5YzY5MDAzMmJmYiJ9'
    }
})
