import express from "express";

const app = express();
const users = [
  {
    name: "Head",
    kidneys: [
      {
        health: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  let headsKidneys = users[0].kidneys;
  let numbersOfKidneys = headsKidneys.length;
  // console.log(numbersOfKidneys);
  let totalNumberOfHealthyKidneys = headsKidneys.filter(
    (kidney) => kidney.health != false
  ).length;
  // console.log(totalNumberOfHealthyKidneys);
  let totalNumberOfUnhealthyKidneys =
    numbersOfKidneys - totalNumberOfHealthyKidneys;

  res.json({
    numbersOfKidneys,
    totalNumberOfHealthyKidneys,
    totalNumberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  let isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    health: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  users.map((user) => user.kidneys.map((kidney) => (kidney.health = true)));

  res.json({
    msg: "over put is working well",
  });
});

app.delete("/", (req, res) => {
    const newKidneys = [];
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].health) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "your delete is working",
    });
});

app.listen(3001);
