import { Fragment } from 'react';

import { HeaderOnly } from '~/layouts';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import Search from '~/components/pages/Search';
import Upload from '~/components/pages/Upload';
import config from '~/config';
import Live from '~/components/pages/Live';

const publicRoutes = [
    { path: config.routes.root, Component: Home },
    { path: config.routes.following, Component: Following },
    { path: config.routes.upload, Component: Upload, Layout: HeaderOnly },
    { path: config.routes.profile, Component: Profile },
    { path: config.routes.search, Component: Search, Layout: Fragment },
    { path: config.routes.live, Component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
