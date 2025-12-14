import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ruta base a views
const viewsPath = path.join(__dirname, '../views/layout')

router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'Home.html'))
})

router.get('/Unirse', (req, res) => {
  res.sendFile(path.join(viewsPath, 'Unirse.html'))
})

router.get('/Cliente/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'Cliente.html'))
})
router.get('/Cliente/Informacion', (req, res) => {
  res.sendFile(path.join(viewsPath, 'Cliente-Información.html'))
})
router.get('/Administrador', (req, res) => {
  res.sendFile(path.join(viewsPath, 'Administrador.html'))
})

export default router