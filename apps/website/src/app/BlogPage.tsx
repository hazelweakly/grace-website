import { Card } from '@grace-website/components';

const Blog = ({ title }: { title: string }) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen p-1.5">
      <img 
      src='/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg'
      alt=''
      className='w-full h-full object-cover absolute mix-blend-overlay opacity-90'/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Card
            title="GitHub Project Workflow for Multiple Collaborators"
            name="Grace Durant"
            date="Nov 28, 2022"
            image="/assets/images/blogGitWorkflow.jpg"
            description="I wrote this blog to articulate the Git workflow for when there
            are multiple contributors. I noticed when I was collaborating
            with other students I always ended up was teaching them the
            workflow. I wanted to make it more accessible for the other
            students in my cohort. They found it really helpful, so I wanted
            to share it here as well."
          />
          <Card
            title="Recoil to the Rescue"
            name="Grace Durant"
            date="Dec 16, 2022"
            image="/assets/images/blogRecoil.jpg"
            description="Throughout my last few projects, I used useState to manage the
            different states I was tracking in my app. My apps continually
            had way too many props passed to and through the components.
            Because of this, I called my last several projects “prop happy.”
            Entering my final project for Bootcamp, I am taking a different
            approach. Enter Recoil. Recoil is a state management library for
            React."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
