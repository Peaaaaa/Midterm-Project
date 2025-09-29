import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Filters from './Filters';
import SortOptions from './SortOption';
import Pagination from './Pagination';

export default function ProductList({ onSelect, addToCart }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters ni diri
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortKey, setSortKey] = useState('none');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 12;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch products', err);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    let filteredList = products;

    // Filter by search term
    if (searchTerm) {
      filteredList = filteredList.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'all') {
      filteredList = filteredList.filter((p) => p.category === category);
    }

    // Filter by price range
    filteredList = filteredList.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    if (sortKey === 'priceAsc') {
      filteredList = filteredList.slice().sort((a, b) => a.price - b.price);
    } else if (sortKey === 'priceDesc') {
      filteredList = filteredList.slice().sort((a, b) => b.price - a.price);
    } else if (sortKey === 'titleAsc') {
      filteredList = filteredList.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortKey === 'titleDesc') {
      filteredList = filteredList.slice().sort((a, b) => b.title.localeCompare(a.title));
    }

    setFiltered(filteredList);
    setCurrentPage(1);
  }, [products, searchTerm, category, priceRange, sortKey]);

  // Pagination slicing
  const pageCount = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const displayedProducts = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex flex-wrap gap-4 mb-4">
        <Filters
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <SortOptions sortKey={sortKey} setSortKey={setSortKey} />
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          {displayedProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelect}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
