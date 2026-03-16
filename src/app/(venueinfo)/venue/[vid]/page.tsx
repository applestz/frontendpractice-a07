import Image from "next/image";

export default async function VenueDetailPage({params} : {params:Promise<{vid:string}>}) {
    const {vid} = await params;

    // Mock Data for Demonstration Only
    const mockVenueRepo = new Map()
    mockVenueRepo.set("001", {name: "The Bloom Pavilion", image: "/bloom.jpg"})
    mockVenueRepo.set("002", {name: "Spark Space", image: "/sparkspace.jpg"})
    mockVenueRepo.set("003", {name: "The Grand Table", image: "/grandtable.jpg"})

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={(mockVenueRepo.get(vid)).image}
                alt="Car Image"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5">{(mockVenueRepo.get(vid)).name}</div>
            </div>
        </main>
    )
}