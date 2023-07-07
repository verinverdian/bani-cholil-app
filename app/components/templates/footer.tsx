import Link from 'next/link'

export function Footer() {
    return (
        <div className='mb-8'>
            <p className={`mt-10 text-center text-sm opacity-50`}>
                Copyright &#169; {(new Date().getFullYear())} by Bani Cholil (ig:<Link href="https://www.instagram.com/banicholilid"
                    className="underline underline-offset-1"
                    rel="noopener noreferrer"
                    target="_blank"
                >@banicholilid</Link>)
            </p>
            <p className={`m-4 text-center text-sm opacity-50`}>
                Made with 💖 by Team
            </p>
        </div>
    )
}