<h1>Terminal</h1>

$ - usuário normal.
# - usuário root.

<table cellpading="0" cellspacing="0" border="0">
    <tbody>
        <tr>
            <td>Comando</td>
            <td>Exemplo</td>
            <td>Significado</td>
        </tr>
        <tr>
            <td>cat</td>
            <td>cat exemplo.html</td>
            <td>mostra o conteúdo do arquivo.</td>
        </tr>
        <tr>
            <td>tac</td>
            <td>tac exemplo.html</td>
            <td>mostra o conteúdo do arquivo de trás para frente.</td>
        </tr>
        <tr>
            <td>whoami</td>
            <td>whoami</td>
            <td>Exibe o usuario logado no momento.</td>
        </tr>
        <tr>
            <td>pwd</td>
            <td>pwd</td>
            <td>Exibe a pasta atual.</td>
        </tr>
        <tr>
            <td>ls</td>
            <td>ls</td>
            <td>lista os arquvios e diretórios.</td>
        </tr>
        <tr>
            <td>head</td>
            <td>head estilo.css</td>
            <td>Para listar as linhas de um arquivo.</td>
        </tr>
        <tr>
            <td>touch</td>
            <td>touch exemplo.html</td>
            <td>criar um novo arquivo.</td>
        </tr>
        <tr>
            <td>echo</td>
            <td>
                echo primeira linha do arquivo > exemplo.html <br />
                echo Acrescentar uma linha em um novo arquivo >> exemplo.html
            </td>
            <td>escrever uma mensagem em um arquivo. ou na tela.</td>
        </tr>
        <tr>
            <td>clear</td>
            <td>clear ou CNTRL + L</td>
            <td>limpar o console.</td>
        </tr>
        <tr>
            <td>cd</td>
            <td>cd arquivos/</td>
            <td>acessar o diretório.</td>
        </tr>
        <tr>
            <td>| - (pipe)</td>
            <td>cat exemplo.html | less</td>
            <td>juntar vários comandos de uma vez.</td>
        </tr>
        <tr>
            <td>less</td>
            <td>cat exemplo.html | less</td>
            <td>
                paginador para visualizacao de um arquivo muito longo.<br />
                q - para sair do visualizador.
            </td>
        </tr>
        <tr>
            <td>nl</td>
            <td>cat estilo.less | nl</td>
            <td>mostrar o arquivo com as linhas</td>
        </tr>
        <tr>
            <td>mkdir</td>
            <td>mkdir assets/</td>
            <td>cria um diretório chamado assets</td>
        </tr>
        <tr>
            <td>mkdir</td>
            <td>mkdir assets css js img svg</td>
            <td>criar vários diretórios de uma só vez</td>
        </tr>
        <tr>
            <td>rmdir</td>
            <td>rmdir assets/</td>
            <td>deleta o diretório chamado assets</td>
        </tr>
        <tr>
            <td>rm -rf</td>
            <td>rm -rf css/</td>
            <td>
                remove o diretório e todos os arquivos que estão dentro dele
            </td>
        </tr>
        <tr>
            <td>rm</td>
            <td>rm scripts.js</td>
            <td>deleta o arquivo scripts.js</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


alunos e a senha 123456


--help  - ajudar com qualquer comando

head    - para listar as linhas de um arquivo
head -3 /etc/passwd - lista as 3 primeiras linhas do arquivo
tail - listar as ultimas linhas do arquivo


mostrando a ultima linha do arquivo cat estilo.less | head -78

| tail -1 (fiz o esquema igual a contagem de length)

numeradas
mkdir - criar o diretório
rmdir - deletar o diretório
para criar vários diretorios de uma vez - mkdir dir1 dir2 dir3
rm -rf diretorioLuan - remove o diretorio e tudo que está

dentro dele
cut comando para cortar
cut -d: -f 1 "numero - qual o campo que eu desejo selecionar"
delimitador -d ":"
-f field que eu quero
1 indice do campo que eu quero buscar
pode passar mais de 1 indice utilizando o virgula.
cut -d: -f 1,6

cat /dir/style.less | cut -d: -f 1,6

sort para ordenar

cat placas.txt | sort > placas2.txt para criar um novo arquivo

ordenado.
join carros.txt placas.txt > unido.txt // para juntar os

arquivos.

cat funcionarios.txt | wc -l // retorna a quantidade de linhas
cat functionarios.txt | wc (quantidade de linhas, palavras,

caracters)

cat functionarios.txt | grep "(20)" ** se não utilizar aspas

tem que fazer o escape (grep é usado para pesquisar) o grap

precisa de uma entrada de arquivo para fazer a busca


cat functionarios.txt | grep "(20)" | wc -l //devolvi a

quantidade de linhas com a busca do grep

usar o grep pensando nos padroes de busca igual regex

para escapar espaço no linux usar "\ "

para remover um arquivo bastar usar rm

tr para converter as letras | tr [A-Z] [a-z] ou vice e versa

[a-z] [A-Z]

cat functionarios.txt | split -l 20 // para quebrar o arquivo

em arquivos separando em varios de 20 linhas



nano -  editor de texto simples do linux

^ tem notacao do CTRL no linux
paste para unir 2 arquivos com delimitador

paster nomes.txt emails.txt -d@

cp - para copiar um arquivo
mv - para alterar o nome de um arquivo
cp no arquivo para a pasta de destino para copiar ele para uma

nova pasta

** eu posso criar varios diretorios de uma vez

EXERCÍCIOS:

1 - ok
2 - ok
3 - ok
4 - ok
5 - ok
6 - ok
7 - ok
8 - ok
9 - ok
10 - ok
11 - ok
12 - ok
13 - ok
14 - ok
15 - ok
16 - ok
17 - ok
18 - ok
19 - ok
20 -