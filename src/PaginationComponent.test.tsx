import * as React from "react";
import PaginationComponent from './PaginationComponent';
import { create } from "react-test-renderer";
import rewire from "rewire";

// const paginationComponentRewire = rewire('./PaginationComponent');
// const getPaginationArray = paginationComponentRewire.__get__('getPaginationArray');

describe("Feature component", () => {
  test("it matches the snapshot", () => {

    const onPageChanged = (page: number, perPage: number, orderBy: string) => { }

    const component = create(<PaginationComponent onPageChanged={onPageChanged} count={5} initialPage={1} perPage={3}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  // test('Test getPaginationArray', () => {

  //   let paginationArray = getPaginationArray(1, 5);
  //   expect(paginationArray).toStrictEqual([]);
  // });
});