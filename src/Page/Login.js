import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Đăng nhập với:", email, password);
        // sẽ gọi API Laravel ở đây
    };
    return (
        <Container className="mt-5" style={{ maxWidth: "450px" }}>
            <Card className="p-4 shadow">
                <h3 className="text-center mb-4 text-primary">Đăng nhập</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="w-100"> Đăng nhập</Button>
                </Form>
                <div className="text-center mt-3">
                    <small>
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-primary">Đăng ký ngay</Link>
                    </small>
                </div>
            </Card>
        </Container>
    );
}
