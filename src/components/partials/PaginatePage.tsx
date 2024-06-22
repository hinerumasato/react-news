import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import React from 'react';
import PaginationProps from '@/interfaces/IPagination';
import "@/assets/css/PaginatePage.scss";

const PaginatePage: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
        {items}
        <Pagination.Next disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
      </Pagination>
    </Container>
  );
}

export default PaginatePage;