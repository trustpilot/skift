# Skift [![npm version](https://badge.fury.io/js/skift.svg)](https://badge.fury.io/js/skift) [![Build Status](https://travis-ci.org/trustpilot/skift.svg?branch=master)](https://travis-ci.org/trustpilot/skift)

A/B Testing tool for the modern Web

## Usage

### Basic usage

```js
import skift from 'skift';

// Configure Skift.
const test = skift({
  tracking: {
      track: function(event, trackingData) {
          console.log('A/B test event: ' + event, trackingData);
      }
  }
});

// Describe the A/B Test.
test
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
## New to A/B testing?
We recommend using [Segment](https://segment.com/) for tracking the results.

## Contributing
Interested in contributing? Please have a look at our [developer documentation](CONTRIBUTING.md) for more information on how to get started.
