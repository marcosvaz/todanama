// MENU
$('.fa-navicon').click(function(){
    $('.menu-hidden').toggleClass('esconder animated slideInRight');
});

// BARRA DE PESQUISA
$('.menu-search').click(function(){
    $('.search').fadeToggle(500);
});

// ERRO
$('#erro-close').click(function(){
    $('.erro').toggleClass('esconder');
});

// VERIFICAÇÃO DE CEP
$('.cep').on('input', function(){
    if( $('.cep').val().length == 9 ){
        $('.calculoFrete').removeClass('esconder');
    } else {
        $('.calculoFrete').addClass('esconder');
    }
});

// ESQUECI MINHA SENHA
$('.a-esqueciASenha').click(function(){
    event.preventDefault();
    $('#esqueciASenha').removeClass('esconder');
});
$('#esqueciASenha-close').click(function(){
    $('#esqueciASenha').addClass('esconder');
});

// MENU IDIOMA e MOEDA
$('.idioma').click(function(){
    $('.menu-idioma').toggleClass('esconder');
    $('.menu-moeda').addClass('esconder');
});
$('.moeda').click(function(){
    $('.menu-moeda').toggleClass('esconder');
    $('.menu-idioma').addClass('esconder');
});

// TABS DA PÁGINA DE DADOS
$('.menu-informacoesPessoais').click(function(){
    event.preventDefault(); // PREVENINDO O REDIRECIONAMENTO DE PÁGINA

    // CLASSE DE TAB ESCONDIDA
    $('.informacoesPessoais').removeClass('esconder');
    $('.meusPedidos').addClass('esconder');
    $('.alterarSenha').addClass('esconder');
    $('.enderecosEntrega').addClass('esconder');

    // CLASSE DE TAB ATIVA
    $('.menu-informacoesPessoais').addClass('ativo');
    $('.menu-meusPedidos').removeClass('ativo');
    $('.menu-alterarSenha').removeClass('ativo');
    $('.menu-enderecosEntrega').removeClass('ativo');
});
$('.menu-meusPedidos').click(function(){
    event.preventDefault(); // PREVENINDO O REDIRECIONAMENTO DE PÁGINA

    // CLASSE DE TAB ESCONDIDA
    $('.informacoesPessoais').addClass('esconder');
    $('.meusPedidos').removeClass('esconder');
    $('.alterarSenha').addClass('esconder');
    $('.enderecosEntrega').addClass('esconder');
    
    // CLASSE DE TAB ATIVA
    $('.menu-informacoesPessoais').removeClass('ativo');
    $('.menu-meusPedidos').addClass('ativo');
    $('.menu-alterarSenha').removeClass('ativo');
    $('.menu-enderecosEntrega').removeClass('ativo');
});
$('.menu-alterarSenha').click(function(){
    event.preventDefault(); // PREVENINDO O REDIRECIONAMENTO DE PÁGINA

    // CLASSE DE TAB ESCONDIDA
    $('.informacoesPessoais').addClass('esconder');
    $('.meusPedidos').addClass('esconder');
    $('.alterarSenha').removeClass('esconder');
    $('.enderecosEntrega').addClass('esconder');
    
    // CLASSE DE TAB ATIVA
    $('.menu-informacoesPessoais').removeClass('ativo');
    $('.menu-meusPedidos').removeClass('ativo');
    $('.menu-alterarSenha').addClass('ativo');
    $('.menu-enderecosEntrega').removeClass('ativo');
});
$('.menu-enderecosEntrega').click(function(){
    event.preventDefault(); // PREVENINDO O REDIRECIONAMENTO DE PÁGINA

    // CLASSE DE TAB ESCONDIDA
    $('.informacoesPessoais').addClass('esconder');
    $('.meusPedidos').addClass('esconder');
    $('.alterarSenha').addClass('esconder');
    $('.enderecosEntrega').removeClass('esconder');

    // CLASSE DE TAB ATIVA
    $('.menu-informacoesPessoais').removeClass('ativo');
    $('.menu-meusPedidos').removeClass('ativo');
    $('.menu-alterarSenha').removeClass('ativo');
    $('.menu-enderecosEntrega').addClass('ativo');
});

// CATEGORIA
$('.menu-acessorios').click(function(){
    $('.acessorios').toggleClass('esconder');
    $(this).children('.fa-plus').toggleClass('esconder');
    $(this).children('.fa-minus').toggleClass('esconder');
});
$('.menu-artesanato').click(function(){
    $('.artesanato').toggleClass('esconder');
    $(this).children('.fa-plus').toggleClass('esconder');
    $(this).children('.fa-minus').toggleClass('esconder');
});
$('.menu-casaEDecoracao').click(function(){
    $('.casaEDecoracao').toggleClass('esconder');
    $(this).children('.fa-plus').toggleClass('esconder');
    $(this).children('.fa-minus').toggleClass('esconder');
});