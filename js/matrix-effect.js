// Efeito Matrix - Digital Rain
document.addEventListener('DOMContentLoaded', function() {
    // Criar o canvas para o efeito Matrix
    const matrixCanvas = document.createElement('canvas');
    matrixCanvas.id = 'matrix-canvas';
    matrixCanvas.style.position = 'fixed';
    matrixCanvas.style.top = '0';
    matrixCanvas.style.left = '0';
    matrixCanvas.style.width = '100%';
    matrixCanvas.style.height = '100%';
    matrixCanvas.style.zIndex = '-1';
    matrixCanvas.style.opacity = '0.1';
    document.body.insertBefore(matrixCanvas, document.body.firstChild);

    // Configurar o canvas
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Ajustar o tamanho do canvas para preencher a tela
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Chamar a função de redimensionamento inicialmente e quando a janela for redimensionada
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caracteres para o efeito Matrix
    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Configurações do efeito
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    // Inicializar as posições das gotas
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
    }

    // Função para desenhar o efeito Matrix
    function drawMatrix() {
        // Fundo semi-transparente para criar o efeito de desvanecimento
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Definir a cor e fonte para os caracteres
        ctx.fillStyle = '#0F0'; // Verde Matrix
        ctx.font = fontSize + 'px monospace';

        // Desenhar os caracteres
        for (let i = 0; i < drops.length; i++) {
            // Selecionar um caractere aleatório
            const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            
            // Desenhar o caractere
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reiniciar a gota quando ela atingir o fundo ou aleatoriamente
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Mover a gota para baixo
            drops[i]++;
        }
    }

    // Animar o efeito Matrix
    setInterval(drawMatrix, 50);
});