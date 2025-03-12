
const WordList = ({ words, deleteWord }) => {
    return (
        <div className="grid grid-cols-3 gap-5 w-full  h-[92.5vh] overflow-y-auto shadow-lg bg-gray-100 " >
            {words.map((word) => (
                <div key={word.id} className="p-4 bg-white  rounded-lg shadow-md w-[260px] h-[350px] mb-5 ">
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
