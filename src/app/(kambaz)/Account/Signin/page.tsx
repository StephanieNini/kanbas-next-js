import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 className="text-center mb-4">Signin</h2>

      <Form>
        <Form.Control id="wd-username" placeholder="username" className="mb-2" />
        <Form.Control id="wd-password" placeholder="password" type="password" className="mb-3" />
        <Link href="/Account/Profile" id="wd-signin-btn">
          <Button className="btn btn-primary w-100 mb-2">Sign in</Button>
        </Link>
      </Form>

      <div className="text-center">
        <Link id="wd-signup-link" href="/Account/Signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
