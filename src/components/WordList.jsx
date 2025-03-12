
const WordList = ({ words, deleteWord }) => {
    return (
        <div className="grid grid-cols-4 gap-4 w-[85%] h-screen overflow-y-auto p-2 shadow-lg">
            {words.map((word) => (
                <div key={word.id} className="p-4 bg-white rounded-lg shadow-md w-[260px]">
                    <img
                        src={word.image}
                        alt={word.en}
                        className="w-[250px] h-[250px] object-cover mb-2 rounded"
                    />
                    <h2 className="text-xl font-semibold">
                        {word.ru} - {word.en}
                    </h2>
                    <button
                        onClick={() => deleteWord(word.id)}
                        className="text-red-500"
                    >
                        Удалить
                    </button>
                </div>
            ))}
        </div>
    );
};

export default WordList;
