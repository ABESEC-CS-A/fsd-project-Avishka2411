import Input from "../common/Input";
import Button from "../common/Button";

const RegisterForm = ({ formData, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
    <Input label="Name" name="name" value={formData.name} onChange={onChange} placeholder="Full name" />
    <Input label="Email" name="email" type="email" value={formData.email} onChange={onChange} placeholder="Email address" />
    <Input label="Password" name="password" type="password" value={formData.password} onChange={onChange} placeholder="Password" />
    <Button type="submit">Register</Button>
  </form>
);

export default RegisterForm;
