const express = require('express')
const {
  validateNewContact,
  validateUpdateContact
} = require('../../midlewares/validateRquest')

const router = express.Router()

const {
getAllTasks,
getTasksById,
addContact,
removeContact,
updateContact
} = require('../../controllers/task.controller')

router.get('/', getAllTasks);

router.get('/:contactId', getTasksById)

router.post('/', validateNewContact, addContact)

router.delete('/:contactId', removeContact)

router.put('/:contactId', validateUpdateContact, updateContact)

module.exports = router
