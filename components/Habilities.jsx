/** @format */
import Image from 'next/image'
export const Habilities = () => {
  return (
    <div className="sm:px-6">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <h1 className="text-4xl mt-9 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
            What I do
          </h1>
          <div className="flex justify-center">
            <div className="mt-9 grid max-w-2xl gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16">
                <article className="group relative flex flex-col items-start">
                  <div className="flex justify-center items-center w-12 py-2 px-2 rounded-full bg-white lg:w-16">
                    <Image
                      width={48}
                      height={48}
                      src="/icons/TagHTML.svg"
                      alt="Web designer"
                    />
                  </div>
                  <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <h2 className=" mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
                    Frontend Developer
                  </h2>
                  <p className="z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    I develop web pages for companies that need to innovate
                    their business model.The final product is based on good
                    practice to ensure its quality and scalability.
                  </p>
                </article>
              </div>
              <div className="lg:pl-16 xl:pl-24">
                <article className="group relative flex flex-col items-start">
                  <div className="flex justify-center items-center w-12 py-2 px-2 rounded-full bg-white lg:w-16   ">
                    <Image
                      width={48}
                      height={48}
                      src="/icons/DataStorage.svg"
                      alt="Backend Icon"
                    />
                  </div>
                  <div className="absolute -inset-y-6 -inset-x-4  scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <h2 className=" mt-3 text-2xl font-semibold tracking-tight text-white z-10">
                    Backend Developer
                  </h2>
                  <p className="z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    I develop backend for demanding applications in database and
                    transaction services. Performance and releability are
                    essential aspects of any system
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
