import { mysql, Service } from 'egg';
import { IPerson, IPersonBase, IPersonList } from '../model/person';

/**
 * Person Service
 */
export default class Person extends Service {
  /**
   *
   * @param id 查询的ID
   */
  public async getInfo(id: number): Promise<IPerson | null> {
    try {
      const res: IPerson | null = await this.app.mysql.get('person', { id });
      if (res) {
        return res;
      } else {
        return null;
      }
    } catch (e) {
      throw e;
    }
  }
  /**
   * 返回所有人的list
   */
  public async getPersonList(): Promise<IPersonList> {
    try {
      const countTmp: Array<{ count: number }> = await this.app.mysql.query(
        'select count(id) as count from person'
      );
      if (countTmp.length) {
        const count = countTmp[0].count;
        if (!count) {
          return { count: 0, result: [] } as IPersonList;
        } else {
          const res: IPersonBase[] = await this.app.mysql.select('person', {
            columns: ['id', 'gender', 'first_name', 'last_name'],
            orders: [['first_name', 'asc']]
          });
          return { count, result: res } as IPersonList;
        }
      } else {
        throw 'Database Connected Error';
      }
    } catch (e) {
      throw e;
    }
  }

  /**
   * 新建一个人
   * @param info 创建的人的信息
   */
  public async createPersonInfo(info: any): Promise<boolean> {
    const { mysql } = this.app;
    try {
      const insertObj: IPerson = {
        first_name: info.first_name,
        last_name: info.last_name,
        gender: info.gender,
        create_on: mysql.literals.now,
        email: info.email
      };
      const result: mysql['queryResult'] = await mysql.insert(
        'person',
        insertObj
      );
      const isSuccess: boolean = result.affectedRows === 1;
      return isSuccess;
    } catch (e) {
      throw e;
    }
  }

  public async updatePersonInfo(info: any): Promise<boolean> {
    const { mysql } = this.app;
    try {
      const updateObj: IPerson = {
        id: info.id,
        first_name: info.first_name,
        last_name: info.last_name,
        gender: info.gender,
        update_on: mysql.literals.now,
        email: info.email
      };
      console.log(updateObj);
      const result: mysql['queryResult'] = await mysql.update(
        'person',
        updateObj
      );
      const isSuccess: boolean = result.affectedRows === 1;
      return isSuccess;
    } catch (e) {
      throw e;
    }
  }
}
