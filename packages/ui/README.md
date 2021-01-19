---
name: Plasma UI
route: /
---

# Библиотека компонентов `plasma-ui`

Реализация компонент для создания смартаппов.

<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/1813468/98609687-ea20fc80-22fe-11eb-8d84-cd26385f01ed.png" alt="plasma-ui" />
</p>

## Использование

Компоненты реализованы на [typescript](https://www.typescriptlang.org/) с помощью [react](https://reactjs.org/) и [styled-components](https://styled-components.com/);

Использование данного пакета предполагает использование `react` & `react-dom`;
Использование `styled-components` на проект не обязательно, также как и использование `typescript`.
Но для того чтобы комопненты работали `styled-components` необходимо установить.

### Установка пакета

```bash
$ npm install --save react react-dom
$ npm install --save styled-components
$ npm install --save @sberdevices/ui@rc @sberdevices/plasma-tokens@rc @sberdevices/plasma-icons@rc
```

### Использование компонентов

Все компоненты доступны из корня библиотеки
Пример:

```jsx
import { Button } from '@sberdevices/ui';

const App = () => {
    return <Button>Hello Plasma</Button>;
};
```

Библиотека предоставляет вспомогательную функциональность - `utils`, `mixins`, `hocs`, доступную в соответствующих директориях  
Пример импорта:

```jsx
import { animatedScrollToX } from '@sberdevices/ui/utils';
import { addFocus } from '@sberdevices/ui/mixins';
import { withAutoFocus } from '@sberdevices/ui/hocs';
```

## Полезные ссылки:

Витрина с компонентами [storybook](https://rc--5f96ec813d800900227e3b93.chromatic.com)

Документация о каждом компоненте: http://plasma.sberdevices.ru/
