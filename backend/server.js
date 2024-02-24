import express  from "express";
const app=express();
app.get('/',(req,res)=>{
    res.send('server is ready');
})
//get a  list of 5 jokes
app.get('/api/jokes',(req,res)=>{

    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is joke'
        },
        {
        id:2,
        title:'Another joke',
        content:'this is another joke'
        },
        {
            id:3,
            title:'A Third joke ',
            content:'sarthak is joke'
        }
    ]
    res.send(jokes);
}) ;
const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
})