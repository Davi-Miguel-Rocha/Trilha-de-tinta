// Função para atualizar o nome na barra de navegação
function atualizarBarraNavegacao() {
    const nome = localStorage.getItem('nome');
    const barraNavegacao = document.getElementById('Escrever_Nome');
    if (nome) {
        barraNavegacao.innerText = `Bem-vindo(a), ${nome}!`;
    } else {
        barraNavegacao.innerText = 'Bem-vindo(a), visitante!';
    }
}

// Inicialização - verifica se o nome já foi salvo no localStorage
window.addEventListener('load', function() {
    // Verifica se o nome já foi salvo, caso contrário, pede para o usuário inserir
    if (!localStorage.getItem('nome')) {
        let nome = prompt("Qual é o seu nome?");
        if (nome) {  // Verifica se o nome não está vazio
            localStorage.setItem('nome', nome);
        }
    }
    // Atualiza a barra de navegação com o nome do usuário
    atualizarBarraNavegacao();

    // Carrega a imagem de perfil, se já tiver sido salva
    const imagemPerfil = localStorage.getItem('imagemPerfil');
    if (imagemPerfil) {
        const perfilImage = document.getElementById('perfilImage');
        perfilImage.src = imagemPerfil;
        perfilImage.style.display = 'block'; // Garante que a imagem seja exibida
    }
});

// Evento de clique para alterar o nome
document.getElementById('alterarNome').addEventListener('click', function() {
    let novoNome = prompt("Qual é o seu novo nome?");
    if (novoNome) {  // Se o nome não for vazio
        localStorage.setItem('nome', novoNome);
        // Atualiza a barra de navegação com o novo nome
        atualizarBarraNavegacao();
    }
});

// Exibe ou oculta a opção de alteração do nome e carregamento de imagem ao clicar na setinha
document.getElementById('setinha').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoesAlterar');
    // Alterna entre mostrar e esconder as opções
    opcoes.style.display = (opcoes.style.display === 'none' || opcoes.style.display === '') ? 'block' : 'none';
});

// Função para carregar a imagem do perfil
document.getElementById('carregar_imagem').addEventListener('click', function() {
    document.getElementById('upload').click();  // Simula o clique no input de upload
});

// Evento para quando o arquivo de imagem for selecionado
document.getElementById('upload').addEventListener('change', function(event) {
    const arquivo = event.target.files[0];
    if (arquivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagem = document.getElementById('perfilImage');
            imagem.src = e.target.result;  // Define a imagem de perfil
            imagem.style.display = 'block'; // Garante que a imagem seja exibida

            // Salva a imagem no localStorage para persistir
            localStorage.setItem('imagemPerfil', e.target.result);
        };
        reader.readAsDataURL(arquivo);  // Lê o arquivo como URL
    }
});



document.addEventListener('DOMContentLoaded', function() {
    let cliquei = document.getElementById('cli');
    
    // Verifica se o botão existe antes de adicionar o event listener
    if (cliquei) {
      cliquei.addEventListener('click', clicando);
  
      function clicando() {
        cliquei.innerText = 'Obrigado por nos visitar!!!';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao-inspiracao');
    const textoSugestao = document.getElementById('sugestao-texto');

    // Verifica se o botão e a área de sugestão foram encontrados
    if (botao && textoSugestao) {
        botao.addEventListener('click', function() {
            fetch('/api/inspiracao')
                .then(response => response.json())
                .then(data => {
                    textoSugestao.textContent = data.sugestao;
                })
                .catch(error => {
                    console.error('Erro ao buscar inspiração:', error);
                });
        });
    } else {
        console.error("Botão ou área de sugestão não encontrados.");
    }
});
