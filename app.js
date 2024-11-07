import express from 'express';


const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });  
});

app.post('/add', (req, res) => {
    const { task } = req.body; 
    tasks.push({ description: task});  
    res.redirect('/');  
});

app.post('/remove', (req, res) => {
    const taskToRemove = req.body.task;  
    tasks = tasks.filter(task => task.description !== taskToRemove); 
    res.redirect('/');  
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
