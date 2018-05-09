# Changelog

## [2.0.0]
### Added
- Support asynchronous conditions.
    - Condition functions went from the type: `(info: UserAgentInfo) => boolean` to `(userAgentInfo: UserAgentInfo) => (boolean | Promise<boolean>)`.

### Changed
- While adding support for asynchronous functions, SplitTest#setup changed to return promises instead of boolean.
    - `() => boolean` -> `() => Promise<boolean>`
- SplitTest#isInitialized went from a `boolean` property to a `() => Promise<boolean>` method.
    - Previous usage:
        `if (splitTest.isInitialized) {}`
    - New usage:
        `if (await splitTest.isInitialized()) {}`