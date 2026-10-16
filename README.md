# Bajar: лендинг

Next.js 16 + Tailwind CSS v4 + Motion. Сайт собирается в статический HTML и хостится где угодно.

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # статическая сборка в ./out
```

## Где что менять

| Что | Файл |
| --- | --- |
| Название, домен, почта, Telegram | `lib/site.ts` |
| Все тексты страницы | `lib/content.ts` |
| Цвета, радиусы, тени (светлая и тёмная тема) | `app/globals.css` |
| Фотографии | `public/img/*.webp` (исходники в `../design-src`) |
| Секции страницы и их порядок | `app/page.tsx`, `components/*` |

## Форма заявки

Без настройки форма работает в демо-режиме: показывает «Заявка отправлена», но никуда не отправляет данные.
Перед запуском укажите адрес, который принимает POST с JSON
(`{ name, company, phone, contractors, source }`):

```bash
NEXT_PUBLIC_LEAD_ENDPOINT=https://example.com/lead npm run build
```

## Деплой

Сайт публикуется на GitHub Pages автоматически: каждый пуш в ветку `main` запускает
`.github/workflows/deploy.yml`, который собирает сайт и выкладывает папку `out/`.
Ход сборки виден во вкладке **Actions** репозитория.

Пока домен не подключён, сайт открывается по адресу `https://<логин>.github.io/bajar-landing/`.
Чтобы картинки работали в подпапке, сборка получает `NEXT_PUBLIC_BASE_PATH=/bajar-landing`,
а файлы из `public/` в коде подключаются через `asset("/img/...")` из `lib/site.ts`.

Свой домен: **Settings → Pages → Custom domain** в репозитории, плюс DNS-запись у регистратора
(CNAME на `<логин>.github.io` для поддомена или A-записи GitHub для корневого домена).
После этого базовый путь станет пустым и сайт откроется в корне домена без правок кода.

Папку `out/` можно загрузить и на любой другой статический хостинг (Vercel, Netlify,
Cloudflare Pages, nginx).
