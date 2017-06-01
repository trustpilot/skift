# Skift

A/B Testing tool for the modern Web

## Usage

### As a module

```js
import * as skift from 'skift';

skift
  .create('My awesome test')
  .setCondition(() => {
      return window.location.pathname === 'contacts'
  })
  .addVariation({
      name: 'A form with the new design',
      setup() {
          document.getElementsById('form').addClass('visible')
      }
  })
  .addVariation({
      name: 'Control'
  });
```
## New no A/B testing?


## Contributing
Interested in contributing? Please have a look at our [developer documentation](CONTRIBUTING.md) for more information on how to get started.
