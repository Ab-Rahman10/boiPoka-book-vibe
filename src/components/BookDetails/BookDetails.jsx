import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  //   Load data
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    bookName,
    image,
    author,
    review,
    totalPages,
    category,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="my-10 hero w-8/12 mx-auto rounded-lg">
      <div className="flex gap-10">
        <div className="w-6/12 bg-base-200 rounded-lg pt-10 pl-10 pr-10 mb-[40px]">
          <img src={image} className="w-[425px] h-[540px] rounded-lg  " />
        </div>
        <div className="w-6/12 pr-10 pb-10">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="font-medium py-3">By : {author}</p>
          <hr />
          <p className="font-medium py-3">{category}</p>
          <hr />
          <p className="py-3 text-sm">
            <span className="font-bold">Review : </span> {review}
          </p>
          <p className="font-bold mr-5 py-3">
            Tags
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs ml-5 bg-[rgba(34,190,10,0.05)] text-[#23BE0A]"
              >
                {tag}
              </button>
            ))}
          </p>
          <hr />
          <div className="py-3 space-y-2">
            <p className="text-sm">
              Number of pages: <span className="font-bold">{totalPages}</span>
            </p>
            <p className="text-sm">
              Publisher: <span className="font-bold">{publisher}</span>
            </p>
            <p className="text-sm">
              Year of Publishing:{" "}
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p className="text-sm">
              Rating: <span className="font-bold">{rating}</span>
            </p>
          </div>
          <div className="space-x-3 pt-3">
            <button className="btn btn-outline">Read</button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
