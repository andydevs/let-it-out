/**
 * Let It Out
 *
 * A UI where you can write your words down and watch them fade away,
 * dissappearing from your mind.
 *
 * Author:  Anshul Kharbanda
 * Created: 9 - 21 - 2017
 */
// Imports
import express from 'express'
import path from 'path'

// Constants
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080

// Create app
var app = express()

// Add routes
app.use('/', express.static(path.join(__dirname, 'ui')))

// Start server
app.listen(PORT, () => console.log('Server listening on PORT: ' + PORT))
