import "./HeroProduct.css";

export const HeroProduct = ({ category }) => {
  return (
    <div className="hero py-8">
      <div className="container mx-auto space-x-0 grid justify-items-center space-y-4 md:flex md:items-center md:space-x-4 md:space-y-0">
        <img
          src={category.categoryImage}
          className="w-24 h-24 bg-cyan-100 rounded-full"
        />
        <div className="text-center md:text-start">
          <h2 className="text-xl">{category.categoryTitle}</h2>
          <p>{category.categoryDescription}</p>
        </div>
      </div>
    </div>
  );
};
