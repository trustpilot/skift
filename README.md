<p align="center">
  <img width="460" height="auto" src="https://user-images.githubusercontent.com/3983879/27422227-ac2dc336-572d-11e7-9c48-94a56fcf1191.png">
</p>

# Skift [![npm version](https://badge.fury.io/js/skift.svg)](https://badge.fury.io/js/skift) [![Build Status](https://travis-ci.org/trustpilot/skift.svg?branch=master)](https://travis-ci.org/trustpilot/skift) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[See change log.](./CHANGELOG.md)

A/B Testing tool for the modern Web

## Usage

### Basic usage

```js
import skift from 'skift';

// Configure Skift.
skift.config({
    tracking: {
        track: function(event, trackingData) {
            console.log('A/B test event: ' + event, trackingData);
        }
    }
});

// Describe the A/B Test.
skift
    .create('My awesome test')
    .setCondition(() => {
        return window.location.pathname === 'contacts'
    })
    .addVariation({
        name: 'A form with the new design',
        setup() {
            document.getElementById('form').addClass('visible')
        }
    })
    .addVariation({
        name: 'Control'
    })
    .setup(); // Don't forget to setup the test!
```

## New to A/B testing?

We recommend using [Amplitude](https://amplitude.com/) for goal tracking.

## Contributing

Interested in contributing? Please have a look at our [developer documentation](CONTRIBUTING.md) for more information on how to get started.
