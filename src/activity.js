// Первые 3 пункта
/*
// Экспортируем функцию getRandomActivity, которая получает случайную активность с сервера
export function getRandomActivity() {
    // Выполняем запрос к API, чтобы получить случайную активность
    fetch('https://www.boredapi.com/api/activity/')
        // Обрабатываем ответ сервера как JSON
        .then(response => response.json())
        // Обновляем HTML с полученной активностью
        .then(data => {
            updateActivity(data.activity);
        })
        // Если произошла ошибка во время запроса, выводим сообщение об ошибке на страницу
        .catch(error => {
            const activityElement = document.getElementById('activity');
            activityElement.textContent = "К сожалению, произошла ошибка";
        });
}

// Функция для обновления HTML с полученной активностью
function updateActivity(activityText) {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activityText;
}
*/


// 4 и 5 пункты
/*
// Экспортируем асинхронную функцию getRandomActivity, которая получает случайную активность с сервера
export async function getRandomActivity() {
    try {
        // Отправляем запрос к API, чтобы получить случайную активность
        const response = await fetch('https://www.boredapi.com/api/activity/');
        // Парсим ответ как JSON
        const data = await response.json();
        // Обновляем HTML с полученной активностью
        updateActivity(data.activity);
    } catch (error) {
        // Если произошла ошибка во время запроса, выводим сообщение об ошибке на страницу
        const activityElement = document.getElementById('activity');
        activityElement.textContent = "К сожалению, произошла ошибка";
    } finally {
        // Устанавливаем таймер для выполнения функции getRandomActivity каждые 5 секунд
        setTimeout(getRandomActivity, 5000);
    }
}
*/


//6 дополнительное задание

// Экспортируем асинхронную функцию getRandomActivity, которая получает случайную активность с сервера
export async function getRandomActivity() {
    try {
        // Отправляем запрос к API, чтобы получить случайную активность
        const response = await fetch('https://www.boredapi.com/api/activity/');
        // Парсим ответ как JSON
        const data = await response.json();
        // Возвращаем активность
        return data.activity;
    } catch (error) {
        // Если произошла ошибка во время запроса, возвращаем сообщение об ошибке
        return "К сожалению, произошла ошибка";
    }
}

// Функция для обновления HTML с полученной активностью
function updateActivity(activityText) {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activityText;
}

// Функция для отображения случайной активности
async function displayRandomActivity() {
    // Получаем случайную активность
    const activity = await getRandomActivity();
    // Обновляем HTML с полученной активностью
    updateActivity(activity);
}

// Показываем первоначальную активность
displayRandomActivity(); 

// Устанавливаем интервал для обновления активности каждые 5 секунд
setInterval(displayRandomActivity, 5000);

