import Home from '../Pages/Home';
import VideoPage from '../Pages/VideoPage';
import GamePage from '../Pages/GamePage';
import config from '../config';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import MarketPage from '../Pages/MarketPage/MarketPage';
import GroupPage from '../Pages/GroupPage/GroupPage';
import Messenger from '../Pages/Messenger/Messenger';
export const privateRoutes = [];
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.video, component: VideoPage },
    { path: config.routes.market, component: MarketPage },
    { path: config.routes.group, component: GroupPage },
    { path: config.routes.game, component: GamePage },
    { path: config.routes.messenger, component: Messenger },
    { path: config.routes.login, component: LoginPage },
    { path: config.routes.register, component: RegisterPage },
];
