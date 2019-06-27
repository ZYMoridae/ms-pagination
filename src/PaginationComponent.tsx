import React from "react";
import "../src/PaginationComponent.css";
import _ from "lodash";
import PaginationComponentProps from "./PaginationComponentProps";

import {
  updateUrlParmas,
  getPaginationArray,
  NavigateBeforeRoundedIcon,
  NavigateNextRoundedIcon,
  FirstPageRoundedIcon,
  LastPageRoundedIcon
} from "./PaginationComponentHelper";

type PaginationComponentState = {
  perPage: number;
  orderBy: string;
  page: number;
};

/**
 * Default per page options
 */
const defaultPerPageOptions: Array<number> = [5, 10, 15, 20];

/**
 *
 * @param pageNumbersArray
 * @param page
 * @param onPageChanged
 */
const arrayToNode = (
  pageNumbersArray: Array<any>,
  page: number,
  onPageChanged: any
) => {
  return (
    <div>
      {pageNumbersArray.map((item, index) =>
        _.isNumber(item) ? (
          <li
            className={`pagination-block page-number ${
              page === item ? "active" : ""
            }`}
            key={index}
          >
            <a
              className="num"
              onClick={() => {
                onPageChanged(item);
              }}
            >
              {item}
            </a>
          </li>
        ) : (
          <li key={index} className="pagination-block page-spread">
            ...
          </li>
        )
      )}
    </div>
  );
};

/**
 *
 * @param param0
 */
const PageNumbers = ({
  onPageChanged,
  page,
  count
}: {
  onPageChanged: any;
  page: number;
  count: number;
}) => {
  let paginationArray: Array<any> = getPaginationArray(page, count);

  return <div>{arrayToNode(paginationArray, page, onPageChanged)}</div>;
};

/**
 * Pagination component
 */
class PaginationComponent extends React.Component<
  PaginationComponentProps,
  PaginationComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      perPage: 10,
      orderBy: "",
      page: 1
    };
  }

  componentWillMount() {
    const { initialPage, perPage } = this.props;

    this.setState({
      page: initialPage,
      perPage: perPage
    });
  }

  componentDidMount() {
    const { onPageChanged } = this.props;
    onPageChanged(this.state.page, this.state.perPage, this.state.orderBy);
  }

  pageChanged = (item: number) => {
    this.setState({
      page: item
    });
    this.props.onPageChanged(item, this.state.perPage, this.state.orderBy);
    updateUrlParmas(item, this.state.perPage, this.state.orderBy);
  };

  previousBtnClick = () => {
    let page = this.state.page;

    if (page - 1 >= 1) {
      page = page - 1;
    }

    this.setState({
      page: page
    });

    this.pageChanged(page);
  };

  nextBtnClick = () => {
    let page = this.state.page;

    if (page + 1 <= this.props.count) {
      page = page + 1;
    }

    this.setState({
      page: page
    });

    this.pageChanged(page);
  };

  firstPageBtnClick = () => {
    this.pageChanged(1);
  };

  lastPageBtnClick = () => {
    this.pageChanged(this.props.count);
  };

  perPageOptionOnClickHandler = (event: any) => {
    let _perPage: number = parseInt(event.target.value, 10);
    this.setState({
      perPage: _perPage
    });
    this.props.onPageChanged(this.state.page, _perPage, this.state.orderBy);
    updateUrlParmas(this.state.page, _perPage, this.state.orderBy);
  };

  render() {
    const {
      count,
      nextIcon = <NavigateNextRoundedIcon />,
      previousIcon = <NavigateBeforeRoundedIcon />,
      firstPageNavigationIcon = <FirstPageRoundedIcon />,
      lastPageNavigationIcon = <LastPageRoundedIcon />,
      perPageOptions = defaultPerPageOptions,
      showPerPageOptions = false,
      showFirstPageNavigation = true,
      showLastPageNavigation = true,
      showPaginationMeta = true
    } = this.props;

    return (
      <div className="pagination-wrapper">
        <ul className="pagination-container">
          {showFirstPageNavigation && (
            <li
              className="pagination-block previousBtn"
              onClick={this.firstPageBtnClick}
            >
              {firstPageNavigationIcon}
            </li>
          )}

          <li
            className="pagination-block previousBtn"
            onClick={this.previousBtnClick}
          >
            {previousIcon}
          </li>

          {
            <PageNumbers
              onPageChanged={this.pageChanged}
              page={this.state.page}
              count={count}
            />
          }

          <li className="pagination-block nextBtn" onClick={this.nextBtnClick}>
            {nextIcon}
          </li>

          {showLastPageNavigation && (
            <li
              className="pagination-block previousBtn"
              onClick={this.lastPageBtnClick}
            >
              {lastPageNavigationIcon}
            </li>
          )}

          {showPaginationMeta && (
            <li className="pagination-info">
              <span>Total {count} pages</span>
            </li>
          )}

          {showPerPageOptions && (
            <li className="pagination-info">
              <span className="caption">Per page</span>
              <select
                onChange={this.perPageOptionOnClickHandler}
                value={this.state.perPage}
              >
                {perPageOptions.map((perPageOption, index) => (
                  <option key={index}>{perPageOption}</option>
                ))}
              </select>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default PaginationComponent;
