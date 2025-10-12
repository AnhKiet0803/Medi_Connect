import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Đăng ký:", name, email, password);
        //sẽ gọi API Laravel ở đây
    };
    return (
        <Container className="mt-5" style={{ maxWidth: "450px" }}>
            <Card className="p-4 shadow">
                <h3 className="text-center mb-4 text-primary">Đăng ký tài khoản</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Họ tên</Form.Label>
                        <Form.Control type="text" placeholder="Nhập họ tên" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Tạo mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="w-100">Đăng ký</Button>
                </Form>
                <div className="text-center mt-3">
                    <small>
                        Đã có tài khoản?{" "}
                        <Link to="/login" className="text-primary">Đăng nhập</Link>
                    </small>
                </div>
            </Card>
        </Container>
    );
}
