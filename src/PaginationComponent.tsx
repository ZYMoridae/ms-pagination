import React from "react";
import "../src/PaginationComponent.css";
import _ from "lodash";
import PaginationComponentProps from "./PaginationComponentProps";
import PaginationParameterMapping from "./PaginationParameterMapping";

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

    const {
      enableUrlParamsUpadte = true,
      paginationParameterMapping = {
        page: "page",
        perPage: "perPage",
        orderBy: "orderBy"
      }
    } = this.props;

    this.props.onPageChanged(item, this.state.perPage, this.state.orderBy);
    if (enableUrlParamsUpadte) {
      updateUrlParmas({
        page: item,
        perPage: this.state.perPage,
        orderBy: this.state.orderBy,
        paginationParameterMapping: paginationParameterMapping
      });
    }
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
    const {
      enableUrlParamsUpadte = true,
      paginationParameterMapping = {
        page: "page",
        perPage: "perPage",
        orderBy: "orderBy"
      }
    } = this.props;
    this.setState({
      perPage: _perPage
    });
    this.props.onPageChanged(this.state.page, _perPage, this.state.orderBy);
    if (enableUrlParamsUpadte) {
      updateUrlParmas({
        page: this.state.page,
        perPage: _perPage,
        orderBy: this.state.orderBy,
        paginationParameterMapping: paginationParameterMapping
      });
    }
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
          <div className="pagination-number-block-wrapper">
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

            {/* Desktop */}
            {getPaginationArray(this.state.page, count, false).map(
              (item: any, index: number) =>
                _.isNumber(item) ? (
                  <li
                    className={`pagination-block desktop page-number ${
                      this.state.page === item ? "active" : ""
                    }`}
                    key={index}
                  >
                    <a
                      className="num"
                      onClick={() => {
                        this.pageChanged(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="pagination-block desktop page-spread"
                  >
                    ...
                  </li>
                )
            )}

            {/* Mobile */}
            {getPaginationArray(this.state.page, count, true).map(
              (item: any, index: number) =>
                _.isNumber(item) ? (
                  <li
                    className={`pagination-block mobile page-number ${
                      this.state.page === item ? "active" : ""
                    }`}
                    key={index}
                  >
                    <a
                      className="num"
                      onClick={() => {
                        this.pageChanged(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="pagination-block mobile page-spread"
                  >
                    ...
                  </li>
                )
            )}

            <li
              className="pagination-block nextBtn"
              onClick={this.nextBtnClick}
            >
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
          </div>

          {showPaginationMeta && (
            <li className="pagination-info pagination-meta">
              <span>Total {count} pages</span>
            </li>
          )}

          {showPerPageOptions && (
            <li className="pagination-info pagination-meta">
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

        <div className="pagination-info pagination-meta mobile">
          <div>
            <span className="pagination-info">Total {count} pages</span>
            {showPerPageOptions && (
              <span>
                <span className="caption">Per page</span>
                <select
                  onChange={this.perPageOptionOnClickHandler}
                  value={this.state.perPage}
                >
                  {perPageOptions.map((perPageOption, index) => (
                    <option key={index}>{perPageOption}</option>
                  ))}
                </select>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationComponent;
