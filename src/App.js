import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./style.css"

const App = () => {
    // TODO: answer here
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:3001/student");
            const data = await response.json();
            setStudents(data);
            setLoading(false);
            console.log("Loading status:", loading);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <>
            {/* TODO: answer here */}
            <div className="container">
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    <>
                        <div className="profile">
                            <h1>Student Portal</h1>
                            <div className="admin">
                                <p>Admin</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt=" profile.icon" />
                            </div>
                        </div>
                        <hr />
                        <Form students={students} fetchStudents={fetchStudents} />
                        <hr />
                        <Table students={students} fetchStudents={fetchStudents} />
                    </>
                )}
            </div>
        </>
    );
};

export default App;
