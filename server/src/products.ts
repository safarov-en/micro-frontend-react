export interface Product {
    id: number
    name: string
    price: number
    description: string
    image: string
    longDescription: string
}

const products: Product[] = [
    {
        id: 1,
        name: 'Ноутбук HUAWEI MateBook',
        price: 75000,
        description: 'Ноутбук HUAWEI MateBook D 16 2024/16"/Core i5-12450H/16/1TB/Win/Space Gray (53013YJF)',
        image: 'http://localhost:8080/notebook-1.jpg',
        longDescription: `Ноутбук Huawei MateBook D 16 2024 i5/16/1T Space Gray 53013YJF — устройство с 16-дюймовым экраном, в основе работы которого лежит IPS-матрица. Отличная детализация обеспечивается разрешением 1920х1200 пикселей. Предустановлена ОС Windows 11 «Домашняя 64». Тип процессора — восьмиядерный Intel Core i5 12450H с кэш-памятью объемом 12 МБ. Номинальная тактовая частота при повышенных нагрузках автоматически увеличивается до 4,4 ГГц. Установлена видеокарта Intel UHD Graphics. Она позволяет запускать игры последних лет и работать с профессиональным графическим ПО.
Быстрый запуск и бесперебойная работа приложений обусловлена оперативной памятью LPDDR4X — объем достигает 16 ГБ. Установлен SSD-накопитель на 1 ТБ. На клавиатуру нанесены буквы русского и английского алфавитов. Встроенная веб-камера разрешением 1 Мп позволяет организовывать или участвовать в видеоконференциях. Поддержка Wi-Fi (a/b/g/n/ac/ax) служит для беспроводного подключения к интернету. Сопряжение со смартфоном, планшетом производится через Bluetooth 5.1.
Датчик отпечатков пальцев позволяет защитить ноутбук от третьих лиц и ускорить авторизацию для его владельца. Корпус выполнен из металла. Источник питания — встроенный аккумулятор. Максимальное время автономной работы — до 7 часов. Выход HDMI позволяет подключить к ноутбуку экран телевизора или другое устройство. Для флеш-накопителей и периферийной техники предусмотрены порты USB 2.0 и USB 3.0, для наушников/микрофона — разъем 3,5 мм.
`
    },
    {
        id: 2,
        name: 'Ноутбук Digma DN15R7-8CXW01',
        price: 75000,
        description: 'Ноутбук Digma DN15R7-8CXW01',
        image: 'http://localhost:8080/notebook-2.jpg',
        longDescription: `Ноутбук Digma DN15R7-8CXW01`
    },
    {
        id: 3,
        name: 'Ноутбук Huawei MateBook D',
        price: 54439,
        description: 'Ноутбук HUAWEI MateBook D 16/16"/Core i5-12450H/16/512/NoOS/Space Gray (53013YDK)',
        image: 'http://localhost:8080/notebook-3.jpg',
        longDescription: `Ноутбук Huawei MateBook D 16 2024 i5/16/512/DOS Space Gray 53013YDK с металлическим корпусом цвета «серый космос», толщина которого составляет 18,4 мм, весит 1,7 кг. Конфигурация построена вокруг восьмиядерного процессора Intel Core i5 12450H. Объем оперативной памяти — 16 ГБ, постоянной — 512 ГБ.
Дисплей выполнен по технологии IPS, его диагональ — 16", разрешение — 1920х1200 Пикс. Предусмотрены веб-камера и датчик отпечатков пальцев. Модель поддерживает Bluetooth и Wi-Fi, для подключения внешних устройство можно использовать выход HDMI и порты USB, один из которых соответствует стандарту Type-C.`
    },
    {
        id: 4,
        name: 'Игровой ноутбук Thunderobot 911S Core XD JT009400ERU',
        price: 89500,
        description: 'Ноутбук игровой Thunderobot 911S Core XD/15.6"/Core i5-12450H/16/512/RTX 4050/noOS/Black',
        image: 'http://localhost:8080/notebook-4.jpg',
        longDescription: `Игровой ноутбук Thunderobot 911S Core XD JT009400ERU со слотом расширения 2,5" SATA отличается SSD-накопителем емкостью 512 ГБ и модулем RAM на 16 ГБ с возможностью увеличения до 64 ГБ. Двухканальный режим памяти DDR5 с частотой 4800 МГц обеспечивает удобную эксплуатацию. Зависания исключены благодаря восьмиядерному процессору Intel Core i5 12450H с постоянным и максимальным показателями 2 ГГц и 4,4 ГГц.
За обработку графических данных отвечает контроллер NVIDIA GeForce RTX 4050 с объемом видеопамяти 6 ГБ. IPS-дисплей диагональю 15,6" с частотой обновления 144 Гц гарантирует насыщенное и детализированное изображение. Матовый экран предотвращает бликование при попадании прямых солнечных лучей. Установленная веб-камера с разрешением 1 МПикс позволяет проводить съемку в формате HD.
Прибор функционирует автономно на протяжении пяти часов. В комплектацию входит зарядный кабель с вилкой Schuko. Устройство оборудовано клавиатурой с русской и английской раскладками, дополненной подсветкой. В прочный корпус из металла и пластика интегрированы интерфейсы Wi-Fi, Bluetooth 5.1, LAN, HDMI, Mini DisplayPort, 3,5 мм, два порта USB 3.1 типа A, два — USB 3.2 типа C, один — USB 2.0 типа A. Изделие с габаритами 25х360х241 мм весит 2,15 кг.`
    },
    {
        id: 5,
        name: 'Ноутбук игровой Thunderobot 911S Core',
        price: 84500,
        description: 'Ноутбук игровой Thunderobot 911S Core SD/15.6"/Core i5-12450H/8/512/RTX 3050/noOs/Black',
        image: 'http://localhost:8080/notebook-5.jpg',
        longDescription: `Ноутбук игровой Thunderobot 911S Core SD/15.6"/Core i5-12450H/8/512/RTX 3050/noOs/Black`
    },
    {
        id: 6,
        name: 'Thunderobot 911S Core D JT009K00FRU',
        price: 84500,
        description: 'Ноутбук игровой Thunderobot 911S Core D/15.6"/Core i5-12450H/16/512/RTX 3050/noOS/Black',
        image: 'http://localhost:8080/notebook-6.jpg',
        longDescription: `Игровой ноутбук Thunderobot 911S Core D JT009K00FRU — 15,6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.
Объем SSD-накопителя составляет 512 Гб. Видеокарта GeForce RTX 3050 с 4 Гб видеопамяти разработана на основе архитектуры Ampere. Она обеспечивает улучшенную производительность для игр и работы с графическим ПО. Поддержка видеоадаптером технологии DLSS увеличивает прирост FPS. Платформа Nvidia Reflex снижает инпут-лаг.
Ноутбук снабжен восьмиядерным процессором Intel Core i5 12450H. Тактовая частота равна 2 ГГц — увеличивается до 4,4 ГГц. Объем кэш-памяти равен 12 Мб. Встроенная веб-камера на 1 Мп служит для общения по видеосвязи. Предусмотрена оперативная память четвертого поколения (DDR4) на 16 Гб. Наличие двух слотов памяти позволяет установить до 64 Гб ОЗУ.
Клавиатура дополнена подсветкой. Для передачи данных и сопряжения с другими устройствами используются Wi-Fi, Bluetooth, Gigabit LAN. Модель оснащена широким набором интерфейсов, среди которых порты USB 2.0, 3.2, разъем 3,5 мм, выходы HDMI и Mini DisplayPort. Время автономной работы от аккумулятора — до 5 часов. Размеры устройства составляют 25х361х241 мм, вес — 2,48 кг.`
    },
    {
        id: 7,
        name: 'Thunderobot 911S Core JT009F00FRU',
        price: 90000,
        description: 'Ноутбук игровой Thunderobot 911S Core/15.6"/Core i5-12450H/16/512/RTX 3050/Win/Black',
        image: 'http://localhost:8080/notebook-7.jpg',
        longDescription: `Игровой ноутбук Thunderobot 911S Core JT009F00FRU со слотом расширения 2,5" SATA 3.0 отличается SSD-накопителем емкостью 512 ГБ и модулем RAM на 16 ГБ с возможностью увеличения до 64 ГБ. Двухканальный режим памяти DDR4 с частотой 3200 МГц обеспечивает удобную эксплуатацию. Зависания исключены благодаря восьмиядерному процессору Intel Core i5 12450H с постоянным и максимальным показателями 2 ГГц и 4,4 ГГц.
За обработку графических данных отвечает контроллер NVIDIA GeForce RTX 3050 с объемом видеопамяти 4 ГБ. IPS-дисплей диагональю 15,6" с частотой обновления 144 Гц гарантирует насыщенное и детализированное изображение. Матовый экран предотвращает бликование при попадании прямых солнечных лучей. Установленная веб-камера с разрешением 1 МПикс позволяет проводить съемку в формате HD.
Прибор функционирует автономно на протяжении пяти часов. В комплектацию входит зарядный кабель с вилкой Schuko. Устройство оборудовано клавиатурой с русской и английской раскладками, дополненной подсветкой. В прочный пластиковый корпус интегрированы интерфейсы Wi-Fi, Bluetooth 5, LAN, HDMI, Mini DisplayPort, 3,5 мм, два порта USB 3.2 типа A, разъемы USB 2.0 типа A, USB 3.2 типа C. Изделие с габаритами 25х361х241 мм весит 2,48 кг.`
    },
    {
        id: 8,
        name: 'Ноутбук Digma DN16R7-ADXW02',
        price: 48500,
        description: 'Ноутбук Digma Pro Sprint M Silver/16.1"/AMD Ryzen 7 3700U/16/512/Win/Silver',
        image: 'http://localhost:8080/notebook-8.jpg',
        longDescription: `Ноутбук Digma DN16R7-ADXW02 разработан для решения учебных, творческих и офисных задач. Девайс функционирует под управлением операционной системы Windows 11 Pro с интуитивно понятным интерфейсом и опциями безопасности. Четырехъядерный процессор AMD Ryzen 7 3700U (2,3-4,0 ГГц) и видеокарта RX Vega 10 поддерживают высокую производительность и вычислительную способность системы. Размер оперативной памяти DDR4 So-Dimm ноутбука составляет 16 Гб (с возможностью увеличения до 32 Гб), емкость SSD-накопителя — 512 Гб. Встроенные адаптеры Wi-Fi 802.11 a/b/g/n/ac и Bluetooth версии 5.0 поддерживают беспроводную связь с совместимыми устройствами.
Корпус прибора весом около 1,8 кг оснащен металлической крышкой с широкоформатным матовым экраном диагональю 16,1 дюйма. Клавиатура с подсветкой включает цифровой блок, сканер отпечатка пальца fingerprint и сенсор для управления курсором. Веб-камера 2.0 Мп c индикатором состояния и микрофон обеспечивают возможность видеосвязи. Стереодинамики мощностью 2 Вт воспроизводят звуки в широком диапазоне частот. IPS-экран с углами обзора 178° и частотой обновления 60 Гц демонстрирует натуралистичные изображения разрешением 1920х1080 пикселей.
На боковых площадках корпуса расположены разъемы USB 2.0, HDMI, USB 3.0, USB Type-C (full function), RJ45, вход для наушников, слот для карт microSD. Аккумуляторная батарея емкостью 4700 мА*ч способствует автономной работе устройства до 8 часов.`
    },
    {
        id: 9,
        name: 'Ноутбук "Game Book"',
        price: 25000,
        description: 'Ноутбук "Game Book", 15.6", 12GB, SSD 128GB',
        image: 'http://localhost:8080/notebook-9.jpg',
        longDescription: `Новый 15,6-дюймовый ноутбук для игр и бизнеса
Высококачественные технические характеристики
Этот ноутбук оснащен твердотельным накопителем емкостью 1 ТБ, что обеспечивает бесперебойную работу и большой объем памяти. Оперативная память составляет 12 ГБ, что гарантирует быструю и плавную работу даже при выполнении сложных задач.
Длительное время автономной работы
Время автономной работы составляет 5-7 часов, что позволяет использовать ноутбук в течение длительного времени без необходимости подключения к сети.
Ноутбук оснащен встроенной видеокартой, которая обеспечивает превосходное качество изображения для игр и мультимедийных приложений.
Совместимость с операционной системой
Ноутбук поддерживает Windows 10 и 11, что обеспечивает совместимость с широким спектром приложений и игр.
Компактный и портативный дизайн
При весе всего 1.5 кг и компактных размерах 36 * 24 * 15 см, этот ноутбук легко переносить с собой, что делает его отличным выбором для тех, кто часто путешествует или работает вне офиса.
Цвет: память 12G 【J4025】 складывается на 180°
Частота процессора: 2,9
Уровень энергоэффективности: Уровень 1
Объем памяти: твердотельный накопитель емкостью 128 ГБ
Время автономной работы: 5-7 часов
Беспроводная сетевая карта: имеется беспроводная сетевая карта
Размер экрана: 15,6 дюйма
Объем видеопамяти: встроенная видеокарта
Тип процессора: Celeron/Селерон
Разрешение: Full HD (1920x1080)
Емкость жесткого диска: 128/256/512/1 ТБ
Видеокарта: встроенная видеокарта
Операционная система: window10/window11
Сенсорный ли экран: бесконтактный
Тип компьютера: легкая и тонкая книга/учебное пособие/ игровая книга
Сценарии использования: образование и тренинги/развлечения и досуг/анализ данных/графический дизайн
Толщина: Портативная и тонкая (17,5 мм-21 мм)
Рейтинг товара из Китая: 5.0
Offer ID: 705813283922`
    },
    {
        id: 10,
        name: 'Ноутбук UOHUO Lightbook',
        price: 34850,
        description: 'Ноутбук UOHUO Lightbook, Intel Celeron J4125 (2.0 ГГц), RAM 12 ГБ, SSD 512 ГБ, Intel HD Graphics 600, Windows 10 Pro',
        image: 'http://localhost:8080/notebook-10.jpg',
        longDescription: `Внимание! Каждому покупателю - чехол и мышка в подарок!
Представляем вашему вниманию новый ноутбук UOHUO Lightbook - Легкий корпус, яркий дисплей, а внутри 4х ядерный процессор Intel Celeron для высокой производительности - все это позволяет комфортно работать и отдыхать дома, а так же брать ноутбук с собой в поездки
Вес в 1.2 кг и компактные размеры ноутбука и блока питания позволят легко носить его с собой
Четырехядерный процессор Intel Celeron J4125 позволит с легкостью справляться со всеми задачами различной сложности
Яркий 15.6" FullHD экран с высоким разрешением 1920x1080 на качественной IPS матрице подарит вам незабываемое впечатление от изображения, а высокая яркость позволит использовать ноутбук вне дома на солнце
8 гигабайт оперативной и 512 физической памяти на высокоскоростном SSD накопителе M.2 формата обеспечат мгновенную загрузку устройства и возможность держать множество задач одновременно`
    },
    {
        id: 11,
        name: 'Ноутбук Echips Envy',
        price: 89850,
        description: 'Ноутбук Echips Envy 15.6" 1920x1080 IPS Intel Celeron N5095 8GB RAM SSD 240GB Win 11 Home',
        image: 'http://localhost:8080/notebook-11.jpg',
        longDescription: `Быстрый и стильный ноутбук Echips Envy.
Идеально подойдет для тех, кто хочет получить высокую производительность за небольшие деньги.
Ноутбук Echips Envy оснащен всеми необходимыми разъемами: 2 порта USB 3.0, 1 порт USB Type-C, miniHDMI, комбинированный 3.5 мм разъем переходник аудио и микрофона.
IPS-экран размером 15,6-дюймов и разрешением Full HD имеет четкую и натуральную цветопередачу.
Высокая скорость обработки данных благодаря SSD-накопителю.
Работает от батарейки почти весь рабочий день. Поставляется с Windows.
Обращаем Ваше внимание: экран матрицы покрыт защитной пленкой, её необходимо снять.`
    }
]

export default products