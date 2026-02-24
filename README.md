/_ GUÍA DE INSTALACIÓN PASO POR PASO _/
Cuando quieras empezar un proyecto nuevo de Vite + Tailwind CSS:

1. Copia y pega la carpeta template-vite-tailwind y cámbiale el nombre a tu nuevo proyecto (ej: landing-page-2).
2. Abre esa nueva carpeta en VS Code.
3. Abre la terminal y escribe solo este comando: npm install
   (Este comando leerá tu archivo package.json y reinstalará todo lo necesario automáticamente).
4. Escribe npm run dev y... ¡a programar!

---

Una vez terminado el pryecto...
/_ GUÍA PARA SUBIR PROYECTOS VITE + TAILWIND A GITHUB _/

1. CONFIGURACIÓN DE VITE (Archivo: vite.config.js)
   Si no lo tienes, créalo y pega todo esto (ajustando el nombre de tu repo):

import { defineConfig } from 'vite'
export default defineConfig({
base: '/nombre-de-tu-repositorio/',
build: {
rollupOptions: {
input: {
main: './index.html',
location: './location.html',
},
},
},
})

2. ARCHIVO PARA DESPLIEGUE (Ruta: .github/workflows/deploy.yml)
   Crea estas carpetas y dentro este archivo con este contenido exacto:

name: Deploy Vite Site

on:
push:
branches: [main]

permissions:
contents: read
pages: write
id-token: write

jobs:
build-and-deploy:
runs-on: ubuntu-latest
steps:

- name: Checkout
  uses: actions/checkout@v4

3. COMANDOS DE TERMINAL PARA SUBIR EL PROYECTO
   Escribe estos comandos uno por uno en tu terminal:

git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin
git push -u origin main

4. PASO FINAL EN LA WEB DE GITHUB
   Entra a tu repositorio en GitHub.com.
   Haz clic en Settings.
   Haz clic en Pages (menú izquierdo).
   En "Source", selecciona: GitHub Actions.

5. RECUERDA SIEMPRE:
   Los enlaces deben llevar un punto delante: ./location.html.
   Si creas una página nueva, agrégala a la lista de "input" en el archivo vite.config.js del paso 1.
