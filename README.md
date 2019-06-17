# ms-pagination

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

| Parameters    | Type                                                     | Description                                                        |
|---------------|----------------------------------------------------------|--------------------------------------------------------------------|
| count         | number                                                   | Total pages                                                        |
| initialPage   | number                                                   | The page indicated when component initialized (default value is 1) |
| onPageChanged | (page: number, perPage: number, orderBy: string) => void | This function will be called when page number changed              |
| previousIcon  | React component                                          | Optional parameter                                                 |
| nextIcon      | React component                                          | Optional parameter                                                 |