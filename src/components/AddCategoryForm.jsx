import React from "react";

const AddCategoryForm = ({ newCategoryName, setNewCategoryName, addCategory }) => {
    return (
        <div className="flex gap-4 mb-6 w-[15%] flex-col">
            <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Название категории"
                className="border px-2 py-1 rounded"
            />
            <button
                onClick={addCategory}
                className="py-2 px-4 bg-green-500 text-white rounded-lg"
            >
                Добавить Категорию
            </button>
        </div>
    );
};

export default AddCategoryForm;
