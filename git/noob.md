<h1>Git Noob</h1>

<p>Git Noob - Guia de referencia de comandos</p>

<h2>Esse é um Documento Público e novas ideias para melhorar os códigos correspondentes são sempre bem vindas. Contribua!</h2>

<ul>
	<li>Luan Fagundes <a href="http://twitter.com/luan03">@luan03</a>, <a href="https://github.com/luan03">github</a></li>
	<li>Karol Harumi <a href="http://twitter.com/karolharumi">@karolharumi</a>, <a href="https://github.com/karolharumi">github</a></li>
</ul>

<h2>Índice</h2>

<ul>
	<li><a href="#usage">Usando o git</a></li>
	<li><a href="#command-list">Lista de comandos</a></li>
</ul>

<h2>Guia de uso</h2>

<ol>
	<li>
		<p><a name="usage">Usando o git</a></p>
		<p>Segue o guia de uso do git para você controlar as versões do seu projeto</p>

	</li>
	<li>
		<p><a name="command-list">Lista de comandos</a></p>
		<p>Seguem alguns comandos basicos:</p>

		<ul>
		 <li><code>git commit -m "Seu Comentario"</code> : Commit</li>
		 <li><code>git pull origin master</code> : Update</li>
		 <li><code>git push origin master</code> : Subir para o repositorio</li>
		 <li><code>git status</code> : Status dos arquivos</li>
		 <li><code>git add</code> : Adicionar arquivos na lista de Commit</li>
		 <li><code>git add -p</code> : Mostra oque foi alterado no arquivo a ser comitado | mostrar opcoes y/n</li>
		 <li><code>git reset HEAD <nomeDoArquivo.txt> </code> : Adicionar Remover da lista de Commit</li>
		 <li><code>git checkout <nomeDoArquivo.txt> </code> : Desfazer alteracoes nos arquivos (Rollback)</li>
		 <li><code>git diff --staged</code> : Lista todas as informacoes em staged</li>
		 <li><code>git log</code> : Lista historico de informacoes sobre commits</li>
		 <li><code>q</code> : Sair do log</li>
		 <li><code>git rm -r <nomeDoArquivo.txt></code> : Deletar um arquivo</li>
		</ul>

		<p>
			- Podemos adicionar somente uma alteração: git add testegit
				adicionar todas as alterações: $ git add .
			git commit -m "mensagem teste para o tutorial" Agora as alterações foram adicionadas ao controle de versão. Mas ainda estão somente na máquina local.
</p>

	</li>
</ol>

