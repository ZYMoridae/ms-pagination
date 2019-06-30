# ms-pagination

[![Build Status](https://travis-ci.org/ZYMoridae/ms-pagination.svg?branch=master)](https://travis-ci.org/ZYMoridae/ms-pagination)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installing

```
npm install @josephzhou/ms-pagination
```

## Example

### How to use it

**Import package**

```
import PaginationComponent from "@josephzhou/ms-pagination";
```

**Parameters**

| Parameters                 | Type                                                                        | Description                                                                |
| -------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| count                      | number                                                                      | Total pages                                                                |
| initialPage                | number                                                                      | The page indicated when component initialized (default value is 1)         |
| perPage                    | number                                                                      | (Required)                                                                 |
| perPageOptions             | Array(number)                                                               | Optional parameter (default value is [5, 10, 15, 20])                      |
| onPageChanged              | func (page: number, perPage: number, orderBy: string) => void               | This function will be called when page number changed                      |
| previousIcon               | React component                                                             | Optional parameter                                                         |
| nextIcon                   | React component                                                             | Optional parameter                                                         |
| firstPageNavigationIcon    | React component                                                             | Optional parameter                                                         |
| lastPageNavigationIcon     | React component                                                             | Optional parameter                                                         |
| showPerPageOptions         | boolean                                                                     | Optional parameter (default is false)                                      |
| showFirstPageNavigation    | boolean                                                                     | Optional parameter (default is true)                                       |
| showLastPageNavigation     | boolean                                                                     | Optional parameter (default is true)                                       |
| showPaginationMeta         | boolean                                                                     | Optional parameter (default is true)                                       |
| enableUrlParamsUpadte      | boolean                                                                     | Optional parameter (default is true)                                       |
| paginationParameterMapping | PaginationParameterMapping (page: number, perPage: number, orderBy: string) | Optional parameter (default mapping parameters are page, perPage, orderBy) |
