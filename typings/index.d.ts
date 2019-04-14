import 'egg';
declare module 'egg' {
  interface ISelectConfig {
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
     * @param config 配置
     */
    get(tableName: string, config: any): Promise<any>;

    /**
     *
     * @param tableName 表名
     * @param config 配置
     */
    select(tableName: string, config?: ISelectConfig): Promise<any>;

    /**
     *
     * @param queryString SQL查询的字符串
     * @param params mysql.escape的参数
     */
    query(queryString: string, params?: any[]);

    /**
     * 往表里面插入数据
     * @param tableName 表名
     * @param values 需要插入的数据
     */
    insert(tableName: string, values: object);

    /**
     * 更新表数据
     * @param tableName 表名
     * @param values 需要更新的数据
     */
    update(tableName: string, values: object);
    /**
     * 获取MySQL内建方法
     */
    literals: any;

    // mysql 执行查询的结果
    queryResult: IQueryResult;
  }

  interface Application {
    mysql: mysql;
  }
}
