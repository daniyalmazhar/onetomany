const students = [
  {
    name: "Ali",
    class: "MR-16",
  },
  {
    name: "Hamza",
    class: "MR-15",
  },
];
const StudentController = {
  getAll: (req, res) => {
    try {
      res.json({
        data: students,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingle: (req, res) => {
    try {
      const { name } = req.params;

      const student = students.find((ele) => ele.name == name);
      if (!student) {
        return res.status(404).json({ message: "No student with this name" });
      }
      res.status(200).json({ data: student });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  create: (req, res) => {
    try {
      const payload = req.body;

      students.push(payload);

      res.status(200).json({ message: "Student created", students });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  update: (req, res) => {
    try {
      const { name } = req.params;
      const payload = req.body;

      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "No student with this name" });
      }

      if (payload.name) {
        students[studentIndex].name = payload.name;
      }

      if (payload.class) {
        students[studentIndex].class = payload.class;
      }

      // students[studentIndex].name = payload.name
      //   ? payload.name
      //   : students[studentIndex].name;
      // students[studentIndex].class = payload.class
      //   ? payload.class
      //   : students[studentIndex].class;

      res.status(200).json({ message: "Student Updated", students });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  delete: (req, res) => {
    try {
      const { name } = req.params;

      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "No student with this name" });
      }
      students.splice(studentIndex, 1);
      res.status(200).json({ message: "Student Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default StudentController;
