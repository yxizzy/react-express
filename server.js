//server.js
const express = require('express');

const app = express();

const port = 5000;

//start the server
app.listen(port, () => console.log ('Server started on port ${port}'));

//route the app
app.get ('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastname: 'Doe' },
        {id: 2, firstName: 'Jane', lastname: 'Doe' },
        {id: 3, firstName: 'Mary', lastname: 'Doe' }
    ];
    res.json(customers);
});
//The above array should be fetched from a database
//To run use npm run server