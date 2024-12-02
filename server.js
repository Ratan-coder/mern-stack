const express = require('express');          //here we are defining that hey node get me the express and store it in express variable
const app = express();                          // here we installisng the app of express
const PORT = process.env.PORT || 9000;

const articlesInfo = {
    "learn-react":{
        comments: [],
    },
    "learn-node":{
        comments: [],
    },
    "my-thoughts-on-learning-react":{
        comments: [],
    },
    "Angular vs React":{
        comments: [],
    },
};


// initialize middleware
// We use to have to install body parser but now it is a built in middleware
// function of express. it parses incoming JSON payload
app.use(express.json({ extended: false }));

app.post('/api/articles/:name/add-comments', (req, res) =>{
    const {username, text} = req.body
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({ username,text });
    res.status(200).send(articlesInfo[articleName]);
});

// This route used for testing
// app.get('/', (req, res) => res.send("Hello, world!"));
// app.post('/',(req, res) => res.send(`HI ${req.body.name} HOW ARE YOU?`));
// app.get("/hello/:name",(req, res) => res.send(`Hello ${req.params.name}`));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
