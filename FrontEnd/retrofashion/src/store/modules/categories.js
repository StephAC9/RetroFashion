const state = {
    menPagecategories: [{
            id: 1,
            name: 'SALES',
            elements: ['shoes', 'clothes', 'accessories']
        },
        {
            id: 2,
            name: 'CLOTHES',
            elements: ['Trousers', 'Shirts', 'Tshirts', 'Boxers', 'Shorts', 'Wedding', 'Wedding guest', 'Jeans', 'Jackets']
        },
        {
            id: 3,
            name: 'SHOES',
            elements: ['Dress shoes', 'Sneakers', 'Sandals', 'Boots', 'Outdoor']
        },
        {
            id: 4,
            name: 'ACCESSORIES',
            elements: ['travel bags', 'handbags', 'belts', 'scarfs', 'hats', 'wallets', 'jewelries']
        },
        {
            id: 5,
            name: 'WEDDING',
            elements: ['Trousers', 'Shirts', 'Shoes', 'Suits']
        },
        {
            id: 6,
            name: 'SUMMER',
            elements: ['sneakers', 'tshirts', 'shorts', 'hats']
        },
        {
            id: 7,
            name: 'WINTER',
            elements: ['boots', 'jackets', 'pull-over', 'tops', 'clothes', 'shoes']
        },
        {
            id: 8,
            name: 'COLORS',
            elements: ['White', 'Black', 'Yellow', 'Bleu', 'Purple', 'Red', 'Pink', 'Gold', 'Silver']
        },
        {
            id: 9,
            name: 'PRICE',
            elements: []
        },
    ],


    womenPagecategories: [{
            id: 1,
            name: 'SALES',
            elements: ['shoes', 'clothes', 'accessories']
        },
        {
            id: 2,
            name: 'CLOTHES',
            elements: ['Dresses', 'quirts', 'tops', 'lingeries', 'wedding', 'wedding guest', 'Jeans', 'Jackets']
        },
        {
            id: 3,
            name: 'SHOES',
            elements: ['Heels', 'Sneakers', 'Sandals', 'Boots', 'Outdoor']
        },
        {
            id: 4,
            name: 'ACCESSORIES',
            elements: ['travel bags', 'handbags', 'belts', 'scarfs', 'hats', 'wallets', 'jewelries']
        },
        {
            id: 5,
            name: 'WEDDING',
            elements: ['Dresses', 'Shoes']
        },
        {
            id: 6,
            name: 'SUMMER',
            elements: ['sneakers', 'tshirts', 'shorts', 'hats']
        },
        {
            id: 7,
            name: 'WINTER',
            elements: ['boots', 'jackets', 'pull-over', 'tops', 'clothes', 'shoes']
        },
        {
            id: 8,
            name: 'COLORS',
            elements: ['White', 'Black', 'Yellow', 'Bleu', 'Purple', 'Red', 'Pink', 'Gold', 'Silver']
        },
        {
            id: 9,
            name: 'PRICE',
            elements: []
        },
    ],
    childrenPagecategories: [{
            id: 1,
            name: 'SALES',
            elements: ['shoes', 'clothes', 'accessories']
        },
        {
            id: 2,
            name: 'CLOTHES',
            elements: ['Dresses', 'quirts', 'tops', 'lingeries', 'wedding', 'wedding guest', 'Jeans', 'Jackets']
        },
        {
            id: 3,
            name: 'SHOES',
            elements: ['Heels', 'Sneakers', 'Sandals', 'Boots', 'Outdoor']
        },
        {
            id: 4,
            name: 'ACCESSORIES',
            elements: ['travel bags', 'handbags', 'belts', 'scarfs', 'hats', 'wallets', 'jewelries']
        },
        {
            id: 5,
            name: 'PARTY',
            elements: ['Dresses', 'Suits',
                'Girls shoes', 'Boys shoes'
            ]
        },
        {
            id: 6,
            name: 'SUMMER',
            elements: ['sneakers', 'tshirts', 'shorts', 'hats']
        },
        {
            id: 7,
            name: 'WINTER',
            elements: ['boots', 'jackets', 'pull-over', 'tops', 'clothes', 'shoes']
        },
        {
            id: 8,
            name: 'COLORS',
            elements: ['White', 'Black', 'Yellow', 'Bleu', 'Purple', 'Red', 'Pink', 'Gold', 'Silver']
        },
        {
            id: 9,
            name: 'PRICE',
            elements: []
        },
    ],
    accessoriesPagecategories: [{
            id: 1,
            name: 'SALES',
            elements: ['Men', 'Women']
        },
        {
            id: 4,
            name: 'SUBCATEGORIES',
            elements: ['Travel bags', 'Handbags', 'Belts', 'Scarfs', 'Hats', 'Wallets', 'Jewelries']
        },
        {
            id: 5,
            name: 'WEDDING',
            elements: ['Rings', 'Nakles', 'Gloves']
        },
        {
            id: 6,
            name: 'SUMMER',
            elements: ['Hats', 'Caps', 'Umbrellas']
        },
        {
            id: 7,
            name: 'WINTER',
            elements: ['Gloves', 'Hats']
        }
    ],
}
const getters = {
    menPagecategories: state => state.menPagecategories,
    womenPagecategories: state => state.womenPagecategories,
    childrenPagecategories: state => state.childrenPagecategories,
    accessoriesPagecategories: state => state.accessoriesPagecategories
}

export default {
    namespaced: true,
    state,
    getters
}