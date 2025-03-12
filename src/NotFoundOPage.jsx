import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-white">404</h1>
                <p className="text-2xl text-white mt-4">Страница не найдена</p>
                <p className="text-lg text-white mt-2">Кажется, вы потерялись во времени и пространстве...</p>
                <Link 
                    to="/" 
                    className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-blue-500 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
