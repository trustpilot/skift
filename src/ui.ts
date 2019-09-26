// tslint:disable-next-line
const ui = process.env.NODE_ENV === 'production' ? require('./ui.prod') : require('./ui.dev');

export const uiFactory = ui.uiFactory;
