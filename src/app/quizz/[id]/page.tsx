export default function QuizPage({ params }: { params: { id: string }}) {
  return (
    <main>
      <h1>Page {params.id}</h1>
    </main>
  )
}