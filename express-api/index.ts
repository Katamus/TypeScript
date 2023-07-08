
import express from 'express'
//const express = require('express')



const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(201).json({
    ok:true,
    msg:'Nuevo id: 12312123'
  })

  res.json({
    ok:true,
    msg: 'Todo salio bien'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})