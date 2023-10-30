require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const getEmployees = require('./routes/getEmployees')
const createEmployee = require('./routes/createEmployee')
const updateEmployee = require('./routes/updateEmployee')
const deleteEmployee = require('./routes/deleteEmployee')
const getEmployeeById = require('./routes/getEmployeeById')
const searchEmployee = require('./routes/searchEmployee')
const promoteEmployee = require('./routes/promoteEmployee')

const createDepartment = require('./routes/createDepartment')
const deleteDepartment = require('./routes/deleteDepartment')
const updateDepartment = require('./routes/updateDepartment')
const getDepartment = require('./routes/getDepartment')
const getDepartmentbyId = require('./routes/getDepartmentbyId')
const checkManager = require('./routes/CheckManager')

const cors = require("cors");

app.use(cors({
  origin: 'https://employee-management-system-r6v1r6jde-midhundas27s-projects.vercel.app', // Allow requests from this specific origin
  // You can specify more origins if needed, such as an array of allowed domains.
  // origin: ['https://domain1.com', 'https://domain2.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
app.use(express.json())

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.use('/employee', getEmployees)
app.use('/employee', createEmployee)
app.use('/employee', updateEmployee)
app.use('/employee', deleteEmployee)
app.use('/searchemployee', searchEmployee)
app.use('/employee', getEmployeeById)
app.use('/employee',promoteEmployee)

app.use('/', createDepartment)
app.use('/', deleteDepartment)
app.use('/', updateDepartment)
app.use('/', getDepartment)
app.use('/', getDepartmentbyId)
app.use('/',checkManager)









app.listen(3100, ()=>console.log('server started in port 3100'))