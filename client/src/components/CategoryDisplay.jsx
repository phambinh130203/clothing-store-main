import React from "react";
import CategoryItem from "./CategoryItem";
import new_collections from "../assets/new_collections";
const CategoryDisplay = () => {
  return (
    <>
      <div className="flex gap-5 mb-16 mt-20 mb-100">
        <div className="rounded-xl border-l-4 border-#8A33FD"></div>
        <h2 className=" text-#3C4242 font-bold text-3xl">MẪU MỚI VỀ ĐANG HOT</h2>
      </div>
      <div className="flex justify-between px-6 grid grid-cols-4 gap-10 ">
      {new_collections.map((items, i) => {
                    return (
                        <CategoryItem
                            key={i}
                            id={items.id}
                            name={items.name}
                            image={items.image}
                            new_price={items.new_price}
                            old_price={items.old_price}
                    />
                    );
                  })}
      </div>
    </>
  );
};

export default CategoryDisplay;
