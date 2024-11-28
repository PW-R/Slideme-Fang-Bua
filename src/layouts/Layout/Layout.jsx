import { Outlet } from 'react-router';
import './Layout.css'
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
function Layout({tab, setTab,}) {
    return ( <div>
        <Head />
        <br />
        <Outlet />
        <br />
        <Footer tab={tab} setTab={setTab} />
    </div> );
}

export default Layout;