import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const Card = ({
  name,
  date,
  title,
  image,
  description,
}: {
  title: string;
  name: string;
  date: string;
  image: string;
  description: string;
}) => (
  <div className="w-auto lg:max-w-full lg:flex p-1.5 h-fit overflow-hidden">
    <AspectRatio.Root ratio={16 / 9}>
      <img
        className="object-cover w-full h-full"
        // className="bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        src={image}
        alt="team collaborating"
      />
    </AspectRatio.Root>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal drop-shadow-lg">
      <div className="mb-8">
        <p className="text-sm text-gray-600 flex items-center">Medium</p>
        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-hidden">{description}</p>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{name}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
