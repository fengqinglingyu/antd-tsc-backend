export enum gender {
  male,
  female
}

export interface IPersonBase {
  id?: number;
  gender: gender;
  last_name: string;
  first_name: string;
}

export interface IPerson extends IPersonBase {
  email: string;
  create_on?: string;
  update_on?: string;
}

export interface Page<T> {
  count: number;
  result: T[];
}

export type IPersonList = Page<IPersonBase>;
