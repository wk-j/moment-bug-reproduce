## Parcel + Moment

- TypeScript 2.8.0
- Parcel 
- React 16.0.38
- Moment 2.20.1

## Start

```
npm start
```

```
TypeError: moment is not a function [Learn More]
```

## Fixed

```json
{
    "esModuleInterop": true
}
```

## Link

- https://github.com/parcel-bundler/parcel/issues/418
