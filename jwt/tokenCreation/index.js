import jwt from 'jsonwebtoken';

const jwtPass = '123456';

const user = {
    name:"Sudhanshu Jha",
    email:"sudhanshujha@gmail.com",
    Password:"sudhanshu@"
}

const token = jwt.sign(user , jwtPass);

console.log(token);
