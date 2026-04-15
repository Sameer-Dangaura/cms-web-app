import { Outlet } from "react-router";
import Footer from './../../components/common/footer/Footer';
import Header from './../../components/common/header/Header';

export default function UserLayout() {
    return (
        <>
            <div className='flex flex-col'>
                <Header />

                <Outlet />

                <Footer />
            </div>

        </>
    )
}