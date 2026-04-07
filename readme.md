# Asistente Virtual Jurídico - Fuzzy
Aplicativo con ![VanillaJS](https://img.shields.io/badge/VanillaJS-F7DF1E?style=plastic&logo=javascript&logoColor=black) y ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=plastic&logo=tailwind-css&logoColor=white) para el diligenciamiento de demandas de cobros de titulos valor, para este caso letras de cambio aplicado en el consultorio jurídico de la Unisangil, Sede Chiquinquirá. 

## Arrancar el proyecto en local
### Librerías necesarias
Instalar las librerías con npm (solo se usan archivos de Tailwind), no usamos otras librerías externas como seria en framework:
```bash
npm i -i
```
Luego, podemos usar live server de VSCode, recordemos que es un proyecto tipo SPA, lo cual a veces tiene conflicto con live server para ello vamos a usar los servidores locales de NodeJS con este comando (usar node ultima versión) para el puerto 3000

```bash
npx serve -s .
```
También se puede compartir a otro equipo el localhost de la siguiente manera:

```bash
npx tunnelmole 3000
```
## Compilación de los estilos
Compilar **TailwindCSS** [(mas info)](https://tailwindcss.com/docs/installation/tailwind-cli), el archivo input esta ahí creado. Output se crea y se compila así:
``` bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```


