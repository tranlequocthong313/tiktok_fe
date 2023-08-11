import { HeaderOnly } from '~/components/Layouts';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import Upload from '~/components/pages/Upload';

const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/upload', Component: Upload, Layout: HeaderOnly },
    { path: '/:nickname', Component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
