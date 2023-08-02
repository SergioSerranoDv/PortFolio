/** @format */

import Image from 'next/image'
import { getProjects } from '../lib/prisma/projects'

export default async function MyProjects() {
  const { projects } = await getProjects()
  console.log(projects)
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="px-12 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <header className="max-w-2xl">
            <h1 className=" text-4xl font-bold tracking-light text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Things I&apos;ve done in my professional career
            </h1>
            <p className=" mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;ve worked on tons of little projects over the years but
              these are the ones that I&apos;m most proud of. Many of them are
              open-source, so if you see something that piques your interest,
              check out the code and contribute if you have ideas for how it can
              be improved.
            </p>
          </header>
          <div className="mt-16 sm:mt-20">
            <div
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 ">
              {projects?.map((project, index) => (
                <div
                  className="group flex flex-col items-start p-4 border border-gray-500 rounded-lg "
                  key={project.title}>
                  <div className="flex w-12 h-12 justify-center items-center rounded-full bg-white shadow-md shadow-zinc-800/5 borderborder-zinc-700/50 dark:bg-white ring-0">
                    <Image
                      width={24}
                      height={24}
                      src={project.image}
                      alt={index}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-white dark:text-zinc-100">
                    {project.title}
                  </h2>
                  <p class="relative z-10 h-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <a
                    className="mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200 cursor-pointer"
                    href={project.url}>
                    Link Github
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
