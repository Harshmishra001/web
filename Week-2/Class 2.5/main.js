const express = require('express');
const app = express();




// Middleware to parse JSON in the request body
app.use(express.urlencoded({extended:true}))
app.use(express.json());




// Example array
let items = ['item1', 'item2', 'item3'];




// GET request to retrieve all items
app.get('/items', (req, res) => {
    res.json(items); // ["item1","item2","item3"] res.json is same as res.send but res.json send data in json format
});




// POST request to add a new item
app.post('/items', (req, res) => {
    const newItem = req.body.item;  //postman k body m item:"yha newitem likho"  
    items.push(newItem); //fir items k array m pusg kia usse
    res.json({ message: 'Item added', newItem }); // {"message": "Item added","newItem": "item4"}
});




// PUT request to update an existing item
app.put('/items/:index', (req, res) => {
    const { index } = req.params;  // jo upr wali line m colon h usse params bolte h  mtlb ab postman p jao localhost:3009/items/(ab index likho koi yha)
    const updatedItem = req.body.item; //fir postman k body m jao vha raw m item likho mtlb ese item:(or apna update item yha likho double comma m)
    items[index] = updatedItem;//fir jo index p request lgayenge ucolon k pad postman m jo bhi index likhenge vha ab updated item aajayega likha
    res.json({ message: `Item updated`, updatedItem }); // {"message": "Item updated", "updatedItem": "item4"}
});




// DELETE request to remove an item
app.delete('/items/:index', (req, res) => {
    // const { index } = req.params;  isko ese bhi likh skte h niche dekh ek line
    const index = req.params.index;
    items.splice(index, 2); //index ki jgh upr route jo h vo pura postman m likho or colon k baad index ki jgh jiss element ko delete krna h array m uska index likho or fir vha s vo 2 element ko delete kr dega gin k because index,2 likha h
    res.json({ message: `Item at index ${index} deleted` }); // {"message": "Item at index 1 deleted" }
});




// Start the server
const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
