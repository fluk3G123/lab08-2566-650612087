import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Task } from "../../Component/Task";
import { TaskInput } from "../../Component/TaskInput";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput></TaskInput>
        <Task title="Read a book"></Task>
        <Task title="Take a shower"></Task>
        <Task title="Sleep"></Task>
      </div>
      <Footer
        year="2023"
        fullName="Nithipong Howong"
        studentId="650612087"
      ></Footer>
    </div>
  );
}
