# MapsApp

No usar directamente en AngularCli (a menos que estén creadas las variables de entorno ), ya que las variables de entorno se crean basadas en el .env

# Pasos

1. Clonar el .env.template y renombrarlo a .env
2. Llenar las variables de entorno acorde
3. Crear Angular Envs (opcional)
```
npm run envs
```

4. Para development ejecutar
```
npm run start
```

5. Para prod ejecutar:
```
npm run build
```

# Nota
las variables de entorno se definen en archivo .env y con el archivo scripts/set-envs.js se ejecuta para definir las variables en src/environments/environment.ts
Este archivo se ejecuta con el comando npm start para dev en el package.json


# Se trabajan mapas con lealeft https://leafletjs.com/download.html
