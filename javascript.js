//só estou deixando o ( * ) para ficar parado só retirar que volta 
document.addEventListener('DOMContentLoaded', function () { 
    const carouselContent = document.getElementById('carousel-content');
    let currentIndex = 0; //inicio do carrossel 

    function moveCarousel() { // é a função que vai ficar dando o looping do carrossel
        const sectionWidth = document.querySelector('.carousel-section').offsetWidth; //analisa o tamanho da largura do conteudo aqui não ta especificada por que tudo tem o mesmo tamanho 
        currentIndex = (currentIndex + 1) % carouselContent.children.length; //garante que o tamanho de tudo continue o mesmo
        const translateValue = -currentIndex * sectionWidth + 'px';
        carouselContent.style.transform = 'translateX(' + translateValue + ')'; // move o carrosel com os valores acima 
    }

    setInterval(moveCarousel, 1800); // velocidade do carrossel se precisar só trocar (em milissegundos)
});

//current index = mostra qual a posição da primeira div
//section width = é a largura da seção(div) - sempre considera que é igual
//current index * section width = multiplica os valores para chegar no valor de movimento 
//-current index = negativa o valor para que movimento seja para a direção oposta no caso a esquerda
//+ 'px' = para colocar um valor fixo, criando uma string que da ovalor cheio do translateX (horizontal)
//então como fica ai, o translateValue é basicamente um valor negativo que vai falar o quanto o carrossel vai ser movido para a esquerda em px, usando a posição atual (currentIndex) e na largura de cada seção (div)-(sectionWidth). Essa string é então aplicada como parte da propriedade transform para realizar o movimento visual do carrossel.
