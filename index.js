const express = require('express')
const app = express()
const port = 1506

let students[];
let student = {
	firstname:"William",
	lastname:"Gross"
}
students.push(student);

app.get('/', (req, res) => {
  res.send(students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org:${port}`)
})

