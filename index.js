const express = require('express');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

// Load Swagger document
const swaggerDocument = YAML.load("./swagger.yaml");

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses = [
    {
        id: "11",
        name: "Learn ReactJs",
        price:299,  
    },
    {
        id: "22",
        name: "Learn Angular",
        price:399,
    },
    {
        id: "33",
        name: "Learn Djangi",
        price:499,
    },
];

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from LCO");
});

app.get("/api/v1/lco", (req, res) => {
    res.send("Hello from LCO docs");
  });

app.get("/api/v1/lcoobject",(req,res)=>{
  res.send({id: "55", name: "Learn Backend", price: 999});
})  

app.listen(4000, () => {
  console.log(`Server is running at port 4000....`);
});
