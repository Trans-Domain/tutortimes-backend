const router = require("express").Router();
import user from "../controllers/users";
import test from "../controllers/quizzes";

export default router
  // For Admin
  .post("/create-organization", user.organization.create)
  .get("/find-organization/:name", user.organization.find)
  .get("/find-all-organizations", user.organization.findAll)
  .put("/update-organization", user.organization.update)
  .delete("/delete-organization", user.organization.delete)
  // For Organization (Tutors)
  .post("/create-tutor", user.tutor.create)
  .get("/find-all-tutors", user.tutor.findAll)
  .get("/find-one-tutor/:id", user.tutor.findOne)
  .put("/update-tutor-info", user.tutor.update)
  .delete("/delete-tutor", user.tutor.delete)
  // For Organization (Students)
  .post("/create-student", user.student.create)
  .get("/find-all-students", user.student.findAll)
  .get("/find-one-student/:id", user.student.findOne)
  .put("/update-student-info", user.student.update)
  .delete("/delete-student", user.student.delete)
  // For Quizzes
  .post("/create-quiz", test.quiz.create)
  .put("/update-quiz", test.quiz.update)
  .get("/find-all-quizzes/:organization", test.quiz.findAll)
  .get("/find-tutors-quizzes/:organization/:email", test.quiz.viewTutors)
  .get("/find-one-quiz/:organization/:quizId", test.quiz.findOne)
  .delete("/delete-quiz/:organization/:quizId", test.quiz.delete)
  .post("/add-question", test.question.add)
  .delete("/delete-question", test.question.delete)
  .get("/find-question", test.question.view)
  .put("/edit-question", test.question.edit);
