# Seletiva TILD

## Descrição
Simulação de um website para empresas.

## Instruções
A página inicial está na root do projeto: ``login.html``. Utilize os dados da database abaixo
para fazer login (ou vá para o endereço ./subseq/dashboard.html).

## Database
``
Email: admin | Senha: pass
``
<br>
``
Email: hcaula@hotmail.com | Senha: pass
``

## Push notifications
A cada minuto, uma caixa de notificação e um áudio tocará.

## Caminhos
- <b>Dashboard</b> - Login ou ./subseq/dashboard.html;
- <b>Cadastro de empresas</b> - No side navbar do dashboard, Cadastros > Empresas;
- <b>Editar usuário</b> - Canto direito da navbar > Editar perfil ou ./subseq/editUser.html

## Bibliotecas
- <b>jQuery</b> (3.2.1) - Utilizado para pequenas animações;
- <b>CanvasJS</b> (1.9.10 Free Trial) - Utilizado nas ilustrações dos gráficos.

## Fontes
- <a href="http://www.dafont.com/coco-gothic.font">Coco Gothic (Free Trial)</a>;
- <a href="http://www.dafont.com/pt/exo-2.font">Exo 2</a>;
- <a href="http://www.dafont.com/pt/caviar-dreams.font">Caviar Dreams</a>;
- <a href="http://fontawesome.io/">Font Awesome</a>.

## Responsividade - Mobile friendly
Para atingir uma boa responsabilidade, utilizei as técnicas nativas do <b>flex</b>, disponíveis pelo CSS 3.

## Algumas ideias
- <b>Único arquivo CSS</b> - navegadores modernos salvam em cache o arquivo para páginas
conseguintes;
- <b>Ações em Javascript unificadas por uma função <i>initialize</i></b> - que toma como parâmetro o
campo de variáveis a ser inicializado;
- <b>Foco em páginas leves</b> - Os gráficos, por serem produzidos por Javascript e CSS, não fazem requisições
ao servidor por imagens, apenas por informações;
- <b>Processo de criação do design</b> - primeiramente, faz-se <i>lo-fi sketches</i> para se ter uma ideia
do design das páginas.

## Animações e <i>tweaks</i> extras
- Usuário não encontrado ou senha incorreta;
- Animações de entrada dos gráficos;
- Side navbar (botão ativa em visualização mobile).

## Autor
Henrique Caúla<br>
Graduando em Ciência da Computação<br>
Universidade Federal de Pernambuco<br>
Centro de Informática<br>
lhtc@cin.ufpe.br
