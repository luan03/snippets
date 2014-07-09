<h1>SMACSS  - Framework de arquitetura CSS.</h1>

Organização em módulos - um processo de design para o seu css.

- manter css mais organizado.
- mais estrturado
- código fácil de construir
- mais fácil de manter

* Não irá resolver todos os seus problemas porque trabalhamos com WEB e existem
muitas maneiras de construir as coisas. mais esse guia vai ajudar bastante em
outras decisões.

Vale lembrar que é uma arquitetura CSS!

Existem 4 tipos de regras CSS:

o core do SMACSS é a categorização, e as categorias são:

1. Base
2. Layout
3. Module
4. State

E assim vamos evitando um pouco a complexidade do nosso css.

Cada categoria tem algumas orientações que lhe são aplicáveis.

Grande parte do propósito de categorizar as coisas é codificar padrões de coisas
que se repetem dentro de nosso projeto.

Repetição resulta em menos código, manutenção mais fácil e maior consistência na experiência do usuário.

Estas são todas as vitórias.

**Excepções à regra pode ser vantajoso, mas eles deve ser justificados.


<h2>1 - BASE</h2>

Regras de base são os padrões. Eles são quase que exclusivamente um único elemento.
mas poderia incluir seletores de atributo, seletores de classe pseudo,
seletores filho ou selectores irmãos. Essencialmente, um estilo base diz que
sempre que este elemento está na página, ele deve ficar assim.

Exemplo:

html, body, form { margin: 0; padding: 0; }
input[type=text] { border: 1px solid #999; }
a { color: #039; }
a:hover { color: #03C; }

<h2>2- LAYOUT</h2>
<p>Regras de layout divide a página em seções. Layouts mantem um ou mais módulos juntos.</p>

<h2>3 - MODULE</h2>
<p>Os módulos são as partes reutilizáveis ​​e modulares do nosso design. Eles são textos explicativos, as seções da barra lateral, as listas de produtos e assim por diante.</p>

<h2>4 - STATE</h2>
<p>Finalmente, as regras do Estado são formas de descrever como os nossos módulos ou layouts irão se comportar.</p>
<p>É oculto ou expandido? É ativo ou inativa? Eles também estão descrevendo como um módulo ou o layout se parece em telas que são menores ou maiores.</p>
<p>Eles também estão prestes descrevendo como um módulo pode parecer em diferentes paginas como a home page ou no interior página.</p>


<h3>Regras de Nomenclatura</h3>
<p>Ao separar regras nas quatro categorias, convenção de nomenclatura é importante para entender uma determinada categoria de estilo e seu papel no âmbito geral da página.</p>
<p>eu posso olhar para o state .exm-caption {} e saber que é uma legenda do módulo .exm {} e ver que a legenda está relacionada ao módulo.</p>
<p>Módulos vão ser a maior parte de qualquer projeto. Não usar nomes muito detalhados. Usar apenas o nome do próprio módulo.</p>
<p>Os módulos que são uma variante de um outro módulo, também deve usar o base de nome do módulo como um prefixo.</p>

<p>Teoria de todos os módulos tem a mesma estrutura e o state muda seu comportamento.</p>

Exemplo:

/* Example Module */
.example { }

/* Callout Module */
.callout { }

/* Callout Module with State */
.callout.is-collapsed { }

/* Form field module */
.field { }

/* Inline layout */
.l-inline { }


<b>Tenha uma convenção, documente-a e cumpra.</b>

<h2>1.1 - BASE</h2>
<p>A regra de base é aplicado a um elemento com um selector de elemento, um seletor descendente ou um seletor de criança, junto com todas as pseudo-classes.</p>
<p>Ele não inclui qualquer classe ou ID seletores. É o estilo default de como esse elemento deve aparecer em todas as ocorrências na página.</p>

body, form {
    margin: 0;
    padding: 0;
}

a {
    color: #039;
}

a:hover {
    color: #03F;
}

<p>Estilos de base incluem ajustes de tamanho de titulo, links default, fonts default e estilos do body default.</p>
<p>Não deve haver nenhuma necessidade de usar !important para um estilo de Base.</p>

<p>É altamente recomendável especificar um background para a body com algo que não seja branco se usar sempre o branco o seu projeto poderá está quebrado.</p>
<p>Pior, sua escolha da cor da fonte pode entrar em conflito com o configuração do usuário e fazer o seu site inutilizável.</p>

<h3>CSS Resets</h3>

<p>CSS Resets é um conjunto de estilos de Base projetado para remover ou repor a margem default, padding e outras propriedades.</p>

<p>Sua finalidade é definir um fundamento consistente em todos os navegadores para construir o site on.</p>

<p>Muitos frameworks de Reset podem ser excessivamente agressivos e pode apresentar mais problemas do que resolvem.</p>

<p>Remoção de margin e padding de elementos apenas para apresentá-los novamente cria esforço duplicado e aumenta a quantidade de código necessário para ser enviado para o cliente.</p>

<p>Muitos acham redefinir estilos uma ferramenta útil no desenvolvimento de site.</p>

<p>Certifique-se de compreender as desvantagens de cada framework que  você deseja usar e decidir em conformidade.</p>

<p>Desenvolvendo o seu próprio conjunto de estilos padrão você pode  usar consistentemente a partir de projeto para projeto também pode ser vantajoso.</p>

<em>Para um ponto de partida em seu próximo projeto, confira alguns desses recursos:</em>

<ul>
    <li>HTML5 Boilerplate</li>
    <li>normalize.css</li>
    <li>Eric Meyer Reset</li>
</ul>


<h2>1.1 - LAYOUT</h2>

<h3>Layout Rules</h3>

<p>CSS, por sua própria natureza, é usado para criar o seu layout No entanto, há uma distinção entre layouts ditando os maiores e menores componentes de uma página.</p>

<p>Os pequenos componentes, como um texto explicativo, ou formulário de login, ou um item de navegação. No âmbito da grande componentes, como um header ou footer.</p>

<p>Refiro-me aos componentes menores como módulos.</p>

<p>Os maiores componentes são chamados de estilos de layout.</p>


<p>Estilos de layout também podem ser divididos em estilos principais e secundários com base em reutilização.</p>

<p>Principais estilos como o cabeçalho e rodapé são susceptíveis de ser denominado usando seletores de identificação, embora seletores de classe poderia funcionar igualmente bem.</p>

<p>Não é necessário usar seletores de elemento com um estilo de layout.</p>

#header, #article, #footer {
    width: 960px;
    margin: auto;
}

#article {
    border: solid #CCC;
    border-width: 1px 0 0;
}

<p>Alguns Frameworks utilizam classes ao invés de IDs para o layout para ser utilizados varias vezes na mesma página, assim como o 960gs.</p>

<p>Geralmente, um estilo de layout só tem um único seletor: um único ID ou classe.</p>

<p>
    Esta preferência de layout ainda seria declarado como um Layout e estilo usado em combinação com outros estilos de layout.
    <br />
    Exemplo:
</p>

#article {
    float: left;
}
#sidebar {
    float: right;
}
.l-flipped #article {
    float: right;
}
.l-flipped #sidebar {
    float: left;
}


<p>No exemplo de layout, a classe flip. Foi aplicado em um nível mais elevado elemento, como o elemento de body e permite que o artigo e barra lateral
conteúdo a ser trocado, movendo-se a barra lateral! para a direita para a esquerda e vice-versa, para o artigo.</p>

<p>Outro exemplo é de mudar de um layout fluido para fixo:</p>

#article {
    width: 80%;
    float: left;
}
#sidebar {
    width: 20%;
    float: right;
}
.l-fixed #article {
    width: 600px;
}
.l-fixed #sidebar {
    width: 200px;
}

<p>Uma outra coisa a se notar no exemplo Layout é a convenção de nomenclatura.</p>

<p>As declarações que usam seletores ID são nomeados com precisão e sem namespace particular.</p>

<p>Os seletores baseados em classes, no entanto, faz um prefixo "l".</p>

<p>Isso ajuda a identificar facilmente o objectivo destes estilos e separá-los! em MODULE ou STATES.</p>

<p>Estilos de layout são o único tipo de categoria a usar ID, se você optar por usá-los em tudo.</p>

<p>Se você deseja namespace seu ID seletores, você pode, mas não é tão necessário fazê-lo.</p>

<b>Using ID selectors</b>

<p>Para ser claro, usando ID em seu HTML pode ser uma coisa boa, e em alguns casos é absolutamente necessário.</p>

<p>Por exemplo, eles fornecem eficiente ganchos para JavaScript. Para CSS, no entanto, os selectores de identificação não são necessários como a diferença de desempenho entre ID e classe seletores é quase inexistente e pode fazer um estilo mais complicado devido ao aumento da especificidade.</p>

<b>Layout Examples</b>

<p>A teoria é uma coisa, mas a aplicação é outra. Vamos dar uma olhada em um site real e considerar o que é parte do layout e do que é um módulo.</p>

<p>Em dar uma olhada no site da CNN, há uma série de padrões que ocorrem em muitos sites. Por exemplo, há um cabeçalho, um barra de navegação, uma área de conteúdo e um rodapé.</p>

<p>estrtura do site:</p>

#header { … }
#primarynav { … }
#maincontent { … }

<!--div id="header"></div -->
<!--id="primarynav"></div -->
<!--id="maincontent"></div -->

<p>Grandes sites com uma maior taxa de mudança só têm uma maior chance de refatoração um componente dentro da página e precisando do estilo que vai com ele.</p>

<p>O seletor de ID não precisa ser qualificado, com um seletor de tags, também, e uma vez que a lista é uma direta descendente da div, o seletor filho (>) poderia ter sido utilizado.</p>

<p>
    vantagem de usar seletor descendente no css (>) é apenas de pegar o descendente diretamente exemplo: <br />
    div#content > li
</p>

<h2>1.1 - MODULE</h2>

<p>Como brevemente mencionado na seção anterior, um módulo é mais componente discreto da página. É suas barras de navegação e sua carrosséis e seus diálogos e seus widgets e assim por diante.</p>

<p>Esta é a carne da página. Módulos sentar dentro componentes de layout. Os módulos podem às vezes sente-se dentro de outros módulos também.</p>

<p>Cada módulo deve ser concebido para existir como um componente independente. Ao fazê-lo, a página será seja mais flexível. Se bem feito, os módulos podem facilmente ser movidos para diferentes partes do layout, sem quebrar.</p>

<p>Ao definir o conjunto de regras para um módulo, evitar o uso de IDs e elemento seletores, que adere apenas para nomes de classe. Um módulo conterão provavelmente um número de elementos e não é provável que seja um desejo de usar descendente vs seletores filho para atingir esses elementos.</p>

<b>Evite seletores de elementos</b>

<p>Incluir apenas um seletor que inclui semântica. A span ou div detém nenhum. Um título tem algum. A classe definida em um elemento, tem muito.</p>

<!-- div class="fld" -->
<!-- span class="fld-name">Folder Name</span-->
<!-- span class="fld-items">(32 items)</span-->

<p>Ao adicionar as classes para os elementos, nós aumentamos a semântica o que significa que os elementos e eliminar qualquer ambiguidade quando se trata a denominar-los.</p>

<p>não deixa-los assim: (para que não sejam genéricos)</p>

/* The Folder Module */

.fld > span {
    padding-left: 20px;
    background: url(icon.png);
}

<p>Se se desejar utilizar um selector de elemento, deve ser dentro de um nível de um seletor de classe.</p>

<p>
    Em outras palavras, você deve estar em uma situação de usar criança seletores.
    Alternativamente, você deve ser extremamente confiante de que o elemento em questão não vai ser confundido com um outro elemento.
 </p>

 <p>o semanticamente mais genéricos o elemento HTML (como uma span ou div), o mais provável será criar um conflito na estrada.</p>

 <p>Elementos com maior semântica como títulos são mais propensos a aparecer por si só dentro de um recipiente e você é mais provável capaz de usar um seletor de elemento com êxito.</p>

 <b>New Contexts</b>

 <p>Usando a abordagem módulo também permite-nos compreender melhor onde mudanças de contexto são prováveis ​​de ocorrer.</p>

 <p>A necessidade de um novo posicionamento contexto, por exemplo, é provável que aconteça em qualquer nível de layout ou no a raiz de um módulo.</p>

<b>Subclassing Modules</b>

<em>Isso é oque normalmente fazemos</em>
<p>Quando temos o mesmo módulo em diferentes seções, o primeiro instinto é a utilização de um elemento pai para denominar esse módulo diferente.</p>

.pod {
    width: 100%;
}
.pod input[type=text] {
    width: 50%;
}
#sidebar .pod input[type=text] {
    width: 100%;
}

<p>O problema com esta abordagem é que você pode executar em especificidade questões que requerem a adição de ainda mais seletores ou para rapidamente voltar a usar !important</p>

[pagina 25 - Expanding ...]