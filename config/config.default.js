/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1677741866323_7760';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  const mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '669483',
      // 数据库名
      database: 'lifeline_community',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  const security = {
    domainWhiteList: [ 'http://127.0.0.1:5173' ],
    csrf: {
      enable: false,
      headerName: 'csrf-token', // 从header中读取csrf token
    },
  };
  const cors = {
    credentials: true,
  };
  const sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'lifeline_community',
    username: 'root',
    password: '669483',
    define: {
      timestamps: false,
      underscored: true,
    },
  };
  const session = {
    key: 'SESSION_ID',
    maxAge: 24 * 3600 * 7000, // 7 天
    httpOnly: true,
    encrypt: true,
    renew: true,
  };
  return {
    ...config,
    ...userConfig,
    mysql,
    security,
    cors,
    sequelize,
    session,
  };
};
