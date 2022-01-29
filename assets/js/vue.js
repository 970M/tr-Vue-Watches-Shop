// ----------------------------------
// Data
// ----------------------------------

const products = [
    {
        id: 1,
        description: "Quarz Luxe",
        price: 12,
        img: "assets/img/quarz-luxe.JPG",
    },
    {
        id: 2,
        description: "Curren Business",
        price: 20,
        img: "assets/img/curren-business.JPG",
    },
    {
        id: 3,
        description: "Curren Sport",
        price: 5,
        img: "assets/img/curren-sport.JPG",
    },
    {
        id: 4,
        description: "Jaragar Racing",
        price: 8,
        img: "assets/img/jaragar-racing.JPG",
    },
    {
        id: 5,
        description: "Liges Hommes",
        price: 3,
        img: "assets/img/liges-hommes.JPG",
    },
    {
        id: 6,
        description: "Maserati Mechanical",
        price: 65,
        img: "assets/img/maserati-mechanical.JPG",
    },
    {
        id: 7,
        description: "Montre Mecanique",
        price: 25,
        img: "assets/img/montre-mecanique.JPG",
    },
    {
        id: 8,
        description: "Brand Designer",
        price: 28,
        img: "assets/img/brand-designer.JPG",
    },
    {
        id: 9,
        description: "Relogio Masculino",
        price: 4,
        img: "assets/img/relogio-masculino.JPG",
    },
    {
        id: 10,
        description: "Tissot Multifunction",
        price: 29,
        img: "assets/img/tissot-multifunction.JPG",
    },
    {
        id: 11,
        description: "Hip Hop Gold",
        price: 87,
        img: "assets/img/hiphop-gold.JPG",
    },
    {
        id: 12,
        description: "Mesh Genova",
        price: 6,
        img: "assets/img/mesh-genova.JPG",
    },
];

// ----------------------------------
// App
// ----------------------------------

const app = Vue.createApp({
    data() {
        return {};
    },
});

// ----------------------------------
// Components
// ----------------------------------

// ----------------------------------
// Router
// ----------------------------------

// --- Router components Vue3

// Home
app.component("home", {
    template: "#home",
    name: "Home",
    data: () => {
        return { products, searchKey: "" };
    },
    // ~ eventListener, surveiller des événements (modification de variables ...)
    computed: {
        filteredList() {
            return this.products.filter((item) => {
                console.log(item);
                return item.description.toLowerCase().includes(this.searchKey.toLowerCase());
            });
        },
    },
    // Reagit sur une action de l'utilisateur
    methods: {},
});
const Home = app.component("home");

// UserSettings
app.component("user-settings", {
    template: "#user-settings",
    name: "UserSettings",
});
const UserSettings = app.component("user-settings");

// WishList
app.component("wish-list", {
    template: "#wish-list",
    name: "WishList",
});
const WishList = app.component("wish-list");

// ShoppingCard
app.component("ShoppingCart", {
    template: "#shopping-cart",
    name: "ShoppingCart",
});
const ShoppingCart = app.component("ShoppingCart");

// --- Router

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home, name: "Home" },
        {
            path: "/user-settings",
            component: UserSettings,
            name: "UserSettings",
        },
        { path: "/wish-list", component: WishList, name: "WhishList" },
        {
            path: "/shopping-cart",
            component: ShoppingCart,
            name: "ShoppingCart",
        },
    ],
});
app.use(router);

// ---
app.mount("#app");

// Déclaration FS
// const { default: Vue } = require("vue");
// const Vue = new Vue({
//     router,
// }).$mount("#app");

// Timecodes :
// 0:00 - Intro
// 5:10 - Config & router
// 23:07 - Affichage des données
// 55:30 - Les cookies
// 1:04:56 - Le shopping cart (crud)
// 1:38:40 - Les transitions
