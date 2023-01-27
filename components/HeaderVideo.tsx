export default function HeaderVideo() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              src="/lapVideo.mp4"
              autoPlay
              muted
              loop
            ></video>
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative drop-shadow-md left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide text-white">
              Let's create
            </p>
            <h1 className="mt-1 drop-shadow-md text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block drop-shadow-md text-white">Давайте </span>
              <span className="block drop-shadow-md text-white">творить</span>
            </h1>

            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-orange-100 sm:px-8">
                Выбрать картину
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
