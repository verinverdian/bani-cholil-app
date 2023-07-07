'use client'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

import { Header } from "../app/components/templates/header";
import { Footer } from "../app/components/templates/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header></Header>

      <div className="mt-10">
        <div className='md:m-1 sm:m-4'>
          <h1 className={`text-center text-5xl font-semibold`}>BANI CHOLIL</h1>
        </div>

        <div className='flex m-6 items-center justify-center'>
          <div className='md:w-1/2 lg:w-1/2 sm:w-full'>
            <div className={`text-md opacity-70 flex flex-center items-center justify-center`}>Halo,&nbsp;
              <Typewriter
                options={{
                  strings: ["kakek..", "nenek..", "saudara..", "saudari..", "anak..", "cucu..", "cicit..",],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className='text-md opacity-70 text-center'>
              Website ini dibangun untuk saling mengenal satu sama lain di keluarga Bani Cholil. Untuk mengeksplor lebih lanjut kalian bisa klik menu dibawah.
            </div>
          </div>
        </div>

        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className="mb-30 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/pages/histories"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Histori{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ⏳
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Mulai belajar tentang sejarah keluargamu
          </p>
        </Link>

        <Link
          href="/pages/hierarchy"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Silsilah{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              📍
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Temukan urutanmu di silsilah keluarga
          </p>
        </Link>

        <Link
          href="/pages/album"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Album{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              📸
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Ingat moment indah yang pernah terjadi keluargamu
          </p>
        </Link>

        <a
          href="/pages/profession"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Profesi{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              👨‍💼
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Saling terkoneksi satu sama lain
          </p>
        </a>
      </div>

      <Footer></Footer>
    </main>
  )
}