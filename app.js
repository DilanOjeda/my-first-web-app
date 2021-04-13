const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // the dependce of place you order (static always will be first)

app.set('view engine', 'ejs'); 
app.set('views' + __dirname + '/views')

app.get('/', (req, res)=>{
    res.render('index', {title: 'Introduction'});
});
app.get('/services', (req, res)=>{
    res.render('services', {title: 'Services', message: 'This a message'});
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 'Error 404',
        message: 'The web page was not found'
    });
});

app.listen(port, ()=>{
    console.log(`the port is runing on port ${port}`);
});