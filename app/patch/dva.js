
/*
 * Revision History:
 *     Initial: 2018/01/19        StanleyChen
 */

import React from 'react';

import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';

export { connect };

let registered = false;

export default function (options) {
  const app = create(options);

  if (!registered) {
    options.models.forEach(model => app.model(model));
    registered = true;
  }

  app.start();

  // eslint-disable-next-line no-underscore-dangle
  const store = app._store;
  app.start = container => () => <Provider store={store}>{container}</Provider>;

  app.getStore = () => store;

  return app;
}
