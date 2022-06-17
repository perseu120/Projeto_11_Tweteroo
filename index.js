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

app.post('/tweets', (req, res)=>{

    const tweet = {
        username: "",
        tweet: "",
        avatar: ""
    }
    tweet.username = req.body.username;
    tweet.tweet = req.body.tweet;
    tweet.avatar = usuario.avatar;
    tweets.push(tweet);
    res.send("ok");
})

app.get('/tweets', (req, res)=>{
    res.send(tweets);
})

app.listen(5000);