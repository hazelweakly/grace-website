const Blog = ({ title }: { title: string }) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen bg-green-900 bg-opacity-30">
      <div className="max-w-sm w-full lg:max-w-full lg:flex p-4">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          // style="background-image: url('/img/card-left.jpg')"
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal drop-shadow-lg">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Grace Durant</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
