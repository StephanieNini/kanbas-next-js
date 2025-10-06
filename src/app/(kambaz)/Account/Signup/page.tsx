import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 className="text-center mb-4">Signup</h2>

      <Form>
        <Form.Control id="wd-username" placeholder="username" className="mb-2" />
        <Form.Control id="wd-password" placeholder="password" type="password" className="mb-3" />
        <Link href="/Account/Profile" id="wd-signup-btn">
          <Button className="btn btn-primary w-100 mb-2">Signup</Button>
        </Link>
      </Form>

      <div className="text-center">
        <Link id="wd-signin-link" href="/Account/Signin">
          Signin
        </Link>
      </div>
    </div>
  );
}
