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

**Exceções à regra pode ser vantajoso, mas eles deve ser justificados.


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

<p>Estilos de layout são o único tipo de categoria a usar ID, se você optar por usá-los, utilize em tudo.</p>

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

<p>Para ajudar a batalha contra especificidade (e se o IE6 não é uma preocupação), então você pode dobrar-se sobre os seus nomes de classe, como no exemplo a seguir.</p>

.pod.pod-callout { }

<p>Se a ordem de carregamento é um fator em seu projeto, atente para questões de especificidade.</p>

<p>
    Embora os componentes de layout mais específicos atribuídos com IDs poderia ser usado para proporcionar um estilo especializado para módulos,
    subclassificação de módulo permite que o módulo a ser transferidos para outras seções do site com mais facilidade e você vai evitar o aumento da
    especificidade desnecessariamente.
</p>


<h2>1.1 STATE</h2>

<b>State Rules</b>

<p>Um estado é algo que aumenta e substitui todos os outros estilos. para exemplo, uma seção de acordeão pode estar em um estado de collapsed ou expanded. A mensagem pode ser um success ou um error de estado.</p>

<p>STATE para os outros comportamentos quando algo acontece pro exemplo (fora do padrão)</p>

<p>States são geralmente aplicados para o mesmo elemento como uma regra disposição ou aplicada para o mesmo elemento como uma classe de módulo de base.</p>

<b>** prestar a atenção nos prefixos de classe para cada categoria.</b>

<em>State applied to an element</em>

<!-- div id="header" class="s-collapsed">
    <form>
        <div class="msg s-error">
            There is an error!
        </div>
        <label for="searchbox" class="shidden">Search</label>
        <input type="search" id="searchbox">
    </form>
</div -->

<b>normalmente vamos ter o nosso módulo e também todos os states daquele módulo.</b>

<em>lembrar do exemplo da escultura da árvore que eu inventei.</em>

<p>O elemento cabeçalho só tem um ID. Como tal, podemos supor que qualquer estilos, se houver algum, neste elemento são para fins de layout e que o colapso-s representa um estado retraído.</p>

<p>Alguém poderia supor que sem essa regra estado, o padrão é um estado expandido.</p>

<p>O módulo msg é bastante simples e tem um estado de erro aplicado a ele. Pode imaginar-se um estado de sucesso pode ser aplicado para a mensagem, alternativamente.</p>

<p>Finalmente, o rótulo do campo tem estado escondido aplicado para escondê-lo a partir do site mas ainda mantê-lo por leitores de tela.</p>

<p>Neste caso, na verdade estamos aplicando o estado a um elemento base e não substituir um layout ou módulo.</p>

<b>Tips</b>

<p>States - deve ser feito para ficar sozinho e geralmente são construídos de uma única seletor de classe.</p>

<p>
    Uma vez que o Estado precisa para substituir o estilo de um módulo mais complexo conjunto de regras, o uso de !important é permitida e, ouso dizer, recomendado.
    (Eu costumava dizer isso !important nunca foi necessário, mas em sistemas complexos, muitas vezes é uma necessidade)
</p>

<p>Você normalmente não irá ter dois estados aplicada ao mesmo módulo ou dois estados que tendem a afetar a deve mesmo conjunto de estilos.</p>

<p>Com isso dito, seja cauteloso. Deixe !important "até que você realmente e realmente precisa"</p>

<p>Lembre-se, o uso de !important deve ser evitado por todos os outros tipos de regras. só <b>STATES</b> devem tê-lo.</p>

<b>Calendar Example</b>

<table class="cal">
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
    </tr>
</table>

.cal td {
    background-color: #EFEFEF;
    color: #333;
}

<p>Cada célula em minha mesa tem um fundo cinza claro com texto cinza escuro. <br />
Agora, queremos destacar que dia é hoje.</p>

.cal td.cal-today {
    background-color: #F33;
    color: #000;
}

<p>
    A classe chamada .cal-today mostra que a classe cal-today  é parte do módulo cal.
    Também estamos aumentando a especificidade que terá este estilo substituir o estilo default.
    Escolhas do seletor alternativos teria incluído apenas um simples td.cal-today, que teria funcionado, desde que ele foi declarado após a regra state default.
    Se tivéssemos usado just.call-today nosso seletor, nós teriamos que recorrer ao uso !important para obter esse estilo.
</p>

<p>É importante reconhecer que existem pequenas decisões que têm de ser assim como o projeto se desenvolve.
    No sentido que eu escolhi, que a classe. call-today só pode ser aplicado em uma célula da tabela
(td) e que seria dentro de um elemento com a classe de cal (que, utilizando SMACSS, deve ser considerado como um dado).
</p>

<p>Voltando ao nosso exemplo, tudo parece bom. Agora, nosso calendário é uma visão menor que está ligado a uma exibição que mostra uma semana em
detalhe completo. Nosso calendário miniatura precisa mostrar que é a semana atualmente selecionado semana.</p>

<tr class="is-selected">
    <td>1</td>
    <td class="cal-today">2</td>
    <td>3</td>
</tr>

<p>O estado seleccionada está a ser usado em toda a aplicação e por isso só fazia sentido para usá-lo aqui. O que faz o estilo selecionado parece?</p>

.is-selected {
    background-color: #FFD700; /* Yellow */
    color: #000;
}

<p>Você pode ver o problema? O problema é que a cor de fundo aplica-se a linha da tabela, enquanto a herança da cor fica substituído por a uma maior especificidade de ambos o estilo dia de base e o modelo de hoje.</p>

<b>****** OQUE MANDA NO CSS É A MAIOR ESPECIFICIDADE *******</b>

<p>Eu poderia acrescentar !Important para o meu state, que eu mencionei acima, como sendo uma coisa aceitável a fazer, mas ao mesmo tempo que aumenta a especificidade
ao aplicar o estilo para o mesmo elemento, ele não nos ajuda aqui porque não irá ser herdado para baixo para a célula.</p>

<p>!important não substitui a herança, apenas especificidade.</p>

<p>Isso significa que eu preciso para criar novas regras para permitir que o state selecionado seja refletido sobre elementos filho.</p>

.is-selected td {
    background-color: #FFD700; /* Yellow */
    color: #000;
}

Para obter o celular hoje em dia estilo corretamente, teríamos que criar uma nova regra
que combina a regra do estado com a regra do módulo.

Adicionando regras extras para contornar especificidade:

.is-selected td {
background-color: #FFD700 !important; /* Yellow */
color: #000 !important;
}
.is-selected td.cal-today {
background-color: #F33 !important;
color: #000 !important;
}

A partir deste último exemplo, você pode ver que nós estamos tendo para adicionar mais
seletores e muito mais! importantes para manter as coisas funcionando corretamente. este
definitivamente não é ideal.

<b>Combining State Rules with Modules</b>

Inevitavelmente, uma regra de estado não vai ser capaz de confiar em herança a aplicar o seu
estilo no lugar certo. Como vimos no exemplo Calendar, nós
aumentou o estado selecionado com um caso para as células da tabela. Outras vezes, nós
pode encontrar a necessidade para realmente combinar os estilos de Estado e de módulos em
uma única regra.

Considero que é uma linha de última defesa, mas uma necessidade. Se as regras do módulo
são agrupados e as regras do Estado são agrupados, onde
não uma regra que eles combina ir? Com o módulo.

Se você estiver fazendo o carregamento seletiva de seu CSS, estados genéricos será
considerado parte dos estilos de base e globais que precisam ser carregados
no carregamento da página inicial. Os estilos para um módulo em particular pode não precisar
para ser carregado até depois do fato e só então é que nos preocupamos
a regra combinado.

<b>Themes and Typography</b>

Inicialmente eu não tinha certeza se eu deveria alinhavar estes em que o misterioso e
menos frequentemente utilizados tipos de estilo 5 e 6. Optei (obviamente) para deixá-los
fora! om o principal conjunto de quatro, mas ainda sinto que há alguns pontos a
mencionar.

<b>Themes</b>

Provavelmente é auto-evidente, mas um tema define as cores e imagens que
dar o seu aplicativo ou site de sua aparência. Separar o tema fora
em seu próprio conjunto de estilos permite a esses estilos para ser facilmente definido para
temas alternativos.

Os temas podem um "ect qualquer um dos tipos primários. Poderia substituir estilos de base
como as cores dos links padrão. Pode alterar os elementos do módulo tais como
cores cromadas e bordas. Poderia afetar layout com diferentes
arranjos. Também pode alterar a forma como os estados olhar.

Vamos dizer que você tem um módulo de diálogo que precisa ter uma cor de borda de
azul, a própria borda seria definida inicialmente no módulo e em seguida
o tema define a cor:

<style type="text/css">
/* in module-name.css */
.mod {
    border: 1px solid;
}

/* in theme.css */
.mod {
    border-color: blue;
}
</style>

Os temas poderão ter nomes de classe que indicam claramente o que estilos fazem parte
do tema e quais não são. Basta ter um arquivo de tema separado deve
espero que seja suficiente.

No Yahoo! Mail, para ajudar com a manutenção da consistência entre todos os nossos
temáticos arquivos-, há mais de 50 nós usamos um modelo de Bigode para o nosso CSS
que nos permite especificar um número de valores de cor, um fundo
imagem, e criar um arquivo CSS final para produção.

<b>Font</b>

Por último, mas não menos importante, existem regras de fonte. Similar aos temas, existem
momentos em que você precisa redefinir as fontes que estão sendo usados ​​em uma
atacado, como com a internacionalização. Localidades como
China e Coreia têm ideogramas complexos que são difíceis de ler em
tamanhos de fonte menores. Como resultado, criamos arquivos de fontes separadas para cada
localidade que redefinir o tamanho da fonte para esses componentes.

Regras de fonte normalmente um "ect base, módulo e state estilos. Estilos de fonte
normalmente não irá ser especificado no nível de layout como layouts são destinados
para posicionamento e colocação, não para mudanças estilísticas como fontes e
cores.

Como arquivos de tema, pode não ser necessário definir regras fontes reais (como
f-large). Seu site, provavelmente, só tem de 3 a 6 di "erent font-tamanhos. Qualquer
mais do que isso e A, os usuários provavelmente não vai aviso prévio e B, você está
fazendo com que o local mais difícil de manter.


<b>Profundidade de Aplicabilidade</b>

Ao aprender o funcionamento interno do CSS, aprendemos que temos
seletores e que usamos seletores para selecionar os elementos HTML na
página que queremos para o estilo. CSS tem crescido ao longo dos anos para nos dar mais
poder utilizar um número cada vez maior de seletores. Cada conjunto de regras que
somarmos a nossa folha de estilo, no entanto, cria um crescente
conexão entre o CSS eo HTML.
Vamos analisar um bloco típico de CSS que você pode encontrar em um web site.

#sidebar div {
border: 1px solid #333;
}
#sidebar div h3 {
margin-top: 5px;
}
#sidebar div ul {
margin-bottom: 5px;
}


Ao olhar para isso, você pode ver que há alguma expectativa de que a nossa
HTML será semelhante. Há uma probabilidade ou mais seções em uma barra lateral que
tem um título e uma lista desordenada que o segue. Se o site não faz
alteradas com frequência, este estilo de CSS vai funcionar muito bem. Eu não mudei
o design do meu blog em dois anos. Minha necessidade de escalar simplesmente não está lá. Se
tentei usar essa abordagem em um local maior, o que pode alterar mais
! com freqüência e ter uma maior variedade de exigências do código, eu vou
ter problemas. Vou precisar adicionar mais regras com mais seletores complexos. I
pode encontrar-me em um pesadelo de manutenção.
Onde eu deu errado? Há duas preocupações específicas com a
exemplo CSS:

1. Eu estou confiando fortemente em uma estrutura HTML definido.
2. A profundidade de HTML ao qual se aplicam os seletores é muito profundo.

<b>Minimizando a Profundidade</b>

HTML é como uma estrutura de árvore de pais e filhos. A profundidade de
aplicabilidade é o número de gerações que se agiu por um determinado
governar. Por exemplo:

 body.article > #main > #content > #intro
> p > b

teria uma profundidade de aplicabilidade de 6 gerações. desse
selecção foi escrito como:

.article #intro b

Então a profundidade ainda o é mesmo: 6 gerações.

O problema com uma tal profundidade é que ela impõe uma muito maior
dependência de uma estrutura HTML particular. Componentes na página
não podem ser facilmente movimentados. Se olharmos para trás, a exemplo da barra lateral,
como é que vamos criar esse módulo em uma outra parte da página como um
rodapé? Nós temos que duplicar as regras.

#sidebar div, #footer div {
border: 1px solid #333;
}
#sidebar div h3, #footer div h3 {
margin-top: 5px;
}
#sidebar div ul, #footer div ul {
margin-bottom: 5px;
}

O nó raiz é a div e é! Aqui que devemos ser
criar nossos estilos.

Duplicação de regras:

.pod {
border: 1px solid # 333;
}
.pod> h3 {
margin-top: 5px;
}
.pod> ul {
margin-bottom: 5px;
}

A .pod é um contêiner que ainda conta com uma estrutura HTML especial
mas é de uma profundidade muito rasa do que o que tínhamos antes. a
"trade", "é que nós temos que repetir a classe pod em um numeroso
elementos na página. Considerando que, antes, tivemos apenas dois elementos com
IDs. É claro, nós queremos evitar voltar aos dias em que fizemos
coisas bobas, como adicionar nomes de classes para cada parágrafo.

Uma vantagem de usar esta profundidade de abordagem aplicabilidade é
também a capacidade para mais facilmente modelada esses módulos. No Yahoo!, para
exemplo, que temos vindo a depender de Bigode para grande parte da nossa modelagem
precisa. Aqui está como nós montamos nossa modelo para as .pods:

<div class="pod">
<h3>{{heading}}</h3>
<ul>
{{#items}}
<li>{{item}}</li>
{{/items}}
</ul>
</div>

Estamos tentando encontrar um equilíbrio entre a manutenção, desempenho,
e legibilidade. Indo muito profundo pode significar menos "classitis" dentro de seu
HTML mas aumenta o custo de manutenção e legibilidade.
Da mesma forma, você não quer (ou precisa) aulas sobre tudo. adicionando aulas
para o H3 ou neste exemplo teria sido um pouco desnecessário, a menos
precisamos ter um sistema ainda mais $flexible.

Para ir ainda mais longe neste último exemplo, este padrão de design é um comum
um. É um recipiente com um cabeçalho e um corpo. (Às vezes, você vai ter um
rodapé, também.) Temos um ul lá agora, mas em outros exemplos,
pode ver na cor de um div em seu lugar.

Mais uma vez, podemos duplicar nossas regras para cada variação.

.pod > ul, .pod > ol, .pod > div {
margin-bottom: 5px;
}

Simplificar a uma classe

.pod-body {
    margin-bottom: 5px;
}

Com a aproximação regra módulo, não é mesmo necessário especificar
a classe .pod. Podemos ver que visualmente .pod-corpo está associada com
o módulo pod e! om uma perspectiva de código, ele vai funcionar muito bem.

<div class="pod">
<h3>{{heading}}</h3>
<ul class="pod-body">
{{#items}}
<li>{{item}}</li>
{{/items}}
</ul>
</div>

Como resultado de esta pequena alteração, que é capaz de reduzir a profundidade de
aplicabilidade para o mais raso que pode ir. O selector único também significa
que estamos evitando possíveis problemas de especificidade, também. Tudo ao redor, que é
win-win.

<b>Desempenho de selector</b>

Com trabalho, eu tive que fazer um pouco de análise de desempenho. nós
executar uma série de ferramentas através de uma aplicação para determinar onde o
gargalos. Um exemplo desta aplicação é o Google Page Speed ​​Que
fornece uma série de recomendações para melhorar a JavaScript e
desempenho de renderização. Antes de eu entrar em suas recomendações, precisamos
para entender um pouco melhor sobre como navegadores avaliar CSS.

<b>Como CSS fica avaliada</b>

<p>O estilo de um elemento é avaliada em criação elemento</p>

Muitas vezes pensamos em nossas páginas como estes documentos completos e completos completos
de elementos e conteúdo. No entanto, os navegadores são projetados para lidar com
documentos como um córrego. Eles começam a receber o documento! Om o
servidor e pode tornar o documento antes de estar completamente
baixados. Cada nó é avaliado e processado para a janela, uma vez que
é recebido.

<body>
<div id="content">
<div class="module intro">
<p>Lorem Ipsum</p>
</div>
<div class="module">
<p>Lorem Ipsum</p>
<p>Lorem Ipsum</p>
<p>Lorem Ipsum <span>Test</span></p>
</div>
</div>
</body>

O navegador começa na parte superior e um elemento de corpo vê. Neste ponto, ele
acha que ele está vazio. Ele não avaliou qualquer outra coisa. O navegador
determinar o que os estilos são computados e aplicá-los ao elemento.
Qual é a fonte, a cor, a altura da linha? Depois ele descobre isso, ele
pinta-lo para a tela.

Em seguida, ele vê um elemento div com um ID de conteúdo. Mais uma vez, neste ponto, é
acha que ele está vazio. Ele não avaliou qualquer outra coisa. Os números do navegador
os estilos e, em seguida, a div fica pintado. O navegador irá determinar
se ele precisa pintar o corpo-se o elemento de obter mais largo ou mais alto? (I
suspeito que há outras considerações, mas de largura e altura mudanças são
Os elementos mais comuns e "ECTS criança tem em seus pais.)

Este processo continua até que se atinge o final do documento.

<b>CSS fica avaliada da direita para a esquerda.</b>

Para determinar se uma regra CSS aplica-se a um elemento particular,
começa a partir da direita da regra e trabalha a sua maneira esquerda.

Se você tem uma regra como div corpo # content p {color: # 003366; }
em seguida, para cada elemento, uma vez que é renderizado para a página de-it'll primeiro perguntar se
é um elemento de parágrafo. Se for, ele vai trabalhar o seu caminho até o DOM e perguntar se
é uma div com um ID de conteúdo. Se encontrar o que está procurando, ele vai
continuar o seu caminho até o DOM até atingir o corpo.
Ao trabalhar direita para a esquerda, o navegador pode determinar se uma norma
aplica-se a esse elemento particular que está tentando pintar a janela de visualização muito mais rápida. Para determinar qual é a regra é mais ou menos
performance, você precisa descobrir quantos nós precisamos ser
avaliada para determinar se um modelo pode ser aplicado a um elemento.

<b>quais as regras regra?</b>

Como cada elemento é renderizado na página, ele precisa descobrir o que
estilos deve ser aplicada. Agora, dê uma olhada na página do Google
Recomendações de velocidade. Existem quatro principais regras que considerem
ineficiente:

• Regras com seletores descendentes. Por exemplo h3 #content
• Regras com criança ou seletores adjacentes. Por exemplo #content> h3
• Regras com seletores excessivamente qualificados. Por exemplo div # content> h3
• regras que se aplicam: hover em elementos não-link.
E.g.div # content: hover

O que é importante notar a estas recomendações é que o
avaliação de mais do que um único elemento para determinar estilo é
ineficiente. Isso significa que você só poderia usar um único seletor
sua regra: um seletor de classe, um seletor de ID, um seletor de elemento, ou um
atributo selector. Se você tomar esta recomendação pelo valor de face, eles são
sugerindo que voltar para os dias de <p class = "bodytext">. (E se
você olhar para o CSS que eles geram em produtos como Pesquisa e
Google Mail, eles seguem essas recomendações.)

<b>Restringir-se, não sufocar-se</b>

Para o resto de nós, eu acredito que nós podemos ser um pouco mais prático e
encontrar um equilíbrio entre um extremo do espectro (adicionando classes e identificadores para tudo) eo outro (usando as regras do seletor profundas
criação de acoplamento forte entre HTML e CSS).
Eu sigo três regras simples para ajudar a limitar o número de elementos que
precisa de ser avaliada:

1. Use seletores filho
2. Evite seletores de tag para elementos comuns
3. Utilize nomes de classe como o mais à direita do seletor

Por exemplo, H3s .module pode ser bom se eu sei que eu estou indo só para
tem uma dúzia de H3s na minha página. Quão profundo são meus H3s no DOM? são
eles quatro níveis abaixo (por exemplo: html> corpo> #content> h3) ou são
10 níveis para baixo (por exemplo: html> body> #content> div> div> ...
> H3)? Posso limitar o percurso DOM usando seletores filho? Se eu puder
fazer .module> h3 (desculpe IE6), então eu sei que para os 12 H3s eu tenho no meu
página, ele só terá que avaliar 24 elementos. Se eu fizer .module div,
no entanto, e eu tenho 900 divs na minha página (eu só carregou minha caixa de entrada em
Yahoo! Mail e há 903), então eu vou ter muito mais
travessia. Um simples <div> <div> <div> </ div> <div> </ div> (3 níveis
profundidade) resulta em 6 avaliações. É fatorial. 4 níveis profundos resultados é 24 5
Níveis de resultados profundos é 120.

Com tudo o que disse, mesmo essas otimizações simples pode ser um exagero.
Steve Souders, que trabalha incansavelmente em testes de desempenho, examinou
o impacto no desempenho de seletores CSS e determinado (em 2009)
que o delta entre o melhor caso eo pior caso foi de 50 ms. em
Ou seja, considere o desempenho selector, mas não perca muito
tempo com isso.

<h2>State Representation</h2>

Você tem um documento do Photoshop aberto na frente de você e você foi
disse para transformá-lo em a magia que é HTML e CSS (com talvez um pouco
JavaScript jogado em boa medida).
Pode parecer simples para começar a mapear as coisas diretamente do
Composição para o código. No entanto, vários componentes em sua página são
provável a necessidade de se fazer representar em vários estados. Há o padrão
estado que algo deve aparecer e, em seguida, o que ele deve ser parecido
quando as mudanças de estado.

<p>O que é uma mudança de estado?</p>

Mudanças de estado são representados em uma de três maneiras:

1. class name
2. pseudo-class
3. media query

1. class name

A mudança de nome de classe acontece com JavaScript. Via algum tipo de interação, seja
que mover o mouse ao redor, batendo alguma coisa no teclado, ou
algum outro evento ocorrido. Um elemento recebe uma nova classe aplicada e
em seguida, as mudanças na aparência visual.


2. pseudo-class

A mudança pseudo-classe é feito através de qualquer número de pseudo-classes, e
há um monte. Nesses casos, já não tem que confiar em JavaScript para
descrever a mudança de estado. Pseudo classes ainda são limitados em que podemos
apenas mudança do estilo para os elementos que são descendentes ou irmãos do elemento em que o pseudo-classe aplica. Caso contrário, estamos de volta para
usando JavaScript.


3. media query

Por último, as perguntas da mídia descrever como as coisas devem ser denominado sob
critérios definidos, tais como diferentes tamanhos de janela.


<b>Qual é o ponto?</b>

Com um sistema baseado no módulo, é importante considerar a base de estado
conceber como aplicado a cada um dos módulos. Quando você pergunta ativamente
mesmo, "o que é o estado padrão", então você vai encontrar-se pensar
proativamente sobre progressive enhancement. Ele também pode ter você
abordar as questões de forma ligeiramente diferente.

<b>CSS Animations</b>

As animações são uma besta interessante e alguns podem argumentar que é
definir o comportamento de uma camada em que não deve ser definido. CSS é para
styling, depois de tudo. JavaScript é para o comportamento.
A distinção aqui é entender que a CSS define um "estado" visual.
Nós podemos usar JavaScript para mudar o estado de um elemento na nossa página.
JavaScript não deve ser utilizado para descrever o estado, no entanto. Ou seja, ele
Não deve ser usada para adicionar estilos alinhados.
Historicamente, temos usar JavaScript para criar a animação, porque foi
a única maneira que tínhamos disponível para fazê-lo (HTML + TIME não obstante).
Quando pensamos em coisas nesses termos, ele pode ajudar a forma como nós
abordar várias situações. Por exemplo, não seria incomum ter uma mensagem aparece na página de um curto período de tempo e, em seguida,
fade out.

JavaScript handling state change

function showMessage (s) {
var el = document.getElementById('message');
el.innerHTML = s;
/* set state */
el.className = 's-visible';
setTimeout(function(){
/* set state back */
el.className = 's-hidden';
}, 3000);
}

As mudanças de estado de mensagem escondida para o visível e de volta ao oculto
novamente. O JavaScript lida com as mudanças nesses estados e, em seguida, CSS
pode ser usado para animar entre estes, usando tanto as transições CSS ou
animações.

CSS handling the transition

@keyframes fade {
0% { opacity:0; display:block; }
100% { opacity:1; display:block; }
}
.is-visible {
display: block;
animation: fade 2s;
}
.is-hidden {
display: none;
animation: fade 2s reverse;
}

Eu admito, este último exemplo não seria realmente funcionar. Infelizmente, o
especificação de animação e navegador implementações atuais não
permitir-nos para especificar as propriedades não-animáveis ​​em out animação.
Felizmente, a especificação ainda está mudando e deve ter isto adicionado
eventualmente, com implementações de navegadores a seguir. Entretanto,
o que precisamos fazer algo como o seguinte.

Animations in current browsers

@-webkit-keyframes fade {
0% { opacity:0; }
100% { opacity:1; display:block; }
}
.is-visible {
opacity: 1;
animation: fade 2s;
}
.is-hidden {
opacity: 0;
animation: fade 2s reverse;
}
.is-removed {
display: none;
}

/* and then our javascript */
function showMessage (s) {
var el = document.getElementById('message');
el.innerHTML = s;

/* set state */
el.className = 's-visible';
setTimeout(function(){
/* set state back */
el.className = 's-hidden';
setTimeout(function(){
el.className = 's-removed';
}, 2000);
}, 3000);
}

Neste caso, eu mudei-o para ainda fazer a animação, mas depois de usar
JavaScript para remover o elemento! De $ linha após a animação deve
ser feito.
Desta forma, mantemos a separação entre o estilo (aka estado) e
comportamento.

<b>HTML5 and SMACSS</b>

Como se vê, ele funciona muito bem com o HTML5 como faz HTML 4 ou qualquer
outra em HTML que você pode estar usando com o seu CSS. Isso porque o
Abordagem SMACSS se resume a dois objetivos principais:

1 Aumente o valor semântico de uma seção de conteúdo e HTML.
2 Diminua a expectativa de uma estrutura HTML específico.

HTML5 introduz uma série de novos elementos que podem nos ajudar a aumentar
o valor semântico de uma seção de HTML e conteúdo. Tags como seção,
cabeçalho, e um lado são mais descritivo do que um simples div. Temos novo
tipos de entrada que nos permitem diferenciar um campo numérico! om uma data
campo! om um campo de texto. As tags e atributos extras nos permitiram
ser mais descritivo. Isso é uma coisa boa.

Mas, mesmo com as nossas novas marcas para brincar, as marcas não são necessariamente (ou
muito provável) vai descrever um módulo muito específico na página. É uma nav
elemento sempre vai conter exatamente o mesmo tipo e estilo de
navegação?

<nav> implementation

    <nav class="nav-primary">
<h1>Primary Navigation</h1>
<ul>…</ul>
</nav>
<nav class="nav-secondary">
<h1>External Links</h1>
<ul>…</ul>
</nav>

A navegação primária usa uma navegação horizontal na parte superior da
a página, mas a navegação secundária (para uma barra lateral, por exemplo) listas
itens verticalmente. Os nomes de classe fornecer diferenciação entre o
tipos.
Os nomes de classe ajudar a descrever o nosso conteúdo de formas-formas muito específicas que
são mais específicos que ainda HTML5 pode proporcionar. Isto serve o nosso primeiro objetivo
de aumentar o valor semântico de uma seção de HTML.
Seu primeiro instinto pode ser para fazer algo parecido com o seguinte:

<nav> CSS
nav.nav-primary li {
display: inline-block;
}
nav.nav-secondary li {
display: block;
}

Ao fazê-lo, temos indica que essas classes só pode ser utilizado em nav
elementos. Se o nosso código nunca ia mudar, isso estaria bem.
No entanto, a intenção deste livro é descrever projetos escaláveis​​, de modo
permite olhar para um exemplo de como as coisas podem mudar neste projeto.
Nossa navegação principal é apenas um único nível, mas o cliente volta
e diz que precisa adicionar menus para cada elemento. nossa HTML
mudanças na estrutura.

<nav> implementation
<nav class="nav-primary">
<h1>Primary Navigation</h1>
<ul>
    <li>About Us
<ul>
<li>Team</li>
<li>Location</li>
</ul>
</li>
</ul>
</nav>

Com este sub-navegação, como é que vamos denominar os itens que eles estão listados
verticalmente e não horizontalmente?
Com o CSS que já temos, teríamos que adicionar um <nav class = "nav secundário"> em torno de cada uma das listas não ordenadas internas para obter o estilo
que nós queremos.
Podemos aumentar o CSS para direcionar os itens da lista de interiores.

Augmented <nav> CSS
nav.nav-primary li {
display: inline-block;
}
nav.nav-secondary li,
nav.nav-primary li li {
display: block;
}

aplicar nosso
classe, que trabalha para o nosso objetivo secundário de diminuir o
expectativa de HTML específico.

SMACSS-style <nav> CSS

.l-inline li {
display: inline-block;
}
.l-stacked li {
display: block;
}

Nesse caso, mudamos para indicar que se trata de regras de layout, uma vez que
estamos impactando como os módulos individuais (os itens da lista) devem ser
contidas. A classe empilhadas-.l pode ser aplicado para a sub-navegação
ul. Isto irá criar o resultado que desejamos.
Especificação do item da lista como um elemento filho necessário ainda se liga o layout
regras para elementos HTML específicos. Há certamente várias maneiras de
esfolar um gato, como diz o ditado. Por exemplo, você pode querer dizer que
todos os elementos filho vai assumir esse estilo.

SMACSS-style <nav> CSS
.l-inline > *{
display: inline-block;
}
.l-stacked > *{
display: block;
}

A queda dessa abordagem é que as regras terão de ser avaliados
para cada elemento na página e não apenas os itens da lista. a
segmentação de apenas descendentes diretos evita muito transversal. Isso permite que
nós usar as classes em linha e empilhados em praticamente qualquer elemento onde
queremos que os elementos filhos para assumir esses estilos.

<nav> implementation
<nav class="l-inline">
<h1>Primary Navigation</h1>
<ul>
<li>About Us
<ul class="l-stacked">
<li>Team</li>
<li>Location</li>
</ul>
</li>
</ul>
</nav>

Mesmo com apenas este exemplo bastante simples, conseguimos manter
nosso simples CSS e evitou fazer nossos seletores mais complexa. a
HTML ainda é compreensível.
Lembre-se dos dois objetivos: aumentar a semântica ea redução da dependência
HTML específico.

<b>Prototyping</b>

Bons programadores como padrões. Bons designers como padrões, também.
Padrões de estabelecer familiaridade e incentivar a reutilização. SMACSS é de cerca de
identificar os padrões em seu projeto e modificá-los.
Um protótipo deve ajudar na visualização de componentes, em parte ou em sua totalidade e
para permitir a codificação da linguagem de design em blocos de construção.
A indústria de web design gosta componentes reutilizáveis ​​e pode ser visto nas
muitos dos quadros!, como Bootstrap (para uma variedade de local
componentes) e 960.gs (para grids de layout).
No Yahoo !, a equipe prototipagem cria esses blocos de construção e uso
los para a produção. Isto permitiu uma maior consistência entre
vários produtos, uma vez que foram todos baseados em exatamente o mesmo
fundação.

<b>Objectivos de um protótipo</b>

Um protótipo pode servir vários objectivos:
• Mostrar estados
• revisão de localização
• isolar dependências

States
Desde o estado padrão para os estados caiu de erro informa a qualquer
estados que você tenha definido, é importante ser capaz de visualizar cada um destes
estados e certifique-se de que o módulo é construído com precisão.
Se um módulo é então orientado a dados reais ou simulados dados podem ser usados ​​dentro de seu
protótipo para testar se ele vai processar corretamente.

Localização
Para projetos que precisam suportar vários idiomas, vai ser valiosa para ser
capaz de testar módulos usando cordas! om os di "locales erent para garantir
layouts não quebram como resultado.

dependências
Por último, é importante isolar dependências. O que CSS e JavaScript
dependências são necessárias para tornar um módulo corretamente? Na maior
projetos onde o carregamento lento é utilizado, sendo capaz de isolar as dependências
ao mínimo necessário significa que você construiu um módulo
de forma eficaz e pode integrar esse módulo no local, sem
impactando negativamente outros módulos na página.
No Yahoo !, módulos são isolados em arquivos CSS individuais e são
empacotados usando um manipulador de combinação quando necessário. Por exemplo, quando o
cargas da caixa de entrada, combina CSS arquivos juntos para botões, lista de mensagens,
barra lateral, tabs, eo cabeçalho. No momento em que o usuário solicita a Pesquisa
página, o manipulador de combinação combina estilos específicos de busca e entrega-los ao longo do tubo. Pesquisa usa uma variação da lista de mensagens padrão
ea barra lateral, o que significa que só tem de carregar os módulos sub-classificada.

<b>Peças do puzzle</b>

No Yahoo !, construímos um motor de criação de protótipos para ajudar a facilitar este processo.
Se você precisa de algo semelhante vai depender do tamanho do seu
projeto.
O protótipo do motor utiliza um molde como o bigode raiz. dados Mock
é armazenado em um arquivo JSON, cordas de localização são armazenados em pares de chave / valor
em um arquivo de texto, e dependências CSS e JavaScript são puxados como
necessário. Isso permite que a equipe para ver um menu ou uma caixa de diálogo ou uma forma de
si próprio ou no contexto de todo o local. Ao fazer isso, todos podem
avaliar a funcionalidade e design antes de entrar em engenharia. pudermos
também transferir ativos para engenharia sabendo que a integração será mais
perfeita como resultado.

No caso do nosso motor de protótipo, alguns gerenciamento de estado é tratado
antes do módulo é renderizado. Esta lida com itens condicionais, dados
filtragem e qualquer outra coisa que normalmente poderia ser tratada através de processamento do lado do servidor. Gestão do Estado nem sempre é apenas um caso de aplicação de um
nome da classe de um elemento HTML.

<b>seu Prototype</b>

Ter um motor de full-blown para compilar os módulos poderia muito bem ser
desnecessária, especialmente para um pequeno local. Ainda é vantajoso para isolar
seus componentes em um formato fácil de revisão. MailChimp, para
exemplo, tem uma folha de fraude interna de padrões de projeto que eles usam para
construir o site. Este documenta vários módulos que são usados
em todo o site eo código necessário para cada módulo.
Lembre-se, os padrões são bons. A codificação desses padrões também é bom.
Ter um processo para analisar e testar esses padrões é ótimo!

<b>código de formatação</b>

Todo mundo tem sua própria maneira. As ferramentas e técnicas que você usa são
aquelas que você tentou ou por tentativa e erro ou você já tentou o que
Você já ouviu falar funciona para outras pessoas. Quando comecei a trabalhar no desenvolvimento, eu
Dreamweaver usado. Foi featureful e me permitiu criar electricidade estática
Sites HTML com rapidez e eficiência. Depois de ver um colega de trabalho usando
Ultraedit e vendo o quão rápido ele era capaz de realizar o trabalho, comecei a
aprendê-la como uma forma de cumprimentar o meu conjunto de ferramentas existente. O mesmo tem
ocorreu com o código de maneira que eu. Vou ver uma técnica ou estilo que alguém
mais usa e eu vou assimilar essas técnicas em minha própria maneira de
de trabalho.
Esta seção, código de formatação, é uma breve olhada em como eu codificar o meu trabalho e
fazê-lo de uma forma que parece funcionar bem para os outros que têm que continuar
trabalhando em meu código.

<b>Single line versus multiple lines</b>

Por muitos anos, eu tenho o meu código CSS usando a abordagem de linha única. este
significa que todas as propriedades para um dado conjunto de regras são declarados na
mesma linha. Isto permite a digitalização rápida dos seletores ao longo do lado esquerdo.
Ser capaz de analisar seletores tem sido tradicionalmente mais importante
me de ver propriedades bem alinhados. Até apenas um par de anos
atrás, a lista de propriedades atribuídas a um conjunto de regras eram muito pequenos; seria
incomum ter mais do que um punhado. Portanto, eu poderia encontrar o seletor
Eu queria e todas as propriedades seria visível na tela.

Com CSS3 e da miríade de prefixos específicos de fornecedores que vêm com ele
-coisas Pode sair do controle rapidamente. Entre isso e trabalhar
com uma equipe maior, era mais fácil para que todos possam ter cada propriedade /
par de valores em sua própria linha.

CSS3 com a pletora de $ med propriedades de fornecedores pré-pode ser demais para
ler com facilidade, se tudo em uma linha.

.module {
display: block;
height: 200px;
width: 200px;
float: left;
position: relative;
border: 1px solid #333;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
-moz-box-shadow: 10px 10px 5px #888;
-webkit-box-shadow: 10px 10px 5px #888;
box-shadow: 10px 10px 5px #888;
font-size: 12px;
text-transform: uppercase;
}

No exemplo, existem 11 propriedades declaradas e poderíamos facilmente ter
meia dúzia de mais, se nós adicionamos uma outra característica ou dois para o nosso módulo.
Tendo isto tudo em uma linha sairia o primeiro punhado de propriedades
visível na tela e nós seria deixado de rolagem para a direita para descobrir
o resto das propriedades. Isso torna difícil para digitalizar o documento e
ver que as propriedades foram definidos.

Há algumas outras coisas menores a serem observados com o exemplo:

• Há um espaço depois dos dois pontos.
• Quatro espaços antes de cada declaração (sem guias).
• As propriedades são agrupados por tipo.
• colchete de abertura na mesma linha como o conjunto de regras.
• declarações Cor utilizar a forma abreviada.
Estas são todas preferencial e eu não vou invejar por usar um
completamente di "abordagem erent. Este é apenas o que eu encontrei que se sente
natural e faz mais sentido para mim.




<b>Agrupando propriedades</b>

Algumas pessoas se organizam em ordem alfabética, os outros não se organizam em tudo, e
outros podem usar algum outro sistema arbitrário. Eu caio nessa última categoria.
Não é completamente arbitrário, você mente. Eu o descreveria como a encomenda! Om
mais importante para o menos importante, mas o que é importante quando se trata
a declarar estilos em um elemento?

I organizar na seguinte ordem:

1 Box
2. Border
3 Background
4 Texto
5. Outros

Box inclui qualquer propriedade que um "ECTS a exibição e posição do
display, float, position, left, top, height, width.

Border inclui border, the oft-unused border-image, and borderradius.

background vem a seguir. Com o advento dos gradientes CSS3, background
declarações pode realmente tornar-se bastante detalhado. Mais uma vez, o fornecedor
prefixos apenas agravar o problema.

<i>Multiple backgrounds with CSS3 declarations. Code example "om Lea
Verou's CSS3 Pattern Gallery.</i>

background-color: #6d695c;
background-image: url("/img/argyle.png");
background-image:
repeating-linear-gradient(-30deg,
rgba(255,255,255,.1), rgba(255,255,255,.1) 1px,
transparent 1px, transparent 60px),
repeating-linear-gradient(30deg,
rgba(255,255,255,.1), rgba(255,255,255,.1) 1px,
transparent 1px, transparent 60px),
linear-gradient(30deg, rgba(0,0,0,.1) 25%,
transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%,
rgba(0,0,0,.1)),
linear-gradient(-30deg, rgba(0,0,0,.1) 25%,
transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%,
rgba(0,0,0,.1));
background-size: 70px 120px;

Padrões complexos são possíveis com gradientes CSS3, mas criar para longa
declarações de BG e o exemplo não inclui sequer CSS3
prefixos. Imaginem quanto tempo esta declaração seria se isso acontecesse!

Declarações de texto incluem o font-family, font-size, text-transform, letter-spacing e quaisquer outras propriedades CSS de exibição do tipo.


Qualquer coisa que não se enquadram em nenhuma das categorias acima é adicionado à
o fim.

<b>Cor Declarações</b>

Isto pode parecer uma coisa boba mesmo a mencionar, mas eu vi diferente
desenvolvedores de fazer coisas diferentes. Alguns como o uso de palavras-chave como blackand
whitebut Eu sempre tentei manter tanto o hex de 3 dígitos ou 6 dígitos
formato, sempre que possível. # 000and #FFFare mais curto, embora pouco,
do que suas contrapartes de palavras-chave. Da mesma forma, eu não usaria rgbor HSL,
uma vez que a forma hexagonal é mais curto. É claro, não têm rgba hsla hex
formar e que iria se acostumar.



incluir - Object-Oriented CSS (OOCSS), BEM.