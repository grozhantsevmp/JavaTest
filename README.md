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

<img width="370" height="221" alt="{B95B85E7-CDE6-4AA4-9C0B-5D05D89A7A61}" src="https://github.com/user-attachments/assets/36ab3749-3556-41c3-86d0-b9a50b43167b" />
<img width="397" height="200" alt="{ADB6B11C-BCE3-4400-A1EB-7D4CB02CFAB2}" src="https://github.com/user-attachments/assets/188bb7b8-284a-4457-a853-baef95b9bd73" />
<img width="594" height="237" alt="{118B02E1-6623-48F1-9352-E6F578C581D4}" src="https://github.com/user-attachments/assets/97115e11-781e-49d0-ac4c-f48eeb5752eb" />

