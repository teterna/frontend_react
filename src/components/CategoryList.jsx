import React from "react";

const CategoryList = ({ categories, selectedCategory, filterWordsByCategory, deleteCategory }) => {
    return (
        <div className="gap-4 mb-6 flex flex-col w-[15%] select-none">
            <button
                onClick={() => filterWordsByCategory(null)}
                className={`py-2 px-4 rounded-lg shadow-md ${
                    selectedCategory === null ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
            >
                Все
            </button>
            {categories.map((category) => (
                <div
                    key={category.id}
                    className={`flex gap-2 py-2 px-4 rounded-lg shadow-md justify-between ${
                        selectedCategory === category.id ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                >
                    <button
                        onClick={() => filterWordsByCategory(category.id)}
                        className="flex-1 text-left"
                    >
                        {category.name}
                    </button>
                    <button
                        onClick={() => deleteCategory(category.id)}
                        className="text-red-500  px-2"
                    >
                        Удалить
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
