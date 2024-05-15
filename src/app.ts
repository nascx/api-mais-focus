import e from "express";
import cors from 'cors'
import { createAccount, login } from "./controller/login";
const app = e()

app.use(cors())
app.use(e.json())

app.post('/register', createAccount)
app.get('/login', login)
app.get('/', (req, res) => {
    res.json({teste: 'on'})
})

app.listen(5000, () => {
    console.log('on')
})