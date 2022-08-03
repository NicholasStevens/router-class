const express = require("express");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");

const app = express();

app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.listen(4000);
