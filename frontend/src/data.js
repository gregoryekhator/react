//import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'debonairtraining',
            email: 'info@ebonairtraining.com',
            password: '123456',
            isAdmin: true,
        },
        {
            name: 'Greg',
            email: 'greg@debonairtraining.com',
            password: '123456',
            isAdmin: false,
        },
    ],
    products: [
        {
             _id: '1',
            name: 'Learning Management System (LMS)',
            slug: 'lms',
            category: 'LMS',
            image: '/images/screenshot.png', // 679px × 829px
            price: 'From ₦3M',
            countInStock: 10,
            brand: 'Debonair',
            rating: 5.0,
            numReviews: 723,
            description: 'World best Moodle LMS',
        },
        {
             _id: '2',
            name: 'School Portal, (Tertiary, Secondary, Primary)',
            slug: 'school-portal',
            category: 'Portals',
            image: '/images/schoolportal.png',
            price: 'From ₦2M',
            countInStock: 5,
            brand: 'Debonair',
            rating: 4.2,
            numReviews: 308,
            description: 'West African standard integrated with world class',
        },
        {
             _id: '3',
            name: 'Training Courses, (Staff & Students)',
            slug: 'courses',
            category: 'Courses',
            image: '/images/courses.png',
            price: 'From 100k',
            countInStock: 50,
            brand: 'Debonair',
            rating: 5.0,
            numReviews: 140,
            description: 'Benchmarked quality courses',
        },
        {
             _id: '4',
            name: 'Remote Viewing Security, (Setup & Support)',
            slug: 'remote-security',
            category: 'Remote Security',
            image: '/images/remotesecurity.png',
            price: 'From ₦250K',
            countInStock: 22,
            brand: 'Debonair',
            rating: 4.5,
            numReviews: 81,
            description: 'Best remote viewing of property, home and intelligence gathering for prevention',
        },
        {
             _id: '5',
            name: 'Moodle Training, (LMS)',
            slug: 'moodle',
            category: 'Courses',
            image: '/images/moodle.png',
            price: 'N150k',
            countInStock: 102,
            brand: 'Debonair',
            rating: 5.0,
            numReviews: 550,
            description: 'LMS brand of choice for the best universities and secondary schools in the world'
        },
        {
             _id: '6',
            name: 'React/Node.js, (Developer)',
            slug: 'react',
            category: 'Courses',
            image: '/images/react.png',
            price: 'N200k',
            countInStock: 55,
            brand: 'Debonair',
            rating: 4.1,
            numReviews: 157,
            description: 'The most sought after javascript library and highest rate of payment for professionals'
        },
    ],
};

export default data;

 