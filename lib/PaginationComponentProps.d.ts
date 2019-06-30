/// <reference types="react" />
import PaginationParameterMapping from './PaginationParameterMapping';
interface PaginationComponentProps {
    onPageChanged: (page: number, perPage: number, orderBy: string) => void;
    count: number;
    initialPage: number;
    perPage: number;
    nextIcon?: React.ReactDOM;
    previousIcon?: React.ReactDOM;
    firstPageNavigationIcon?: React.ReactDOM;
    lastPageNavigationIcon?: React.ReactDOM;
    perPageOptions?: Array<number>;
    showPerPageOptions?: boolean;
    showFirstPageNavigation?: boolean;
    showLastPageNavigation?: boolean;
    showPaginationMeta?: boolean;
    enableUrlParamsUpadte?: boolean;
    paginationParameterMapping?: PaginationParameterMapping;
}
export default PaginationComponentProps;
