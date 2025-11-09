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

    'aH1': 'Что такое «Мактаб мобайл»?',
    'aD1': '«Мактаб мобайл» является цифровой образовательной платформой для учителей, учеников и родителей. Она обладает простым и удобным пользовательским интерфейсом для обучения детей школьного возраста.',
    'aH2': 'Возможности платформы',
    'aD2': 'Платформа Мактаб Мобайл поддерживает различные форматы учебных материалов - текст, видео, электронные книги, интерактивный контент, позволяет использовать и обмениваться контентом в автономном режиме, поддерживает управление учебными курсами и заданиями, а также возможностью структурировать учебные курсы и материалы. Мактаб Мобайл работает как в онлайн, так и в оффлайн режимах на мобильных устройствах.',
    'aH3': 'Почему разработана данная платформа?',
    'aD3': 'Идея создания такой платформы появилась еще в период пандемии "COVID-19", когда учителя и ученики столкнулись с трудностями в плане непрерывного обучения. Данная платформа призвана стать удобным и надежным инструментом для осуществления как дистанционного, так и смешанного обучения, она может стать отличным дополнением к основному учебному процессу. Платформа Мактаб Моайл позволяет решать ряд проблем, например: доступность учебных материалов, сокращение расходов связанных с их печатью и распространением, досуп к учебным материалам в удаленных уголках республики, возможность работы оффлан и сокращение расхода интернет-траффика. Кроме того, разработка платформы Мактаб Мобайл является одним из шагов на пути к реализации инициатив цифровой трансформации сферы образования.',
    'aH4': 'Учителям',
    'aD4': 'Мактаб Мобайл цифровая обучающая платформа, которая позволяет учителям преподавать содержание уроков новыми и интересными способами. Платформа включает в себя уроки с различными мультимедийными элементами, включая видео, анимацию, иллюстрации и аудиозаписи. Уроки сопровождаются интерактивными элементами, которые требуют выполнения задания учащимися, для дальнейшего продвижения по темам. Предоставление увлекательного путешествия во время обучения, повышает вероятность того, что ученики найдут обучение приятным и запоминающимся.',
    'aH5': 'Ученикам и Родителям',
    'aD5': 'Мактаб Мобайл для учеников предлагает практические упражнения, обучающие видеоролики, что позволяет учиться в собственном темпе в классе и за его пределами. Для родителей, которые ценят участие и активность в обучении своих детей, необходимо ознакомиться с цифровой образовательной платформой Мактаб Мобайл. Попытка помочь вашим детям с домашними заданиями может быть трудной, если вы не знаете, как ориентироваться в их системе цифрового обучения.',
    'aH6': 'Основные возможности:',
    'aL1': '<strong>Электронная библиотека: </strong>доступ к учебным ресурсам, электронным книгам, интерактивным упражнениям и видеоурокам. <a href="https://fs.rcict.net/index.php/s/MXGTGDef5kRzm78">Ссылка на электронные учебные материалы (электронные книги, видео уроки и др.)</a>.',
    'aL2': '<strong>Управление учебными курсами: </strong>создание курсов обучения (предметы или темы), добавление учебных модулей, добавление цифровых учебных материалов (текст, книги, интерактивные задания, видеоуроки), добавление заданий, возможности обсуждения и предоставления отзывов, отслеживание прогресса и оценка результатов учащихся и др.',
    'aL3': '<strong>Поддержка автономной работы: </strong>работа в онлайн или оффлайн режиме. Все результаты и материалы обучения автоматически синхронизируются при подключении к сети.',
    'aL4': '<strong>Посещаемость: </strong>Управление сведениями о посещаемости учащихся.',
    'aL5': '<strong>Простота управления контентом: </strong>легко добавлять, удалять и редактировать образовательный контент. Поддержка контента в различных форматах (видео, аудио, EPUB, PDF и xAPI).',
    'aH7': 'Лучший способ повысить результаты обучения',
    'aD7': 'Мактаб Мобайл предлагает практические упражнения, обучающие видеоролики и панель мониторинга обучения, которая позволяет ученикам учиться даже за пределами класса. С помощью платформы Мактаб Мобайл ваше взаимодействие с учителями, доступ к преподавательским и обучающим ресурсам становятся неограниченными, школа становиться мобильной и может стать доступной на ваших компьютерах, планшетах и смартфонах.',
    'aB7': 'Начать работу с платформой!',
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
    'mainH12':'Тамос',
    'footer1':'Мактаб Мобайл нармафзори кушодаасос аст',

    'aH1': '«Мактаб мобайл» чист?',
    'aD1': '«Мактаб мобайл» платформаи рақамии таълимӣ барои омӯзгорон, хонандагон ва волидон мебошад. Он дорои интерфейси оддӣ ва қулай барои таълими кӯдакони синни мактабӣ мебошад.',
    'aH2': 'Имкониятҳои платформа',
    'aD2': 'Платформаи Мактаб Мобайл форматҳои гуногуни маводи таълимиро - матн, видео, китобҳои электронӣ ва мундариҷаи интерактивӣ дастгирӣ мекунад ва имкон медиҳад, ки онҳо дар офлайн истифода ва мубодила карда шаванд. Инчунин идоракунии курсҳо ва супоришҳо, қобилияти сохтор додани курсҳо ва маводҳоро дастгирӣ мекунад. Мактаб Мобайл дар дастгоҳҳои мобилӣ онлайн ва офлайн кор мекунад.',
    'aH3': 'Чаро платформа тахия шудаст?',
    'aD3': 'Идеяи таъсиси чунин платформа дар давраи пандемияи COVID-19, вақте ки омӯзгорон ва хонандагон дар нигоҳ доштани таълими пайваста бо мушкилот рӯбарӯ шуданд, пайдо шуд. Ин платформа барои он тарҳрезӣ шудааст, ки як воситаи қулай ва боэътимод барои таълими фосилавӣ ва омехта бошад ва он метавонад ҳамчун як иловаи аъло ба раванди асосии таълимӣ хидмат кунад. Платформаи Мактаб Мобайл як қатор масъалаҳоро, аз ҷумла дастрасии маводи таълимӣ, коҳиши хароҷоти чоп ва паҳнкунӣ, дастрасӣ ба маводи таълимӣ дар минтақаҳои дурдасти кишвар, имконияти кор дар офлайн ва коҳиши истеъмоли трафики интернет, ҳал мекунад. Ғайр аз ин, таҳияи платформаи Мактаб Мобайл як қадам ба сӯи татбиқи ташаббусҳои табдили рақамӣ дар бахши маориф мебошад.',
    'aH4': 'Барои омӯзгорон',
    'aD4': 'Мактаб Мобайл як платформаи рақамии таълимӣ мебошад, ки ба омӯзгорон имкон медиҳад, ки мундариҷаи дарсро бо роҳҳои нав ва ҷолиб пешниҳод кунанд. Платформа дарсҳоро бо унсурҳои гуногуни мултимедиявӣ, аз ҷумла видеоҳо, аниматсияҳо, тасвирҳо ва сабтҳои аудиоӣ дар бар мегирад. Дарсҳо бо унсурҳои интерактивӣ ҳамроҳ мешаванд, ки аз хонандагон талаб мекунанд, ки вазифаҳоро барои пешрафти минбаъдаи мавзӯъҳо иҷро кунанд. Таъмини сафари ҷолиби таълимӣ эҳтимолияти онро зиёд мекунад, ки хонандагон омӯзишро лаззатбахш ва хотирмон хоҳанд ёфт.',
    'aH5': 'Барои хонандагон ва волидон',
    'aD5': 'Мактаб Мобайл барои хонандагон, он машқҳои амалӣ ва видеоҳои таълимӣ пешниҳод мекунад, ки ба онҳо имкон медиҳад, ки бо суръати худ дар дохил ва берун аз синфхона таҳсил кунанд. Волидоне, ки ба иштироки фаъол дар таълими фарзандонашон арҷ мегузоранд, бояд бо платформаи таълимии рақамии Мактаб Мобайл шинос шаванд. Кӯмак ба фарзандонатон дар иҷрои корҳои хонагӣ метавонад душвор бошад, агар шумо надонед, ки чӣ тавр системаи таълимии рақамии кор мекунад.',
    'aH6': 'Хусусиятҳои асосӣ:',
    'aL1': '<strong>Китобхонаи электронӣ: </strong>дастрасӣ ба захираҳои таълимӣ, китобҳои электронӣ, машқҳои интерактивӣ ва видеодарсҳо. <a href="https://fs.rcict.net/index.php/s/MXGTGDef5kRzm78">Пайванд ба маводи таълимии электронӣ (китобҳои электронӣ, дарсҳои видеоӣ ва ғайра)</a>.',
    'aL2': '<strong>Идоракунии курсҳо: </strong>таъсиси курсҳои омӯзишӣ (фанҳо ё мавзӯъҳо), илова кардани модулҳои омӯзишӣ, илова кардани маводҳои рақамии омӯзишӣ (матн, китобҳо, вазифаҳои интерактивӣ, дарсҳои видеоӣ), илова кардани супоришҳо, имкониятҳо барои муҳокима ва пешниҳоди фикру мулоҳизаҳо, пайгирии пешрафт ва арзёбии натиҷаҳои хонандагон ва ғайра.',
    'aL3': '<strong>Дастгирии кори офлайнӣ: </strong>онлайн ё офлайн кор кунед. Ҳама натиҷаҳо ва маводҳои таълимӣ ҳангоми пайвастшавӣ ба интернет ба таври худкор ҳамоҳанг карда мешаванд.',
    'aL4': '<strong>Давомот: </strong>Идоракунии маълумоти давомоти хонандагон.',
    'aL5': '<strong>Осонии идоракунӣ мундариҷа: </strong>ба осонӣ мундариҷаи таълимиро илова, нест ва таҳрир кунед. Дастгирии мундариҷа дар форматҳои гуногун (видео, аудио, EPUB, PDF ва xAPI).',
    'aH7': 'Роҳи беҳтар кардани натиҷаҳои омӯзиш',
    'aD7': 'Мактаб Мобайл машқҳои амалӣ, видеоҳои таълимӣ ва панели идоракунии таълимро пешниҳод мекунад, ки ба хонандагон имкон медиҳад, ки ҳатто берун аз синфхона таҳсил кунанд. Бо платформаи Мактаб Мобайл, муоширати шумо бо омӯзгорон ва дастрасӣ ба захираҳои таълимӣ ва омӯзишӣ бемаҳдуд мешавад, омӯзиш дар компютерҳо, планшетҳо ва смартфонҳои барои шумо дастрас мегардад.',
    'aB7': 'Корро бо платформа оғоз намоед!',
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

    'aH1': 'What is "Maktab Mobile"?',
    'aD1': '"Maktab Mobile" is a digital educational platform for teachers, students, and parents. It has a simple and user-friendly interface for educating school-aged children.',
    'aH2': 'Platform capabilities',
    'aD2': 'Maktab Mobile supports various formats of educational materials like text, video, e-books, interactive content, ​​allows users to use and share content offline, supports the management of learning courses and assignments, as well as the ability to structure courses. Maktab Mobile works in both online and offline modes on mobile devices.',
    'aH3': 'Why was this platform developed?',
    'aD3': 'The idea of ​​creating such a platform emerged during the COVID-19 pandemic, when teachers and students faced difficulties in ensuring continuous learning. This platform is designed to be a convenient and reliable tool for both distance and blended learning, and can serve as an excellent complement to the main educational process. The Maktab Mobile platform helps solve a number of problems, such as: accessibility of educational materials, reduction of costs associated with printing and distribution, access to educational materials in remote areas of the republic, the possibility of offline work, and reduced internet traffic consumption. Furthermore, the development of the Maktab Mobile platform is one of the steps towards implementing digital transformation initiatives in the field of education.',
    'aH4': 'For teachers',
    'aD4': 'Maktab Mobile is a digital learning platform that allows teachers to teach lesson content in new and engaging ways. The platform includes lessons with various multimedia elements, including videos, animations, illustrations, and audio recordings. The lessons are accompanied by interactive elements that require students to complete tasks in order to progress through the topics. Providing an engaging learning journey increases the likelihood that students will find learning enjoyable and memorable.',
    'aH5': 'For students and parents',
    'aD5': 'Maktab Mobile for students offers practical exercises and educational videos, allowing them to learn at their own pace in and outside the classroom. For parents who value involvement and active participation in their children education, it is essential to familiarize yourselves with the Maktab Mobile digital learning platform. Trying to help your children with their homework can be difficult if you do not know how to navigate their digital learning system.',
    'aH6': 'Key Features:',
    'aL1': '<strong>Electronic library: </strong>access to learning resources, e-books, interactive exercises, and video lessons. <a href="https://fs.rcict.net/index.php/s/MXGTGDef5kRzm78">Link to electronic learning materials (e-books, video lessons, etc.)</a>.',
    'aL2': '<strong>Course management: </strong>creating learning courses (subjects or topics), adding learning modules, adding digital learning materials (text, books, interactive exercises, video lessons), adding assignments, opportunities for discussions and chats, tracking student progress and evaluating results, and more.',
    'aL3': '<strong>Support for offline operation: </strong>work can be done online or offline. All results and learning materials are automatically synchronized when connected to the network.',
    'aL4': '<strong>Attendance: </strong>Managing student attendance records.',
    'aL5': '<strong>Ease of managing content: </strong>it is easy to add, remove, and edit educational content. Content is supported in various formats (video, audio, EPUB, PDF, and xAPI).',
    'aH7': 'The best way to improve learning outcomes',
    'aD7': 'Maktab Mobile offers practical exercises, educational videos, and a learning dashboard that allows students to learn even outside the classroom. With the Maktab Mobile platform, your interaction with teachers and access to teaching and learning resources become unlimited, the school becomes mobile and accessible on your computers, tablets, and smartphones.',
    'aB7': 'Getting started with the platform!',
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