// src/app/api/users/route.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bihqharjyezzxhsghell.supabase.co'; // Replace with your Supabase URL
const supabaseKey = process.env.SUPABASE_KEY; // Add your Supabase key to .env.local
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
    const { username, email } = await request.json();

    if (!username || !email) {
        return new Response(JSON.stringify({ error: 'Username and email are required.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const { data, error } = await supabase
        .from('users')
        .insert([{ username, email }]);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify({ message: 'User added successfully!', data }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}

// src/app/api/users/route.js
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(request) {
//     const { username, email } = await request.json();

//     if (!username || !email) {
//         return new Response(JSON.stringify({ error: 'Username and email are required.' }), {
//             status: 400,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }

//     try {
//         const user = await prisma.users.create({
//             data: {
//                 username,
//                 email,
//             },
//         });

//         return new Response(JSON.stringify({ message: 'User added successfully!', user }), {
//             status: 201,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } finally {
//         await prisma.$disconnect();
//     }
// }
