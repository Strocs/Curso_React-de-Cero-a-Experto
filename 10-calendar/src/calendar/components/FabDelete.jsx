import { useCalendarStore, useUiStore } from '../../hooks'

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore()
  const { isModalClosed } = useUiStore()
  const handleDelete = async () => {
    await startDeletingEvent()
  }

  return (
    <button
      onClick={handleDelete}
      className='btn btn-danger fab-danger'
      style={{
        display: hasEventSelected && isModalClosed ? '' : 'none'
      }}>
      <i className='fas fa-trash-alt fa-xs' />
    </button>
  )
}
