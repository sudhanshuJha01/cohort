import jwt from 'jsonwebtoken';

const jwtPass = '123456';

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3VkaGFuc2h1IEpoYSIsImVtYWlsIjoic3VkaGFuc2h1amhhQGdtYWlsLmNvbSIsIlBhc3N3b3JkIjoic3VkaGFuc2h1QCIsImlhdCI6MTcxODM0NDE1OX0.gBtp49q_-_H5TxUYd_gTnDcOF81CXSzSXRcp4yWL6ps`;


    const verification = jwt.verify(token, jwtPass);
    console.log(verification);
