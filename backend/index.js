const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// USE THE MIDDLEWARES
app.use(cors());
app.use(express.json());

// practiseCrud
// JTWvwGD2AeQzRHWH

// code from mongodb atlas

const uri = "mongodb://localhost:27017";
// const uri =
//   "mongodb+srv://practiseCrud:JTWvwGD2AeQzRHWH@cluster0.09vuo6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  const database = client.db("mangoDB");
  const mangoCollection = database.collection("mango");
  // const mangoCollection = client.db("mangoDB").database.collection("mango");

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.post("/mangoData", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const result = await mangoCollection.insertOne(data);
      res.send(result);
    });

    app.get("/mangoData", async (req, res) => {
      const query = mangoCollection.find();
      const result = await query.toArray();
      res.send(result);
    });

    app.get("/mangoData/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mangoCollection.findOne(query);
      res.send(result);
    });

    app.put("/mangoData/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedMango = req.body;
      // const updateDoc = {
      //   $set: {
      //     createdAt:
      //   }
      // }
      const result = await mangoCollection.updateOne(
        filter,
        updateDoc,
        options
      );
    });

    app.delete("/mangoData/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mangoCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
// code end here from mongodb atlas

app.get("/", (req, res) => {
  res.send("App Is running successfully");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
