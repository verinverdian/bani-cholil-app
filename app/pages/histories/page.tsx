import Image from 'next/image'
import Link from 'next/link'
import { Header } from "../../components/templates/header"
import { Footer } from "../../components/templates/footer"

export default function Histories() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <Header></Header>
            <div className="z-10 mt-10 w-full max-w-5xl items-center justify-between">
                <div className='flex items-center justify-center'>
                    <div className="w-6/12 sm:w-3/12">
                        <Image alt="" width={500} height={500} src="http://source.unsplash.com/800x800/?tree" className="max-w-full h-auto border-none rounded shadow align-middle" />
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}