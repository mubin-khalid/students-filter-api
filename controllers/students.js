const Students = require("../models/students");
const { Op } = require("sequelize");

class StudentsController {
  constructor() {
    this.students = this.index.bind(this);
  }
  async index(req, res) {
    try {
      const { search, marksLow, marksHigh } = req.query;

      if ((marksLow && !marksHigh) || (!marksLow && marksHigh)) {
        return res
          .status(400)
          .json({
            error:
              "Both marksLow and marksHigh are required if one is present.",
          });
      }
      const whereClause = {};

      if (search) {
        whereClause.name = { [Op.like]: `%${search}%` };
      }

      if (marksLow && marksHigh) {
        whereClause.marks = {
          [Op.and]: [
            { [Op.lt]: parseFloat(marksHigh) },
            { [Op.gt]: parseFloat(marksLow) },
          ],
        };
      }

      // Fetch students based on the where clause
      const students = await Students.findAll({
        where: whereClause,
      });

      // Respond with the list of students
      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new StudentsController();
