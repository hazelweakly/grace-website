import { Card } from '@grace-website/components';

const Blog = ({ title }: { title: string }) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen bg-green-900 bg-opacity-30 p-1.5">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
        <div className="w-auto lg:max-w-full lg:flex p-1.5 h-fit">
          <img
            className="bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src="/assets/images/blogGitWorkflow.jpg"
            alt="team collaborating"
          />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal drop-shadow-lg">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">Medium</p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                GitHub Project Workflow for Multiple Collaborators
              </div>
              <p className="text-gray-700 text-base overflow-hidden">
                I wrote this blog to articulate the Git workflow for when there
                are multiple contributors. I noticed when I was collaborating
                with other students I always ended up was teaching them the
                workflow. I wanted to make it more accessible for the other
                students in my cohort. They found it really helpful, so I wanted
                to share it here as well.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Grace Durant</p>
                <p className="text-gray-600">Nov 28, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto lg:max-w-full lg:flex p-1.5 h-fit">
          <img
            className="bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src="/assets/images/blogRecoil.jpg"
            alt="team collaborating"
          />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal drop-shadow-lg">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">Medium</p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Recoil to the Rescue
              </div>
              <p className="text-gray-700 text-base">
                Throughout my last few projects, I used useState to manage the
                different states I was tracking in my app. My apps continually
                had way too many props passed to and through the components.
                Because of this, I called my last several projects “prop happy.”
                Entering my final project for Bootcamp, I am taking a different
                approach. Enter Recoil. Recoil is a state management library for
                React.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Grace Durant</p>
                <p className="text-gray-600">Dec 16, 2022</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
