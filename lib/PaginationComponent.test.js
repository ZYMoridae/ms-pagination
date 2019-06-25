"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const PaginationComponent_1 = __importDefault(require("./PaginationComponent"));
const react_test_renderer_1 = require("react-test-renderer");
// const paginationComponentRewire = rewire('./PaginationComponent');
// const getPaginationArray = paginationComponentRewire.__get__('getPaginationArray');
describe("Feature component", () => {
    test("it matches the snapshot", () => {
        const onPageChanged = (page, perPage, orderBy) => { };
        const component = react_test_renderer_1.create(React.createElement(PaginationComponent_1.default, { onPageChanged: onPageChanged, count: 5, initialPage: 1, perPage: 3 }));
        expect(component.toJSON()).toMatchSnapshot();
    });
    // test('Test getPaginationArray', () => {
    //   let paginationArray = getPaginationArray(1, 5);
    //   expect(paginationArray).toStrictEqual([]);
    // });
});
