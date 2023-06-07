# typescript_projeto_inicial

# Instalando nodejs:

npm install

# Verificando a versão instalada:

npm -version

# Iniciando servidor:

npm run server

# Instalando typescript com o servidor node parado:

npm install typescript@4.2.2 --save-dev

# Compilando o typescript para o javascript;

npm run compile

# Incluindo parametro package.json autocompiler

"watch":"tsc -w"

# Incluindo parametro tsconfig.json para nao compilar quando houver erro

"noEmitOnError": true

# Executando autocompiler

npm run watch

# Executando o server e o watch com autocompilador typescript

npm run start

# Deve ser criado o arquivo tsconfig.json para autocompiler leia as propriedades

# Os arquivos compilados vao ser enviados para a pasta dist

# Comandos no navegador

# Abrindo Console:

Ctrl + Shift + C

# Abrindo o depurador do código após abrir o console:

Ctrl + P