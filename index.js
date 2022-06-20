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
    
    for(let i =0; i < usuarios.length; i++){
        if(usuarios[i].username === req.body.username){
            tweet.username = req.body.username;
            tweet.tweet = req.body.tweet;
            tweet.avatar = usuarios[i].avatar;
        }
    }

    if(tweets.length < 10){
        tweets.unshift(tweet);     
    }else{
        tweets.pop();
        tweets.unshift(tweet); 
    }
   
    res.send("ok");
})

app.get('/tweets', (req, res)=>{
    res.send(tweets);
})

app.listen(5000);