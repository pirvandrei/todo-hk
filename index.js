const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose') 

app.use(cors())
app.use(express.static('build'))

app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(requestLogger)

let notes = [
  {
    id: 1,
    content: "Learn Danish to keep public speeches",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Learn a front end framework to create interfaces that soak user data",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

const password = process.env.PASSWORD
const url =
`mongodb://fullstack:HcEm7O1ALnFNwh66@cluster0-shard-00-00-sy0oy.azure.mongodb.net:27017,cluster0-shard-00-01-sy0oy.azure.mongodb.net:27017,cluster0-shard-00-02-sy0oy.azure.mongodb.net:27017/react?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get("/api/notes", (req, res) => {
  Note.find({})
    .then((notes) => {
      res.json(notes);
      
    })
    .catch((error) => {
      console.log("error connecting to MongoDB:", error.message);
    });
    
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  response.json(note);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.put('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const body = request.body

  const note = notes.find((note) => note.id === id);

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  note.important = body.important
  note.content = body.content
  note.date = new Date()
  
  response.json(note)
})


app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)

})

app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => 
console.log(`Server running on port ${PORT}`)
);
