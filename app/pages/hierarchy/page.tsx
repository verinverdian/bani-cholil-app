import Image from 'next/image'
import Link from 'next/link'
import { Header } from "../../components/templates/header"
import { Footer } from "../../components/templates/footer"


export default function Hierarchy() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <Header></Header>
            <div className=''>
                <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
                    <details>
                        <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">How is this made?</summary>
                        <p className="pt-1 pb-3 px-4">With the HTML5 <code className="text-sm text-red-500">details</code> element and some Tailwind for showcase.</p>
                    </details>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}