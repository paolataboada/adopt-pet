import { usePets } from "../hooks/usePets";

const PetsPage = () => {
    const { pets, loading } = usePets();

    if (loading) return <div className="text-center p-4">Loading...</div>;


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Pets</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {pets.map((pet) => (
                    <div key={pet.id} className="group relative border border-gray-200 rounded-md">
                        <img
                            alt={pet.name}
                            src={pet.photoUrls[0]}
                            className="aspect-square w-full rounded-t-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-20"
                        />
                        <div className="py-3 px-5 flex justify-between items-center">
                            <h3 className="font-medium text-sm text-gray-400 capitalize truncate">
                                <a href={pet.name}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {pet.name}
                                </a>
                            </h3>
                            <p className="font-medium text-xs text-gray-500 bg-gray-900 rounded-4xl py-1 px-2">
                                {pet.status}
                            </p>
                        </div>
                        <div className="pb-3 px-5 flex justify-center">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent 
                                bg-indigo-600 px-2 py-2 text-base font-medium text-white 
                                hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                            >
                                Adopt
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PetsPage