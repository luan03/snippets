<p>Leia a ER átomo por átomo, da esquerda para a direita.</p>
<i>fala[r!]?</i>

<p>Um f seguido de um a, seguido de um l, seguido de um a, seguido de: ou r, ou
!, ambos opcionais.</p>

<p>resultado = fala[r!]?    falar, fala!, fala</p>

<p>curinga .*  Teremos qualquer caractere, em qualquer quantidade. uma carta
para se usar em qualquer situação.</p>

<p>Expressões são Case Sensitive</p>
<p>[0123456789] é igual a [0-9]</p>
<p>Não use o intervalo A-z, prefira A-Za-z</p>


<p>Linhas que tenham entre 20 e 60 caracteres:</p>
<p>^.{20,60}$</p>


<p>Expressão para casar um número de RG no formato n.nnn.nnn-n? É fácil!</p>
<p>[0-9]\.[0-9]{3}\.[0-9]{3}-[0-9]</p>

<p>Caracteres acentuados (POSIX)</p>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Classe POSIX</td>
            <td>Similar</td>
            <td>Significado</td>
        </tr>
        <tr>
            <td>[:upper:]</td>
            <td>[A-Z]</td>
            <td>letras maiúsculas</td>
        </tr>
        <tr>
            <td>[:lower:]</td>
            <td>[a-z]</td>
            <td>letras minúsculas</td>
        </tr>
        <tr>
            <td>[:alpha:]</td>
            <td>[A-Za-z]</td>
            <td>maiúsculas/minúsculas</td>
        </tr>
        <tr>
            <td>[:alnum:]</td>
            <td>[A-Za-z0-9]</td>
            <td>letras e números</td>
        </tr>
        <tr>
            <td>[:digit:]</td>
            <td>[0-9]</td>
            <td>números</td>
        </tr>
        <tr>
            <td>[:xdigit:]</td>
            <td>[0-9A-Fa-f]</td>
            <td>números hexadecimais</td>
        </tr>
        <tr>
            <td>[:punct:]</td>
            <td>[.,!?:...]</td>
            <td>sinais de pontuação</td>
        </tr>
        <tr>
            <td>[:blank:]</td>
            <td>[ \t]</td>
            <td>espaço e TAB</td>
        </tr>
        <tr>
            <td>[:space:]</td>
            <td>[ \t\n\r\f\v]</td>
            <td>caracteres brancos</td>
        </tr>
        <tr>
            <td>[:cntrl:]</td>
            <td>-</td>
            <td>caracteres de controle</td>
        </tr>
        <tr>
            <td>[:graph:]</td>
            <td>[^ \t\n\r\f\v]</td>
            <td>caracteres imprimíveis</td>
        </tr>
        <tr>
            <td>[:print:]</td>
            <td>[^\t\n\r\f\v]</td>
            <td>imprimíveis e o espaço</td>
        </tr>
    </tbody>
</table>


<p>Para dizer maiúsculas, fica [[:upper:]], ou seja um [:upper:] dentro de
uma lista []</p>

<p>O [[:upper:]] é uma classe POSIX dentro de uma lista.</p>

<p>POSIX levam em conta a localidade do sistema. ou seja (acentuação está
disponível).</p>

<p>Nos Estados Unidos, [[:upper:]] é igual a [A-Z]. <br />
No Brasil, [[:upper:]] é igual [A-ZÁÃÂÀÉÊÍÓÕÔÚÇ...]</p>

<p>ERs que procurarão em textos em português, prefira [:alpha:] em vez de
A-Za-z, sempre.</p>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Meta</td>
            <td>Mnemônico</td>
        </tr>
        <tr>
            <td>.</td>
            <td>Ponto</td>
        </tr>
        <tr>
            <td>[]</td>
            <td>Lista</td>
        </tr>
        <tr>
            <td>[^]</td>
            <td>Lista negada</td>
        </tr>
        <tr>
            <td>?</td>
            <td>Opcional</td>
        </tr>
        <tr>
            <td>*</td>
            <td>Asterisco</td>
        </tr>
        <tr>
            <td>+</td>
            <td>Mais</td>
        </tr>
        <tr>
            <td>{}</td>
            <td>Chaves</td>
        </tr>
        <tr>
            <td>^</td>
            <td>Circunflexo</td>
        </tr>
        <tr>
            <td>$</td>
            <td>Cifrão</td>
        </tr>
        <tr>
            <td>\b</td>
            <td>Borda</td>
        </tr>
        <tr>
            <td>\</td>
            <td>Escape</td>
        </tr>
        <tr>
            <td>|</td>
            <td>ou</td>
        </tr>
        <tr>
            <td>()</td>
            <td>Grupo</td>
        </tr>
        <tr>
            <td>\1</td>
            <td>Retrovisor</td>
        </tr>
    </tbody>
</table>


<h2>Representantes</h2>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Meta</td>
            <td>Mnemônico</td>
            <td>Função</td>
        </tr>
        <tr>
            <td>.</td>
            <td>Ponto</td>
            <td>Um caractere qualquer</td>
        </tr>
        <tr>
            <td>[...]</td>
            <td>Lista</td>
            <td>Lista de caracteres permitidos</td>
        </tr>
        <tr>
            <td>[^...]</td>
            <td>Lista negada</td>
            <td>Lista de caracteres proibidos</td>
        </tr>
    </tbody>
</table>


<p>São metacaracteres cuja função é representar um ou mais caracteres.</p>

<p>Também podem ser encarados como apelidos, links, ou qualquer outra coisa que lhe lembre essa associação entre elementos.</p>

<p>Todos os metacaracteres deste tipo casam a posição de um único caractere, e não mais que um.</p>

<h3>.</h3>
<i>ponto casa com qualquer coisa</i>

<ul>
    <li>n.o - não, nao, ...</li>
    <li>.eclado - teclado, Teclado, ...</li>
    <li>e.tendido - estendido, extendido, eztendido, ...</li>
</ul>

<h3>[]</h3>
<i>Para que nossa ER fique mais específica, trocamos o ponto pela lista</i>

<ul>
    <li>n[ãa]o - não, nao</li>
    <li>[Tt]eclado - Teclado, teclado</li>
    <li>e[sx]tendido - estendido, extendido</li>
</ul>

<p>12[:. ]45 -  12:45, 12.45, 12 45</p>

<ul>
    <li>*lista casa com quem ela quer</li>
    <li>*dentro da lista, todo mundo é normal.</li>
    <li>A lista casa com quem ela conhece e tem suas próprias regras.</li>
    <li>Dentro da lista, todo mundo é normal.</li>
    <li>Dentro da lista, traço indica intervalo.</li>
    <li>Um - literal deve ser o último item da lista.</li>
    <li>Um ] literal deve ser o primeiro item da lista.</li>
    <li>Os intervalos respeitam a tabela ASCII (não use A-z).</li>
    <li>[:classes POSIX:] incluem acentuação, A-Z não.</li>
</ul>

<h3>[^]</h3>
<i>Então se [0-9] são números, [^0-9] é qualquer coisa fora números. Pode ser
letras, símbolos, espaço em branco, qualquer coisa, menos números.</i>

<p>A lista negada é exatamente igual à lista, podendo ter caracteres literais,
intervalos e classes POSIX. Tudo o que se aplica a lista normal, se aplica
à negada também.</p>

<p>A única diferença é que ela possui lógica inversa, ou seja, ela casará com
qualquer coisa, fora os componentes listados.</p>

<p>Sempre após caracteres de pontuação como a vírgula ou o ponto, devemos ter um espaço em branco os separando do resto do texto. Então vamos procurar por
qualquer coisa que não há espaço após a pontuação:</p>

<p>[:;,.!?][^ ] ou [[:punct:]][^ ]</p>

Uma lista negada segue todas as regras de uma lista normal.
Um ^ literal não deve ser o primeiro item da lista.
[:classes POSIX:] podem ser negadas.
A lista negada sempre deve casar algo.


<h2>Quantificadores</h2>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Meta</td>
            <td>Mnemônico</td>
            <td>Função</td>
        </tr>
        <tr>
            <td>?</td>
            <td>opcional</td>
            <td>zero ou um</td>
        </tr>
        <tr>
            <td>*</td>
            <td>asterisco</td>
            <td>zero, um ou mais</td>
        </tr>
        <tr>
            <td>+</td>
            <td>mais</td>
            <td>um ou mais</td>
        </tr>
        <tr>
            <td>{n,m}</td>
            <td>chaves</td>
            <td>de n até m</td>
        </tr>

    </tbody>
</table>


<i>Todos os quantificadores são gulosos</i>

<h3>?</h3>

<i>ER 6? significa zero ou uma ocorrência do número 6. Se tiver um 6, beleza,
Se não tiver, beleza também.</i>

<p>O opcional é um quantificador que não esquenta a cabeça, para ele pode ter ou não a ocorrência da entidade anterior, pois ele a repete 0 ou 1 vez.</p>

<p>Por exemplo, a ER 6? significa zero ou uma ocorrência do número 6. Se tiver um 6, beleza, casamento efetuado.</p>

<p>Se não tiver, beleza também. Isso torna o 6 opcional (daí o nome), que tendo ou não, a ER casa.</p>

<p>Veja mais um exemplo, o plural. A ER ondas? tem a letra s marcada como opcional então ela casa onda e ondas.</p>

<p>Cada letra normal é um átomo da ER, então o opcional é aplicado somente ao
atomo e não à palavra toda.</p>

<p>O opcional é opcional.</p>
<br />

<p>O opcional é útil para procurar palavras no singular e plural.
Podemos tornar opcionais caracteres e metacaracteres.
Leia a ER átomo por átomo, da esquerda para a direita.
Leia a ER, entenda o todo e analise as possibilidades.</p>


<h3>*</h3>

<p>Em outras palavras, a entidade anterior pode aparecer em qualquer quantidade Quantificadores são gulosos.</p>

<i>Pode começar apenas com tex e ele irá percorrer buscando tudo que
encontrar, iniciado com tex</i>

<strong>O curinga .* é o tudo e o nada, qualquer coisa.</strong>


<h3>+</h3>

<p>O mais tem funcionamento idêntico ao do asterisco, tudo o que vale para um, se aplica ao outro.</p>

<p>Sua utilidade é quando queremos no mínimo uma repetição, é um asterisco mais
exigente.</p>

<i>Pode começar apenas com tex e ele irá percorrer buscando tudo que
encontrar, iniciado com tex e tem que haver uma repeticao de tex pelomenos
1 vez</i>

<p>O mais repete em qualquer quantidade, pelo menos uma vez.</p>


<h3>{n,m}</h3>
<i>Você pode especificar um número exato, um mínimo, um máximo, ou uma faixa
numérica.</i>

<ul>
    <li>Chaves são precisas.</li>
    <li>As chaves simulam o *, o + e a ?.</li>
    <li>As chaves não são o Chaves.</li>
</ul>

<h2>Âncoras</h2>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Meta</td>
            <td>Mnemônico</td>
            <td>Função</td>
        </tr>
        <tr>
            <td>^</td>
            <td>circunflexo</td>
            <td>Início da linha</td>
        </tr>
        <tr>
            <td>$</td>
            <td>cifrão</td>
            <td>Fim da linha</td>
        </tr>
        <tr>
            <td>\b</td>
            <td>borda</td>
            <td>Início ou fim de palavra</td>
        </tr>
    </tbody>
</table>

<h3>^</h3>
<i>Marca o começo de uma linha. Nada mais</i>

<h3>$</h3>
<i>Serve para procurar palavras no fim da linha.</i>

<p>Similar e complementar ao circunflexo, o cifrão marca o fim de uma linha e só é válido no final de uma ER. Como o exemplo anterior, [0-9]$ casa linhas que
terminam com um número.</p>

<p>Só é especial no final da ER. <br /> É cifrão e não dólar.</p>


<h3>\b</h3>

<ul>
    <li>A borda marca os limites de uma palavra.</li>
    <li>O conceito "palavra" engloba letras, números e o sublinhado.</li>
    <li>A borda é útil para casar palavras exatas e não parciais.</li>
</ul>



<h2>Outros</h2>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Meta</td>
            <td>Mnemônico</td>
            <td>Função</td>
        </tr>
        <tr>
            <td>\c</td>
            <td>Escape</td>
            <td>Torna literal o caractere c</td>
        </tr>
        <tr>
            <td>|</td>
            <td>ou</td>
            <td>ou um ou outro</td>
        </tr>
        <tr>
            <td>(...)</td>
            <td>Grupo</td>
            <td>Delimita um grupo</td>
        </tr>
        <tr>
            <td>\1...\9</td>
            <td>Retrovisor</td>
            <td>Texto casado nos grupos 1...9</td>
        </tr>
    </tbody>
</table>


<h3>\</h3>

<p>Escapando, \* é igual a [*] que é igual a um asterisco literal. Similarmente podemos escapar todos os metacaracteres já vistos:</p>
<p>\., \[ , \], \?, \+ , \{, \}, \^ e \$. </p>

<p>E para você ver como são as coisas, o escape é tão poderoso que pode escapar a si próprio! O \\ casa uma barra invertida \ literal.</p>

<p>O escape escapa um metacaractere, tirando seu poder.</p>
<p>\* = [*] = asterisco literal.</p>
<p>O escape escapa o escape, escapando-se a si próprio simultaneamente.</p>



<h3>|</h3>
<ul>
    <li>O ou indica alternativas. </li>
    <li>Lista para um caractere, ou para vários. </li>
    <li>O grupo multiplica o poder do ou.</li>
</ul>

<h3>()</h3>

<ul>
    <li>Grupos servem para agrupar.</li>
    <li>Grupos são muito poderosos.</li>
    <li>Grupos podem conter grupos.</li>
    <li>Grupos são quantificáveis.</li>
</ul>

<h3>\</h3>

<ul>
    <li>O retrovisor só funciona se usado com o grupo.</li>
    <li>O retrovisor serve para procurar palavras repetidas.</li>
    <li>Numeram-se retrovisores contando os grupos da esquerda para a direita.
    </li>
    <li>Temos no máximo 9 retrovisores por ER.</li>
</ul>

<h2>Quantificadores não-gulosos</h2>


meta    mnemônico
----------------------------------
??      opcional não-guloso
*?      asterisco não-guloso
+?      mais não-guloso
{n,m}?  chaves não-gulosas


<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td colspan="2">
                não-gulosos
            </td>
        </tr>
        <tr>
            <td>a.*?</td>
            <td>a</td>
        </tr>
        <tr>
            <td>a.+?</td>
            <td>aa</td>
        </tr>
        <tr>
            <td>a.??</td>
            <td>a</td>
        </tr>
        <tr>
            <td>a.{1,3}?</td>
            <td>aa</td>
        </tr>
    </tbody>
</table>


<p>Barra-letra.</p>

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>
                b-l POSIX equiv.
            </td>
            <td>
                mnemônico
            </td>
        </tr>
        <tr>
            <td>\d  [[:digit:]]</td>
            <td>dígito</td>
        </tr>
        <tr>
            <td>\D  [^[:digit:]]</td>
            <td>não-dígito</td>
        </tr>
        <tr>
            <td>\w  [[:alnum:]_]</td>
            <td>palavra</td>
        </tr>
        <tr>
            <td>\W  [^[:alnum:]_]</td>
            <td>não-palavra</td>
        </tr>
        <tr>
            <td>\s  [[:space:]]</td>
            <td>branco</td>
        </tr>
        <tr>
            <td>\S  [^[:space:]]</td>
            <td>não-branco</td>
        </tr>
    </tbody>
</table>

<p>ER para casar o RG:</p>

<p>[0-9]\.[0-9]{3}\.[0-9]{3}-[0-9]</p>
<p>\d\.\d{3}\.\d{3}-\d</p>


<strong>(?#comentário)</strong>
