import express from 'express';
import { z } from 'zod';

// Define the schema for validation
const schema = z.array(z.number());

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const list = req.body.list;

    // Validate the list using the schema
    const validationResult = schema.safeParse(list);

    res.send({
        validationResult
    })


});

app.listen(3009, () => {
    console.log("Your server is on PORT 3009");
});
