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
  nextIcon?: React.ReactDOM,
  previousIcon?: React.ReactDOM
};

/**
 * 
 * @param param0 
 */
const PageNumbers = ({ pageNumbersArray, onPageChanged, page, count }: {
  pageNumbersArray: Array<number>, onPageChanged: any, page: number, count: number
}) => {

  let paginationArray: Array<any> = [];

  const arrayToNode = (pageNumbersArray: Array<any>) => {
    return (
      <div>
        {pageNumbersArray.map((item, index) =>
          _.isNumber(item) ? <li className={`pagination-block page-number ${page === item ? 'active' : ''}`} key={index}><a className='num' onClick={() => { onPageChanged(item); }}>{item}</a></li> : <li key={index} className='pagination-block page-spread'>...</li>
        )}
      </div>
    )
  }

  if (count > 2 && count < 5) {
    paginationArray = pageNumbersArray;
  } else if (count >= 5) {
    if (page <= 5) {
      let ceilPage = count;

      if(page + 2 <= 5) {
        ceilPage = page + 2;
      }

      let firstFivePageNumbers: Array<any> = [...Array(ceilPage).keys()].map(item => ++item);
      firstFivePageNumbers.push('...');
      paginationArray = firstFivePageNumbers;
    } else {
      if (page + 2 <= count) {
        let curentPageNumbers = [1, 2, '...', page - 2, page - 1, page, page + 1, page + 2, '...'];
        paginationArray = curentPageNumbers;
      } else {
        let curentPageNumbers: Array<any> = [1, 2, '...'];
        for (var i = count - 4; i <= count; i++) {
          curentPageNumbers.push(i);
        }

        paginationArray = curentPageNumbers;
      }
    }
  }
  return (
    <div>
      {arrayToNode(paginationArray)}
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
    const { initialPage } = this.props;

    this.setState({
      page: initialPage
    })
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

  render() {
    const { count, nextIcon, previousIcon } = this.props;

    let pageNumbersArray: Array<number> = [...Array(count).keys()].map(item => ++item);

    return (
      <div className='pagination-wrapper'>
        <ul className='pagination-container'>

          <li className='pagination-block previousBtn' onClick={this.previousBtnClick}>
            {previousIcon ? previousIcon : <NavigateBeforeRoundedIcon />}  
          </li>

          {<PageNumbers pageNumbersArray={pageNumbersArray} onPageChanged={this.pageChanged} page={this.state.page} count={count} />}

          <li className='pagination-block nextBtn' onClick={this.nextBtnClick}>
            {nextIcon ? nextIcon : <NavigateNextRoundedIcon />}
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