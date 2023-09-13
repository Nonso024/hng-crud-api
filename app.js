const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/personModel");

const app = express();
app.use(bodyParser.json());

// CREATE
app.post("/api", async (req, res) => {
  const { name } = req.body;

  try {
    const person = new Person({ name });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: `Failed to create person.` });
  }
});
// READ (Retrieve all Persons)
app.get("/api", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: `Server error` });
  }
});

// READ (Retreive specific Person by name)
app.get("/api/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const person = await Person.findOne({ name });
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: `Person not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Server error` });
  }
});

// UPDATE
app.put("/api/:user_id", async (req, res) => {
  const userId = req.params.user_id;
  const { name } = req.body;

  try {
    const person = await Person.findByIdAndUpdate(
      userId,
      { name },
      { new: true }
    );
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: `Person not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Server error` });
  }
});

// DELETE
app.delete("/api/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const removedPerson = await Person.findOneAndDelete({ name });
    if (removedPerson) {
      res.json({ message: `Person deleted succesfully` });
    } else {
      res.status(404).json({ error: `Person not found` });
    }
  } catch (error) {
    res.status(500).json({ error: `Server Error` });
  }
});

// Kickstart the server

mongoose
  .connect(
    "mongodb+srv://josephani772:test1234admin@cluster0.1ycnnp8.mongodb.net/test-apidb?retryWrites=true&w=majority"
  )
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
