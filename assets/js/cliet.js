 <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

const SUPABASE_URL = 'https://zvtzrrxcjxqukcmbrqfk.supabase.co';
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dHpycnhjanhxdWtjbWJycWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNDE3NzIsImV4cCI6MjA0NTkxNzc3Mn0.vkUnNsdisZWwA7f8ycFaTiwT5_Hu_X20cRqCmp9jR-0"
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const botaoJogar = document.getElementById('jogar');
const elementoContador = document.getElementById('contador');

async function buscarContador() {
    const { data, error } = await supabase
        .from('clicks')
        .select('count')
        .eq('id', 1) 
        .single();

    if (error) {
        console.error('Erro ao buscar contador:', error);
        return;
    }

    if (data) {
        contador = data.count;
    } 

    elementoContador.innerText = contador;
}

// async function atualizarContador() {
//     contador++;

//     const { error } = await supabase
//         .from('cliques')
//         .update({ count: contador })
//         .eq('id', 1);

//     if (error) {
//         console.error('Erro ao atualizar contador:', 'error);
//     } else {
//         elementoContador.innerText = contador;
//     }
// }

botaoJogar.addEventListener('click', function(event) {
    event.preventDefault();
    atualizarContador();

    setTimeout(() => {
        window.location.href = botaoJogar.href;
    }, 500);
});

document.addEventListener('DOMContentLoaded', buscarContador);




// -- Aruumar o codigo pra atualizar o bancod de dados supabase na  linha 1 
// -- Quando carregar a pagina ele buscar o numero de clicks na tabela
// -- arrumaro estilo do texto pra mostrar os clicks 