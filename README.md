# VURM: Jest test package

Тестовый пакет для проекта `vurm-main` с выполнением задания:
- 10 юнит-тестов;
- 2 функциональных теста;
- документирование результата прогона.

## Структура

- `unit/explore-container.spec.js` - 6 юнит-тестов для `ExploreContainer.vue`;
- `unit/tabs-page.spec.js` - 4 юнит-теста для `TabsPage.vue`;
- `functional/tab-pages-functional.spec.js` - 2 функциональных теста для связки `router + tab pages`.

Итого: **12 тестов** (10 unit + 2 functional).

## Использованные техники тест-дизайна

- Эквивалентные классы (валидные/ожидаемые структуры шаблонов).
- Проверки граничных условий (количество вкладок строго 3, уникальность меток).
- Негативные проверки (контроль отсутствия дублирования, корректность маршрута по умолчанию).
- Проверки контрактов и интеграционных связей (роутинг <-> страницы вкладок).

## Запуск

```bash
npm install
npm test
```

Дополнительно:

```bash
npm run test:unit
npm run test:functional
```

## Результаты тестирования

Локальный прогон:

```text
PASS unit/tabs-page.spec.js
PASS unit/explore-container.spec.js
PASS functional/tab-pages-functional.spec.js

Test Suites: 3 passed, 3 total
Tests:       12 passed, 12 total
Snapshots:   0 total
```

## Скриншоты

Добавьте скриншоты после загрузки на GitHub:
- `docs/screenshots/jest-all.png` - результат `npm test`;
- `docs/screenshots/jest-unit.png` - результат `npm run test:unit`;
- `docs/screenshots/jest-functional.png` - результат `npm run test:functional`.

Можно вставить их в README так:

```markdown
![All tests](docs/screenshots/jest-all.png)
![Unit tests](docs/screenshots/jest-unit.png)
![Functional tests](docs/screenshots/jest-functional.png)
```
