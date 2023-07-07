import Image from 'next/image'
import Link from 'next/link'
import { Header } from "../../components/templates/header"
import { Footer } from "../../components/templates/footer"


export default function Profession() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <Header></Header>

            <Footer></Footer>
        </main>
    )
}