import Image from 'next/image'
import Link from 'next/link'
import { Header } from "../../components/templates/header"
import { Footer } from "../../components/templates/footer"
import { MEMBERS } from '@/constants/data'


export default function Hierarchy() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <Header></Header>

            {MEMBERS.map((data, index) =>
                <div key={index} className="">
                    <div className="flex">
                        <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
                            <details className="">
                                <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">
                                    <p>{data.name} & {data.spouse}</p>
                                    <p className='text-sm'>{data.desc}</p>
                                </summary>
                                {/* <p className="pt-1 pb-3 px-4">{data.desc}</p> */}
                                <div className="">
                                    <ul className="list-disc ml-6">
                                        {data.child.map((row, index) => (
                                            <div key={index}>
                                                <li>
                                                    <p className="mt-4 mb-2 text-blue-800 text-xl">{row.name}</p>
                                                    <p className="mt-2 mb-4 text-sm text-slate-400">{row.spouse}</p>
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            )}

            <Footer></Footer>
        </main>
    )
}