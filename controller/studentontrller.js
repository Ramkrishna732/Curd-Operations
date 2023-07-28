import StudentModel from "../models/Studentmodel.js"
class Studentontroller{

    static createDoc=async(req,res)=>{
        //  console.log(req.body.name)
        //console.log(req.body.age) // this age and name and fees is comming from name value which is in index.ejs not from databse
        try{
            const {name,age,fees}=req.body
        const doc=new StudentModel({
            name:name,
            age:age,
            fees:fees
            //saving doc
        })
        const result=await doc.save()
            res.redirect("/student")
        }catch(error){
            console.log(error)
        }
    }
     

    static editDoc=async(req,res)=>{

try{
const result =await StudentModel.findById(req.params.id)
console.log(result)

res.render("edit" , {data:result})  // this is sending data to the edit.ejs page


}catch(error)
{

    console.log(error)

}       
    }
     
    
    static updateDocByid=async(req,res)=>{

// console.log(req.params.id)
console.log(req.body)

try{
    const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body) // here we(req.params.id,) get first filter for id and second (req.body) it has form data is what to upadte  to database
// we can also destruting and to in that way as done in creation time
console.log(result);
}catch(error){
    console.log(error)
}

 
        res.redirect("/student")

    }
     
    
    static deleteDocByid=async (req,res)=>{
        //console.log(req.params.id) we are get id 

        try{
            const result=await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        }catch(error){
            console.log(error)
        }
       
    }
     

    static getAllDoc=async(req,res)=>{
        try{
            const result=await StudentModel.find()
            //console.log(result)
            res.render("index",{data:result})
        }catch(error){

        console.log(error)}
        
    }}

    export default Studentontroller