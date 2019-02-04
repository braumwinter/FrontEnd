/* проверка имени */
function NameRequest(){
    var isName = prompt('Введите Ваше имя', '');

    /* проверка на пробельные символы */
    isName = isName.trim();

    if(isName == '' || isName == null){
        alert('вы ничего не ввели');
    }else{

        /* проверка на цифры */
        var reg = /[0-9]/;
        if(isName.search(reg) == -1){

            /* разделить на массив, перевернуть, склеить в строку */
            alert(isName.split('').reverse().join(''));
        }else{

            /* преобразовтаь всё к нижнему регистру */
            var ChangeName = isName.toLowerCase();
            var newName = '';

            /* формирование новой строки с чередующимся регистром */
            for(var i=0; i<ChangeName.length; i++){
                if(i%2){
                    newName += isName[i].toUpperCase();
                }else{
                    newName += isName[i].toLowerCase();
                }
            }
            alert(newName);
        }
    }
}

/* смена стиля страницы */
function ChangeWindow(){
    
    /* очистка body */
    document.body.innerHTML = '';
    document.body.id = 'secondBody';

    /* создание квадратов*/
    var firstSquare = document.createElement('div');
    firstSquare.id = 'firstSquareCss';
    document.body.appendChild(firstSquare);

    var secondSquare = document.createElement('div');
    secondSquare.id = 'secondSquareCss';
    firstSquare.appendChild(secondSquare);

    var thirdSquare = document.createElement('div');
    thirdSquare.id = 'thirdSquareCss';
    secondSquare.appendChild(thirdSquare);
}