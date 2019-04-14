// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPerson from '../../../app/service/person';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    person: ExportPerson;
    test: ExportTest;
  }
}
