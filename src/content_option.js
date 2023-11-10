import {alphalete} from "./assets/images/alphalete.png"
import {ehungry} from "./assets/images/ehungry.png"
import {landing} from "./assets/images/Landing-page.png"
import {vintage} from "./assets/images/vintage.png"

const logotext = "JOHN";
const meta = {
    title: "John Doe",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m John Doe",
    animated: {
        first: "We love coding",
        second: "We code cool websites",
    },
    description: " Elevate Your Digital Presence with our team!",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Our motto",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    }
];

const services = [{
        title: "Web Design",
        description: "Beyond Aesthetics: We Sculpt Digital Masterpieces that Captivate and Convert.",
    },
    {
        title: "Development",
        description: "Code Craftsmanship: Turning Vision into Seamless, Responsive Reality",
    },
    {
        title: "UX/UI",
        description: "User-Centric Brilliance: Crafting Intuitive Journeys for Unforgettable Experiences.",
    },
];

const dataportfolio = [{
        img: require('./assets/images/alphalete.png'),
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://alphalete.uk/",
    },
    {
        img: require('./assets/images/vintage.png'),
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://www.vintazeentertainments.com/",
    },
    {
        img: require('./assets/images/Landing-page.png'),
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://react-landing-page-template-2021.vercel.app/",
    },
    {
        img: require('./assets/images/ehungry.png'),
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://statuesque-kelpie-e69378.netlify.app/",
    },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};