FROM node:18

RUN npm install -g nodemon

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

ENV DEVELOPMENT_PORT=3001

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o conteúdo da aplicação para o contêiner
COPY . .

# Exponha a porta em que a aplicação está ouvindo (substitua a porta pela porta correta)
EXPOSE ${DEVELOPMENT_PORT}

# Comando para iniciar a aplicação
CMD [ "npm", "run", "dev" ]
