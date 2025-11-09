$( document ).ready(function() {
const defaultLangCode = 'ru'
var translations = {
'ru': {
    'Main': 'Главная',
    'About': 'О платформе',
    'WebApp': 'Веб-приложение',
    'MaktabMobile': 'Мактаб Мобайл',
    'mainDescr': 'Это цифровая образовательная платформа для учителей, учеников и родителей. Она обладает простым и удобным пользовательским интерфейсом для обучения детей школьного возраста.',
    'Download': 'Скачать',
    'mainH1': 'Цифровой инструмент позволяющий расширить возможности для обучения',
    'mainD1': '"Мактаб Мобайл" — это цифровая образовательная платформа, для среднеобразовательных учреждений, которая работает на различных видах устройств (компьютеры, планшеты, мобильные телефоны) как в режиме онлайн, так и в автономном режиме (мобильная версия), способствуя непрерывному обучению и приобретению компетенций. Платформа отлично подойдёт как дополнительный инструмент к основному учебному процессу.',
    'mainH2': 'Преимущества использования платформы',
    'mainD2': 'Непрерывный и удалённый доступ к качественному учебному материалу для развития навыков с помощью индивидуальных программ обучения. Включение в процесс обучения всех детей (в том числе детей с ограниченными образовательными возможностями и т.д.). Возможности применения смешанного и дифференцированного обучения. Сокращение текущих расходов на образование (распечатка учебных материалов, инфраструктура и другие ресурсы).',
    'mainH3': 'Основные возможности платформы',
    'mainD3': '«Мактаб Мобайл» является одним из шагов на пути к реализации инициатив цифрового обучения.',
    'mainH4': 'Управление учебными курсами',
    'mainD4': 'Курсы обучения, учебные модули и материалы, задания, обсуждения, оценки и прогресс учащихся.',
    'mainH5':'Электронная библиотека',
    'mainD5':'Доступ к учебным ресурсам, электронным книгам (EPUB, PDF), интерактивным упражнениям (H5P/SCORM), аудиоматериалам и видеоурокам.',
    'mainH6':'Поддержка автономной работы',
    'mainD6':'Работа в онлайн или оффлайн режиме. Все результаты и материалы обучения синхронизируются при подключении к сети.',
    'mainH7':'Посещаемость',
    'mainD7':'Управление сведениями о посещаемости учащихся.',
    'mainH8':'Простота управления',
    'mainD8':'Легко добавлять, удалять и редактировать образовательный контент.',
    'mainH9':'Демо видео - начало работы с платформой',
    'mainH10':'Используйте приложение в удобном формате',
    'mainD10': 'Мактаб Мобайл доступен бесплатно!',
    'mainH11':'Партнёрские платформы',
    'mainH12':'Контакты',
    'footer1':'Мактаб Мобайл — это программное обеспечение с открытым исходным кодом',
},
'tj': {
    'Main': 'Асосӣ',
    'About': 'Дар бораи платформа',
    'WebApp': 'Веб-барнома',
    'MaktabMobile': 'Мактаб Мобайл',
    'mainDescr': 'Ин платформаи рақамии таълимӣ барои омӯзгорон, хонандагон ва волидон мебошад. Он дорои интерфейси оддӣ ва қулай барои таълими кӯдакони синни мактабӣ мебошад.',
    'Download': 'Зеркашӣ кунед',
    'mainH1': 'Воситаи рақамӣ барои беҳтар намудани имкониятҳои омӯзиш',
    'mainD1': '"Мактаб Мобайл" — як платформаи рақамии таълимӣ барои мактабҳои миёна мебошад. Он дар дастгоҳҳои гуногун (компютерҳо, планшетҳо, телефонҳои мобилӣ) ҳам дар реҷаҳои онлайн ва ҳам офлайн (версияи мобилӣ) кор мекунад ва омӯзиши пайваста ва ба даст овардани малакаҳоро осон мекунад. Платформа ҳамчун воситаи иловагӣ ба раванди асосии таълимӣ кӯмак мерасонад.',
    'mainH2': 'Манфиатҳои истифода бурдани платформа',
    'mainD2': 'Дастрасии доимӣ ба маводи таълимии баландсифат барои рушди малакаҳо тавассути барномаҳои таълимии ва ҳам аз минтақаҳои дурдаст. Ҷалби ҳамаи хонандагон (аз ҷумла онҳое, ки дорои имконияташон маҳдуд мебошад ва ғайра) ба раванди таълим. Имкониятҳо барои таълими омехта ва тафриқавӣ. Кам кардани хароҷоти доимии таълим (мисол чоп кардани маводи таълимӣ, инфрасохтор ва дигар захираҳо).',
    'mainH3': 'Хусусиятҳои асосии платформа',
    'mainD3': '«Мактаб Мобайл» ин яке аз қадамҳо ба сӯи татбиқи ташаббусҳои омӯзиши рақамӣ мебошад.',
    'mainH4': 'Идоракунии курсҳои омӯзишӣ',
    'mainD4': 'Курсҳои таълимӣ, модулҳо ва маводҳои омӯзишӣ, супоришҳо, муҳокимаҳо, арзёбӣ ва пешрафти хонандагон.',
    'mainH5':'Китобхонаи электронӣ',
    'mainD5':'Дастрасӣ ба захираҳои таълимӣ, китобҳои электронӣ (EPUB, PDF), машқҳои интерактивӣ (H5P/SCORM), маводи аудиоӣ ва дарсҳои видеоӣ.',
    'mainH6':'Дастгирии кори офлайнӣ',
    'mainD6':'Онлайн ё офлайн кор кунед. Ҳама натиҷаҳо ва маводҳои омӯзишӣ ҳангоми пайвастшавӣ ба интернет ҳамоҳанг карда мешаванд.',
    'mainH7':'Иштирок',
    'mainD7':'Идоракунии маълумоти давомоти хонандагон.',
    'mainH8':'Осонии идоракуни',
    'mainD8':'Мундариҷаи таълимиро ба осонӣ илова, нест ва таҳрир кунед.',
    'mainH9':'Видеои намоишӣ - оғози кор бо платформа',
    'mainH10':'Барномаро дар формати қулай истифода баред',
    'mainD10': 'Мактаб Мобайл ройгон дастрас аст!',
    'mainH11':'Платформаҳои шарикӣ',
    'mainH12':'Тамосҳо',
    'footer1':'Мактаб Мобайл нармафзори кушодаасос аст',
},
'en': {
    'Main': 'Main',
    'About': 'About',
    'WebApp': 'Web App',
    'MaktabMobile': 'Maktab Mobile',
    'mainDescr': 'This is a digital educational platform for teachers, students, and parents. It has a simple and user-friendly interface for teaching school-aged children.',
    'Download': 'Download',
    'mainH1': 'A digital tool to enhance learning opportunities',
    'mainD1': '"Maktab Mobile" — is a digital educational platform for secondary schools that works on various types of devices (computers, tablets, mobile phones) in both online and offline modes (mobile version), facilitating continuous learning and skill acquisition. The platform is an excellent supplementary tool to the main educational process.',
    'mainH2': 'Advantages of using the platform',
    'mainD2': 'Continuous and remote access to high-quality educational materials for skill development through individualized learning programs. Inclusion of all children in the learning process (including children with special educational needs, etc.). Opportunities for blended and differentiated learning. Reduction of current education costs (printing of educational materials, infrastructure, and other resources).',
    'mainH3': 'Main platform features',
    'mainD3': '"Maktab Mobile" is one of the steps towards the implementation of digital learning initiatives.',
    'mainH4': 'Course management',
    'mainD4': 'Course structure, learning modules and materials, assignments, discussions, assessments, and student progress.',
    'mainH5':'Electronic library',
    'mainD5':'Access to educational resources, e-books (EPUB, PDF), interactive exercises (H5P/SCORM), audio materials, and video lessons.',
    'mainH6':'Offline operation',
    'mainD6':'Work can be done online or offline. All results and learning materials are synchronized when connected to the network.',
    'mainH7':'Attendance',
    'mainD7':'Managing student attendance records.',
    'mainH8':'Ease of managing content',
    'mainD8':'It is easy to add, remove, and edit educational content.',
    'mainH9':'Demo video - getting started with the platform',
    'mainH10':'Use the application in a convenient format.',
    'mainD10': 'Maktab Mobile is available for free!',
    'mainH11':'Partner platforms',
    'mainH12':'Contacts',
    'footer1':'Maktab Mobile is Open-Source Software',
}
}

function loadLang(){
    let langCode = getLang();
    //$('#langPicker option[value="'+langCode+'"]').attr('selected', 'selected');
    setLang(langCode);
}

function getLang(key='langCode'){
    let langCode = localStorage.getItem(key);
    if(langCode in translations) {
        return langCode;
    } else {
        return defaultLangCode;
    }
}

function setLang(langCode){
    // save in local storage
    localStorage.setItem('langCode',langCode);
    // text
    $(".translate").each(function() {
        let itemKey = $(this).attr('lngTXT');
        if(itemKey in translations[langCode]) {
            $(this).html( translations[langCode][itemKey] );
        }
    });
    // img
    // $("img.lngIMG").each(function() {
    //     let imgBaseName = $(this).attr('imgBaseName');
    //     $(this).attr('src',imgBaseName+'_'+langCode);
    // });
}

$(".langPicker").click(function(e) {
    e.preventDefault();
    let langCode = $(this).attr('langCode');
    setLang(langCode);
});

loadLang();

});