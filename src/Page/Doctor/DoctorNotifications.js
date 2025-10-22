import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DoctorNotifications() {
    const [notifications, setNotifications] = useState([
        {
        id: 1,
        type: "booking",
        message: "Bệnh nhân Nguyễn Văn A đã đặt lịch khám vào 21/10/2025 lúc 09:00.",
        date: "2025-10-19",
        read: false,
        },
        {
        id: 2,
        type: "reschedule",
        message: "Bệnh nhân Lê Thị B đã đổi lịch sang 22/10/2025 lúc 14:00.",
        date: "2025-10-19",
        read: false,
        },
        {
        id: 3,
        type: "cancel",
        message: "Bệnh nhân Phạm Văn C đã hủy lịch khám vào 23/10/2025.",
        date: "2025-10-18",
        read: true,
        },
    ]);
    const markAsRead = (id) => {
        setNotifications((prev) =>
        prev.map((n) =>
            n.id === id ? { ...n, read: true } : n
        )
        );
    };
    const unreadCount = notifications.filter((n) => !n.read).length;
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">
                    Notifications{" "}
                    {unreadCount > 0 && (
                        <Badge bg="danger">{unreadCount}</Badge>
                    )}
                </h2>
                <Button as={Link} to="/doctor/dashboard" variant="secondary">
                    ← Back to Dashboard
                </Button>
            </div>
            {notifications.length === 0 ? (
                <p className="text-muted">No notifications yet.</p>
            ) : (
                notifications.map((n) => (
                <Card key={n.id} className={`mb-3 shadow-sm ${ n.read ? "bg-light" : "border-primary"}`}>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <Card.Title>
                                    {n.type === "booking" && "📅 New schedule"}
                                    {n.type === "reschedule" && "🔄 Reschedule"}
                                    {n.type === "cancel" && "❌ Cancel appointment"}
                                </Card.Title>
                                <Card.Text>{n.message}</Card.Text>
                                <small className="text-muted">
                                    Date of receipt: {n.date}
                                </small>
                            </div>
                            {!n.read && (
                            <Button variant="outline-primary" size="sm" onClick={() => markAsRead(n.id)}>
                                Make as Read
                            </Button>
                            )}
                        </div>
                    </Card.Body>
                </Card>
                ))
            )}
        </div>
    );
}
