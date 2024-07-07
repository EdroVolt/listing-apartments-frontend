import Image from "next/image";

type ApartmentCardProps = {
  name: string;
  bedRooms: number;
  bathrooms: number;
  image: string;
};

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  name,
  bathrooms,
  bedRooms,
  image,
}) => {
  const fallBackImage = "/apartment-placeholder.png"
  return (
    <div>
      <Image
        src={image || fallBackImage}
        alt={name}
        width={500}
        height={290}
      />
      <div className="p-2">
        <span className="text-3xl">{name}</span>
        <ul>
          <li>bedRooms: {bedRooms}</li>
          <li>bathrooms: {bathrooms}</li>
        </ul>
      </div>
    </div>
  );
};

export default ApartmentCard;
