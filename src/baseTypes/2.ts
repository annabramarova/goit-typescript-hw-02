let anything:  unknown = -20;
anything = 'Text';
anything = {};

export { };

// Можливо також використати any
// Тип unknown у TypeScript багато в чому схожий на any, але він забезпечує більше безпеки під час роботи зі змінними. 
// Якщо ми спробуємо присвоїти значення змінної типу unknown іншій змінній з конкретним типом без явного приведення типів, TypeScript видасть помилку.