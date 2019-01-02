const loremIpsum = require("./generator");
const querystring = require("querystring");
const fs = require("fs");

const express = require('express');
const router = express.Router();

//Get route for index.html
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let indexContents = fs.readFileSync('../public/index.html', {encoding: "utf8"});
    //Send response to client
    res.write(indexContents);
    res.end();
});

//post route that generates lorem ipsum and provides index.html
router.post('/', (req, res) => {
    req.on('data', (inputValue) => {
        //Convert POST to string
        let query = inputValue.toString(); //# of paragraphs to be generated
        let numParagraphs = querystring.parse(query).numParagraphs;
        let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
        // Capture the contents of index.html in a variable
        let fileContents = fs.readFileSync("./public/index.html", { encoding: "utf8" });
        // Replace the placeholder <div> with the lorem ipsum text
        fileContents = fileContents.replace("<div class='placeholder-div'></div>", loremIpsumText);;
        response.setHeader('Content-Type', 'text/html');
        // Send a response to the client with the modified index.html file
        response.write(fileContents);
        response.end();
    });
});

module.exports = router;