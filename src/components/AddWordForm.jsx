import React from "react";

const AddWordForm = ({ newWord, setNewWord, addWord }) => {
    return (
        <div className="flex gap-4 mb-6 w-[85%]  ">
            <input
                type="text"
                value={newWord.ru}
                onChange={(e) => setNewWord({ ...newWord, ru: e.target.value })}
                placeholder="Русское слово"
                className="border px-2 py-1 rounded"
            />
            <input
                type="text"
                value={newWord.en}
                onChange={(e) => setNewWord({ ...newWord, en: e.target.value })}
                placeholder="Английское слово"
                className="border px-2 py-1 rounded"
            />
            <input
                type="text"
                value={newWord.image}
                onChange={(e) => setNewWord({ ...newWord, image: e.target.value })}
                placeholder="URL изображения"
                className="border px-2 py-1 rounded"
            />
            <button
                onClick={addWord}
                className="py-2 px-4 bg-green-500 text-white rounded-lg"
            >
                Добавить Слово
            </button>
        </div>
    );
};

export default AddWordForm;
