const express = require("express");
const zod = require("zod")
const app = express();
app.use(express.json());

const schema = zod.array(zod.number());  //mtlb humne bta dia phle hi ki req.body.kidneys mtlb postman m {"kidneys":[1,2,3] } no. dia toh mil jayega output shi but agr m string de dunga toh error de dega because humne bola h ki no. hi dena pdega array k andr



app.post("/health-checkup",  function (req, res) {
  const kidneys = req.body.kidneys
  const response = schema.safeParse(kidneys)  //safeparse ka mtlb hota h no. hai ki nhi kidneys ki array m check krlia
  res.send (response)
});


app.listen(3001);