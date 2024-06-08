import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const userName = req.headers.username;
    const password = req.headers.password;

    if (userName !== "sudhanshuJha01" || password !== "pass") {
        res.status(400).json({"msg": "my input is wrong in auth"});
        return;
    }

    if (kidneyId !== "1" && kidneyId !== "2") {
        res.status(400).json({"msg": "my input is wrong in kidneyId"});
        return;
    }

    res.json({msg: "Your kidney is healthy"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
