# Modal Helper
Это шаблон для создания модальных окон.

## Начать использование
Загрузить класс `ModalHelper.ts`.
Из `index.html` взять полностью див с классом `modal-helper` и перенести в проект.
Из `style.scss` взять стили для класса `modal-helper` и перенести в проект.

В рабочем JS-файле объявить экземпляр:
``` typesript
const mhElement: HTMLElement | null = document.querySelector('.modal-helper');
const mh = new ModalHelper(mhElement);
mh.hide(); // Пример вызова функции
```

### Доступные функции
- `.show(тип_анимации, затемнение)` - показать диалог.
  - Типы анимации:
    - Строковые: `"fade"`, `"top"`, `"bottom"`, `"left"`, `"right"`, `"zoom"`, `"false"` 
    - Логические: `false` - нет анимации
  - Затемнение: `true` или `false`
- `hide(тип_анимации)` - скрыть диалог.
  - Типы анимации:
    - Строковые: `"fade"`, `"top"`, `"bottom"`, `"left"`, `"right"`, `"zoom"`, `"false"` 
    - Логические: `false` - нет анимации

## Демо
Github Pages: https://andrenazar.github.io/modal-helper/
