import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="visible sm:invisible fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 sm:text-sm">
                <div className="typewriter">
                    <p>
                        Selamat Datang di Website&nbsp;
                        <code className="font-mono font-bold">Bani Cholil.</code>
                    </p>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <Link
                    className="pointer-events-none flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0"
                    href="/"
                    rel="noopener noreferrer"
                >
                    By{' '}
                    <Image
                        src="/bc.svg"
                        alt="Bani Cholil Logo"
                        className="dark:invert"
                        width={120}
                        height={24}
                        priority
                    />
                </Link>
            </div>
        </div>
    )
}