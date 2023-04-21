const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const insertToDB = async (data) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.insertMany(data);
        await client.close();
        console.log("Successfully added");
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

const findAllInDB = async () => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

const updateSalaryInDB = async (filter,updatedValue) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.updateMany(filter,updatedValue);
        await client.close();
        console.log("Successfully Updated");
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

const deleteFromYCompany = async (query) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.deleteMany(query);
        await client.close();
        console.log("Successfully Deleted");
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

const findHighSalary = async (query) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

const findMoreExperience = async (query) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

const findGraduatedPost2015 = async (query) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}

{/*const findEmpInDB = async (query) => {
    try{
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        console.log("Error occurred", error.message);
        return error.message;
    }
}*/}

module.exports = {
    insertToDB, findAllInDB, findHighSalary, updateSalaryInDB,
    deleteFromYCompany, findMoreExperience, findGraduatedPost2015,
    /*findEmpInDB*/
}