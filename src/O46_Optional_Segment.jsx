// Import routing tools and components
import { Link, Route, Routes } from 'react-router';
import About from '../../shoping/src/about';
import NavBar from './Example/O40_NavBar';
import Page404 from './Example/O41_PageNotFound';
import CollageDetails from './Example/O42_Collage';
import StudentDetails from './Example/O42_Student';
import Depart from './Example/O42_Department';
import Staff from './Example/O42_Staff';
import CourseDetails from './Example/O42_CourseDetails';
import UserList from './Example/O45_User_list';
import UserDetail from './Example/O45_User_Details';

function Optioanl() {
  return (
    <>
      {/* NavBar will wrap all nested routes */}
      <Routes>
        <Route element={<NavBar />}>
          {/* Home route */}
          <Route path='/' element={<h>Home Page</h>} />

          {/* About page */}
          <Route path='/about' element={<About />} />

          {/* Optional route with optional segment (?) */}
          <Route path='/userlist/list?' element={<UserList />} />

          {/* Dynamic route with optional name */}
          <Route path='/userlist/:id/:name?' element={<UserDetail />} />

          {/* Nested route group for /user */}
          <Route path='user'>
            <Route path='/user/login' element={<h>Contact Page</h>} />
          </Route>

          {/* Nested route group for /in */}
          <Route path='in'>
            <Route path='/in/help' element={<h>Help Page</h>} />
          </Route>
        </Route>

        {/* Collage section with nested routes */}
        <Route path='/collage' element={<CollageDetails />}>
          <Route index element={<StudentDetails />} />
          <Route path='department' element={<Depart />} />
          <Route path='staff' element={<Staff />} />
          <Route path='course' element={<CourseDetails />} />
        </Route>

        {/* Catch-all route for 404 page */}
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default Optioanl;