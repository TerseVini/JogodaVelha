 const PERGUNTAS = [
            { texto: "Se f(x) = x + 7, qual o valor de f(5)?", opcoes: ['A) 2', 'B) 7', 'C) 12', 'D) 35'], resposta: 2 },
            { texto: "Qual a união dos conjuntos P = {1, 2} e Q = {2, 3}?", opcoes: ['A) {2}', 'B) {1, 3}', 'C) {1, 2, 3}', 'D) {1, 2, 2, 3}'], resposta: 2 },
            { texto: "Se f(x) = 10x, qual é o resultado de f(5)?", opcoes: ['A) 2', 'B) 15', 'C) 50', 'D) 10'], resposta: 2 },
            { texto: "Se M = {3, 4, 5} e N = {4, 5, 6}, qual a intersecção de M e N?", opcoes: ['A) {3, 4}', 'B) {5, 6}', 'C) {4, 5}', 'D) {3, 6}'], resposta: 2 },
            { texto: "Sendo A = {10, 20, 30} e B = {30, 40}, qual o resultado de A - B?", opcoes: ['A) {10, 20}', 'B) {40}', 'C) {30}', 'D) {10, 20, 40}'], resposta: 0 },
            { texto: "Dada a função f(x) = 2x + 10, qual é o valor de f(3)?", opcoes: ['A) 15', 'B) 16', 'C) 23', 'D) 30'], resposta: 1 },
            { texto: "Qual é o valor de f(4), sabendo que f(x) = 3x - 2?", opcoes: ['A) 6', 'B) 10', 'C) 12', 'D) 14'], resposta: 1 },
            { texto: "Qual é o valor de f(0) se f(x) = 5x + 7?", opcoes: ['A) 5', 'B) 7', 'C) 10', 'D) 12'], resposta: 1 },
            { texto: "Qual é a raiz da função f(x) = x - 5? (ou seja, f(x) = 0)", opcoes: ['A) -5', 'B) 0', 'C) 5', 'D) 10'], resposta: 2 },
            { texto: "Dada f(x) = 4x, qual é o valor de f(2)?", opcoes: ['A) 2', 'B) 4', 'C) 6', 'D) 8'], resposta: 3 },
            { texto: "Se f(x) = -x + 10, qual é o valor de f(4)?", opcoes: ['A) 6', 'B) -6', 'C) 14', 'D) -14'], resposta: 0 },
            { texto: "Se f(x) = x / 2, qual o valor de f(20)?", opcoes: ['A) 5', 'B) 10', 'C) 15', 'D) 40'], resposta: 1 },
            { texto: "Para a função f(x) = 3x + 1, qual é o valor de f(3)?", opcoes: ['A) 7', 'B) 9', 'C) 10', 'D) 12'], resposta: 2 },
            { texto: "Qual a raiz da função f(x) = 2x - 8?", opcoes: ['A) 2', 'B) -4', 'C) 4', 'D) 8'], resposta: 2 },
            { texto: "Dado f(x) = x + 15, para qual valor de x temos f(x) = 20?", opcoes: ['A) 5', 'B) 10', 'C) 15', 'D) 35'], resposta: 0 },
            { texto: "Se A = {1, 3, 5} e B = {2, 4, 6}, qual a intersecção entre A e B?", opcoes: ['A) {1, 2, 3, 4, 5, 6}', 'B) {0}', 'C) Conjunto Vazio (Ø)', 'D) {1, 3, 5}'], resposta: 2 },
            { texto: "Sendo f(x) = 5 - x, qual o valor de f(5)?", opcoes: ['A) -5', 'B) 0', 'C) 5', 'D) 10'], resposta: 1 },
            { texto: "Se A = {2, 4} e B = {1, 2, 3, 4}, qual o resultado de B - A?", opcoes: ['A) {2, 4}', 'B) {1, 3}', 'C) Conjunto Vazio (Ø)', 'D) {1, 2, 3, 4}'], resposta: 1 },
            { texto: "Dada a função f(x) = 2x - 1, qual o valor de f(10)?", opcoes: ['A) 19', 'B) 20', 'C) 21', 'D) 9'], resposta: 0 },
            { texto: "Sendo f(x) = 7x, qual o valor de f(3)?", opcoes: ['A) 10', 'B) 14', 'C) 21', 'D) 24'], resposta: 2 },
            { texto: "Qual o valor de f(-2) para a função f(x) = 3x?", opcoes: ['A) 6', 'B) 1', 'C) -5', 'D) -6'], resposta: 3 },
            { texto: "Se U = {1, 2, 3, 4} e A = {1, 4}, qual é o complementar de A em U?", opcoes: ['A) {1, 4}', 'B) {2, 3}', 'C) {1, 2, 3, 4}', 'D) Conjunto Vazio'], resposta: 1 },
            { texto: "Sendo f(x) = x / 3 + 2, qual o valor de f(9)?", opcoes: ['A) 3', 'B) 5', 'C) 9', 'D) 11'], resposta: 1 },
            { texto: "Qual a raiz da função f(x) = -3x + 12?", opcoes: ['A) -4', 'B) 3', 'C) 4', 'D) 12'], resposta: 2 },
            { texto: "Se A = {x | x é par e 0 < x < 6}, quem é A?", opcoes: ['A) {2, 4}', 'B) {0, 2, 4, 6}', 'C) {2, 4, 6}', 'D) {1, 3, 5}'], resposta: 0 },
            { texto: "Dada f(x) = 4x - 4, qual o valor de f(1)?", opcoes: ['A) 0', 'B) 1', 'C) 4', 'D) -4'], resposta: 0 },
            { texto: "Se f(x) = -x - 2, qual o valor de f(-2)?", opcoes: ['A) -4', 'B) 0', 'C) 2', 'D) 4'], resposta: 1 },
            { texto: "Conjunto A={5, 10, 15}. Conjunto B={15, 20}. O que é A U B?", opcoes: ['A) {15}', 'B) {5, 10, 15, 20}', 'C) {5, 10}', 'D) {20}'], resposta: 1 },
            { texto: "Sendo f(x) = 100 - 10x, qual o valor de f(4)?", opcoes: ['A) 40', 'B) 50', 'C) 60', 'D) 90'], resposta: 2 },
            { texto: "Qual a interseção de A={a, b, c} e B={c, d, e}?", opcoes: ['A) {a, b}', 'B) {c}', 'C) {d, e}', 'D) {a, c, e}'], resposta: 1 },
            { texto: "Para a função f(x) = x + 12, qual o valor de f(-5)?", opcoes: ['A) -17', 'B) -7', 'C) 7', 'D) 17'], resposta: 2 },
            { texto: "Se A = {2, 3, 5, 7} e B = {1, 3, 5, 9}, qual a intersecção de A e B?", opcoes: ['A) {3, 5}', 'B) {2, 7}', 'C) {1, 9}', 'D) {1, 2, 3, 5, 7, 9}'], resposta: 0 },
            { texto: "Qual o valor de x para f(x) = 8, sabendo que f(x) = 2x?", opcoes: ['A) 2', 'B) 4', 'C) 8', 'D) 16'], resposta: 1 },
            { texto: "Sendo f(x) = x - 20, qual o valor de f(30)?", opcoes: ['A) 10', 'B) -10', 'C) 50', 'D) -50'], resposta: 0 },
            { texto: "Se A={10, 20} e B={10, 20, 30}, qual afirmação é correta?", opcoes: ['A) B é subconjunto de A', 'B) A é subconjunto de B', 'C) A e B são disjuntos', 'D) A - B = {30}'], resposta: 1 },
            { texto: "Dada f(x) = -2x + 10, qual a raiz da função?", opcoes: ['A) 2', 'B) 5', 'C) -5', 'D) 10'], resposta: 1 },
            { texto: "Se f(x) = 6x + 2, qual o valor de f(2)?", opcoes: ['A) 10', 'B) 12', 'C) 14', 'D) 16'], resposta: 2 },
            { texto: "Qual a união dos conjuntos pares {2,4} e ímpares {1,3}?", opcoes: ['A) {1, 2, 3}', 'B) {2, 3, 4}', 'C) {1, 2, 3, 4}', 'D) Conjunto Vazio'], resposta: 2 },
            { texto: "Dada a função f(x) = 50x, qual o valor de f(2)?", opcoes: ['A) 25', 'B) 52', 'C) 100', 'D) 200'], resposta: 2 },
            { texto: "Sendo f(x) = 8 - 2x, qual o valor de f(4)?", opcoes: ['A) 0', 'B) 2', 'C) -8', 'D) 4'], resposta: 0 },
            { texto: "Qual o conjunto união de A = {0} e B = {0}?", opcoes: ['A) {0, 0}', 'B) Conjunto Vazio', 'C) {0}', 'D) {1}'], resposta: 2 },
            { texto: "Se f(x) = x/4, qual o valor de f(16)?", opcoes: ['A) 2', 'B) 4', 'C) 8', 'D) 64'], resposta: 1 },
            { texto: "Dada f(x) = x + 3, para qual x temos f(x) = 15?", opcoes: ['A) 5', 'B) 12', 'C) 15', 'D) 18'], resposta: 1 },
            { texto: "Se A = {5, 6, 7} e B = {7, 8, 9}, qual é A - B?", opcoes: ['A) {8, 9}', 'B) {5, 6}', 'C) {7}', 'D) Conjunto Vazio'], resposta: 1 },
            { texto: "Se f(x) = 9x - 9, qual o valor de f(1)?", opcoes: ['A) -9', 'B) 0', 'C) 1', 'D) 9'], resposta: 1 },
            { texto: "Qual a raiz de f(x) = 5x - 20?", opcoes: ['A) 2', 'B) 4', 'C) 5', 'D) 20'], resposta: 1 },
            { texto: "Se A={1, 2} e B={3, 4}, qual a intersecção de A e B?", opcoes: ['A) {1, 2, 3, 4}', 'B) {0}', 'C) Conjunto Vazio', 'D) {1, 4}'], resposta: 2 },
            { texto: "Sendo f(x) = -x + 1, qual o valor de f(1)?", opcoes: ['A) -1', 'B) 0', 'C) 1', 'D) 2'], resposta: 1 },
            { texto: "Dada a função f(x) = 3x + 5, qual o valor de f(-1)?", opcoes: ['A) -2', 'B) 2', 'C) 8', 'D) -8'], resposta: 1 },
            { texto: "Se A={x, y} e B={y, z}, qual a união A U B?", opcoes: ['A) {x, y, z}', 'B) {y}', 'C) {x, z}', 'D) {x, y, y, z}'], resposta: 0 }
        ];

        let tabuleiro = Array(9).fill(null);
        let jogadorAtual = "X";
        let jogoAtivo = true;
        let jogadaPendente = null;
        let perguntaAtual = null;
        let perguntasDisponiveis = [];
        
        let pontosX = 0;
        let pontosO = 0;

        const celulas = document.querySelectorAll('.celula');
        const statusTexto = document.getElementById('status-texto');
        const modal = document.getElementById('modal');
        const perguntaTexto = document.getElementById('pergunta-texto');
        const opcoesContainer = document.getElementById('opcoes-container');

        const combinacoesVitoria = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];

        celulas.forEach(celula => {
            celula.addEventListener('click', () => cliqueCelula(celula.getAttribute('data-indice')));
        });

        // Este código garante que as 50 perguntas não se repitam até que todas tenham sido usadas
        function embaralharPerguntas() {
            perguntasDisponiveis = PERGUNTAS.map((_, index) => index);
            for (let i = perguntasDisponiveis.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [perguntasDisponiveis[i], perguntasDisponiveis[j]] = [perguntasDisponiveis[j], perguntasDisponiveis[i]];
            }
        }

        function obterProximaPergunta() {
            if (perguntasDisponiveis.length === 0) embaralharPerguntas();
            const indice = perguntasDisponiveis.pop();
            return PERGUNTAS[indice];
        }

        function cliqueCelula(indice) {
            if (tabuleiro[indice] || !jogoAtivo) return;

            jogadaPendente = indice;
            perguntaAtual = obterProximaPergunta();
            abrirModal();
        }

        function abrirModal() {
            perguntaTexto.textContent = perguntaAtual.texto;
            opcoesContainer.innerHTML = '';

            perguntaAtual.opcoes.forEach((opcao, indice) => {
                const btn = document.createElement('button');
                btn.className = 'btn-opcao';
                btn.textContent = opcao;
                btn.onclick = () => verificarResposta(indice, btn);
                opcoesContainer.appendChild(btn);
            });

            modal.style.display = 'flex';
        }

        function fecharModal() {
            modal.style.display = 'none';
        }

        function verificarResposta(indiceClicado, botaoClicado) {
            const botoes = document.querySelectorAll('.btn-opcao');
            botoes.forEach(b => b.disabled = true); 

            if (indiceClicado === perguntaAtual.resposta) {
                botaoClicado.classList.add('correto');
                setTimeout(() => {
                    registrarJogada();
                    fecharModal();
                }, 800);
            } else {
                botaoClicado.classList.add('errado');
                botoes[perguntaAtual.resposta].classList.add('correto'); 
                
                setTimeout(() => {
                    passarVez("Errou! Passou a vez.");
                    fecharModal();
                }, 1500);
            }
        }

        function registrarJogada() {
            tabuleiro[jogadaPendente] = jogadorAtual;
            const celulaDOM = document.querySelector(`[data-indice="${jogadaPendente}"]`);
            celulaDOM.textContent = jogadorAtual;
            celulaDOM.classList.add(jogadorAtual.toLowerCase());

            if (checarVitoria()) {
                finalizarJogo(`Jogador '${jogadorAtual}' venceu a rodada!`);
                atualizarPlacar(jogadorAtual);
            } else if (!tabuleiro.includes(null)) {
                finalizarJogo("Deu Velha!");
            } else {
                passarVez();
            }
        }

        function passarVez(mensagemErro = null) {
            jogadorAtual = jogadorAtual === "X" ? "O" : "X";
            if (mensagemErro) {
                statusTexto.textContent = mensagemErro;
                statusTexto.style.color = "var(--alert-color)";
                setTimeout(() => {
                    statusTexto.textContent = `Vez do jogador '${jogadorAtual}'`;
                    statusTexto.style.color = "var(--text-light)";
                }, 2000);
            } else {
                statusTexto.textContent = `Vez do jogador '${jogadorAtual}'`;
                statusTexto.style.color = "var(--text-light)";
            }
        }

        function checarVitoria() {
            return combinacoesVitoria.some(combinacao => {
                return combinacao.every(indice => tabuleiro[indice] === jogadorAtual);
            });
        }

        function atualizarPlacar(vencedor) {
            if (vencedor === 'X') {
                pontosX++;
                document.getElementById('pontosX').textContent = pontosX;
            } else {
                pontosO++;
                document.getElementById('pontosO').textContent = pontosO;
            }
        }

        function finalizarJogo(mensagem) {
            jogoAtivo = false;
            statusTexto.textContent = mensagem;
            statusTexto.style.color = "var(--alert-color)";
        }

        function reiniciarJogo() {
            tabuleiro = Array(9).fill(null);
            jogoAtivo = true;
            jogadorAtual = "X";
            statusTexto.textContent = "Vez do jogador 'X'";
            statusTexto.style.color = "var(--text-light)";

            celulas.forEach(celula => {
                celula.textContent = "";
                celula.classList.remove('x', 'o');
            });
        }

        embaralharPerguntas();