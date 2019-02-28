/* константы */
var STRINGULTRABOOK = 'ультрабук';
var STRINGSERVER = 'вычислительный сервер';
var STRINGHZ = 'Hz';
var STRINGINCH = '"';
var VALUEULTRABOOK = 'ultrabook';
var VALUESERVER = 'server';

function Computer(_nameComputer, _numberKernel, _typeCPU, _clockFrequency,
    _typeRAM, _sizeRAM) {
    // название копмьютера
    this.nameComputer = _nameComputer;
    // число ядер
    this.numberKernel = _numberKernel;
    // тип процессора
    this.typeCPU = _typeCPU;
    // тактовая частота
    this.clockFrequency = _clockFrequency;
    // тип ОЗУ
    this.typeRAM = _typeRAM;
    // количество ОЗУ
    this.sizeRAM = _sizeRAM;

    /* сеттеры */
    this.setNameComputer = function (_nameComputer) {
        this.nameComputer = _nameComputer;
    };
    this.setNumberKernel = function (_numberKernel) {
        this.numberKernel = _numberKernel;
    };
    this.setTypeCPU = function (_typeCPU) {
        this.typeCPU = _typeCPU;
    };
    this.setClockFrequency = function (_clockFrequency) {
        this.clockFrequency = _clockFrequency;
    };
    this.setTypeRAM = function (_typeRAM) {
        this.typeRAM = _typeRAM;
    };
    this.setSizeRAM = function (_sizeRAM) {
        this.sizeRAM = _sizeRAM;
    };

    /* геттеры */
    this.getNameComputer = function () {
        return this.nameComputer;
    };
    this.getNumberKernel = function () {
        return this.numberKernel;
    };
    this.getTypeCPU = function () {
        return this.typeCPU;
    };
    this.getClockFrequency = function () {
        return this.clockFrequency + STRINGHZ;
    };
    this.getTypeRAM = function () {
        return this.typeRAM;
    };
    this.getSizeRAM = function () {
        return this.sizeRAM;
    };
}

function Ultrabook(_nameComputer, _numberKernel, _typeCPU, _clockFrequency,
    _typeRAM, _sizeRAM, _videoCard, _typeHardDrive, _sizeHardDrive,
    _screenDiagonal, _screenResolution) {
    // наследование
    Computer.apply(this, arguments);
    // тип компьютера
    this.typeComputer = STRINGULTRABOOK;
    // видеокарта
    this.videoCard = _videoCard;
    // тип жёсткого диска
    this.typeHardDrive = _typeHardDrive;
    // количество памяти
    this.sizeHardDrive = _sizeHardDrive;
    // диагональ экрана
    this.screenDiagonal = _screenDiagonal;
    // разрешение экрана
    this.screenResolution = _screenResolution;

    this.setTypeComputer = function () {
        this.typeComputer = STRINGULTRABOOK;
    };
    this.setVideoCard = function (_videoCard) {
        this.videoCard = _videoCard;
    };
    this.setTypeHardDrive = function (_typeHardDrive) {
        this.typeHardDrive = _typeHardDrive;
    };
    this.setSizeHardDrive = function (_sizeHardDrive) {
        this.sizeHardDrive = _sizeHardDrive;
    };
    this.setScreenDiagonal = function (_screenDiagonal) {
        this.screenDiagonal = _screenDiagonal;
    };
    this.setScreenResolution = function (_screenResolution) {
        this.screenResolution = _screenResolution;
    };

    this.getTypeComputer = function () {
        return this.typeComputer;
    };
    this.getVideoCard = function () {
        return this.videoCard;
    };
    this.getTypeHardDrive = function () {
        return this.typeHardDrive;
    };
    this.getSizeHardDrive = function () {
        return this.sizeHardDrive;
    };
    this.getScreenDiagonal = function () {
        return this.screenDiagonal + STRINGINCH;
    };
    this.getScreenResolution = function () {
        return this.screenResolution;
    };
}

function Server(_nameComputer, _numberKernel, _typeCPU, _clockFrequency,
    _typeRAM, _sizeRAM, _quantitySerialPort,
    _maxMemory, _isAdditionalRAM) {
    // наследование
    Computer.apply(this, arguments);
    // тип компьютера
    this.typeComputer = STRINGSERVER;
    // общее количество портов ввода-вывода
    this.quantitySerialPort = _quantitySerialPort;
    // максимальный поддерживаемый объём памяти 
    this.maxMemory = _maxMemory;
    // дополнительные слоты под оперативную память
    this.isAdditionalRAM = _isAdditionalRAM;

    this.setTypeComputer = function () {
        this.typeComputer = STRINGSERVER;
    };
    this.setQuantitySerialPort = function () {
        this.quantitySerialPort = _quantitySerialPort;
    };
    this.setMaxMemory = function () {
        this.maxMemory = _maxMemory;
    };
    this.setIsAdditionalRAM = function () {
        this.isAdditionalRAM = _isAdditionalRAM;
    };

    this.getTypeComputer = function () {
        return this.typeComputer;
    };
    this.getQuantitySerialPort = function () {
        return this.quantitySerialPort;
    };
    this.getMaxMemory = function () {
        return this.maxMemory;
    };
    this.getIsAdditionalRAM = function () {
        return this.isAdditionalRAM;
    };
}

/* ====================================формирование страницы================================== */
/* добавить данные в таблицу Ультрабуков */
function AddUltrabook(Obj) {
    // находим таблицу
    var table = document.getElementById('tableUltrabookHTML');

    // добавляем строчку в конец таблицы
    var newRow = table.insertRow(-1);

    // добавляем ячейки и заполняем их
    newRow.insertCell(0).innerHTML = Obj.getNameComputer();
    newRow.insertCell(1).innerHTML = Obj.getTypeCPU() + ' ' + Obj.getNumberKernel() + ' ' +
    Obj.getClockFrequency();
    newRow.insertCell(2).innerHTML = Obj.getTypeHardDrive() + ' ' + Obj.getSizeHardDrive();
    newRow.insertCell(3).innerHTML = Obj.getTypeRAM() + ' ' + Obj.getSizeRAM();
    newRow.insertCell(4).innerHTML = Obj.getVideoCard();
    newRow.insertCell(5).innerHTML = Obj.getScreenDiagonal() + ' ' + Obj.getScreenResolution();

    // кнопка подробной информации
    var newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-sm btn-dark';
    newButton.innerHTML = 'подробная<br>информация';
    newButton.onclick = function () {
        DetailedInformation(Obj.getNameComputer(), 'tableUltrabookHTML');
    };
    newRow.insertCell(6).appendChild(newButton);

    // кнопка редактировать
    newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-sm btn-dark btn-block';
    newButton.innerHTML = 'редактировать';
    newButton.onclick = function () {
        Edit(Obj.getNameComputer(), 'tableUltrabookHTML');
    };
    var newCell = newRow.insertCell(7);
    newCell.appendChild(newButton);

    // кнопка удалить
    newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-sm btn-outline-dark btn-block';
    newButton.innerHTML = 'удалить';
    newButton.onclick = function () {
        Remove(Obj.getNameComputer(), 'tableUltrabookHTML', true);
    };
    newCell.appendChild(newButton);
}

/* добавить данные в таблицу Серверов */
function AddServer(Obj) {
    // находим таблицу
    var table = document.getElementById('tableServerHTML');

    // добавляем строчку в конец таблицы
    var newRow = table.insertRow(-1);

    // добавляем ячейки и заполняем их
    newRow.insertCell(0).innerHTML = Obj.getNameComputer();
    newRow.insertCell(1).innerHTML = Obj.getTypeCPU() + ' ' + Obj.getNumberKernel() + ' ' +
    Obj.getClockFrequency();
    newRow.insertCell(2).innerHTML = Obj.getTypeRAM() + ' ' + Obj.getSizeRAM();
    newRow.insertCell(3).innerHTML = Obj.getQuantitySerialPort();
    newRow.insertCell(4).innerHTML = Obj.getMaxMemory();
    newRow.insertCell(5).innerHTML = Obj.getIsAdditionalRAM();

    // кнопка подробной информации
    var newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-sm btn-dark';
    newButton.innerHTML = 'подробная<br>информация';
    newButton.onclick = function () {
        DetailedInformation(Obj.getNameComputer(), 'tableServerHTML');
    };
    newRow.insertCell(6).appendChild(newButton);

    // кнопка редактировать
    newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-sm btn-dark btn-block';
    newButton.innerHTML = 'редактировать';
    newButton.onclick = function () {
        Edit(Obj.getNameComputer(), 'tableServerHTML');
    };
    var newCell = newRow.insertCell(7);
    newCell.appendChild(newButton);

    // кнопка удалить
    newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-sm btn-outline-dark btn-block';
    newButton.innerHTML = 'удалить';
    newButton.onclick = function () {
        Remove(Obj.getNameComputer(), 'tableServerHTML', true);
    };
    newCell.appendChild(newButton);
}

/* создание таблицы Ультрабуков */
function CreateTableUltrabook() {
    for (var i = 0; i < TableUltrabook.length; i++) {
        AddUltrabook(TableUltrabook[i]);
    }
}

/* создание таблицы Серверов */
function CreateTableServer() {
    for (var i = 0; i < TableServer.length; i++) {
        AddServer(TableServer[i]);
    }
}

/* ====================================обработка событий================================== */

// при двойном клике на таблицу
$(function () {
    $("table tr").dblclick(function () {

        var rowIndex = this.rowIndex;

        // обрабатываем, если это не шапка
        if (rowIndex != 0) {

            var idTable = $(this).parent().parent().attr('id');
            var nameObj = this.cells[0].innerHTML;

            // затемнение экрана
            var darkLayer = document.createElement('div');
            darkLayer.id = 'shadow';
            document.body.appendChild(darkLayer);

            // находим окно свойств
            var modalWin = document.getElementById('propertyWindow');
            modalWin.style.display = 'block';

            document.getElementById('detailedInformationButton').onclick = function () {
                DetailedInformation(nameObj, idTable);
            };

            document.getElementById('editButton').onclick = function () {
                Edit(nameObj, idTable);
            };

            // при клике на фон - фон исчезает и окно становится невидимым
            darkLayer.onclick = function () {
                darkLayer.parentNode.removeChild(darkLayer);
                modalWin.style.display = 'none';
            };
        }
    });
});

/* при клике на окошке свойств, окошко и фон исчезают */
$(function () {
    $("#propertyWindow button").click(function () {
        var darkLayer = document.getElementById('shadow');
        darkLayer.parentNode.removeChild(darkLayer);
        var modalWin = document.getElementById('propertyWindow');
        modalWin.style.display = 'none';
    });
});

/* подробная информация */
function DetailedInformation(TnameObj, TidTable) {
    // затемнение
    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    // окошко
    var modalWin = document.getElementById('detailedDiv');
    modalWin.style.display = 'block';

    // таблица и искомый объект
    var table = document.getElementById('detailedTable');
    var object;

    // находим объект в базе
    if (TidTable == 'tableUltrabookHTML') {
        for (var i = 0; i < TableUltrabook.length; i++) {
            if (TableUltrabook[i].getNameComputer() == TnameObj) {
                object = TableUltrabook[i];
            }
        }
    } else if (TidTable == 'tableServerHTML') {
        for (var j = 0; j < TableServer.length; j++) {
            if (TableServer[j].getNameComputer() == TnameObj) {
                object = TableServer[j];
            }
        }
    } else {
        alert('не получили имя');
    }

    table.rows[0].cells[1].innerHTML = object.getNameComputer();
    table.rows[1].cells[1].innerHTML = object.getTypeComputer();
    table.rows[2].cells[1].innerHTML = object.getNumberKernel();
    table.rows[3].cells[1].innerHTML = object.getTypeCPU();
    table.rows[4].cells[1].innerHTML = object.getClockFrequency();
    table.rows[5].cells[1].innerHTML = object.getTypeRAM();
    table.rows[6].cells[1].innerHTML = object.getSizeRAM();

    // добавляем новые строки в зависимости от типа компьютера
    var newRow;

    if (TidTable == 'tableUltrabookHTML') {
        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'видеокарта';
        newRow.insertCell(1).innerHTML = object.getVideoCard();

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'тип жёсткого диска';
        newRow.insertCell(1).innerHTML = object.getTypeHardDrive();

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'количество памяти';
        newRow.insertCell(1).innerHTML = object.getSizeHardDrive();

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'диагональ экрана';
        newRow.insertCell(1).innerHTML = object.getScreenDiagonal();

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'разрешение экрана';
        newRow.insertCell(1).innerHTML = object.getScreenResolution();
    } else {

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'общее количество портов ввода-вывода';
        newRow.insertCell(1).innerHTML = object.getQuantitySerialPort();

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'максимальный поддерживаемый объём памяти ';
        newRow.insertCell(1).innerHTML = object.getMaxMemory();

        newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = 'дополнительные слоты под оперативную память';
        newRow.insertCell(1).innerHTML = object.getIsAdditionalRAM();
    }

    // при клике на фо или кнопку
    darkLayer.onclick = function () {
        DelWin(TidTable);
    };
    document.getElementById('thnButton').onclick = function () {
        DelWin(TidTable);
    };
}

/* при закрытии окна, удаляем лишние строки */
function DelWin(TidTable) {
    // удаляем фон
    var darkLayer = document.getElementById('shadow');
    darkLayer.parentNode.removeChild(darkLayer);

    // скрываем окно
    var modalWin = document.getElementById('detailedDiv');
    modalWin.style.display = 'none';

    var table = document.getElementById('detailedTable');

    // удаляем лишние строки
    if (TidTable == 'tableUltrabookHTML') {
        for (var i = 0; i < 5; i++) {
            table.deleteRow(-1);
        }
    } else {
        for (var j = 0; j < 3; j++) {
            table.deleteRow(-1);
        }
    }
}

/* редактировать */
function Edit(TnameObj, TidTable) {
    // слой затемнения
    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    // окно создания/редатирования
    var modalWin = document.getElementById('editTable');
    modalWin.style.display = 'block';

    // временный объект
    var object;

    // название кнопки
    document.getElementById('submitButton').innerHTML = 'редактировать';

    // нужные строки в зависимости от типа компьютера
    if (TidTable == 'tableUltrabookHTML') {
        for (var i = 0; i < TableUltrabook.length; i++) {
            if (TableUltrabook[i].getNameComputer() == TnameObj) {
                object = TableUltrabook[i];
                indexRow = i;
            }
        }
        document.getElementById('editServer').style.display = 'none';
        document.getElementById('editUltrabook').style.display = 'block';

    } else if (TidTable == 'tableServerHTML') {
        for (var j = 0; j < TableServer.length; j++) {
            if (TableServer[j].getNameComputer() == TnameObj) {
                object = TableServer[j];
                indexRow = j;
            }
        }
        document.getElementById('editServer').style.display = 'block';
        document.getElementById('editUltrabook').style.display = 'none';

    } else {
        alert('не получили имя ');
    }

    // заполнение полей основной информации
    document.getElementById('nameComputerTable').value = object.getNameComputer();
    document.getElementById('numberKernelTable').value = object.getNumberKernel();
    document.getElementById('typeCPUTable').value = object.getTypeCPU();
    document.getElementById('clockFrequencyTable').value = object.getClockFrequency().replace(STRINGHZ, '');
    document.getElementById('typeRAMTable').value = object.getTypeRAM();
    document.getElementById('sizeRAMTable').value = object.getSizeRAM();

    // остальная информация в зависимости от типа
    if (TidTable == 'tableUltrabookHTML') {
        document.getElementById('typeComputerTable').value = VALUEULTRABOOK;
        document.getElementById('videoCardTable').value = object.getVideoCard();
        document.getElementById('typeHardDriveTable').value = object.getTypeHardDrive();
        document.getElementById('sizeHardDriveTable').value = object.getSizeHardDrive();
        document.getElementById('screenDiagonalTable').value = object.getScreenDiagonal().replace(STRINGINCH, '');
        document.getElementById('screenResolutionTable').value = object.getScreenResolution();

    } else if (TidTable == 'tableServerHTML') {
        document.getElementById('typeComputerTable').value = VALUESERVER;
        document.getElementById('quantitySerialPortTable').value = object.getQuantitySerialPort();
        document.getElementById('maxMemoryTable').value = object.getMaxMemory();
        document.getElementById('isAdditionalRAMTable').value = object.getIsAdditionalRAM();

    } else {
        alert('не получили имя ');
    }

    // клик на кнопке редактирования
    document.getElementById('submitButton').onclick = function () {
        InputCheck(TnameObj, TidTable, false);
    };

    // кнопка отмены
    document.getElementById('cancelButton').onclick = function () {
        closeEditWindow();
    };

    // клик на фоне
    darkLayer.onclick = function () {
        closeEditWindow();
    };
}

/* удалить */
function Remove(TnameObj, TidTable, flag) {
    // удалить при клике на кнопку "удалить" или пустая таблица
    var isDelete = false;
    if (flag) {
        isDelete = confirm('Вы точно хотите удалить данные?');
    } else {
        isDelete = true;
    }

    // удаление
    if (isDelete) {
        // удаляем из базы данных
        if (TidTable == 'tableUltrabookHTML') {
            for (var d = 0; d < TableUltrabook.length; d++) {
                if (TableUltrabook[d].getNameComputer() == TnameObj) {
                    TableUltrabook.splice(d, 1);
                }
            }
        } else {
            for (var e = 0; e < TableServer.length; e++) {
                if (TableServer[e].getNameComputer() == TnameObj) {
                    TableServer.splice(e, 1);
                }
            }
        }
        // находим таблицу
        var table = document.getElementById(TidTable);

        // находим строчку, удаляем, выходим
        for (var i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[0].innerHTML == TnameObj) {
                table.deleteRow(i);
                return;
            }
        }
    }
}

/* фунцция, отвечающая за смену типа компьютера */
function Change(selectObject) {
    // значение select'а
    var value = selectObject.value;

    // подтверждение смены типа
    if (confirm("вы действительно хотите сменить тип компьютера?")) {
        if (value == VALUEULTRABOOK) {
            document.getElementById('editServer').style.display = 'none';
            document.getElementById('editUltrabook').style.display = 'block';
        } else {
            document.getElementById('editServer').style.display = 'block';
            document.getElementById('editUltrabook').style.display = 'none';
        }
    }
}

/* проверка ввода */
function InputCheck(TnameObj, TidTable, flagCreate) {
    // рабочие переменные
    var inputSelect = document.getElementById('typeComputerTable').value;

    var inputNameComputer = document.getElementById('nameComputerTable').value.trim();
    var inputNumberKernel = document.getElementById('numberKernelTable').value.trim();
    var inputTypeCPU = document.getElementById('typeCPUTable').value.trim();
    var inputClockFrequency = document.getElementById('clockFrequencyTable').value.trim();
    var inputTypeRAM = document.getElementById('typeRAMTable').value.trim();
    var inputSizeRAM = document.getElementById('sizeRAMTable').value.trim();

    var inputVideoCard = document.getElementById('videoCardTable').value.trim();
    var inputTypeHardDrive = document.getElementById('typeHardDriveTable').value.trim();
    var inputSizeHardDrive = document.getElementById('sizeHardDriveTable').value.trim();
    var inputScreenDiagonal = document.getElementById('screenDiagonalTable').value.trim();
    var inputScreenResolution = document.getElementById('screenResolutionTable').value.trim();

    var inputQuantitySerial = document.getElementById('quantitySerialPortTable').value.trim();
    var inputMaxMemory = document.getElementById('maxMemoryTable').value.trim();
    var inputIsAdditionalRAM = document.getElementById('isAdditionalRAMTable').value.trim();

    /* проверка. в начале для ультрабуков, потом для серверов */
    if (inputSelect == VALUEULTRABOOK) {
        // если все поля пусты
        if (IsEmpty(inputNameComputer) && IsEmpty(inputNumberKernel) && IsEmpty(inputTypeCPU) &&
            IsEmpty(inputClockFrequency) && IsEmpty(inputTypeRAM) && IsEmpty(inputSizeRAM) &&
            IsEmpty(inputVideoCard) && IsEmpty(inputTypeHardDrive) && IsEmpty(inputSizeHardDrive) &&
            IsEmpty(inputScreenDiagonal) && IsEmpty(inputScreenResolution)) {
            // для создания
            if (flagCreate) {
                if (confirm('Вы ничего не ввели. Выйти из формы создания?')) {
                    closeEditWindow();
                }
            } else {
                // для редактирования
                if (confirm('Вы точно хотите удалить данные?')) {
                    Remove(TnameObj, TidTable, false);
                    closeEditWindow();
                } else {
                    Edit(TnameObj, TidTable);
                    closeEditWindow();
                }
            }
            // если не все поля заполнены
        } else if (IsEmpty(inputNameComputer) || IsEmpty(inputNumberKernel) || IsEmpty(inputTypeCPU) ||
            IsEmpty(inputClockFrequency) || IsEmpty(inputTypeRAM) || IsEmpty(inputSizeRAM) ||
            IsEmpty(inputVideoCard) || IsEmpty(inputTypeHardDrive) || IsEmpty(inputSizeHardDrive) ||
            IsEmpty(inputScreenDiagonal) || IsEmpty(inputScreenResolution)) {
            alert('заполните все поля!');

        } else {
            // добавить новые данные
            if (flagCreate) {
                var tempUlt = new Ultrabook(inputNameComputer, inputNumberKernel, inputTypeCPU,
                    inputClockFrequency, inputTypeRAM, inputSizeRAM, inputVideoCard, inputTypeHardDrive,
                    inputSizeHardDrive, inputScreenDiagonal, inputScreenResolution);

                TableUltrabook.push(tempUlt);
                AddUltrabook(tempUlt);
                closeEditWindow();
            } else {
                // отредактировать
                // если тип компьютера остался прежним
                if ((inputSelect == VALUEULTRABOOK) && (TidTable == 'tableUltrabookHTML')) {
                    // находим объект под старым именем в базе данных
                    for (var i = 0; i < TableUltrabook.length; i++) {
                        if (TableUltrabook[i].getNameComputer() == TnameObj) {
                            TableUltrabook[i].setNameComputer(inputNameComputer);
                            TableUltrabook[i].setNumberKernel(inputNumberKernel);
                            TableUltrabook[i].setTypeCPU(inputTypeCPU);
                            TableUltrabook[i].setClockFrequency(inputClockFrequency);
                            TableUltrabook[i].setTypeRAM(inputTypeRAM);
                            TableUltrabook[i].setSizeRAM(inputSizeRAM);
                            TableUltrabook[i].setVideoCard(inputVideoCard);
                            TableUltrabook[i].setTypeHardDrive(inputTypeHardDrive);
                            TableUltrabook[i].setSizeHardDrive(inputSizeHardDrive);
                            TableUltrabook[i].setScreenDiagonal(inputScreenDiagonal);
                            TableUltrabook[i].setScreenResolution(inputScreenResolution);
                        }
                    }

                    // находим таблицу
                    var table = document.getElementById(TidTable);

                    // находим строчку, заполняем новыми данными
                    for (var a = 1; a < table.rows.length; a++) {
                        if (table.rows[a].cells[0].innerHTML == TnameObj) {
                            table.rows[a].cells[0].innerHTML = inputNameComputer;
                            table.rows[a].cells[1].innerHTML = inputTypeCPU + ' ' + inputNumberKernel + ' ' + inputClockFrequency;
                            table.rows[a].cells[2].innerHTML = inputTypeHardDrive + ' ' + inputSizeHardDrive;
                            table.rows[a].cells[3].innerHTML = inputTypeRAM + ' ' + inputSizeRAM;
                            table.rows[a].cells[4].innerHTML = inputVideoCard;
                            table.rows[a].cells[5].innerHTML = inputScreenDiagonal + ' ' + inputScreenResolution;
                        }
                    }
                } else {
                    // это пришло с таблицы серверов. если с сервера поменяли на ультрабук
                    // создаем новый объект для ультрабука
                    var newUlt = new Ultrabook(inputNameComputer, inputNumberKernel, inputTypeCPU,
                        inputClockFrequency, inputTypeRAM, inputSizeRAM, inputVideoCard, inputTypeHardDrive,
                        inputSizeHardDrive, inputScreenDiagonal, inputScreenResolution);

                    // добавляем в базу и в таблицу
                    TableUltrabook.push(newUlt);
                    AddUltrabook(newUlt);

                    // удаляем из базы и таблицы серверов под старым именем
                    Remove(TnameObj, 'tableServerHTML', false);
                }
                closeEditWindow();
            }
        }
    } else {
        /* проверка для серверов */
        // если все поля пусты
        if (IsEmpty(inputNameComputer) && IsEmpty(inputNumberKernel) && IsEmpty(inputTypeCPU) &&
            IsEmpty(inputClockFrequency) && IsEmpty(inputTypeRAM) && IsEmpty(inputSizeRAM) &&
            IsEmpty(inputQuantitySerial) && IsEmpty(inputMaxMemory) && IsEmpty(inputIsAdditionalRAM)) {
            // для создания
            if (flagCreate) {
                if (confirm('Вы ничего не ввели. Выйти из формы создания?')) {
                    closeEditWindow();
                }
            } else {
                // для редактирования
                if (confirm('Вы точно хотите удалить данные?')) {
                    Remove(TnameObj, TidTable, false);
                    closeEditWindow();
                } else {
                    Edit(TnameObj, TidTable);
                    closeEditWindow();
                }
            }
            // если не все заполнено
        } else if (IsEmpty(inputNameComputer) || IsEmpty(inputNumberKernel) || IsEmpty(inputTypeCPU) ||
            IsEmpty(inputClockFrequency) || IsEmpty(inputTypeRAM) || IsEmpty(inputSizeRAM) ||
            IsEmpty(inputQuantitySerial) || IsEmpty(inputMaxMemory) || IsEmpty(inputIsAdditionalRAM)) {
            alert('заполните все поля!');
        } else {
            // создать новую запись
            if (flagCreate) {
                var tempServ = new Server(inputNameComputer, inputNumberKernel, inputTypeCPU,
                    inputClockFrequency, inputTypeRAM, inputSizeRAM,
                    inputQuantitySerial, inputMaxMemory, inputIsAdditionalRAM);

                TableServer.push(tempServ);
                AddServer(tempServ);
                closeEditWindow();
            } else {
                // отредактировать
                // если тип компьютера остался прежним
                if ((inputSelect == VALUESERVER) && (TidTable == 'tableServerHTML')) {
                    // находим объект под старым именем в базе данных
                    for (var b = 0; b < TableServer.length; b++) {
                        if (TableServer[b].getNameComputer() == TnameObj) {
                            TableServer[b].setNameComputer(inputNameComputer);
                            TableServer[b].setNumberKernel(inputNumberKernel);
                            TableServer[b].setTypeCPU(inputTypeCPU);
                            TableServer[b].setClockFrequency(inputClockFrequency);
                            TableServer[b].setTypeRAM(inputTypeRAM);
                            TableServer[b].setSizeRAM(inputSizeRAM);
                            TableServer[b].setQuantitySerialPort(inputQuantitySerial);
                            TableServer[b].setMaxMemory(inputMaxMemory);
                            TableServer[b].setIsAdditionalRAM(inputIsAdditionalRAM);
                        }
                    }

                    // находим таблицу
                    var tableS = document.getElementById(TidTable);

                    // находим строчку, заполняем новыми данными
                    for (var c = 1; c < tableS.rows.length; c++) {
                        if (tableS.rows[c].cells[0].innerHTML == TnameObj) {
                            tableS.rows[c].cells[0].innerHTML = inputNameComputer;
                            tableS.rows[c].cells[1].innerHTML = inputTypeCPU + ' ' + inputNumberKernel + ' ' + inputClockFrequency;
                            tableS.rows[c].cells[2].innerHTML = inputTypeRAM + ' ' + inputSizeRAM;
                            tableS.rows[c].cells[3].innerHTML = inputQuantitySerial;
                            tableS.rows[c].cells[4].innerHTML = inputMaxMemory;
                            tableS.rows[c].cells[5].innerHTML = inputIsAdditionalRAM;
                        }
                    }
                } else {
                    // это пришло с таблицы ультрабуков. если с ультрабука поменяли на сервер
                    // создаем новый объект для сервера
                    var newServ = new Server(inputNameComputer, inputNumberKernel, inputTypeCPU,
                        inputClockFrequency, inputTypeRAM, inputSizeRAM, inputQuantitySerial,
                        inputMaxMemory, inputIsAdditionalRAM);

                    // добавляем в базу и в таблицу
                    TableServer.push(newServ);
                    AddServer(newServ);

                    // удаляем из базы и таблицы ультрабуков под старым именем
                    Remove(TnameObj, 'tableUltrabookHTML', false);
                }
                closeEditWindow();
            }
        }
    }
}

/* проверка на пустоту */
function IsEmpty(string) {
    if (string == '' || string == null) {
        return true;
    } else {
        return false;
    }
}

/* закрыть окно создания/редактирования */
function closeEditWindow() {
    // находим слой и окно
    var darkLayer = document.getElementById('shadow');
    var modalWin = document.getElementById('editTable');

    // очищаем форму
    $('#editForm input').val('');

    // закрываем, удаляем
    darkLayer.parentNode.removeChild(darkLayer);
    modalWin.style.display = 'none';
}

/* добавить новые данные */
function CreateComputer(stringType) {
    // слой затемнения
    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    // окно создания/редатирования
    var modalWin = document.getElementById('editTable');
    modalWin.style.display = 'block';

    // название кнопки
    document.getElementById('submitButton').innerHTML = 'создать';

    // нужные строки в зависимости от типа компьютера
    if (stringType == VALUEULTRABOOK) {
        document.getElementById('editServer').style.display = 'none';
        document.getElementById('editUltrabook').style.display = 'block';

    } else {
        document.getElementById('editServer').style.display = 'block';
        document.getElementById('editUltrabook').style.display = 'none';

    }

    // заполнение полей основной информации
    document.getElementById('nameComputerTable').value = '';
    document.getElementById('numberKernelTable').value = '';
    document.getElementById('typeCPUTable').value = '';
    document.getElementById('clockFrequencyTable').value = '';
    document.getElementById('typeRAMTable').value = '';
    document.getElementById('sizeRAMTable').value = '';

    // остальная информация в зависимости от типа
    if (stringType == VALUEULTRABOOK) {
        document.getElementById('typeComputerTable').value = VALUEULTRABOOK;
        document.getElementById('videoCardTable').value = '';
        document.getElementById('typeHardDriveTable').value = '';
        document.getElementById('sizeHardDriveTable').value = '';
        document.getElementById('screenDiagonalTable').value = '';
        document.getElementById('screenResolutionTable').value = '';

    } else {
        document.getElementById('typeComputerTable').value = VALUESERVER;
        document.getElementById('quantitySerialPortTable').value = '';
        document.getElementById('maxMemoryTable').value = '';
        document.getElementById('isAdditionalRAMTable').value = '';

    }

    // клик на кнопке создания
    document.getElementById('submitButton').onclick = function () {
        InputCheck('', '', true);
    };

    // кнопка отмены
    document.getElementById('cancelButton').onclick = function () {
        closeEditWindow();
    };

    // клик на фоне
    darkLayer.onclick = function () {
        closeEditWindow();
    };
}

/* ===================================данные========================================= */
// временные переменные
var T_nameComputer;
var T_numberKernel;
var T_typeCPU;
var T_clockFrequency;
var T_videoCard;
var T_typeRAM;
var T_sizeRAM;
var T_typeHardDrive;
var T_sizeHardDrive;
var T_screenDiagonal;
var T_screenResolution;
var T_quantitySerialPort;
var T_maxMemory;
var T_isAdditionalRAM;

/* +++++++++++++++++++++ 1 ультрабук +++++++++++++++++++++++++ */
T_nameComputer = 'Huawei Matebook X';
T_numberKernel = '4';
T_typeCPU = 'Intel Core i7-7500U';
T_clockFrequency = '3.5';
T_typeHardDrive = 'SSD';
T_sizeHardDrive = '512GB';
T_videoCard = 'Intel HD Graphics 620';
T_typeRAM = 'DDR4';
T_sizeRAM = '8GB';
T_screenDiagonal = '13';
T_screenResolution = '2160x1440';

var Ult1 = new Ultrabook(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_videoCard, T_typeHardDrive, T_sizeHardDrive,
    T_screenDiagonal, T_screenResolution);

/* +++++++++++++++++++++ 2 ультрабук +++++++++++++++++++++++++ */
T_nameComputer = 'Apple A1708 MacBook Pro';
T_numberKernel = '4';
T_typeCPU = 'Core i5';
T_clockFrequency = '2.5';
T_typeHardDrive = 'SSD';
T_sizeHardDrive = '128GB';
T_videoCard = 'Intel Iris Plus Graphics';
T_typeRAM = 'DDR4';
T_sizeRAM = '8GB';
T_screenDiagonal = '13.3';
T_screenResolution = '2560x1440';

var Ult2 = new Ultrabook(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_videoCard, T_typeHardDrive, T_sizeHardDrive,
    T_screenDiagonal, T_screenResolution);

/* +++++++++++++++++++++ 3 ультрабук +++++++++++++++++++++++++ */
T_nameComputer = 'Asus ZenBook UX430UN';
T_numberKernel = '8';
T_typeCPU = 'Core i7-8550U';
T_clockFrequency = '4.0';
T_typeHardDrive = 'SSD';
T_sizeHardDrive = '512GB';
T_videoCard = 'nVidia GeForce MX150';
T_typeRAM = 'DDR4';
T_sizeRAM = '16GB';
T_screenDiagonal = '14';
T_screenResolution = '1920x1080';

var Ult3 = new Ultrabook(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_videoCard, T_typeHardDrive, T_sizeHardDrive,
    T_screenDiagonal, T_screenResolution);

/* +++++++++++++++++++++ 4 ультрабук +++++++++++++++++++++++++ */
T_nameComputer = 'Xiaomi Mi Notebook Air';
T_numberKernel = '4';
T_typeCPU = 'Intel Core i5-7200U';
T_clockFrequency = '3.8';
T_typeHardDrive = 'SSD';
T_sizeHardDrive = '256GB';
T_videoCard = 'nVidia GeForce MX150';
T_typeRAM = 'DDR4';
T_sizeRAM = '8GB';
T_screenDiagonal = '13.3';
T_screenResolution = '1920x1080';

var Ult4 = new Ultrabook(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_videoCard, T_typeHardDrive, T_sizeHardDrive,
    T_screenDiagonal, T_screenResolution);

/* +++++++++++++++++++++ 1 сервер +++++++++++++++++++++++++ */
T_nameComputer = 'HP DL360 GEN10';
T_numberKernel = '48';
T_typeCPU = '2x Intel Xeon Gold 5118';
T_clockFrequency = '2.3';
T_typeRAM = 'DDR4';
T_sizeRAM = '32GB';
T_producerHardDrive = '1 сервер';
T_quantitySerialPort = '24';
T_maxMemory = '3TB';
T_isAdditionalRAM = 'нет';

var Serv1 = new Server(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_quantitySerialPort, T_maxMemory, T_isAdditionalRAM);

/* +++++++++++++++++++++ 2 сервер +++++++++++++++++++++++++ */
T_nameComputer = 'Huawei NDSPSSERVER 14';
T_numberKernel = '16';
T_typeCPU = 'Intel Xeon E3';
T_clockFrequency = '4.0';
T_typeRAM = 'SSD';
T_sizeRAM = '600GB';
T_producerHardDrive = '2 сервер';
T_quantitySerialPort = '6';
T_maxMemory = '2TB';
T_isAdditionalRAM = 'нет';

var Serv2 = new Server(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_quantitySerialPort, T_maxMemory, T_isAdditionalRAM);

/* +++++++++++++++++++++ 3 сервер +++++++++++++++++++++++++ */
T_nameComputer = 'HP ProLiant DL380 G10';
T_numberKernel = '8';
T_typeCPU = 'Intel Xeon Silver';
T_clockFrequency = '2.1';
T_typeRAM = 'SSD';
T_sizeRAM = '4TB';
T_producerHardDrive = '3 сервер';
T_quantitySerialPort = '12';
T_maxMemory = '1.5TB';
T_isAdditionalRAM = '22';

var Serv3 = new Server(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_quantitySerialPort, T_maxMemory, T_isAdditionalRAM);

/* +++++++++++++++++++++ 4 сервер +++++++++++++++++++++++++ */
T_nameComputer = 'SuperMicro X11SSL-F';
T_numberKernel = '4';
T_typeCPU = 'Intel Xeon E3';
T_clockFrequency = '3.0';
T_typeRAM = 'HDD';
T_sizeRAM = '2TB';
T_producerHardDrive = '4 сервер';
T_quantitySerialPort = '6';
T_maxMemory = '5TB';
T_isAdditionalRAM = 'нет';

var Serv4 = new Server(T_nameComputer, T_numberKernel, T_typeCPU, T_clockFrequency,
    T_typeRAM, T_sizeRAM, T_quantitySerialPort, T_maxMemory, T_isAdditionalRAM);

// массивы данных
var TableUltrabook = [Ult1, Ult2, Ult3, Ult4];
var TableServer = [Serv1, Serv2, Serv3, Serv4];