import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

export type ICategoryProps = {
  name: string;
  slug: string;
};

export type ICategoriesProps = {};

const Categories: React.FC<ICategoriesProps> = ({}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b-2 pb-4">Categories</h3>
      {categories.map((category: ICategoryProps) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export { Categories };
