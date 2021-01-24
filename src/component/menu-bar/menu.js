import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
function Menu() {
  const category = useSelector((state) => state.category);

  const renderCategory = (category) => {
    const list = [];
    for (let cat of category) {
      list.push(
        <li key={cat._id}>
          {cat.parentId ? (
            <a href={cat.slug}>
              <span>{cat.name}</span>
            </a>
          ) : (
            <span>{cat.name}</span>
          )}
          {cat.children.length > 0 ? (
            <ul>{renderCategory(cat.children)}</ul>
          ) : null}
        </li>
      );
    }
    return list;
  };

  return (
    <div className="grid-menu-bar">
      <div className="menu-type">
        <ul>{renderCategory(category.category)}</ul>
      </div>
    </div>
  );
}

export default Menu;
