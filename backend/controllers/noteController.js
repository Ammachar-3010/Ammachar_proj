const Note=require('../models/note');
exports.createNote=async (req,res)=>{
    const note=new Note({...req.body,user:req.user.userId});
    await note.save();
    res.json(note);
};

exports.getNotes=async (req,res)=>{
    const notes=await Note.find({user:req.user.userId});
    res.json(notes);
};
exports.updateNote=async (req,res)=>{
    const note=await Note.findOneAndUpdate({_id:req.params.id,user:req.user.userId},
        req.body,
        {new:true}
    );
};

exports.deleteNote=async (req,res)=>{
    await Note.findOneAndDelete({_id:req.params.id,user:req.user.userId});
    res.json({message:'Note deleted'});
};
