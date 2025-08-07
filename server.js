// Importa a instância do Sequelize configurada e o modelo de usuário
const sequelize = require('./config/db');
require('dotenv').config();
const cors = require('cors');
 
const userRoutes = require('./routes/userRouters')
const contactRoutes = require('./routes/contactRoutes') 

const app = express();
 
app.use(express.json());

app.use(cors({                            
  origin: 'https://frontend-portal-turismo-beta.vercel.app', // utilizar o link da vercel de vocês        
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.get('/', (req, res)=> res.send('api funcionando'))
 
app.use('/api/users', userRoutes)
 app.use('/api/contact', contactRoutes)
const PORT = process.env.PORT;
 
sequelize.authenticate()
  .then(() => {
    console.log('servidor online e conectado com o DB')
    return sequelize.sync();
  })
  .then(() =>{
    console.log('banco de dados sincronizado')
    app.listen(PORT, () => console.log("SERVIDOR RODANDO NA PORTA: " + PORT))
  }).catch(erro => console.log("Erro interno do servidor", erro))
 