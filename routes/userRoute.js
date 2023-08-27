const Router=require('express')
const router=new Router()
const userController = require('../controllers/userController')

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id',userController.deleteUser)


module.exports = router