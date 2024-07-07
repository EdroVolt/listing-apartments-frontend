import { Apartment } from "@/common/models/Apartment";
import { getData } from "@/common/utils/getData";
import Image from "next/image";

type ApartmentsDetailsParams = {
  id: string;
};

type ApartmentDetailsProps = {
  params: ApartmentsDetailsParams;
};

const ApartmentDetails: React.FC<ApartmentDetailsProps> = async ({
  params,
}) => {
  const apartment: Apartment = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/apartments/${params.id}/`
  );

  const fallBackImage = "/apartment-placeholder.png";

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
      <ul className="text-2xl space-y-5">
        <li>Name: {apartment.name}</li>
        <li>Description: {apartment.description}</li>
        <li>BedRooms: {apartment.bedRooms}</li>
        <li>Bathrooms: {apartment.bathrooms}</li>
        <li>Size: {apartment.size}m</li>
        <li>Price: ${apartment.price}</li>
      </ul>
      <Image
        src={apartment.images[0] || fallBackImage}
        alt={apartment.name}
        width={500}
        height={300}
      />
    </main>
  );
};

export default ApartmentDetails;
