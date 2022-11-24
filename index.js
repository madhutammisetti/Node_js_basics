/*Create a server and create a route /data and give response of any kind and
 also give 404 page not found. */


 const http = require("http");
    const fs =require("fs")
 const server = http.createServer((request,response)=>{
     
    if(request.url == '/users'){
        response.writeHead(200,{'content-type':'application/json'})
        response.write(JSON.stringify([

            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
              },
              {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                  "street": "Victor Plains",
                  "suite": "Suite 879",
                  "city": "Wisokyburgh",
                  "zipcode": "90566-7771",
                  "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                  }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                  "name": "Deckow-Crist",
                  "catchPhrase": "Proactive didactic contingency",
                  "bs": "synergize scalable supply-chains"
                }
              }
            
        ]))
        response.end();
    }else if(request.url == "/data"){
        response.write("This is a data page");
        response.end()

    }else if(request.url == '/image'){
        fs.readFile("./puspa.jpg",(err,data)=>{
            response.writeHead(200,{'content-type':'image/jpg'});
            response.write(data)
            response.end()
        })
        
    }
   
    else{
        response.writeHead(404)
        response.write("Error 404 found");
        response.end()
    }

 });


   // read the data bit by bit from text 1 and completion of bit by bit data should be placed in text2 file
   
   
    // const  readStream = fs.createReadStream("./text1.txt","utf-8");
    // readStream.on("data",(data)=>{
    //     fs.appendFile('./text2.txt',data,(err)=>{
    //         if(err){
    //             console.log("Error in wrriting")
    //         }
    //         else{
    //             console.log("wrriten in file 2")
    //         }
    //     })
    // })


    //delete the files and folder in programming way 
    //floder name is sampledeletefloder
    //in this floder there are 2 files , index1.js and index2.js

    const floder = fs.readdirSync('./sampledeletefloder')
    console.log(floder)

    if(floder.length>0){
        for(let i=0;i<floder.length;i++){
            console.log(files[i]);
            fs.unlinkSync("./sampledeletefloder"+`/${files[i]}`);
        }
        fs.rmdirSync("./sampledeletefloder")
    }else{
        fs.rmdirSync("./sampledeletefloder")
    }


   






 server.listen(3000,(err)=>{
    if(err){
        console.log("Error occured in creating server")
    }
    else{
        console.log("server Started running on port 3000")
    }
 })



// when ever we call any API the data in that API should return in our web page , we will do with axios

// const http = require('http');

// const axios = require('axios');



// const server = http.createServer((req,res)=>{
//     if(req.url == '/users'){
//         res.writeHead(200,{'content-type':'application/json'})

//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((respon)=>{
//             res.write(JSON.stringify(respon.data))
//             res.end()
//         }).catch((err)=>{
//             res.write(JSON.stringify({error:err}))
//         })

        
//     }
//     else{
//         res.writeHead(404);
//         res.write("Error 404");
//         res.end()
//     }
// })


// server.listen(3000,(err)=>{
//     if(err){
//         console.log("error in server creation")
//     }
//     else{
//         console.log("Server created on port 3000")
//     }
// })