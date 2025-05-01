import Input from "../common/Input";
import Button from "../common/Button";

const LoginForm = ({ formData, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
    <Input label="Email" name="email" type="email" value={formData.email} onChange={onChange} placeholder="Enter email" />
    <Input label="Password" name="password" type="password" value={formData.password} onChange={onChange} placeholder="Enter password" />
    <Button type="submit">Login</Button>
  </form>
);

export default LoginForm;