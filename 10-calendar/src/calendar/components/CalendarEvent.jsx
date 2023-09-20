export const CalendarEvent = ({ event }) => {
  const { title, user } = event || null

  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  )
}
