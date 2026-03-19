import { Link } from 'react-router';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

export default function BookDetails() {
  // Статичные данные
  const book = {
    id: '1',
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 1200,
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&h=800&fit=crop',
    description: 'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805-1812 годах. Это один из самых известных романов в мире, описывающий жизнь русского дворянства в период войн против Наполеона.',
    isbn: '978-5-17-123456-7',
    category: 'Классика',
    publisher: 'АСТ',
    year: 2024,
    pages: 1274,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-blue-600">Главная</Link>
        <span>/</span>
        <Link to="/catalog" className="hover:text-blue-600">Каталог</Link>
        <span>/</span>
        <span className="text-gray-900">{book.title}</span>
      </nav>

      {/* Back Button */}
      <Link
        to="/catalog"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Назад к каталогу
      </Link>

      {/* Book Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div>
          <img
            src={book.cover}
            alt={book.title}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Info */}
        <div>
          <div className="mb-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {book.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-3">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{book.author}</p>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{book.price} ₽</div>
            <div className="text-sm text-gray-600">В наличии</div>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 mb-4"
            disabled
          >
            <ShoppingCart className="w-5 h-5" />
            Добавить в корзину
          </button>

          <button
            className="w-full bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            disabled
          >
            Купить в 1 клик
          </button>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Описание</h2>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>

          {/* Specifications */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Характеристики</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">ISBN:</span>
                <span className="font-medium">{book.isbn}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Издательство:</span>
                <span className="font-medium">{book.publisher}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Год издания:</span>
                <span className="font-medium">{book.year}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Количество страниц:</span>
                <span className="font-medium">{book.pages}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
