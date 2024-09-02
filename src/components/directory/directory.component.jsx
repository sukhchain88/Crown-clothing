import React from "react";
import DirectoryItems from "../directory-item/directory-item.component";
import "./directory.style.scss";

import { category } from "../../shop-data/shop-data";

const Directory = () => {
  return (
    <div className="directory-container">
      {category.map((category) => (
        <DirectoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
