Шубамания
---------

Использован генератор https://github.com/yeoman/generator-webapp

В app/scripts/main.js используется чуть-чуть es6 (шаблон для таймера).

В app/styles/main.scss используется очевидно sass.

Использование
=============

Установить nodejs https://nodejs.org/en/

Клонировать репозиторий или копировать архив

Установить gulp и bower
```
    npm install -g gulp gulp-cli bower
```

Запустить `gulp serve` для разработки.

Запустить `gulp build` когда работа закончена. После окончания работы файлы из папки dist залить как есть на хостинг.

Бекенд (для отправки почты) реализован отдельно https://github.com/matperez/shuba-backend.

