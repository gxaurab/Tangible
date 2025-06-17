import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const assignments = [
  { id: "ass1", label: "Assignment 1" },
  { id: "ass2", label: "Assignment 2" },
  { id: "ass3", label: "Assignment 3" },
  { id: "ass4", label: "Assignment 4" },
  { id: "ass5", label: "Assignment 5" }
];

const sections = ["awareness", "application", "mastery", "influence"];

type Props = {
  currentAssignment: string;
};

const SharedNavBar = ({ currentAssignment }: Props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleAssignmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    navigate(`/${selected}/awareness`);
  };

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="flex bg-gray-800 text-white p-4 items-center justify-between">
        <div>
          <label className="text-xl">Select </label>
          <select
            className="text-white bg-black/60 p-1 rounded"
            value={currentAssignment}
            onChange={handleAssignmentChange}
          >
            {assignments.map((ass) => (
              <option key={ass.id} value={ass.id}>
                {ass.label}
              </option>
            ))}
          </select>
        </div>

        <button
          className="text-3xl sm:hidden hover:bg-green-500 bg-blue-500 p-1"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div className="hidden sm:flex gap-4">
          {sections.map((section) => (
            <NavLink
              key={section}
              to={`/${currentAssignment}/${section}`}
              onClick={closeMenu}
              className="hover:underline capitalize"
            >
              {section}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <nav className=" absolute w-3/5 right-0 h-full z-10 text-center sm:hidden bg-black/80 text-white p-4 flex flex-col gap-8  ">
          {sections.map((section) => (
            <NavLink
              key={section}
              to={`/${currentAssignment}/${section}`}
              onClick={closeMenu}
              className="hover:text-green-400 capitalize border-b-1 rounded-full "
            >
              {section}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default SharedNavBar;
