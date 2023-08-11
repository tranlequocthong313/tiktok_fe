import { Fragment } from 'react';

import { HeaderOnly } from '~/components/Layouts';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import Search from '~/components/pages/Search';
import Upload from '~/components/pages/Upload';
import routes from '~/config/routes';

const publicRoutes = [
    { path: routes.root, Component: Home },
    { path: routes.following, Component: Following },
    { path: routes.upload, Component: Upload, Layout: HeaderOnly },
    { path: routes.profile, Component: Profile },
    { path: routes.search, Component: Search, Layout: Fragment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
