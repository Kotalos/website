import Link from "next/link"

export default function Experience() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <svg
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto flex flex-row gap-5 max-w-2xl pt-32 sm:pt-48 lg:pt-56">
                    <div className="text-center">
                        <h1 className="text-5xl text-left font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                            Software Engineer
                        </h1>
                        <p className="mt-8 text-lg text-left font-medium text-pretty text-gray-500 sm:text-xl/8">
                            Full stack developer with startup experience (engineer 0 to 1) and
                            passionate about programming and innovation. I aim to
                            contribute to challenging projects while expanding my technical
                            expertise.
                        </p>
                        <div className="mt-8 flex items-center justify-start gap-x-6">
                            <Link href="#" className="text-sm/3 font-semibold text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="aspect-square w-full h-full">
                        <img src={`/imgs/profile.png`} className="w-full h-full aspect-square object-cover scale-x-[-1]" />
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <svg
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}
