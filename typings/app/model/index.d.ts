// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPerson from '../../../app/model/person';

declare module 'egg' {
  interface IModel {
    Person: ReturnType<typeof ExportPerson>;
  }
}
