import "egg";
import mysql from "./plugins/mysql";

declare module "egg" {
  interface Application {
    mysql: mysql;
  }
}

