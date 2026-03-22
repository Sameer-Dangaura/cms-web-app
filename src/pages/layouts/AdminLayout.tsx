import Header from '../../components/common/header/Header';
import AdminDashboardMain from '../admin/AdminDashboardMain';
// import Footer from '../../components/common/footer/Footer';

export default function AdminLayout() {
    return (
        <>
            <div className='flex flex-col'>
                <Header />
                <AdminDashboardMain />
            </div>
        </>
    )
}