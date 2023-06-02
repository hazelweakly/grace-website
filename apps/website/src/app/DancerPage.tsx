
export function Dancer({ title }: { title: string }) {
    return (
      <div>
        <div className="ml-auto mb-10 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-slate-100 h-screen">
          <div className="p-12 2xl:container h-screen">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-full">
              <div className="md:col-span-2 lg:col-span-1">
                <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                  <div>
                    <h5 className="text-xl text-gray-600 text-center">
                      Artist
                    </h5>
                    <div className="mt-2 flex justify-center gap-4">
                      <h3 className="text-3xl font-bold text-gray-700">
                        Dancer
                      </h3>
                      <div className="flex items-end gap-1 text-green-500">
                        for over a decade
                      </div>
                    </div>
                    <span className="block text-center text-gray-500">
                      Compared to last week $13,988
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                  <h5 className="text-xl text-gray-700">Teacher</h5>
                  <div className="my-8">
                    <h1 className="text-5xl font-bold text-gray-800">64,5%</h1>
                    <span className="text-gray-500">
                      Compared to last week $13,988
                    </span>
                  </div>
               
                  
                </div>
              </div>
              <div>
                <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                  <svg
                    className="w-40 m-auto"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <div className="mt-6">
                    <h5 className="text-xl text-gray-700 text-center">
                      Ask to customize
                    </h5>
                    <div className="mt-2 flex justify-center gap-4">
                      <h3 className="text-3xl font-bold text-gray-700">28</h3>
                      <div className="flex items-end gap-1 text-green-500">
                        <svg
                          className="w-3"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                        </svg>
                        <span>2%</span>
                      </div>
                    </div>
                    <span className="block text-center text-gray-500">
                      Compared to last week 13
                    </span>
                  </div>
                  <table className="mt-6 -mb-2 w-full text-gray-600">
                    <tbody>
                      <tr>
                        <td className="py-2">Tailored ui</td>
                        <td className="text-gray-500">896</td>
                        <td>
                          <svg
                            className="w-16 ml-auto"
                            viewBox="0 0 68 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Customize</td>
                        <td className="text-gray-500">1200</td>
                        <td>
                          <svg
                            className="w-16 ml-auto"
                            viewBox="0 0 68 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Other</td>
                        <td className="text-gray-500">12</td>
                        <td>
                          <svg
                            className="w-16 ml-auto"
                            viewBox="0 0 68 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default Dancer;