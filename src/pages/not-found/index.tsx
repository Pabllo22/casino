import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section>
      <h2>Страница не найдена</h2>
      <p>
        Такой страницы нет. Вернуться на <Link to="/">главную</Link>.
      </p>
    </section>
  )
}


