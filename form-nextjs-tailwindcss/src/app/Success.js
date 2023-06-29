import { useRouter } from 'next/router'

export default function Success() {
    const router = useRouter();
    return (
        <main className=" h-screen flex items-center justify-center">
            <div className=' text-gray-700 p-20 flex-1 bg-white '>
                <h1>you have successfully submitted form {router.query.name} </h1>
                <p className="text-lg text-gray-500">
                    we sent you an email over {router.query.email}. We will get back to you as soon as wew can!
                </p>
            </div>
        </main>
    );
}


