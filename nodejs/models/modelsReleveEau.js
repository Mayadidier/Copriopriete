const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database')
  
// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const ReleveEau = sequelize.define('releveEau', {
  
    // Column-1, user_id is an object with 
    // properties like type, keys, 
    // validation of column.
    releveEau_id:{
  
        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,
  
        // To increment user_id automatically.
        autoIncrement:true,
  
        // user_id can not be null.
        allowNull:false,
  
        // For uniquely identify user.
        primaryKey:true
    },
    date: { type: Sequelize.STRING, allowNull:false },
  
    // Column-3, email
    email: { type: Sequelize.STRING, allowNull:false }})
