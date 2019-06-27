/// <reference types="react" />
/**
 * Before navigation icon
 */
export declare const NavigateBeforeRoundedIcon: () => JSX.Element;
/**
 * Next navigation icon
 */
export declare const NavigateNextRoundedIcon: () => JSX.Element;
/**
 * First page rounded icon
 */
export declare const FirstPageRoundedIcon: () => JSX.Element;
/**
 * Last page navigation icon
 */
export declare const LastPageRoundedIcon: () => JSX.Element;
/**
 *
 * @param pageNumbersArray
 * @param onPageChanged
 * @param page
 * @param count
 */
export declare const getPaginationArray: (page: number, count: number) => any[];
/**
 *
 * @param page
 * @param perPage
 * @param orderBy
 */
export declare const updateUrlParmas: (page: number, perPage: number, orderBy: string) => void;
