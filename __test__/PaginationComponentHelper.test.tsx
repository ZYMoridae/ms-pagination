import * as React from "react";
import {
  updateUrlParmas,
  getPaginationArray,
  NavigateBeforeRoundedIcon,
  NavigateNextRoundedIcon,
  FirstPageRoundedIcon,
  LastPageRoundedIcon
} from "../src/PaginationComponentHelper";

describe("Feature component", () => {
  test("test NavigateBeforeRoundedIcon", () => {
    expect(<NavigateBeforeRoundedIcon /> != undefined).toBe(true);
  });

  test("test NavigateNextRoundedIcon", () => {
    expect(<NavigateNextRoundedIcon /> != undefined).toBe(true);
  });

  test("test FirstPageRoundedIcon", () => {
    expect(<FirstPageRoundedIcon /> != undefined).toBe(true);
  });

  test("test LastPageRoundedIcon", () => {
    expect(<LastPageRoundedIcon /> != undefined).toBe(true);
  });

  test("test getPagination Array page number is one", () => {
    let paginationArray = getPaginationArray(1, 1);

    expect(paginationArray).toStrictEqual([1]);
  });

  test("test getPagination Array page less than 5 but count large equal than 5", () => {
    let paginationArray = getPaginationArray(3, 5);

    expect(paginationArray).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("test getPagination Array page large than 5 but count large equal than 5", () => {
    let paginationArray = getPaginationArray(6, 10);

    expect(paginationArray).toStrictEqual([1, 2, '...', 4, 5, 6, 7, 8, '...']);
  });

  test("test getPagination Array page + 2 large than count but count large equal than 5", () => {
    let paginationArray = getPaginationArray(9, 10);

    expect(paginationArray).toStrictEqual([1, 2, '...', 6, 7, 8, 9, 10]);
  });

});
