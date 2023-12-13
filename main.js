$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })


    $('#button-cancela').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoNovaImg = $('#nova-imagem-endereco').val();
        const novoItem = $('<li style="display: none">  </li>');

        $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);

        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoNovaImg}" title="Ver imagem em tamanho real" target="_blank" >
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nova-imagem-endereco').val('');
    })

})



