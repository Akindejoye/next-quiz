import Link from "next/link";
import postgres from "postgres";

function Quizzes() {
  return (
    <ul>
      <li>
        <Link href="/quizz/1">Quiz 1</Link>
      </li>
      <li>
        <Link href="/quizz/2">Quiz 2</Link>
      </li>
      <li>
        <Link href="/quizz/3">Quiz 3</Link>
      </li>
      <li>
        <Link href="/quizz/4">Quiz 4</Link>
      </li>
    </ul>
  )
}

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
        <Quizzes />
    </section>
  );
}
