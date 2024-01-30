node.js установлен

Создал на GitHub репозиторий module_webpack
клонировал себе на ПК(в Git Bash Here):
  git clone https://github.com/Al101010/module_webpack.git

в Git Bash Here ввел команду:
  npm init -y
  git status
  git add package.json
  git commit -m "first commit"
  git push
alexgithub
(токен)


cd C:\_Alex\_netology.ru\GitHub\module_webpack
npm init
npm install --sev-dev webpack webpack-cli

допишем в "scripts" файла package.json строку: "build": "webpack --mode production",
npm run build //проверяем(npm run build) - работает(ошибок нет), появился каталог dist и файл main.js, хотя всё пустое

npm install --seve-dev html-webpack-plugin



cd C:\_Alex\_netology.ru\GitHub\module_webpack
npm run build
npm start