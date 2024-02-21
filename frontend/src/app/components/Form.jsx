import { useState } from "react";
import Button from "./Button";
import { PiStudentLight } from "react-icons/pi";

const Form = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isCurrentPageValid =
      currentPage === 1
        ? formData.name !== ""
        : currentPage === 2
        ? formData.role !== ""
        : formData.email !== "";

    if (isCurrentPageValid) {
      if (currentPage === 3) {
        console.log("Form submitted:", formData);
      } else {
        setCurrentPage(currentPage + 1);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="text-white flex gap-4 items-center justify-start w-full">
            <label
              htmlFor="name"
              className="text-[#14F713] font-semibold text-lg"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-black outline-none p-1 rounded-sm border border-[#14F713]"
            />

            <Button
              label="Next"
              bgColor={"#14F713"}
              textColor={"black"}
              onClick={handleSubmit}
            ></Button>
          </div>
        );
      case 2:
        return (
          <div className="text-white flex gap-4 items-center justify-start">
            <label
              htmlFor="role"
              className="text-[#14F713] font-semibold text-lg"
            >
              Select Role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="text-black outline-none p-1 rounded-sm border border-[#14F713]"
            >
              <option
                value="student"
                className="text-black outline-none p-1 rounded-sm border border-[#14F713]"
              >
                Student
              </option>
              <option
                value="professional"
                className="text-black outline-none p-1 rounded-sm border border-[#14F713]"
              >
                Professional
              </option>
            </select>
            <Button
              label="Next"
              bgColor={"#14F713"}
              textColor={"black"}
              onClick={handleSubmit}
            ></Button>
            <Button
              label="Back"
              bgColor={"#14F713"}
              textColor={"black"}
              onClick={() => setCurrentPage(1)}
            ></Button>
          </div>
        );
      case 3:
        return (
          <div className="text-white flex gap-4 items-center justify-start">
            <label
              htmlFor="email"
              className="text-[#14F713] font-semibold text-lg"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-black outline-none p-1 w-fit rounded-sm border border-[#14F713]"
            />
            <Button
              label="Submit"
              bgColor={"#14F713"}
              textColor={"black"}
              onClick={handleSubmit}
            ></Button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Form;
