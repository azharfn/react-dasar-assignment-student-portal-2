// Table.jsx
import React from "react";

const Table = ({ students, fetchStudents }) => {
    // TODO: answer here
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: "DELETE",
            });
            fetchStudents();
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <>
            {/* TODO: answer here */}
            <table>
                <thead>
                    <tr>
                        <th>Fullname</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Faculty</th>
                        <th>Program Study</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="student-data-row">
                            <td>{student.fullname}</td>
                            <td>{student.birthDate}</td>
                            <td>{student.gender}</td>
                            <td>{student.faculty}</td>
                            <td>{student.programStudy}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(student.id)}
                                    data-testid={`delete-${student.id}`}
                                >Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
