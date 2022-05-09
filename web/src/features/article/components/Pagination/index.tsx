import React, { FC } from 'react';

import {
  NextPrevArrowPath,
  NextPrevArrowSvg,
  PaginationCurrentNumber,
  PaginationList,
  PaginationNextPrevButton,
  PaginationNumberButton,
  PaginationOtherNumbers,
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
        <NextPrevArrowSvg>
          <NextPrevArrowPath />
        </NextPrevArrowSvg>
      </PaginationNextPrevButton>
    )}

    {Array.from(Array(Math.ceil(totalCount / limitNumber)).keys()).map(
      (pageNumber) => {
        // Since the keys are also values in the array generator from the above
        // code, ``pageNumber`` will start off as 0. That's why further below the
        // code, there is ``pageNumber + 1``.
        const pageNumberOffsetNumber: number = pageNumber * limitNumber;

        // If this is the initial page number (i.e. 'page 1') and it is not the
        // current offset number from the API, then render it.
        if (pageNumber === 0 && pageNumberOffsetNumber !== offsetNumber)
          return (
            <PaginationNumberButton
              key={pageNumber}
              onClick={() => handlePagination(0)}
            >
              {pageNumber + 1}
            </PaginationNumberButton>
          );

        // If this is the current offset number, make into a ``span`` element and
        // not a ``button`` element.
        if (pageNumberOffsetNumber === offsetNumber)
          return (
            <PaginationCurrentNumber key={pageNumber}>
              {pageNumber + 1}
            </PaginationCurrentNumber>
          );

        // If the page number is in the range of the current offset number from the
        // API, then make those into buttons.
        // Example: If the current offset number from the API is 10 and ``limitNumber``
        // is 5 (which is what is being used), then ``offsetNumber`` / ``limitNumber``
        // = 10 / 5 = 2 (or page 3 since this is 0-based index). Now, 2 - 1 = 1 and
        // 2 + 1 = 3, but since this is 0-based index, it equates to page numbers
        // 2 and 4 that will be rendered as buttons, respectfully.
        if (
          pageNumber === offsetNumber / limitNumber - 1 ||
          pageNumber === offsetNumber / limitNumber + 1
        )
          return (
            <PaginationNumberButton
              key={pageNumber}
              onClick={() => handlePagination(pageNumberOffsetNumber)}
            >
              {pageNumber + 1}
            </PaginationNumberButton>
          );

        // If it is the last page number or if it is the second page number (for UI
        // purposes), and it is not in the range from the last if-statement, then
        // render it as a ``span`` element represented as dots.
        if (
          pageNumber === Math.ceil(totalCount / limitNumber) - 1 ||
          pageNumber === 1
        )
          return (
            <PaginationOtherNumbers key={pageNumber}>
              ...
            </PaginationOtherNumbers>
          );

        // If the rest of the page numbers are not in the range from the last
        // if-statement nor is it the last page number, then render nothing.
        // This is done so that not all of the page numbers would get rendered
        // (if there are A LOT of articles) which would break UIs.
        return null;
      }
    )}

    {offsetNumber + limitNumber <= totalCount && (
      <PaginationNextPrevButton
        onClick={() => handlePagination(offsetNumber + limitNumber)}
      >
        <NextPrevArrowSvg className="next-arrow">
          <NextPrevArrowPath />
        </NextPrevArrowSvg>
      </PaginationNextPrevButton>
    )}
  </PaginationList>
);

export default Pagination;
