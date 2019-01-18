// tslint:disable-next-line
const ui = process.env.PRODUCTION ? require('./ui.prod') : require('./ui.dev');

export const uiFactory = ui.uiFactory;
