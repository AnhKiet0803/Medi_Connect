import React, { useState } from "react";
import { Button, Card, ButtonGroup, ListGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function DoctorAppointments() {
    const navigate = useNavigate();
    const [view, setView] = useState("day"); 
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0]; 
    });
    const sampleAppointments = {
        "2025-10-20": [
        { time: "08:00", patient: "Nguyễn Văn A", reason: "Khám tổng quát" },
        ],
        "2025-10-21": [
        { time: "09:00", patient: "Trần Thị B", reason: "Khám tim mạch" },
        { time: "14:00", patient: "Lê Minh C", reason: "Khám tai mũi họng" },
        ],
        "2025-10-23": [
        { time: "10:30", patient: "Võ Thị D", reason: "Khám da liễu" },
        ],
        "2025-10-24": [
        { time: "15:00", patient: "Phạm Văn E", reason: "Khám mắt" },
        ],
    };
    //Hàm tính khoảng tuần
    const getWeekRange = (date) => {
        const d = new Date(date);
        const day = d.getDay() || 7; 
        const monday = new Date(d);
        monday.setDate(d.getDate() - (day - 1));
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        return [monday, sunday];
    };
    //Lọc dữ liệu theo view
    let filteredAppointments = [];
    if (view === "day") {
        filteredAppointments = [
        { date: selectedDate, list: sampleAppointments[selectedDate] || [] },
        ];
    } else if (view === "week") {
        const [monday, sunday] = getWeekRange(selectedDate);
        const current = new Date(monday);
        while (current <= sunday) {
        const dateStr = current.toISOString().split("T")[0];
        filteredAppointments.push({
            date: dateStr,
            list: sampleAppointments[dateStr] || [],
        });
        current.setDate(current.getDate() + 1);
        }
    } else if (view === "month") {
        const month = new Date(selectedDate).getMonth();
        Object.keys(sampleAppointments).forEach((d) => {
        if (new Date(d).getMonth() === month) {
            filteredAppointments.push({
            date: d,
            list: sampleAppointments[d],
            });
        }
        });
    }

    return (
        <div className="container mt-5">
            <Card className="p-4 shadow-sm">
                <Card.Title className="text-center text-primary mb-4 fs-3">Manage examination schedule</Card.Title>
                <div className="text-center mb-3">
                    <ButtonGroup>
                        <Button variant={view === "day" ? "primary" : "outline-primary"}  onClick={() => setView("day")}>Day</Button>
                        <Button variant={view === "week" ? "primary" : "outline-primary"} onClick={() => setView("week")}>Week</Button>
                        <Button variant={view === "month" ? "primary" : "outline-primary"} onClick={() => setView("month")}>Month</Button>
                    </ButtonGroup>
                </div>
                <Form.Group className="mb-4 text-center">
                    <Form.Label className="fw-semibold">Select date</Form.Label>
                    <Form.Control type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={{ maxWidth: "250px", margin: "0 auto" }}/>
                </Form.Group>
                <h5 className="text-center mb-3">View mode:{" "}
                    <span className="text-success text-capitalize">{view}</span>
                </h5>
                {filteredAppointments.length > 0 ? (
                filteredAppointments.map((day, i) => (
                    <div key={i} className="mb-3">
                        <h6 className="fw-bold text-primary">{day.date}</h6>
                        {day.list.length > 0 ? (
                            <ListGroup>
                                {day.list.map((appt, idx) => (
                                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>{appt.time}</strong> - {appt.patient}
                                        </div>
                                        <span className="text-muted">{appt.reason}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        ) : (
                            <p className="text-muted ms-3">No appointments available.</p>
                        )}
                    </div>
                ))
                ) : (
                <p className="text-center text-muted">
                    There are no appointments in the selected range.
                </p>
                )}
                <div className="text-center mt-4">
                    <Button variant="secondary" onClick={() => navigate("/doctor/dashboard")}>
                        ⬅ Back to Doctor Dashboard
                    </Button>
                </div>
            </Card>
        </div>
    );
}
