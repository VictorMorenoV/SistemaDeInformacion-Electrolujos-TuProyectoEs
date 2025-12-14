import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import pagesRoutes from './routes/routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT=process.env.PORT || 3000
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', pagesRoutes)



app.listen(PORT,()=>{
    console.log('Servidor corriendo')
})
