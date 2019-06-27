module.exports = {
  "roots": [
    "./__test__"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testURL": "https://www.somthing.com/test.html",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ]
}