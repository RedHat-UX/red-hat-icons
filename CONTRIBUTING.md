# Contributing

## New Icon requests or contributions

To contribute new icons or request new icons please reach out to [brand-design@redhat.com](mailto:brand-design@redhat.com) 

## Documentation
To work on this project's documentation first install the project on your local machine:

1. [Node Version Manager's](https://github.com/nvm-sh/nvm) for your system.
2. Navigate to your project folder
  ```bash
  cd red-hat-icons
  ```
3. Run [Node Version Manager's](https://github.com/nvm-sh/nvm) `use` command to switch to the projects [Node](https://nodejs.org/en) version.
  ```bash
  nvm use
  ```
  If prompted, follow the instructions for installing specific version of Node used by this project on your system, which will look similar to the following:

  `You need to run "nvm install v20.10.0" to install it before using it.`

4. Install project dependencies, run `npm ci`
  ```bash
  npm ci
  ```
5. Start the development server
  ```bash
  npm run serve
  ```
6. Make your changes and [commit](#commit-changes)

## Adding Icons
To add new icons, first obtain approval from [brand-design@redhat.com](mailto:brand-design@redhat.com) 

1. Setup the project locally, steps 1-4 above.
2. Once your project setup make changes to the files then run a build
  ```bash
  npm run build
  ```
  Your svg files will then be compressed and optimized, new artifacts will be generated in `./dist`
3. Check your work in the demo
  ```bash
  npm run serve
  ```
4. [Commit](#commit-changes) your changes.

## Commit Changes 
1. Commit your changes using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) style.
2. Add a [changeset](https://github.com/changesets/changesets) 
  ```bash
  npx changeset
  ```
  For more information about changesets and how to use them please read the [changeset documentation](https://github.com/changesets/changesets?tab=readme-ov-file#documentation). 
3. Open a new PR and request team members for review.



