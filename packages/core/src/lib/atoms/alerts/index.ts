/* eslint-disable @typescript-eslint/no-explicit-any */
import AlertHeader from './alert-header';

import AlertMain from './alert';
import { IAlertComponentType } from './alert.model';
import AlertBody from './alert-body';
import AlertActions from './alert-actions';

const AlertTemp: any = AlertMain;
AlertTemp.Header = AlertHeader;
AlertTemp.Body = AlertBody;
AlertTemp.Actions = AlertActions;
// To add typings
const Alert = AlertTemp as IAlertComponentType<'div'>;

export { Alert };
