"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * Before navigation icon
 */
exports.NavigateBeforeRoundedIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
        react_1.default.createElement("path", { d: "M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z" })));
};
/**
 * Next navigation icon
 */
exports.NavigateNextRoundedIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
        react_1.default.createElement("path", { d: "M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" })));
};
/**
 * First page rounded icon
 */
exports.FirstPageRoundedIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { opacity: ".87", fill: "none", d: "M24 0v24H0V0h24z" }),
        react_1.default.createElement("path", { d: "M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" })));
};
/**
 * Last page navigation icon
 */
exports.LastPageRoundedIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { opacity: ".87", fill: "none", d: "M0 0h24v24H0V0z" }),
        react_1.default.createElement("path", { d: "M6.29 8.11L10.18 12l-3.89 3.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L7.7 6.7c-.39-.39-1.02-.39-1.41 0-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" })));
};
/**
 *
 * @param pageNumbersArray
 * @param onPageChanged
 * @param page
 * @param count
 */
exports.getPaginationArray = (page, count, isMobile) => {
    let paginationArray = [];
    if (count >= 1 && count < 5) {
        paginationArray = [...Array(count).keys()].map(item => ++item);
    }
    else if (count >= 5) {
        if (page <= 5) {
            let _count = count;
            if (page + 2 <= count) {
                _count = page + 2;
            }
            let firstFivePageNumbers = [...Array(_count).keys()].map(item => ++item);
            if (count > 5 || firstFivePageNumbers.length < 5) {
                firstFivePageNumbers.push("...");
            }
            paginationArray = firstFivePageNumbers;
        }
        else {
            if (page + 2 <= count) {
                let curentPageNumbers = [
                    "...",
                    page - 2,
                    page - 1,
                    page,
                    page + 1,
                    page + 2,
                    "..."
                ];
                if (!isMobile) {
                    curentPageNumbers = [1, 2].concat(curentPageNumbers);
                }
                paginationArray = curentPageNumbers;
            }
            else {
                let curentPageNumbers = [];
                if (count > 5) {
                    if (!isMobile) {
                        curentPageNumbers = [1, 2, "..."];
                    }
                    else {
                        curentPageNumbers = ["..."];
                    }
                }
                for (var i = count - 4; i <= count; i++) {
                    curentPageNumbers.push(i);
                }
                paginationArray = curentPageNumbers;
            }
        }
    }
    return paginationArray;
};
/**
 *
 * @param page
 * @param perPage
 * @param orderBy
 */
exports.updateUrlParmas = (page, perPage, orderBy) => {
    if (history.pushState) {
        let url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}&perPage=${perPage}&orderBy=${orderBy}`;
        window.history.pushState({
            path: url
        }, "", url);
    }
};
