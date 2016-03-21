'use strict';

import { plugin } from 'osia';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default function(opts = {}) {
  return plugin((file, resolve, reject) => {
    postcss(autoprefixer(opts)).process(file.contents.toString(), {
      from: file.path,
      to: file.path
    }).then(compiled => {
      file.contents = new Buffer(compiled.css);
      resolve(file);
    }).catch(err => reject(err));
  });
};