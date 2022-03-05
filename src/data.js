export let tableGames = [
    {
        name: 'Вечериночные',
        icon: require('@/assets/catalog_icon_party.png'),
        subcategorys: ['Свинтус', 'Фанты', 'Обмани меня', 'Loonacy'],
        id: 1
    },
    {
        name: 'Викторины',
        icon: require('@/assets/catalog_icon_party.png'),
        subcategorys: ['Какой ты мем', 'Эпичные схватки боевых магов', 'Мафия', 'Взрывные котята', 'Фанты', 'Обмани меня'],
        id: 2
    },
    {
        name: 'Детективные',
        icon: require('@/assets/catalog_icon_party.png'),
        subcategorys: null,
        id: 3
    },
    {
        name: 'Детские',
        icon: require('@/assets/catalog_icon_child.png'),
        subcategorys: null,
        id: 4
    },
    {
        name: 'Стратегические',
        icon: require('@/assets/catalog_icon_strategy.png'),
        subcategorys: ['Языколом', 'Экономикус', 'Взрывные котята', 'Фанты', 'Обмани меня'],
        id: 5
    },
    {
        name: 'Дуэльные',
        icon: require('@/assets/catalog_icon_fight.png'),
        subcategorys: ['Языколом', 'Мафия', 'Взрывные котята', 'Фанты', 'Обмани меня'],
        id: 6
    },
    {
        name: 'Карточные',
        icon: require('@/assets/catalog_icon_card.png'),
        subcategorys: null,
        id: 7
    },
    {
        name: 'Классические',
        icon: require('@/assets/catalog_icon_classic.png'),
        subcategorys: null,
        id: 8
    },
    {
        name: 'Логические',
        icon: require('@/assets/catalog_icon_logyc.png'),
        subcategorys: null,
        id: 9
    },
    {
        name: 'Хорроры',
        icon: require('@/assets/catalog_icon_horror.png'),
        subcategorys: ['Языколом', 'Эпичные схватки боевых магов', 'Экономикус', 'Мафия', 'Фанты', 'Обмани меня'],
        id: 10
    },
    {
        name: 'Приключенческие',
        icon: require('@/assets/catalog_icon_adventure.png'),
        subcategorys: ['Языколом', 'Экономикус', 'Взрывные котята', 'Фанты', 'Обмани меня'],
        id: 11
    },
    {
        name: 'Семейные',
        icon: require('@/assets/catalog_icon_family.png'),
        subcategorys: null,
        id: 12
    },
]

export let otherCategorys = [
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 21
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 22
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 13
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 14
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 15
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 16
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 17
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 18
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 19
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 110
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 111
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 112
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 921
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: ['Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория', 'Подкатегория'],
        id: 922
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 913
    },
    {
        name: 'Категория',
        icon: null,
        subcategorys: null,
        id: 914
    },

]

export let itemParameters = {
    age : 'Возраст',
    time : 'Время игры',
    players : 'Количество игроков',
    cardSize : 'Размер карт',
    producer : 'Производитель',
}

export let stockStatus =  {
    0 : 'Нет в наличии',
    1 : 'Ожидает поставки',
    2 : 'Ограниченное количество',
    3 : 'В наличии'
}

export let itemData = {
    discont: 15,
    id: 2795,
    inStock: 3 ,
    title: 'Особняки безумия. Вторая редакция',
    desc: 'Никто не выйдет',
    price : 6990,
    age : '13+',
    time : '120 - 180',
    players : '1 - 5',
    cardSize : '119х69мм, 41х63мм',
    producer : 'Hobby World',
    thumb: require('@/assets/card_img.png'),
    pics: [require('@/assets/gallery_img1.png'),require('@/assets/gallery_img2.png'),require('@/assets/gallery_img3.png'),require('@/assets/gallery_img4.png'),require('@/assets/gallery_img5.png'),],
    description: 'Приехав в Аркхэм и добравшись по грязным переулкам до особняков, вы сразу понимаете, что они покинуты и привычных обитателей внутри точно нет. Дома явно покидали в спешке... Вы также чувствуете напряжённость и ощущение чего-то потустороннего, опасного и необъяснимого. Сыщики без работы не останутся точно.Древнее зло сосредоточилось здесь и в окрестностях, добравшись и до причалов Инсмута. Монстры из других миров ходят по пыльным коридорам домов, а культисты проводят ритуалы и взывают к Древним в комнатах, где недавно царил покой и уют. Снаружи также небезопасно – безумию подверглись многие жители города. Сегодня вам и другим сыщикам предстоит нанести незваный визит новым жителям особняков и бросить вызов надвигающемуся ужасу.',
    rules: 'Игра состоит из серии раундов, каждый из которых, в свою очередь, делится на две фазы. В первой фазе сыщиков, игроки, перемещаясь по игровому полю, исследуют всё вокруг, а также сражаются с монстрами. В фазу Мифа игра действует против вас – приложение будет последовательно рассказывать о действиях монстров, а также об эффектах Мифа, которые, кстати, и вызывают вышеупомянутых монстров на поле, а также выставляют перед сыщиками различные препятствия. После преодоления всевозможных преград, сыщикам предстоит сыграть следующий раунд.',
    comments: [
        {name: 'Лис-хитрец', message: '1Отличная игра! Круто провели время всей компанией', date: '03.01.2022'},
        {name: 'Лисица Шутница', message: '2Не могла дождаться рестока Особняков, срочно дайте два!', date: '23.02.2022'},
        {name: 'Рыжий проныра', message: '3Неплохая настолка, нам с друзьями понравилось.', date: '14.05.2022'},
        {name: 'Матерый лис', message: '4Отличная игра! Круто провели время всей компанией', date: '03.01.2022'},
        {name: 'Лисенок Вок', message: '5Не могла дождаться рестока Особняков, срочно дайте два!', date: '23.02.2022'},
        {name: 'Серый плут', message: '6Неплохая настолка, нам с друзьями понравилось.', date: '14.05.2022'}
    ],
    
}


export let someRandomNames = [
    {avatar: require('@/assets/catalog_icon_child.png'), name: 'Лисенок Вок'},
    {avatar: require('@/assets/catalog_icon_card.png'), name: 'Хитрый Лис'},
    {avatar: require('@/assets/catalog_icon_classic.png'), name: 'Рыжий Лис'},
    {avatar: require('@/assets/catalog_icon_classic.png'), name: 'Лисица-шутница'},
    {avatar: require('@/assets/catalog_icon_logyc.png'), name: 'Лиса Патрикеевна'},
    {avatar: require('@/assets/catalog_icon_card.png'), name: 'Рыжий проныра'},
    {avatar: require('@/assets/catalog_icon_quiz.png'), name: 'Серый плут'}
]

export let sidemenuAd = {
    text: 'Комплектом дешевле!',
    img: require('@/assets/sidemenuAdPic.png')
}

export let searched = [
    {pic: require('@/assets/card_img.png'), name: 'Взрывные котята'},
    {pic: require('@/assets/card_img.png'), name: 'Взрывные котята'},
    {pic: require('@/assets/card_img.png'), name: 'Взрывные котята'},
    {pic: require('@/assets/card_img.png'), name: 'Взрывные котята'},
    {pic: require('@/assets/card_img.png'), name: 'Взрывные котята'}
]