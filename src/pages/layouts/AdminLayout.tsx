import Header from '../../components/common/header/Header';
import AdminDashboardMain from '../admin/AdminDashboardMain';
// import Footer from '../../components/common/footer/Footer';

export default function AdminLayout() {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <AdminDashboardMain />
            </div>
        </>
    )
}

/* 
`min-h-screen` is equivalent to min-height: 100vh in CSS, which means that the minimum height of the element will be equal to the height of the viewport. This ensures that the admin layout will always take up at least the full height of the screen, even if the content inside it is not enough to fill it. This is particularly useful for creating a visually appealing and user-friendly interface, as it prevents the layout from appearing too short or leaving empty space at the bottom of the page when there is not enough content to fill it. By using min-h-screen, we can ensure that our admin dashboard has a consistent and full-page layout regardless of the amount of content it contains.

`min-h-screen` is a Tailwind CSS utility class that sets the minimum height of an element to the height of the viewport. This means that the element will always be at least as tall as the screen, ensuring that it takes up the full height of the viewport even if its content is not enough to fill it. In this case, applying `min-h-screen` to the main container div ensures that the admin layout will always stretch to fill the entire height of the screen, providing a consistent and full-page layout for the admin dashboard. This is particularly useful for creating a visually appealing and user-friendly interface, as it prevents the layout from appearing too short or leaving empty space at the bottom of the page when there is not enough content to fill it.

❌ height: 100% needs a chain of heights

✅ min-h-screen breaks that chain problem by anchoring to viewport height instead of parent height, ensuring the layout always fills the screen regardless of content size.
*/