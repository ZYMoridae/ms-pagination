import * as React from "react";
import PaginationComponent from '../src/PaginationComponent';
import { create } from "react-test-renderer";

describe("Feature component", () => {
  test("it matches the snapshot", () => {

    const onPageChanged = (page: number, perPage: number, orderBy: string) => { }

    const component = create(<PaginationComponent onPageChanged={onPageChanged} count={5} initialPage={1} perPage={3}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});