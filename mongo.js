const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb://fullstack:${password}@cluster0-shard-00-00-sy0oy.azure.mongodb.net:27017,cluster0-shard-00-01-sy0oy.azure.mongodb.net:27017,cluster0-shard-00-02-sy0oy.azure.mongodb.net:27017/react?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

// 3.0  `mongodb+srv://fullstack:${password}@cluster0-sy0oy.azure.mongodb.net/react?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: process.argv[3] || 'HTML is Easy',
  date: new Date(),
  important: process.argv[4] || true,
});

note
  .save()
  .then(() => {
    console.log('note saved!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);

    mongoose.connection.close();
  });
});
