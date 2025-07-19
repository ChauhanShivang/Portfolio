import project1_img from '../assets/project_1.png'
import project2_img from '../assets/project_2.png'
import project3_img from '../assets/project_3.png'
import project4_img from '../assets/project_4.png'
import project5_img from '../assets/project_5.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"AI SaaS Platform",
        w_desc: "Developed a full-stack AI SaaS platform offering article generation, blog title suggestions, AI image creation, and image editing features like background and object removal. Integrated user authentication, Clerk-powered subscriptions, and free-tier usage limits with secure JWT-based APIs.",
        w_img:project5_img,
        w_link: "https://ai-saas-platform-client.vercel.app/"
    },
    {
        w_no:2,
        w_name:"Hotel Booking Platform",
        w_desc: "Developed a full-stack hotel booking website with room listings, user authentication, real-time availability checks, and Stripe payment integration. Features include owner dashboards, socket-based updates, and secure JWT-based APIs.",
        w_img:project1_img,
        w_link: "https://hotel-booking-frontend-blue.vercel.app/"
    },
    {
        w_no:3,
        w_name:"Food Ordering Platform",
        w_desc: "Built a responsive online food ordering system with user login, live order tracking, and an admin panel for managing items, orders, and users. Integrated REST APIs and MongoDB for data handling.",
        w_img:project2_img,
        w_link: "https://food-del-frontend-eta.vercel.app/"
    },
    {
        w_no:4,
        w_name:"Real Time Chat App",
        w_desc: "Created a real-time chat app supporting private messaging using Socket.io. Included user login, chat history, and active user updates with JWT authentication and MongoDB backend.",
        w_img:project3_img,
        w_link: "https://chat-app-gold-theta.vercel.app/login"
    },
    {
        w_no:5,
        w_name:"Spotify Clone",
        w_desc: "Built a Spotify-inspired music streaming web app with playlists, and real-time song playback UI. Implemented audio controls, dynamic song fetching, and RESTful APIs using MERN stack.",
        w_img:project4_img,
        w_link: "https://spotify-frontend-rouge.vercel.app/"
    },
]
 
export default mywork_data;