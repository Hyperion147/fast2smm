// // components/TargetAudience.js
// import React from 'react';
// import { FaChalkboardTeacher, FaUserMd, FaComments } from 'react-icons/fa';

// const TargetAudience = () => {
//   const audiences = [
//     {
//       icon: <FaChalkboardTeacher className="text-4xl text-primary mb-4" />,
//       title: ,
//       description: ''
//     },
//     {
//       icon: <FaUserMd className="text-4xl text-primary mb-4" />,
//       title: ,
//       description: ''
//     },
//     {
//       icon: <FaComments className="text-4xl text-primary mb-4" />,
//       title: ,
//       description: ''
//     }
//   ];

//   return (
//     <section className="py-20 px-5 text-center bg-white" id="audience">
//       <div className="container mx-auto">
//         
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-15">
//           {audiences.map((audience, index) => (
//             <div 
//               key={index}
//               className="p-8 text-center rounded-xl shadow-sm bg-lightGray"
//               style={{ 
//                 animationDelay: `${index * 0.2}s`,
//                 animationFillMode: 'forwards'
//               }}
//             >
//               {audience.icon}
//               <h3 className="text-xl font-heading mb-3">{audience.title}</h3>
//               <p>{audience.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ;

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function TargetAudience() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-black/[0.05] items-center relative overflow-hidden pt-30">
      <h2 className="text-4xl font-heading mb-15">Who We Serve</h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Expand your coaching business through powerful social media presence",
    name: 'Coaches',
    title: "",
  },
  {
    quote:
      "Build trust and credibility in your medical practice",
    name: 'Doctors',
    title: "",
  },
  {
    quote: "Reach more clients and grow your facilitation business",
    name: 'Facilitators',
    title: "",
  }
];
