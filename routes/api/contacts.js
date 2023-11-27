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
  updateContact,
  updateStatusContact,
} = require('../../controllers/task.controller')


router.get('/', getAllTasks);

router.get('/:contactId', getTasksById)

router.post('/', validateNewContact, addContact)

router.delete('/:contactId', removeContact)

router.put('/:contactId', validateUpdateContact, updateContact)

router.patch('/:contactId', updateStatusContact)

module.exports = router
