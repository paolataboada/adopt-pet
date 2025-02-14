import ReactPaginate from "react-paginate";
import { usePets } from "../hooks/usePets";
import { useState } from "react";

const PetsPage = () => {
    const { pets, loading } = usePets();

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = pets.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(pets.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % pets.length;
        setItemOffset(newOffset);
    };

    if (loading) return <div className="text-center p-4">Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Pets</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {currentItems.map((pet, index) => (
                    <div key={index} className="group relative border border-gray-200 rounded-md">
                        <img
                            alt={pet.name}
                            src={pet.photoUrls[0]}
                            className="aspect-square w-full rounded-t-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-20"
                        />
                        <div className="py-3 px-5 flex justify-between items-center">
                            <h3 className="font-medium text-sm text-gray-400 capitalize truncate">
                                {pet.name}
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
            <div className="my-6">
                <ReactPaginate
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    pageClassName="page-item"
                    pageLinkClassName="block border border-white w-10 text-center py-2 cursor-pointer select-none"
                    previousClassName="page-item"
                    previousLinkClassName="block border border-white rounded-l-md w-22 text-center py-2 cursor-pointer select-none"
                    nextClassName="page-item"
                    nextLinkClassName="block border border-white rounded-r-md w-22 text-center py-2 cursor-pointer select-none"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="block border border-white w-10 text-center py-2"
                    containerClassName="pagination"
                    activeClassName="bg-white text-gray-900 font-medium underline underline-offset-3"
                    className="flex justify-center"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default PetsPage