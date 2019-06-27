import React from "react";
import "../src/PaginationComponent.css";
import PaginationComponentProps from "./PaginationComponentProps";
declare type PaginationComponentState = {
    perPage: number;
    orderBy: string;
    page: number;
};
/**
 * Pagination component
 */
declare class PaginationComponent extends React.Component<PaginationComponentProps, PaginationComponentState> {
    constructor(props: any);
    componentWillMount(): void;
    componentDidMount(): void;
    pageChanged: (item: number) => void;
    previousBtnClick: () => void;
    nextBtnClick: () => void;
    firstPageBtnClick: () => void;
    lastPageBtnClick: () => void;
    perPageOptionOnClickHandler: (event: any) => void;
    render(): JSX.Element;
}
export default PaginationComponent;
