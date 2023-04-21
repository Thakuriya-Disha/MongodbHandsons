const {insertToDB, findAllInDB, findHighSalary, updateSalaryInDB, 
      deleteFromYCompany, findMoreExperience, findGraduatedPost2015,
      /*findEmpInDB*/} = require("../database/connection");

const saveEmployeeData = async (req,res) => {
    const empData = req.body;
    try{
        const result = await insertToDB (empData);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

const getAllEmployeesData = async (req,res) => {
    try{
        const result = await findAllInDB();
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

const getHighSalaryEmployees = async (req,res) => {
    try{
        const filter = {salary:{$gt:"30000"}};
        const result = await findHighSalary(filter);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

const getMoreExperienceEmployees = async (req,res) => {
    try{
        const filter = {overallExp:{$gte:"2"}};
        const result = await findMoreExperience(filter);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

const getGraduatedAfter2015 = async (req,res) => {
    try{
        const filter = {yearGrad:{$gt:"2015"}, overallExp:{$gt:"1"}};
        const result = await findGraduatedPost2015(filter);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

const updateSalary = async (req,res) => {
    
    const filter = req.body.filter;
    const filterValue = {salary:{$gt:filter.salary}};
    const update = req.body.update;
    const newValue = {$set:{salary:update.salary}};
    try{
        const result = await updateSalaryInDB(filterValue,newValue);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

const deleteEmployeeFromY = async (req,res) => {
    const filter = req.body.filter;
    const filterVal = {lastCompany:{$eq:filter.lastCompany}};

    try{
        const result = await deleteFromYCompany(filterVal);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}

{/*const getEmployeeData = async (req,res) => {
    try{
        const filter = req.body;
        const filterVal = {
            salary:{$gt:filter.salary},
            overallExp:{$gt:filter.overallExp},
            yearGrad:{$gt:filter.yearGrad}
        }
        const result = await findEmpInDB(filterVal);
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send({message:"Something went wrong. Please try again!"});
    }
}*/}

module.exports = {
    saveEmployeeData, getAllEmployeesData, getHighSalaryEmployees, updateSalary, 
    deleteEmployeeFromY, getMoreExperienceEmployees, getGraduatedAfter2015,
    /*getEmployeeData*/
}