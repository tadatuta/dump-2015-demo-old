# Запуск проекта

Зайти в консоли в папку `/riot`.

Установить зависимости:

    npm install
    npm install gulp -g

Запустить сервер и автоматическую пересборку:

    gulp watch

Чтобы остановить сервер – в консоли нажать `Ctrl+C`.

# Структура проекта

    blocks/ – папка со всеми компонентами
      component/ – каждый компонент лежит в своей подпапке
      component.css – CSS компонента
      component.tag – файл который при сборке сокомпилируется в JS-код компонента.
      pages/ – папка с кодом отдельных страниц
        *.html – шаблон отдельной страницы
      gulpfile.js – настройки gulp для сборки css, js и запуска сервера.
      index.html – страница, которая показывается при запуске сервера и дает ссылки на отдельные страницы.

Данные для всех демо лежат в корне репозитория в папке `data`.