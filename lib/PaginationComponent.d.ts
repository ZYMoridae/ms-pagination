import React from 'react';
import '../src/PaginationComponent.css';
declare type PaginationComponentState = {
    perPage: number;
    orderBy: string;
    page: number;
};
declare type PaginationComponentProps = {
    onPageChanged: (page: number, perPage: number, orderBy: string) => void;
    count: number;
    initialPage: number;
    perPage: number;
    nextIcon?: React.ReactDOM;
    previousIcon?: React.ReactDOM;
};
declare class PaginationComponent extends React.Component<PaginationComponentProps, PaginationComponentState> {
    constructor(props: any);
    updateUrlParmas(page: number, perPage: number, orderBy: string): void;
    componentWillMount(): void;
    componentDidMount(): void;
    pageChanged: (item: number) => void;
    previousBtnClick: () => void;
    nextBtnClick: () => void;
    render(): JSX.Element;
}
export default PaginationComponent;
