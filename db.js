import mongoose from 'mongoose';

const url = 'mongodb+srv://samarth09: realsamarth09@cluster0.fzzwr8r.mongodb.net/SensorData?retryWrites=true&w=majority&appName=Cluster0';

// Create a connection to the database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Error handling
db.on('error', console.error.bind(console, 'connection error:'));

// Open the connection
db.once('open', function() {
  console.log("Successfully connected to the database.");
});

export default db;
