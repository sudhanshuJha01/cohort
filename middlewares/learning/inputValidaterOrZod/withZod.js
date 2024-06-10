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

    if (!validationResult.success) {
        return res.status(400).json({
            msg: "Validation error",
            errors: validationResult.error.errors
        });
    }

    res.json({
        msg: "Validation succeeded",
        list: validationResult.data
    });
});

app.listen(3008, () => {
    console.log("Your server is on PORT 3008");
});
