import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/config/routes/postsRoutes.js";


const app = express(); // Cria uma instância do Express para iniciar a aplicação
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo
app.listen(3000, () => {
    console.log("servidor escutando...");
});





