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