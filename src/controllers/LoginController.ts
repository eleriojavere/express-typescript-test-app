import { Request, Response } from "express";
import { get } from "./decorators/routes";

@controller("/")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
    <div>
    <h1>Login form</h1>
    <form method="POST">
    <div>
    <label>Email</label>
    <input name="email"></input>  
    </div>
    <div>
    <label>Password</label>
    <input name="password" type="password"></input>
    <div>
    <button>Login</button>
    </div>
    </div>
    </form>
    </div>
    `);
  }
}
