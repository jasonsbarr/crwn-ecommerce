import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  const categories = [
    { id: 1, title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    { id: 5, title: "Men's", imageUrl: "https://i.ibb.co/R70vBrQ/men.png" },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default App;
