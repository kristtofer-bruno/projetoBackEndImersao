// Importa as dependências necessárias para o projeto
import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

// Configura o armazenamento das imagens enviadas pelo usuário
const storage = multer.diskStorage({
  // Define o diretório onde as imagens serão salvas
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo salvo, utilizando o nome original do arquivo enviado pelo usuário
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

// Cria uma instância do multer com a configuração de armazenamento definida
const upload = multer({ dest: "./uploads" , storage})

// Função que define as rotas da aplicação
const routes = (app) => {
  // Habilita o parser JSON para lidar com requisições com corpo em formato JSON
  app.use(express.json());
  app.use(cors(corsOptions))
  // Rota para obter todos os posts (método GET)
  app.get("/posts", listarPosts);
  // Rota para criar um novo post (método POST)
  app.post("/posts", postarNovoPost);
  // Rota para realizar o upload de uma imagem (método POST)
  app.post("/upload", upload.single("imagem"), uploadImagem)

  app.put("/upload/:id", atualizarNovoPost)
}

export default routes;