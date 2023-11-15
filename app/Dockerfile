# Fazer pull da Docker Image - Node.js
FROM node:alpine

# Usar o seguinte directorio dentro do container
WORKDIR /usr/src/app

# Copiar os ficheiros package-* .json desta pasta para a workdir do container
COPY package*.json ./

# Rodar o npm install na nossa máquina
RUN npm install

# Copiar os módulos gerados e os restantes ficheiros para o container e colar no directorio (acima escolhido)
COPY . .

# Colocar a nossa APP a rodar na porta 5000 dentro do container, precisamos expô-la
EXPOSE 3000

# O comando que dá start na nossa app
CMD ["node", "index.js"]