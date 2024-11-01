import { createClient } from '@supabase/supabase-js'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const { data: todos, error } = await supabase.from('todos').select('*')

const app = express();
const port = 3000;

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dHpycnhjanhxdWtjbWJycWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNDE3NzIsImV4cCI6MjA0NTkxNzc3Mn0.vkUnNsdisZWwA7f8ycFaTiwT5_Hu_X20cRqCmp9jR-0"

app.use(cors());
app.use(bodyParser.json());

// Endpoint para contar cliques
app.post('https://zvtzrrxcjxqukcmbrqfk.supabase.co', async (req, res) => {
    const reponse =  res;


    res.json({ count });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
