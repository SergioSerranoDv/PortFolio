/** @format */

import { getPortalImages } from '../lib/prisma/home'
import Image from 'next/image'
export default async function Description() {
  const { images } = await getPortalImages()
  console.log(images)
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="max-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Software engineer, founder and wanderlust
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I’m Sergio Serrano, a software engineer student and entrepreneur
                based in Neiva-Colombia. I’m the founder and CEO of AceCode,
                where we develop technologies that change everything.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  className="group p-1 "
                  href="https://twitter.com/Sergio07736272">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/Instagram.svg"
                    alt="Follow me on Instagram"
                  />
                </a>
                <a
                  className="group p-1"
                  href="https://github.com/SergioSerranoDv">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/Github.svg"
                    alt="Follow me on Github"
                  />
                </a>
                <a
                  className="group p-1"
                  href="https://www.linkedin.com/in/sergio-serrano-511339253/ ">
                  <Image
                    width={24}
                    height={24}
                    src="/icons/LinkedIn.svg"
                    alt="Follow me on LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20 ">
        <div className="-my-4 flex  justify-center gap-5 sm:px-8 overflow-hidden py-4 sm:gap-8">
          {images?.map((picture) => (
            <div
              key={picture.description}
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate  bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
              <Image
                alt={picture.description}
                width={224}
                height={300}
                sizes="(min-width: 640px) 18rem, 11rem"
                src={picture.url}
                className="absolute inset-0 h-full w-full object-cover  ring-1 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
