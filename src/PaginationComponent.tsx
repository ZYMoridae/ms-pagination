import React from 'react';
import '../src/PaginationComponent.css';
import _ from 'lodash';

type PaginationComponentState = {
  perPage: number,
  orderBy: string,
  page: number
};

type PaginationComponentProps = {
  onPageChanged: (page: number, perPage: number, orderBy: string) => void,
  count: number,
  initialPage: number,
  perPage: number,
  nextIcon?: React.ReactDOM,
  previousIcon?: React.ReactDOM
};

/**
 * 
 * @param pageNumbersArray 
 * @param page 
 * @param onPageChanged 
 */
const arrayToNode = (pageNumbersArray: Array<any>, page: number, onPageChanged: any) => {
  return (
    <div>
      {pageNumbersArray.map((item, index) =>
        _.isNumber(item) ? <li className={`pagination-block page-number ${page === item ? 'active' : ''}`} key={index}><a className='num' onClick={() => { onPageChanged(item); }}>{item}</a></li> : <li key={index} className='pagination-block page-spread'>...</li>
      )}
    </div>
  )
}

/**
 * 
 * @param pageNumbersArray 
 * @param onPageChanged 
 * @param page 
 * @param count 
 */
const getPaginationArray = (page: number, count: number) => {
  let paginationArray: Array<any> = [];

  if (count > 2 && count < 5) {
    paginationArray = [...Array(count).keys()].map(item => ++item);
  } else if (count >= 5) {
    if (page <= 5) {
      let _count = count;
      if (page + 2 <= count) {
        _count = page + 2;
      }

      let firstFivePageNumbers: Array<any> = [...Array(_count).keys()].map(
        item => ++item
      );
      if (count > 5 || firstFivePageNumbers.length < 5) {
        firstFivePageNumbers.push("...");
      }
      paginationArray = firstFivePageNumbers;
    } else {
      if (page + 2 <= count) {
        let curentPageNumbers = [1, 2, '...', page - 2, page - 1, page, page + 1, page + 2, '...'];
        paginationArray = curentPageNumbers;
      } else {
        let curentPageNumbers: Array<any> = [];
        if (count > 5) {
          curentPageNumbers = [1, 2, "..."];
        }
        for (var i = count - 4; i <= count; i++) {
          curentPageNumbers.push(i);
        }

        paginationArray = curentPageNumbers;
      }
    }
  }
  return paginationArray;
}

/**
 * 
 * @param param0 
 */
const PageNumbers = ({ onPageChanged, page, count }: {
  onPageChanged: any, page: number, count: number
}) => {

  let paginationArray: Array<any> = getPaginationArray(page, count);

  return (
    <div>
      {arrayToNode(paginationArray, page, onPageChanged)}
    </div>
  )
}

/**
 * Before navigation icon
 */
const NavigateBeforeRoundedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z" />
    </svg>
  )
}

/**
 * Next navigation icon
 */
const NavigateNextRoundedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" />
    </svg>
  )
}


const FirstPageRoundedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path opacity=".87" fill="none" d="M24 0v24H0V0h24z" />
      <path d="M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" />
    </svg>
  )
}

const LastPageRoundedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
      <path d="M6.29 8.11L10.18 12l-3.89 3.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L7.7 6.7c-.39-.39-1.02-.39-1.41 0-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" />
    </svg>
  )
}


class PaginationComponent extends React.Component<PaginationComponentProps, PaginationComponentState> {
  constructor(props: any) {
    super(props);
    console.log('constructor');
    this.state = {
      perPage: 10,
      orderBy: '',
      page: 1
    };
  }

  updateUrlParmas(page: number, perPage: number, orderBy: string) {
    if (history.pushState) {
      let url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}&perPage=${perPage}&orderBy=${orderBy}`;
      window.history.pushState({
        path: url
      }, '', url);
    }
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
    this.updateUrlParmas(item, this.state.perPage, this.state.orderBy);
  }

  previousBtnClick = () => {
    let page = this.state.page;

    if (page - 1 >= 1) {
      page = page - 1;
    }

    this.setState({
      page: page
    });

    this.pageChanged(page);
  }

  nextBtnClick = () => {
    let page = this.state.page;

    if (page + 1 <= this.props.count) {
      page = page + 1;
    }

    this.setState({
      page: page
    });

    this.pageChanged(page);
  }

  firstPageBtnClick = () => {
    this.pageChanged(1);
  }

  lastPageBtnClick = () => {
    this.pageChanged(this.props.count);
  }

  render() {
    const { count, nextIcon, previousIcon } = this.props;

    return (
      <div className='pagination-wrapper'>
        <ul className='pagination-container'>

          <li className='pagination-block previousBtn' onClick={this.firstPageBtnClick}>
            <FirstPageRoundedIcon />
          </li>

          <li className='pagination-block previousBtn' onClick={this.previousBtnClick}>
            {previousIcon ? previousIcon : <NavigateBeforeRoundedIcon />}
          </li>

          {<PageNumbers onPageChanged={this.pageChanged} page={this.state.page} count={count} />}

          <li className='pagination-block nextBtn' onClick={this.nextBtnClick}>
            {nextIcon ? nextIcon : <NavigateNextRoundedIcon />}
          </li>

          <li className='pagination-block previousBtn' onClick={this.lastPageBtnClick}>
            <LastPageRoundedIcon />
          </li>

          <li className='pagination-info'>
            <span>
              Total {count} pages
            </span>
          </li>
        </ul>
      </div>
    )
  }

}

export default PaginationComponent;