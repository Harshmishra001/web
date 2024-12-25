// EXPRESS JS 
const express=require("express"); // Importing the Express.js framework into the Node.js application. This allows 
                                  // the code to use all the functionalities and features provided by Express.

const app=express(); // This line creates an instance of an Express application.

const port=5005;  

function sum(n){
    let ans=0
    for(let i=1;i<=n;i++) {
        ans=ans+i
    }
    return ans
}

app.get("/",function(req,res){
    const n= req.query.n // extracting the value of the parameter n from the query string of an HTTP request.  mtlb postman m get request lga k likhna pdega localhost:5005?n=6  here question mark ka mtlb hi h query mtlb question mark k baad n aayega isliye req.query.n likha h  fir ye de dega sum hume 6 tk ka like 1+2+3+4+5+6
    const ans=sum(n)
    res.send("sum of "+n+" is "+ans) // sum of 6 is 21
})

app.listen(port,function(){
    console.log(`server is running at port ${port}`)
})