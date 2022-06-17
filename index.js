import Express from "express";
import cors from 'cors';

const app = Express();
app.use(cors());
app.use(Express.json());

const usuario = {
	username: '', 
	avatar: "" 
}


const tweets = [];

app.post('/sign-up', (req, res)=>{

    usuario.username = req.body.username;
    usuario.avatar = req.body.avatar;

    res.send("ok");
})



app.listen(5000);