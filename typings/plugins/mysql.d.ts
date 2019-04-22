interface IOptions {
  where?: object;
  columns?: string[];
  orders?: string[][];
  limit?: number;
  offset?: number;
}

interface IQueryResult {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  protocol41: boolean;
  changedRows: number;
}

interface mysql {
  /**
   *
   * @param tableName 表名
   * @param config 查找的设置，比如 where 之类的
   */
  get(tableName: string, config: any): Promise<any>;

  /**
   *
   * @param tableName 表名
   * @param config 配置
   */
  select(tableName: string, config?: IOptions): Promise<any>;

  /**
   *
   * @param queryString SQL查询的字符串
   * @param params mysql.escape的参数
   */
  query(queryString: string, params?: any[]): Promise<any>;

  /**
   * 往表里面插入数据
   * @param tableName 表名
   * @param values 需要插入的数据
   */
  insert(tableName: string, values: object): Promise<IQueryResult>;

  /**
   * 更新表数据
   * @param tableName 表名
   * @param values 需要更新的数据
   * @param config 一些插入的额外配置，比如 where 等
   */
  update(
    tableName: string,
    values: object,
    config?: IOptions
  ): Promise<IQueryResult>;

  /**
   * 更新表数据
   * @param tableName 表名
   * @param config 删除的配置，where 的条件之类的
   */
  delete(tableName: string, config: object): Promise<IQueryResult>;

  /**
   * 获取MySQL内建方法
   */
  literals: any;
}

export default mysql;
