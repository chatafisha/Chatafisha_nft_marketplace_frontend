import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import PaginationComponent from '../../common/Pagination';
import { Link } from 'react-router-dom';

const itemsPerPage = 10; // Number of items to display per page

const NFTS = () => {
  const [collections, setCollections] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCollections, setFilteredCollections] = useState([]); // Define filteredCollections state

  // Fetch data and filter logic
  useEffect(() => {
    const getColls = async () => {
      try {
        const response = await axios.get(
          'https://chatafisha-backend.netlify.app/.netlify/functions/api'
        );
        setCollections(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getColls();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  useEffect(() => {
    const filteredData = collections.filter(
      (item) =>
        (item.accountid &&
          item.accountid.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.email &&
          item.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const sortedItems = filteredData
      .slice()
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setFilteredCollections(sortedItems);
  }, [collections, searchTerm]); // Re-run the effect when collections or searchTerm changes

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCollections.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className={styles.container}>
        {/* Filter Input */}
        <input
          type="text"
          placeholder="Search by Account Id or Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.filterInput}
        />
        {/* Table */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Code</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Account Id</th>
              <th className={styles.th}>Description</th>
              <th className={styles.th}>Type of Waste</th>
              <th className={styles.th}>Kgs</th>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Image</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.code} className={styles.tr}>
                <td className={styles.td}>{item.code}</td>
                <td className={styles.td}>{item.name}</td>
                <td className={styles.td}>{item.email}</td>
                <td className={styles.td}>{item.accountid}</td>
                <td className={styles.td}>{item.description}</td>
                <td className={styles.td}>{item.typeofwaste}</td>
                <td className={styles.td}>{item.kgs}</td>
                <td className={styles.td}>{item.date}</td>
                <td className={styles.td}>
                  <div className={styles['image-container']}>
                    <img
                      className={styles.image}
                      src={item.image}
                      alt={`Image ${item.code}`}
                      onClick={() => window.open(item.image)}
                    />
                  </div>
                </td>
                <td className={styles.td}>{item.status}</td>

                <td className={styles.td}>
                  {item.status === 'pending' && (
                    <Link to="/create" state={{ data: item }}>
                      <div className="fw-bold">Mint NFT</div>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
          <PaginationComponent
            itemsPerPage={itemsPerPage}
            totalItems={filteredCollections.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};
export default NFTS;
