const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

var arr = [];

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}
// Send all the existing todos
app.get('/todos', (req, res) => {
  res.status(200).json(arr);
});

// Sending todoes with specific id;
app.get('/todos/:id', (req, res) => {
  const todoIndex = findIndex(arr, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    res.json(arr[todoIndex]);
  }
});

var i = 1;
// Adding new todos in to-do list
app.post('/todos', (req, res) => {
  var todoObj = req.body;
  todoObj.id = i++;
  arr.push(todoObj);
  res.status(200).send("Added");
});

// 
app.put('/todos/:id', (req, res) => {
  var targetId = req.params.id;
  if (arr.find(obj => obj.id === targetId)) {
    arr.find(obj => obj.id === targetId).description = req.body.description;
    arr.find(obj => obj.id === targetId).heading = req.body.heading;
    res.status(200);
  }

  else {
    res.status(404);
  }
});

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    }

    else {
        console.log(`Server is running on 3000`);
    }
});