/*
 * ---
 * Projeto: Gerador de QR Code para Terminal (CLI)
 * Descrição: Uma ferramenta de linha de comando que recebe um texto ou URL 
 *            e gera uma representação em ASCII de um QR Code diretamente no terminal.
 * Bibliotecas necessárias: qrcode-terminal
 * Como instalar dependências: npm install qrcode-terminal
 * Como executar: node main.js "Seu texto ou URL aqui para gerar o QR Code"
 * Exemplo: node main.js "https://github.com"
 * ---
 */

// Importa a biblioteca necessária para gerar o QR Code no terminal.
const qrcode = require('qrcode-terminal');

/**
 * Função principal que gera e exibe o QR Code.
 * @param {string} data - O texto ou URL a ser codificado no QR Code.
 */
function generateQRCode(data) {
    console.log(`\nGerando QR Code para: "${data}"\n`);

    // A biblioteca qrcode-terminal gera o código e o exibe via callback.
    // Usamos a opção { small: true } para gerar uma versão mais compacta,
    // que se ajusta melhor à maioria dos terminais.
    qrcode.generate(data, { small: true }, function (qrcodeString) {
        console.log(qrcodeString);
        console.log('\nQR Code gerado com sucesso! Use um leitor de QR Code para escanear.\n');
    });
}

/**
 * Ponto de entrada do script.
 * Valida os argumentos da linha de comando e inicia a geração do QR Code.
 */
function main() {
    // process.argv é um array que contém os argumentos da linha de comando.
    // O primeiro elemento é o caminho para o executável do Node.
    // O segundo é o caminho para o script que está sendo executado.
    // Os argumentos do usuário começam a partir do terceiro elemento (índice 2).
    const userInput = process.argv[2];

    if (!userInput) {
        // Se nenhum argumento for fornecido, exibe uma mensagem de ajuda e encerra.
        console.error('\nERRO: Nenhum texto ou URL foi fornecido.');
        console.log('Uso: node main.js "seu texto ou url aqui"');
        console.log('Exemplo: node main.js "https://www.google.com"\n');
        process.exit(1); // Encerra o script com um código de erro.
    }

    // Chama a função principal com os dados fornecidos pelo usuário.
    generateQRCode(userInput);
}

// Executa a função principal do script.
main();