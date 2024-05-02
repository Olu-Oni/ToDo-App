const CategoryList = ({ categories }) => {
  return (
    <div className="categoryList">
      {categories.map((category) => (
        <button key={category} className="categoryButtons">
          {category}
        </button>
      ))}
    </div>
  );
};

const CategoryGroup = ({ categories, resetTasks }) => {
  return (
    <div className="categoryGroup">
      <button
        className="addButton newCategoryButton"
        onClick={resetTasks}
      >
        <span>+</span>
        new category
      </button>
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryGroup;
