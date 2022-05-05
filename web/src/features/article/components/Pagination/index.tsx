import React, { FC } from 'react';

import {
  PaginationCurrentNumber,
  PaginationList,
  PaginationNextPrevArrow,
  PaginationNextPrevButton,
  PaginationNumberButton,
} from './styles';

interface IPagination {
  /* eslint-disable no-unused-vars */
  handlePagination: (offsetNumber: number) => void;
  limitNumber: number;
  offsetNumber: number;
  totalCount: number;
}

const Pagination: FC<IPagination> = ({
  handlePagination,
  limitNumber,
  offsetNumber,
  totalCount,
}) => {
  return (
    <PaginationList>
      {offsetNumber > 0 && (
        <PaginationNextPrevButton
          onClick={() => handlePagination(offsetNumber - limitNumber)}
        >
          <PaginationNextPrevArrow className="prev-arrow" />
        </PaginationNextPrevButton>
      )}

      {Array.from(Array(totalCount).keys()).map((pageNumber) => {
        if (pageNumber === offsetNumber)
          return (
            <PaginationCurrentNumber key={pageNumber + 1}>
              {pageNumber + 1}
            </PaginationCurrentNumber>
          );

        return (
          <PaginationNumberButton
            key={pageNumber + 1}
            onClick={() => handlePagination(pageNumber)}
          >
            {pageNumber + 1}
          </PaginationNumberButton>
        );
      })}

      {offsetNumber + limitNumber <= totalCount && (
        <PaginationNextPrevButton
          onClick={() => handlePagination(offsetNumber + limitNumber)}
        >
          <PaginationNextPrevArrow className="next-arrow" />
        </PaginationNextPrevButton>
      )}
    </PaginationList>
  );
};

export default Pagination;
