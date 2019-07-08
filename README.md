## Задача:

**Создать интерактивную портретную рекламу (fullscreen)** 

## Структура проекта

Общая структура проекта представлена ниже:

```text
.
├── dist                 - папка, куда будет собираться сайт
├─┬ src                  - папка с исходниками сайта
│ ├── fonts              - папка со шрифтами
│ ├─┬ html               - папка заготовок HTML страниц
│ │ ├── includes         - папка с встраиваемыми шаблонами (header, footer)
│ │ └── views            - папка с самими HTML страницами
│ ├── img                - папка с общими изображениями (логотип, иконки и др.)
│ ├── js                 - папка с JavaScript файлами
│ └── scss               - папка с SСSS файлами
├── package.json         - файл настроек Node.js
└── webpack.config.js    - файл настроек Webpack
``` 

## Установка зависимостей

**npm install** 

## Сборка

**npm run dev** произойдет сборка проекта (css и html файлы потом также будут собираться этой командой), и в папке `/dist/js` появятся файлы `bundle.js` и `bundle.js.map`.

**npm run build** также произойдет сборка проекта, но уже итоговая (с оптимизацией, максимальной минимизацией файла), которую можно выкладывать на хостинг.

**npm run watch** запускается режим автоматического просмотра изменений файлов проекта с автоматическим допостроением измененных файлов.

**npm run start** запустится локальный сервер, который запустит html страницу и также будет отслеживать изменения в файлах.

