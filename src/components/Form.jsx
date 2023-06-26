//Form.jsx
import React, { useState } from "react";

const Form = ({ fetchStudents }) => {
    // TODO: answer here :)
    const [fullname, setFullname] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [programStudy, setProgramStudy] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const faculty = getFaculty(programStudy);

        const studentData = {
            fullname,
            birthDate,
            gender,
            faculty,
            programStudy,
        };

        try {
            await fetch("http://localhost:3001/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(studentData),
            });

            // Reset form fields
            setFullname("");
            setBirthDate("");
            setGender("");
            setProgramStudy("");

            fetchStudents();
        } catch (error) {
            console.log(error);
        }
    };
    const getFaculty = (programStudy) => {
        switch (programStudy) {
            case "Ekonomi":
            case "Manajemen":
            case "Akuntansi":
                return "Fakultas Ekonomi";

            case "Administrasi Publik":
            case "Administrasi Bisnis":
            case "Hubungan Internasional":
                return "Fakultas Ilmu Sosial dan Politik";

            case "Teknik Sipil":
            case "Arsitektur":
                return "Fakultas Teknik";

            case "Matematika":
            case "Fisika":
            case "Informatika":
                return "Fakultas Teknologi Informasi dan Sains";

            default:
                return "";
        }
    };
    
    return (
        <>
            {/* TODO: answer here */}
            <form className="form-container" onSubmit={handleSubmit}>
                <label className="form-label">
                    Fullname:
                    <input
                        className="form-input"
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        data-testid="name"
                    />
                </label>
                <div className="birth-gender">
                    <label className="form-label">
                        Birth Date:
                        <input
                            className="form-input"
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            data-testid="date"
                        />
                    </label>
                    <label className="form-label">
                        Gender:
                        <select
                            className="form-input"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            data-testid="gender"
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>
                <label className="form-label">
                    Program Study:
                    <select
                        className="form-select"
                        value={programStudy}
                        onChange={(e) => setProgramStudy(e.target.value)}
                        data-testid="prody"
                    >
                        <option value="">-- Select Program Study --</option>
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi Publik">Administrasi Publik</option>
                        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                        <option value="Hubungan Internasional">Hubungan Internasional</option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Informatika">Informatika</option>
                    </select>
                </label>
                <button className="form-button" type="submit" data-testid="submit">
                    Add Student
                </button>
            </form>
        </>
    );
};

export default Form;
