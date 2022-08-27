import { Request, Response } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
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

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === "test@test.ee" && password === "test") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }
}
