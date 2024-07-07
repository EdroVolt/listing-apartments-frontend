import ApartmentCard from "@/common/components/ApartmentCard";
import { Apartment } from "@/common/models/Apartment";
import { getData } from "@/common/utils/getData";
import Link from "next/link";

export default async function Home() {
  const { data: apartments } = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/apartments/`
  );

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {apartments.map((apartment: Apartment) => (
        <Link key={apartment._id} href={`/apartment-details/${apartment._id}`}>
          <ApartmentCard
            name={apartment.name}
            bathrooms={apartment.bathrooms}
            bedRooms={apartment.bedRooms}
            image={apartment.images[0]}
          />
        </Link>
      ))}
    </main>
  );
}
