# RandomUserApp

## Описание
RandomUserApp - это пример приложения на React Native, использующего Redux для управления состоянием. Приложение предоставляет функционал авторизации пользователя и отображения случайных данных о пользователях, полученных через API с ресурса [RANDOM USER GENERATOR](https://randomuser.me).

## Технологии

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

## Структура проекта

### `App.js`
Основной файл приложения, содержащий настройку навигации и создание Redux store.

### `screens/login.js`
Компонент для входа пользователя. Позволяет вводить логин и пароль, осуществляет проверку и переход к другому экрану.

### `screens/randomuser.js`
Компонент для отображения случайных данных о пользователях. Загружает данные с API и позволяет просматривать информацию о пользователях.

### `screens/reducers.js`
Файл с редьюсерами для управления состоянием приложения.

### `screens/actions.js`
Файл с действиями для работы с данными пользователя.

### `screens/store.js`
Файл с настройкой Redux store для управления состоянием приложения.

## Запуск проекта
1. Установите зависимости: `npm install -g npm`
2. Установите библиотеку компонентов React Native: `npx expo install react-native-gesture-handler`
3. Установите Redux: `npm install react-redux`
4. Запустите проект: `npx expo start`
5. Запустите приложение **Expo Go** на своем мобильном устройстве и отсканируйте **QR-код**

## Дополнительная информация
Для корректной работы приложения требуется подключение к интернету для загрузки данных о случайных пользователях.

## Авторы
- **Денис Свиридов** | [GitHub](https://github.com/MrFireDeN)
- **Сытников Олег** | [GitHub](https://github.com/OLEGAST212)
