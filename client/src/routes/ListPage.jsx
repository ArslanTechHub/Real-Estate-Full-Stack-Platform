// // import React, { Suspense } from "react";
// // import Filter from "../components/Filter";
// // import Card from "../components/Card";
// // import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
// // import Map from "../components/Map";
// // import { Await, useLoaderData } from "react-router-dom";

// // const ListPage = () => {
// //   const data = useLoaderData();

// //   return (
// //     <div className="flex w-full h-screen">
// //       <div className="w-[60%] p-4 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
// //         <div className="flex flex-col gap-4">
// //           <Filter />
// //           <Suspense fallback={<p>Loading...</p>}>
// //             <Await
// //               resolve={data.postResponse}
// //               errorElement={<p>Error loading posts</p>}
// //             >
// //               {(postResponse) =>
// //                 postResponse.data.map((post) => (
// //                   <Card key={post.id} item={post} />
// //                 ))
// //               }
// //             </Await>
// //           </Suspense>
// //         </div>
// //       </div>
// //       <div className="w-[40%] h-full">
// //         <Suspense fallback={<p>Loading...</p>}>
// //           <Await
// //             resolve={data.postResponse}
// //             errorElement={<p>Error loading map</p>}
// //           >
// //             {(postResponse) => <Map items={postResponse.data} />}
// //           </Await>
// //         </Suspense>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListPage;

// import React, { Suspense } from "react";
// import Filter from "../components/Filter";
// import Card from "../components/Card";
// import Map from "../components/Map";
// import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
// import { Await, useLoaderData } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const ListPage = () => {
//   const data = useLoaderData();

//   return (
//     <div className="flex w-full h-screen">
//       <div className="w-[60%] p-4 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//         <div className="flex flex-col gap-4">
//           <Suspense fallback={<Skeleton height={60} width="100%" />}>
//             <Filter />
//           </Suspense>
//           <Suspense fallback={
//             <div className="flex flex-col gap-4">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Skeleton key={i} height={150} width="100%" />
//               ))}
//             </div>
//           }>
//             <Await
//               resolve={data.postResponse}
//               errorElement={<p>Error loading posts</p>}
//             >
//               {(postResponse) =>
//                 postResponse.data.map((post) => (
//                   <Card key={post.id} item={post} />
//                 ))
//               }
//             </Await>
//           </Suspense>
//         </div>
//       </div>
//       <div className="lg:w-[40%] lg:h-full w-[40%]  h-full">
//         <Suspense fallback={<Skeleton height="100%" width="100%" />}>
//           <Await
//             resolve={data.postResponse}
//             errorElement={<p>Error loading map</p>}
//           >
//             {(postResponse) => <Map items={postResponse.data} />}
//           </Await>
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default ListPage;


// import React, { Suspense, useState } from "react";
// import Filter from "../components/Filter";
// import Card from "../components/Card";
// import Map from "../components/Map";
// import "tailwindcss/tailwind.css";
// import { Await, useLoaderData } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const ListPage = () => {
//   const data = useLoaderData();
//   const [showMap, setShowMap] = useState(false);

//   return (
//     <div className="flex flex-col lg:flex-row w-full h-screen">
//       <div className={`w-full ${showMap ? 'hidden' : 'block'} lg:block lg:w-[60%] p-4 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded`}>
//         <div className="flex flex-col gap-4">
//           <Suspense fallback={<Skeleton height={60} width="100%" />}>
//             <Filter />
//           </Suspense>
//           <Suspense fallback={
//             <div className="flex flex-col gap-4">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Skeleton key={i} height={150} width="100%" />
//               ))}
//             </div>
//           }>
//             <Await
//               resolve={data.postResponse}
//               errorElement={<p>Error loading posts</p>}
//             >
//               {(postResponse) =>
//                 postResponse.data.map((post) => (
//                   <Card key={post.id} item={post} />
//                 ))
//               }
//             </Await>
//           </Suspense>
//         </div>
//       </div>
//       <div className={`w-full ${showMap ? 'block' : 'hidden'} lg:block lg:w-[40%] h-full`}>
//         <Suspense fallback={<Skeleton height="100%" width="100%" />}>
//           <Await
//             resolve={data.postResponse}
//             errorElement={<p>Error loading map</p>}
//           >
//             {(postResponse) => <Map items={postResponse.data} />}
//           </Await>
//         </Suspense>
//       </div>
//       <button 
//         className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full lg:hidden"
//         onClick={() => setShowMap(!showMap)}
//       >
//         {showMap ? 'Show List' : 'Show Map'}
//       </button>
//     </div>
//   );
// };

// export default ListPage;



import React, { Suspense, useState, useEffect, useRef } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";
import "tailwindcss/tailwind.css";
import { Await, useLoaderData } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ListPage = () => {
  const data = useLoaderData();
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (mapRef.current && showMap) {
      mapRef.current.invalidateSize();
      mapRef.current.setView([31.5204, 74.3587], 5);
      setMapLoaded(true);
    }
  }, [showMap]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className={`w-full ${showMap ? 'hidden' : 'block'} lg:block lg:w-[60%] p-4 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded`}>
        <div className="flex flex-col gap-4">
          <Suspense fallback={<Skeleton height={60} width="100%" />}>
            <Filter />
          </Suspense>
          <Suspense fallback={
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} height={150} width="100%" />
              ))}
            </div>
          }>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className={`w-full ${showMap ? 'block' : 'hidden'} lg:block lg:w-[40%] h-full`}>
        <Suspense fallback={<Skeleton height="100%" width="100%" />}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading map</p>}
          >
            {(postResponse) => (
              <>
                {!mapLoaded && showMap && <div className="w-full h-full flex items-center justify-center">Loading map...</div>}
                <Map items={postResponse.data} setMapRef={(ref) => mapRef.current = ref} />
              </>
            )}
          </Await>
        </Suspense>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full lg:hidden"
        onClick={() => setShowMap(!showMap)}
      >
        {showMap ? 'Show List' : 'Show Map'}
      </button>
    </div>
  );
};

export default ListPage;