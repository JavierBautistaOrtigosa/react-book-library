# React Project Setup Guide

Guía de inicio rápida para crear un nuevo proyecto basado en la plantilla React.

---

# Requisitos

Instalar previamente:

- Git
- Node.js (LTS)
- npm
- Visual Studio Code

Verificar instalación:

```bash
git --version
node --version
npm --version
```

---

# Crear un nuevo repositorio desde la plantilla

1. Acceder al repositorio **react-template** en GitHub.
2. Pulsar **Use this template**.
3. Seleccionar **Create a new repository**.
4. Introducir:
   - Nombre del proyecto
   - Descripción (opcional)
   - Público o privado
5. Crear el repositorio.

---

# Clonar el proyecto

Abrir PowerShell:

```powershell
cd C:\Users\dsngj\repos
```

Clonar el repositorio recién creado:

```powershell
git clone https://github.com/<usuario>/<nombre-proyecto>.git
```

Entrar en la carpeta:

```powershell
cd <nombre-proyecto>
```

---

# Instalar dependencias

Instalar todos los paquetes definidos en package.json:

```powershell
npm install
```

> Importante: `node_modules` no se almacena en Git, por lo que este paso siempre será necesario después de clonar un proyecto nuevo.

---

# Abrir el proyecto

```powershell
code .
```

VS Code debería sugerir automáticamente las extensiones recomendadas:

- ESLint
- Prettier

Instalarlas si aún no están instaladas.

---

# Iniciar el entorno de desarrollo

```powershell
npm run dev
```

Abrir la URL indicada por Vite, normalmente:

```text
http://localhost:5173
```

---

# Scripts disponibles

### Desarrollo

```powershell
npm run dev
```

### Build de producción

```powershell
npm run build
```

### Previsualizar build

```powershell
npm run preview
```

### Ejecutar ESLint

```powershell
npm run lint
```

### Corregir errores automáticamente

```powershell
npm run lint:fix
```

### Formatear el proyecto

```powershell
npm run format
```

---

# Configuración incluida en la plantilla

✅ React

✅ Vite

✅ ESLint

✅ Prettier

✅ VS Code Workspace Settings

✅ VS Code Extension Recommendations

✅ Estructura base de carpetas

✅ Configuración compartida de formato y linting

---

# Flujo habitual

Cada vez que empiece un proyecto nuevo:

```powershell
cd C:\Users\dsngj\repos

git clone <repositorio>

cd <proyecto>

npm install

code .

npm run dev
```

---

# Flujo Git básico

Ver cambios:

```powershell
git status
```

Añadir cambios:

```powershell
git add .
```

Crear commit:

```powershell
git commit -m "Descripción del cambio"
```

Subir cambios:

```powershell
git push
```

---

# Objetivo de esta plantilla

Evitar configurar manualmente:

- ESLint
- Prettier
- VS Code
- Estructura de carpetas
- Scripts comunes

y poder comenzar a desarrollar en menos de 2 minutos.

**Create repository → Clone → npm install → code . → npm run dev**
