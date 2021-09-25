import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mt-10">
        <div className="relative h-60 w-60">
          <Image
            src={img}
            layout="fill"
            alt="Razu Islam"
            className="rounded-xl"
          />
        </div>
        <h3 className="text-2xl mnt-3">{title}</h3>
      </div>
    </>
  );
};

export default MediumCard;
