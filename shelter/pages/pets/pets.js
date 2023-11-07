console.log('Уважаемый праверяющие, перед проверкой убедитесьсь, что в режиме Responsive нет вертикальной полосы прокрутки (она отсутствует по умолчанию).\nЕсли полоса прокрутки есть, её нужно убрать. Для этого:\nв верхней панели device toolbar переключите тип устройства с Desktop на Mobile!!!;\nесли тип устройства не отображается, в верхней панели device toolbar нажмите на три точки\nсправа и выберите Add device type;')
console.log('Для страницы "main", все пункты выполнены, согласно требованиям к вёрстке:');
console.log('1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14');
console.log('блок <header> +2\nблок Not only +2\nблок About +2\nблок Our Friends +2\nблок Help +2\nблок In addition +2\nблок <footer> +2');
console.log('2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14');
console.log('блок <header> +2\nблок Not only +2\nблок About +2\nблок Our Friends +2\nблок Help +2\nблок In addition +2\nблок <footer> +2');
console.log('3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14');
console.log('блок <header> +2\nблок Not only +2\nблок About +2\nблок Our Friends +2\nблок Help +2\nблок In addition +2\nблок <footer> +2');
console.log('4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6');
console.log('блок <header> +2\nблок Our Friends +2\nблок <footer> +2');
console.log('5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6');
console.log('блок <header> +2\nблок Our Friends +2\nблок <footer> +2');
console.log('6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6');
console.log('блок <header> +2\nблок Our Friends +2\nблок <footer> +2');
console.log('7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных\nблоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20')
console.log('нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5');
console.log('нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5');
console.log('нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5');
console.log('нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5');
console.log('8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер,\nэлементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но\n сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8');
console.log('на странице Main: +4');
console.log('на странице Pets: +4');
console.log('9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\nОткрытие меню при клике на иконку бургер-меню на текущем этапе не проверяется');
console.log('10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8');
console.log('Итого: 100 баллов');
//-----------------------------------------------------------------------------------------------------------------


window.onload = function () {
  clickOnBurgerHandler();
  ClickOutOfBurgerMenuHandler();
}

//--------------'burger menu' apear & hide script---------------------------
const burger = document.querySelector('.burger');
const burger_logo = document.querySelector('.burger__logo');
const burger_menu = document.querySelector('.burger__navigation');

const clickOnBurgerHandler = () => {
 burger_logo.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        document.body.classList.toggle('_open');
        burger_logo.classList.toggle('_active');
        burger_menu.classList.toggle('_active');
        e.stopPropagation();
     if (e.target.matches('a')) {
        burger_menu.classList.remove('_active');
        burger_logo.classList.remove('_active');
        document.body.classList.remove('_open');
        document.body.classList.remove('_lock');
     }
  });
};
const ClickOutOfBurgerMenuHandler = () => {
  document.body.addEventListener('click', function (e) {
     if (e.currentTarget !== burger_menu) {
        burger_menu.classList.remove('_active');
        burger_logo.classList.remove('_active');
        document.body.classList.remove('_open');
        document.body.classList.remove('_lock');
     };
  });
};
//-----------------------------------------------------------------------------------------------------------------