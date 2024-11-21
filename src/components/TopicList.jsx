
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getTopic = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            console.log("Failed to fetch topic")
        }
        return res.json()
    } catch (error) {
        console.log(error);

    }
}

const TopicList = async () => {

    const { topics } = await getTopic(); // Default to an empty array


    return (
        <>
            {topics.map((t) => (
                <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div className="">
                        <h2 className="text-2xl font-bold">{t.title}</h2>
                        <div className="">{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id}/>
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TopicList




// {topics.map((t) => (
//     //         <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
//     //             <div className="">
//     //                 <h2 className='font-bold text-2xl'>{t.title}</h2>
//     //                 <div className="">{t.description}</div>
//     //             </div>
//     //             <div className="flex gap-2">
//     //                 <RemoveBtn />
//     //                 <Link href={`/editTopic/${t._id}`}>
//     //                     <HiPencilAlt size={24} />
//     //                 </Link>
//     //             </div>

//     //         </div>
//     //     ))}