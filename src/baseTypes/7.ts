/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
 Monday = 'MONDAY',
 Tuesday = 'TUESDAY',
 Wednesday = 'WEDNESDAY',
 Thursday = 'THURSDAY',
 Friday = 'FRIDAY',
 Saturday = 'SATURDAY',
 Sunday = 'SUNDAY',
}

function isWeekend(day: WeekDay): boolean {
  return day == WeekDay.Saturday || day == WeekDay.Sunday;
}