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
}) => (
  <PaginationList>
    {offsetNumber > 0 && (
      <PaginationNextPrevButton
        onClick={() => handlePagination(offsetNumber - limitNumber)}
      >
        <PaginationNextPrevArrow className="prev-arrow" />
      </PaginationNextPrevButton>
    )}

    {Array.from(Array(Math.ceil(totalCount / limitNumber)).keys()).map(
      (pageNumber) => {
        // Since the keys are also values in the array generator from the above
        // code, ``pageNumber`` will start off as 0. That's why further below the
        // code, there is ``pageNumber + 1``.
        const pageNumberOffsetNumber: number = pageNumber * limitNumber;

        if (pageNumberOffsetNumber === offsetNumber)
          return (
            <PaginationCurrentNumber key={pageNumber}>
              {pageNumber + 1}
            </PaginationCurrentNumber>
          );

        return (
          <PaginationNumberButton
            key={pageNumber}
            onClick={() => handlePagination(pageNumberOffsetNumber)}
          >
            {pageNumber + 1}
          </PaginationNumberButton>
        );
      }
    )}

    {offsetNumber + limitNumber <= totalCount && (
      <PaginationNextPrevButton
        onClick={() => handlePagination(offsetNumber + limitNumber)}
      >
        <PaginationNextPrevArrow className="next-arrow" />
      </PaginationNextPrevButton>
    )}
  </PaginationList>
);

export default Pagination;
