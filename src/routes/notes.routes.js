const { Router } = require('express');
const router = Router();
const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote } = require('../controllers/notes.controller')

//new note
router.get('/notes/add', renderNoteForm)
router.post('/notes/add', createNewNote);
//get all notes
router.get('/notes', renderNotes);
//edit notes
router.get('/notes/edit/:id', renderEditForm)
router.post('/notes/edit/:id', updateNote)

module.exports = router;