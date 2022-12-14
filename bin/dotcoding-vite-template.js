#! /usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

if (process.argv.length < 3) {
    console.log('Você deve fornecer um nome para seu aplicativo.');
    console.log('Por exemplo :');
    console.log('    npx dotcoding-reactjs my-app');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPO =
    'https://github.com/tiago-pierre-dotcodingbr/vite-template.git';

if (projectName !== '.') {
    try {
        fs.mkdirSync(projectPath);
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log(projectName);
            console.log(
                `O arquivo ${projectName} já existe no diretório atual, escolha outro nome.`
            );
        } else {
            console.log(err);
        }
        process.exit(1);
    }
}

async function main() {
    try {
        console.log('Baixando arquivos...');
        execSync(`git clone --depth 1 ${GIT_REPO} ${projectPath}`);

        if (projectName !== '.') {
            process.chdir(projectPath);
        }

        console.log('Instalando dependências...');
        execSync('npm install');
        console.log('Atualizando as dependências...');
        execSync('npm update');

        console.log('Removendo arquivos inúteis...');
        execSync('npx rimraf ./.git');
        execSync('npx rimraf ./bin');
        execSync('npx rimraf ./.github/workflows');
        execSync(`npx change-package-name ${projectName}`);
        console.log('Preparando projeto...');
        execSync('git init');
        execSync('npm run prepare');

        console.log('Projeto criado com sucesso, está pronto para usar!');
    } catch (error) {
        console.log(error);
    }
}

main();
