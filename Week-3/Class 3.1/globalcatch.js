const express = require("express")
const app =express()
const PORT = 3006;
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.post('/health-checkup', (req, res) => {
    const kidneys=req.body.kidneys       //postman k req lga kr body m jao vha "kidneys" likho uske andr array bnalo eg[123] so get output u have 3 kidneys,, or agr aisa kuch likhe hu array m[fngkjjksdbdkj] toh error aata h mtlb hmara info leak hora h ye na ho isliye global catches use kia humne vo msg de dega ki opps not found anything
    const kidneylength=kidneys.length  
    res.send("you have "+kidneylength+" kidneys")
})

// GLOBAL CATCHES  iska mtlb hota h hum apni file ko expose nhi krna chahte ek error ki vjh se so ye print krkek dedo msg
app.use(function(err,req,res,next){
    res.json("opps not found anything")  
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





