import express from 'express'
const router =express.Router();
import Studentontrller from "../controller/studentontrller.js"

router.get('/',Studentontrller.getAllDoc)   // this will only run when 3000/student is hit

router.post('/',Studentontrller.createDoc)   // this will only run when 3000/student is hit

router.get('/edit/:id',Studentontrller.editDoc)   // this will only run when 3000/student/edit/any number is hit
router.post('/update/:id',Studentontrller.updateDocByid)   // this will only run when 3000/student/upadte/ is hit

router.post('/delete/:id',Studentontrller.deleteDocByid)   // this will only run when 3000/student is hot


export default router;