import User from './pages/User.vue';
import Barang from './pages/Barang.vue';

export const routes = [
    {
        path: '/',
        name: 'User',
        component: User,
        meta: {
            title: 'User',
        },
    },
    {
        path: '/barang',
        name: 'Barang',
        component: Barang,
        meta: {
            title: 'Barang',
        },
    },
]