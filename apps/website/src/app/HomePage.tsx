const HomePage = ({ title }: { title: string }) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen bg-slate-900 bg-opacity-70">
      <div>
        <div className="h-30 text-5xl p-10 font-normal text-slate-700"></div>
        <div className="p-12 2xl:container h-screen">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 h-full">
            <div className="md:col-span-2 lg:col-span-1 drop-shadow-xl">
              <div className="h-full py-8 px-6 space-y-6 border border-gray-200 bg-slate-50 rounded-lg">
                <div>
                  <div className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-semibold text-slate-600">
                      Software Engineer
                    </h3>
                    <div className="flex items-end gap-1 text-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full py-6 px-6 rounded-lg border border-gray-200 bg-slate-50 drop-shadow-xl">
                <div className="mt-2 flex justify-center gap-4">
                  <h3 className="text-3xl font-semibold text-slate-700">
                    Dancer
                  </h3>
                  <div className="flex items-end gap-1 text-red-500">
                    for over a decade
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
