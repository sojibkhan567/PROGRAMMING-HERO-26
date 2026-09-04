// Problem 5 — Student Result Analyzer
type Student = {
  name: string;
  marks: number[];
};
type Result = {
  name: string;
  average: number;
  result: string;
};

function getStudentResult(student: Student): Result {
  const marks: number[] = student.marks;

  const totalMark: number = marks.reduce((sum, mark) => sum + mark, 0);

  const average: number = totalMark / marks.length;

  const result: string = average >= 40 ? "Passed" : "Failed";

  return { name: student.name, average, result };
}

console.log(
  getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85],
  }),
);
