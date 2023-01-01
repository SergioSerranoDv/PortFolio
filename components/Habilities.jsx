export const Habilities = () => {
  return (
    <>
      <div className="sm:px-8 mt-16">
        <div className="mx-auto max-w-7xl lg:px-12">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="max-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  What I do
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:px-8 mt-6 md:mt-12">
        <div className=" mx-auto max-w-7xl lg:px-8">
          <div className=" relative px-4 sm:px-8 lg:px-12">
            <div className=" mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mt-4 grid max-w-2xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  <article class="group relative flex flex-col items-start">
                    <div className=" h-12 w-12 rounded-full dark:bg-zinc-100">
                      <img src="webDesign.png" />
                    </div>
                    <h2 class=" mt-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <span class="relative z-10">Web Design</span>
                    </h2>

                    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      I develop web pages for companies that need to innovate
                      their business model.The final product is based on good
                      practice to ensure its quality and scalability.
                    </p>
                    <div
                      aria-hidden="true"
                      class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        class="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                </div>

                <div className="lg:pl-16 xl:pl-24">
                  <article class="group relative flex flex-col items-start">
                    <div className=" h-12 w-12 rounded-full dark:bg-zinc-800">
                      <img src="backend.png" />
                    </div>
                    <h2 class=" mt-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <span class="relative z-10">Develop Backend</span>
                    </h2>

                    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      I develop backend for demanding applications in database
                      and transaction services. Performance and releability are
                      essential aspects of any system
                    </p>
                    <div
                      aria-hidden="true"
                      class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        class="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
