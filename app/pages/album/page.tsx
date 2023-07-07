import Image from 'next/image'
import Link from 'next/link'
import { Header } from "../../components/templates/header"
import { Footer } from "../../components/templates/footer"


export default function Album() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <Header></Header>
            <div className="container mx-auto my-12">
                <div className="flex flex-wrap justify-center">
                    <div className="px-4 w-6/12 sm:w-3/12">
                        <Image alt="" width={500} height={500} src="http://source.unsplash.com/800x800/?tree" className="max-w-full h-auto border-none rounded shadow align-middle" />
                    </div>
                    <div className="px-4 w-6/12 sm:w-3/12">
                        <Image alt="" width={500} height={500} src="http://source.unsplash.com/800x800/?tree" className="max-w-full h-auto border-none rounded shadow align-middle" />
                    </div>
                    <div className="px-4 w-6/12 sm:w-3/12">
                        <Image alt="" width={500} height={500} src="http://source.unsplash.com/800x800/?tree" className="max-w-full h-auto border-none rounded shadow align-middle" />
                    </div>   
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}