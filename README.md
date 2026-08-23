# Kiran Poudel - Portfolio (MERN Stack)

Welcome to my personal portfolio application built using the MERN stack (MongoDB, Express.js, React.js with TypeScript, and Node.js).

## Architecture

This project is structured as a full-stack monorepo:

```text
D:\KIRAN_PORTFOLIO\
├── client/          # React + TypeScript Frontend (Vite)
└── server/          # Node.js + Express Backend (Modular Architecture)
```

### Backend (`server/`)
- **Node.js & Express** with modular architecture (`src/modules/<feature>`)
- **MongoDB & Mongoose** for persistent database storage
- Controllers, Services, Models, Routes, and Validators per module

### Frontend (`client/`)
- **React 18 + TypeScript** initialized with Vite
- Axios configuration and React Router integration
- Modular component system (`component/`, `pages/`, `config/`, `context/`)

## Quick Start

### 1. Server Setup
```bash
cd server
npm install
npm run dev
```

### 2. Client Setup
```bash
cd client
npm install
npm run dev
```
