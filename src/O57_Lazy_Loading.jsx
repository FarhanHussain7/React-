// It will improve the performance of your application.
// In React, lazy loading is a technique that allows you to load components only when they are needed, rather than loading them all at once when the application starts. This can significantly improve the performance of your application, especially if you have large components or libraries that are not used on every page.
// React provides a built-in function called `React.lazy()` that allows you to define a component that will be loaded lazily. You can use it in combination with `Suspense` to show a fallback UI while the component is being loaded.

import React, { Suspense, useState } from 'react';
// import UserLazy from './Example/O57_User';

const UserLazy = React.lazy(() => import('./Example/O57_User'));



function LazyLoading(){

    const [loaded, setLoaded] = useState(false);
    return(
        <div>
            <h1>Lazy Loading....</h1>
            {
                // If loaded is true, then load the UserLazy component
                // Suspense is used to show a fallback UI while the component is being loaded
                loaded ? <Suspense fallback={<div>Loading...</div>}><UserLazy/></Suspense> : null
            }

            <button onClick={()=>setLoaded(!loaded)}>Load</button>
        </div>
    )

}

export default LazyLoading;