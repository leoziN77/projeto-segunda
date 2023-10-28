var credito = 0;
var aux = 0;
var aposta = 1;
var nSort = 0;
var slt1, slt2, slt3, slt4;

function aleatorio(inferior,superior){ 
    numPossibilidades = superior - inferior; 
    aleat = Math.random() * numPossibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function apostaMenos() {
    var novoValor = prompt("Digite o valor da aposta em R$: ");
    if (novoValor !== null && !isNaN(novoValor)) {
        aposta = parseInt(novoValor);
        document.getElementById('aposta').value = 'R$ ' + aposta;
    }
}

function apostaMais() {
    var novoValor = prompt("Digite o valor da aposta em R$: ");
    if (novoValor !== null && !isNaN(novoValor)) {
        aposta = parseInt(novoValor);
        document.getElementById('aposta').value = 'R$ ' + aposta;
    }
}


function verificaPremio() {
    const combinacoes = [
        { combinacao: [1, 2, 3, 4], premio: 2 },
        { combinacao: [1, 2, 4, 3], premio: 2 },
        { combinacao: [1, 3, 2, 4], premio: 2 },
        { combinacao: [1, 3, 4, 2], premio: 2 },
        { combinacao: [1, 4, 2, 3], premio: 2 },
        { combinacao: [1, 4, 3, 2], premio: 2 },
        { combinacao: [2, 1, 3, 4], premio: 2 },
        { combinacao: [2, 1, 4, 3], premio: 2 },
        { combinacao: [2, 3, 1, 4], premio: 2 },
        { combinacao: [2, 3, 4, 1], premio: 2 },
        { combinacao: [2, 4, 1, 3], premio: 2 },
        { combinacao: [2, 4, 3, 1], premio: 2 },
        { combinacao: [3, 2, 1, 4], premio: 2 },
        { combinacao: [3, 2, 4, 1], premio: 2 },
        { combinacao: [3, 1, 2, 4], premio: 2 },
        { combinacao: [3, 1, 4, 2], premio: 2 },
        { combinacao: [3, 4, 2, 1], premio: 2 },
        { combinacao: [3, 4, 1, 2], premio: 2 },
        { combinacao: [4, 2, 3, 1], premio: 2 },
        { combinacao: [4, 2, 1, 3], premio: 2 },
        { combinacao: [4, 3, 2, 1], premio: 2 },
        { combinacao: [4, 3, 1, 2], premio: 2 },
        { combinacao: [4, 1, 2, 3], premio: 2 },
        { combinacao: [4, 1, 3, 2], premio: 2 },
        { combinacao: [1, 1, 1, 1], premio: 5 },
        { combinacao: [2, 2, 2, 2], premio: 10 },
        { combinacao: [3, 3, 3, 3], premio: 20 },
        { combinacao: [4, 4, 4, 4], premio: 50 }
    ];

    const combinacaoAtual = [slt1, slt2, slt3, slt4];

    for (const comb of combinacoes) {
        if (compararCombinacao(combinacaoAtual, comb.combinacao)) {
            aposta = parseInt(aposta);
            credito += aposta * comb.premio;
            document.getElementById('credito').value = 'R$ ' + credito;
            window.alert("Parabéns, você ganhou um prêmio de R$" + aposta * comb.premio + ".");
            break; 
        }
    }
}

function compararCombinacao(combinacao1, combinacao2) {
    return combinacao1.length === combinacao2.length && combinacao1.every((value, index) => value === combinacao2[index]);
}


function jogar() {
    if (credito < 1 || credito < aposta) {
        aux = window.prompt("Coloque mais creditos, digite a quantidade em R$:","1");
        aux = parseInt(aux);
        credito = parseInt(credito);
        credito = credito + aux;
        document.getElementById('credito').value = 'R$ ' + credito
    }
    else {
        if(credito > 0 && credito >= aposta){
            credito = credito - aposta;
            document.getElementById('credito').value = 'R$ ' + credito;
            document.getElementById('escud1').src = 'img/roleta.gif';
            document.getElementById('escud2').src = 'img/roleta.gif';
            document.getElementById('escud3').src = 'img/roleta.gif';
            document.getElementById('escud4').src = 'img/roleta.gif';
            
            //processamento do slot1
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('escud1').src = 'img/botafogo.png'", 4000);
                slt1 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('escud1').src = 'img/flamengo.png'", 4000);
                slt1 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('escud1').src = 'img/fluminense.png'", 4000);
                slt1 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('escud1').src = 'img/vasco.png'", 4000);
                slt1 = 4;
                break;
            }
            
            //processamento do slot2
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('escud2').src = 'img/botafogo.png'", 6000);
                slt2 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('escud2').src = 'img/flamengo.png'", 6000);
                slt2 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('escud2').src = 'img/fluminense.png'", 6000);
                slt2 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('escud2').src = 'img/vasco.png'", 6000);
                slt2 = 4;
                break;
            }
            
            //processamento do slot3
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('escud3').src = 'img/botafogo.png'", 7000);
                slt3 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('escud3').src = 'img/flamengo.png'", 7000);
                slt3 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('escud3').src = 'img/fluminense.png'", 7000);
                slt3 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('escud3').src = 'img/vasco.png'", 7000);
                slt3 = 4;
                break;
            }
            
            //processamento do slot4
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('escud4').src = 'img/botafogo.png'", 8000);
                slt4 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('escud4').src = 'img/flamengo.png'", 8000);
                slt4 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('escud4').src = 'img/fluminense.png'", 8000);
                slt4 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('escud4').src = 'img/vasco.png'", 8000);
                slt4 = 4;
                break;
            }
            cont=setTimeout("verificaPremio()", 9000);
        }
    }
}