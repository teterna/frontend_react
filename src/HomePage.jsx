import React, { useState, useEffect } from "react";
import api from "./api.js";
import CategoryList from "./components/CategoryList";
import WordList from "./components/WordList";
import AddCategoryForm from "./components/AddCategoryForm";
import AddWordForm from "./components/AddWordForm";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [words, setWords] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newWord, setNewWord] = useState({ en: "", ru: "", image: "" });

    useEffect(() => {
        fetchCategories();
        fetchAllWords();
    }, []);

    const fetchCategories = async () => {
        const data = await api.getCategories();
        setCategories(data);
    };

    const fetchAllWords = async () => {
        const data = await api.getWords();
        setWords(data);
    };

    const fetchWords = async (categoryId) => {
        const data = await api.getWordsByCategory(categoryId);
        setWords(data);
    };

    const filterWordsByCategory = (categoryId) => {
        setSelectedCategory(categoryId);
        if (categoryId) {
            fetchWords(categoryId);
        } else {
            fetchAllWords();
        }
    };

    const addCategory = async () => {
        if (newCategoryName.trim()) {
            await api.createCategory({ name: newCategoryName });
            setNewCategoryName("");
            fetchCategories();
        }
    };

    const deleteCategory = async (id) => {
        await api.deleteCategory(id);
        fetchCategories();
        if (selectedCategory === id) {
            setSelectedCategory(null);
            fetchAllWords();
        } else {
            filterWordsByCategory(selectedCategory);
        }
    };

    const addWord = async () => {
        if (newWord.en && newWord.ru && newWord.image) {
            await api.createWord(newWord);
            setNewWord({ en: "", ru: "", image: "" });
            filterWordsByCategory(selectedCategory);
        }
    };

    const deleteWord = async (id) => {
        await api.deleteWord(id);
        filterWordsByCategory(selectedCategory);
    };

    return (
        <div className="p-8 flex flex-col items-center h-screen ">
            <h1 className="text-3xl font-bold mb-6">Word Categories</h1>
            <div className="flex w-full">
                <div className="flex flex-col items-start w-1/3">
                    <AddCategoryForm
                        newCategoryName={newCategoryName}
                        setNewCategoryName={setNewCategoryName}
                        addCategory={addCategory}
                    />
                    <CategoryList
                        categories={categories}
                        selectedCategory={selectedCategory}
                        filterWordsByCategory={filterWordsByCategory}
                        deleteCategory={deleteCategory}
                    />
                </div>
                <div className="flex flex-col items-start w-2/3 ">
                    <AddWordForm
                        newWord={newWord}
                        setNewWord={setNewWord}
                        addWord={addWord}
                    />
                    <WordList words={words} deleteWord={deleteWord} className/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
