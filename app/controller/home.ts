import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getInfo() {
    const { ctx } = this;
    const { query } = ctx;
    const id: number = query.id;
    if (!id) {
      ctx.status = 400;
      return;
    }
    try {
      const res = await this.service.person.getInfo(id);
      ctx.body = res;
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }

  public async getPersonList() {
    const { ctx } = this;
    try {
      const res = await this.service.person.getPersonList();
      ctx.body = res;
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }

  public async create() {
    const { ctx } = this;
    const rq = ctx.request.body;
    try {
      const res: boolean = await this.service.person.createPersonInfo(rq);
      // 应该在Service层把状态和返回信息写好的
      if (res) {
        ctx.body = 'Insert Success';
      } else {
        ctx.status = 500;
        ctx.body = 'Insert Fail';
      }
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }

  public async update() {
    const { ctx } = this;
    const rq = ctx.request.body;
    try {
      const res: boolean = await this.service.person.updatePersonInfo(rq);
      // 应该在Service层把状态和返回信息写好的
      if (res) {
        ctx.body = 'Update Success';
      } else {
        ctx.status = 500;
        ctx.body = 'Update Fail';
      }
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }

  // public async test() {
  //   const { ctx } = this;
  //   const rq = ctx.request.body;
  // }
}
