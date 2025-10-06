import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 className="text-center mb-4">Profile</h2>

      <Form>
        <Form.Control id="wd-username" defaultValue="alice" className="mb-2" />
        <Form.Control id="wd-password" defaultValue="123" type="password" className="mb-2" />
        <Form.Control id="wd-firstname" defaultValue="Alice" className="mb-2" />
        <Form.Control id="wd-lastname" defaultValue="Wonderland" className="mb-2" />
        <Form.Control id="wd-dob" type="date" defaultValue="1999-01-01" className="mb-2" />
        <Form.Control id="wd-email" defaultValue="alice@wonderland.com" className="mb-2" />
        <Form.Control id="wd-role" defaultValue="User" className="mb-3" />

        <Button variant="danger" className="w-100">
          Signout
        </Button>
      </Form>
    </div>
  );
}
