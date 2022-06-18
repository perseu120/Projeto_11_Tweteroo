import Express from "express";
import cors from 'cors';

const app = Express();
app.use(cors());
app.use(Express.json());

const usuarios = [];

const tweets = [];

app.post('/sign-up', (req, res)=>{

    const usuario = {
        username: '', 
        avatar: "" 
    }
    usuario.username = req.body.username;
    usuario.avatar = req.body.avatar;

    usuarios.push(usuario);
    res.send("ok");
})

app.post('/tweets', (req, res)=>{

    const tweet = {
        username: "",
        tweet: "",
        avatar: ""
    }
    tweet.username = req.body.username;
    tweet.tweet = req.body.tweet;
    tweet.avatar = usuarios[usuarios.length-1].avatar;

    if(tweets.length < 10){
        tweets.push(tweet);     
    }else{
        tweets.shift();
        tweets.push(tweet); 
    }
   
    res.send("ok");
})

app.get('/tweets', (req, res)=>{
    res.send(tweets);
})

app.listen(5000);