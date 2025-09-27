# Multimodal Offline RAG System

## 📌 Overview
This project is a **Multimodal Retrieval-Augmented Generation (RAG) system** designed to run fully **offline**.  
It can ingest, index, and query **documents (DOCX/PDF), images, and audio recordings** within a unified semantic retrieval framework.  
Powered by **LangChain + LangGraph** for orchestration and **Hugging Face offline models**, the system provides a seamless, citation-grounded query interface packaged as a **desktop application via Tauri**.

---

## 🏗️ Architecture

### Frontend (UI Layer)
- **Framework**: Next.js + React
- **Features**:
  - Chat-style query interface
  - File upload (DOCX, PDF, images, audio)
  - Results display with citations and linked sources
  - Desktop app packaging via **Tauri**

### Backend (Orchestration & Retrieval)
- **LangChain + LangGraph** → Pipeline orchestration  
- **Vector Store** → ChromaDB (local mode)  
- **Data Ingestion**:
  - **DOCX/PDF**: Extract text with `unstructured` / `PyMuPDF`
  - **Images**: Encode using CLIP embeddings
  - **Audio**: Transcribe via Whisper.cpp
- **Offline LLMs**: Hugging Face (LLaMA-2, Mistral, Phi-3, etc., quantized for CPU/GPU)

### Workflow
1. User uploads/query → handled in **Next.js UI**  
2. Files processed → embeddings generated per modality  
3. Data indexed → stored in FAISS/ChromaDB  
4. Query passed to **LangGraph pipeline**:
   - Retrieve top-k results
   - Feed into LLM with grounding context
   - Generate citation-rich answer  
5. Result returned to frontend with **expandable source links**

---

## 🛠️ Tech Stack
- **Frontend/UI**: Tauri + Next.js (React)  
- **Backend**: Next.js API routes + LangChain + LangGraph  
- **LLMs (Offline)**: Hugging Face (`transformers`, `llama.cpp`)  
- **Embeddings**: Sentence Transformers, CLIP  
- **Audio Processing**: Whisper.cpp  
- **Vector DB**: ChromaDB  
- **PDF/DOCX Parsing**: Unstructured, pdf-parser

---

## 🚀 Features
- **Unified multimodal ingestion**: PDFs, DOCX, Images, Audio  
- **Offline semantic search** across modalities  
- **Chat-based query interface**  
- **Citation transparency** → Expand to view original context  
- **Runs fully offline** (no external API calls)  

---

## 📦 Installation & Run
```bash
# Clone repo
git clone https://github.com/AbhilashDash10082k4/LocalGenie.git
cd LocalGenie

# Install dependencies
npm install

# Run Next.js dev server
npm run dev

# Run Tauri desktop app
npm run tauri dev
```

**Visit the website here** - https://cognisync-nexus.lovable.app/

