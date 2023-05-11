import Image from "next/image";

const RightHandedCard = ({image, title, description, price=null}) => {
  return (
    <div className="mx-auto my-20 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mx-auto flex flex-col-reverse sm:flex-row justify-center items-center">
        <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10 justify-center">
          <h1 className="mt-1 text-2xl font-bold uppercase text-gray-900 sm:tracking-tight lg:text-4xl">
            {title}
          </h1>
          {price && <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
            something
          </h1>}
          <p className="max-w-xl mt-3 text-gray-600">{description}</p>
        </div>
        <Image
          alt={title}
          className="rounded-lg max-h-28 object-contain sm:max-h-none"
          src={image}
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default RightHandedCard;
