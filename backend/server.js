const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const {register,login}=require('./controllers/authController');
const {createNote,getNotes,updateNote,deleteNote}=require('./controllers/noteController');
const authMiddleware=require('./middleware/auth');
const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
app.post('/api/register',register);
app.post('/api/login',login);

app.post('/api/notes',authMiddleware,createNote);
app.get('/api/notes',authMiddleware,getNotes);
app.put('/api/notes/:id',authMiddleware,updateNote);
app.delete('/api/notes/:id',authMiddleware,deleteNote);
app.listen(5000,()=>console.log('Server started'));