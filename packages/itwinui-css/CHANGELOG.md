# Changelog

## [1.3.0](https://www.github.com/iTwin/iTwinUI/compare/v1.2.2...v1.3.0) (2022-12-19)

### Minor changes

- **Tag:** Tag body receives focus instead of close button within it ([#835](https://www.github.com/iTwin/iTwinUI/issues/835))

### Patch changes

- **Inputs:** border color changes to status color on hover ([#847](https://www.github.com/iTwin/iTwinUI/issues/847))
- **ToggleSwitch:** Define height of toggle switch to display correctly in iOS ([#852](https://www.github.com/iTwin/iTwinUI/issues/852))

## [1.2.2](https://www.github.com/iTwin/iTwinUI/compare/v1.2.1...v1.2.2) (2022-12-09)

### Patch changes

- **Select:** Use correct placeholder text color ([#846](https://www.github.com/iTwin/iTwinUI/issues/846))

## [1.2.1](https://www.github.com/iTwin/iTwinUI/compare/v1.2.0...v1.2.1) (2022-12-08)

### Patch changes

- **Code:** Remove `user-select: all` and extra declarations ([#836](https://www.github.com/iTwin/iTwinUI/issues/836))

## [1.2.0](https://www.github.com/iTwin/iTwinUI/compare/v1.1.0...v1.2.0) (2022-12-06)

### Minor changes

- **ExpandableBlock:** Add disabled state support through `disabled`/`aria-disabled` attribute on the toggle ([#821](https://www.github.com/iTwin/iTwinUI/issues/821))
- **`iui-root`**: Add `.iui-root-background` modifier to opt into setting the recommended background-color ([#833](https://www.github.com/iTwin/iTwinUI/issues/833))

## [1.1.0](https://www.github.com/iTwin/iTwinUI/compare/v1.0.0...v1.1.0) (2022-12-01)

### Minor changes

- **ComboBox:** Add multi-select tags ([#817](https://www.github.com/iTwin/iTwinUI/issues/817))

### Patch changes

- **Avatar:** Sizes have lower specificity, use CSS vars. ([#818](https://www.github.com/iTwin/iTwinUI/issues/818))
- **Progress-indicator**: Overlay now intercepts clicks ([#827](https://www.github.com/iTwin/iTwinUI/issues/827))
- **Slider:** Change align `start` to `flex-start` ([#825](https://www.github.com/iTwin/iTwinUI/issues/825))

## [1.0.0](https://www.github.com/iTwin/iTwinUI/compare/v0.63.1...v1.0.0) (2022-11-14)

Welcome to the v1 release of iTwinUI-css. 🎉

The API is now considered "stable" and going forward there will be no more breaking changes in minor version bumps.

Some of the highlights from this release include:

- The `@itwin/itwinui-css` package is now CSS-only. Sass files are no longer part of the deliverable.
- A new `@itwin/itwinui-variables` package has been introduced to replace Sass variables.
- Scoped themes support, allowing styling only part of the page or mixing themes in different parts of the page.
- Major visual updates across all themes.
  - Base themes pass WCAG 2.1 level AA requirements, high contrast themes pass level AAA.
  - Dark theme has received a complete overhaul.
- Major visual updates across all components.
  - Rounded corners in most components (using `--iui-border-radius-1`).
  - More consistent elevation by ensuring lighter backgounds (`--iui-color-background`) appear above darker ones (`--iui-color-background-backdrop`).
  - Alert and toast have a brand new look.
  - Baseline height has increased by 1px, resulting in height changes in many components.
  - Switched all sizes from `px` to `rem` to respect base font-size set in user preferences.
- Changes to class names and data attributes (see migration guide).
- Renamed and reorganized a few component files.
  - `inputs.css` has been split into `input.css`, `checkbox.css`, `radio.css`, `select.css`, etc.
  - `user-icon.css` is now `avatar.css`.
  - `wizard.css` has been split into `stepper.css` and `workflow-diagram.css`.
  - A few utility components have been combined into `utils.css`.
- Dropped IE11 support, removing any fallbacks for CSS variables, CSS grid, etc.
- New font families: _Noto Sans_ and _Noto Sans Mono_.
- Lots of bug fixes and improvements.

If you're interested in more details,

- check out our [iTwinUI-css v1 migration guide](https://github.com/iTwin/iTwinUI/wiki/iTwinUI-v1-migration-guide) for a full list of changes in all components.
- check out our [iTwinUI-variables v1 migration guide](https://github.com/iTwin/iTwinUI/wiki/iTwinUI-variables-v1-migration-guide) for how the old Sass variables map to the new CSS variables.
- check out a full diff of code changes in [`v0.63.1..v1.0.0`](https://www.github.com/iTwin/iTwinUI/compare/v0.63.1...v1.0.0).

## 0.X

For any changes prior to 1.0.0, check out the [0.X changelog](https://github.com/iTwin/iTwinUI/blob/v0/packages/itwinui-css/CHANGELOG.md).
