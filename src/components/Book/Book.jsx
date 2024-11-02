import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, category, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">
        <figure className="bg-gray-100 rounded-2xl">
          <img className="h-[166px] py-8" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-start gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-[rgba(34,190,10,0.05)] text-[#23BE0A]"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title font-bold mt-3">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="">By : {author}</p>
          <hr className="my-5 border-dashed" />
          <div className="card-actions justify-between">
            <div className="font-medium">{category}</div>
            <div className="">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
