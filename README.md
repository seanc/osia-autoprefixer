# osia-autoprefixer
> Autoprefixer plugin for Osia

## Installation
```shell
$ npm install osia-autoprefixer
```

## Usage
```javascript
import osia from 'osia';
import autoprefixer from 'osia-autoprefixer';

osia.task('autoprefix', () => {
  osia.open('./foo.css')
    .then(autoprefixer())
    .then(osia.save('./')) 
);
```

### Options
osia-autoprefixer uses postcss's autoprefixer natively, so you can pass options to it just as you would autoprefixer.

Example:
```javascript
import osia from 'osia';
import autoprefixer from 'osia-autoprefixer';

osia.task('autoprefix',() =>
  osia.open('./foo.css')
    .then(autoprefixer({ browsers: ['last 2 versions'] }))
    .then(osia.save('./'))
);
```

## Credits
| ![seanc][avatar] |
|:---:|
| [Sean Wilson][github] |

  [avatar]: https://avatars.githubusercontent.com/u/13725538?v=3&s=125
  [github]: https://github.com/seanc