# 🏍 API de Vehículos 🚗️

Este proyecto es una API REST desarrollada en **Node.js** con el framework **Express.js** usando base de datos en cache **Redis**, comprimida en un contenedor **Docker** y orquestada con **Kubernetes**. Utiliza **CI/CD** automatizado con **GitHub Actions**, despliegue continuo con **ArgoCD**, y administración de paquetes con **Helm**.

---

## 🧑‍💻 Desarrollado por

**Grupo 3**

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Docker
- Kubernetes
- Helm
- GitHub Actions (CI)
- ArgoCD (CD)
- Swagger (Documentación API)
- Postman (Pruebas)

---

## 📦 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/elcompidev/kubernetes-diplomado-arq-2025.git
cd kubernetes-diplomado-arq-2025
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar localmente

```bash
node index.js
```

La API estará disponible en: `http://localhost:3000/api/v1`

---

## 🐳 Uso con Docker

### Construye y levanta los contenedores

```bash
docker compose up --build
```

---

## ☸️ Despliegue en Kubernetes

### 1. Instalar dependencias con Helm

```bash

```

---

## 🔁 CI/CD

- Se utiliza **GitHub Actions** para ejecutar pruebas y construir la imagen.
- El pipeline despliega automáticamente a Kubernetes usando **ArgoCD** cuando hay cambios.

---

## 📚 Documentación Swagger

Disponible en la ruta:

```
/api-docs
```

Ejemplo:
```
http://localhost:3000/api-docs
```

---

## 🧪 Colección de pruebas Postman

Disponible en la ruta:

```
/test
```
