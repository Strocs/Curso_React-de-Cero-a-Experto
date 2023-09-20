import { addHours } from 'date-fns'
import { useCalendarStore, useUiStore } from '../../hooks'

export const FabAddNew = () => {
  const { setActiveEvent } = useCalendarStore()
  const { openDateModal } = useUiStore()

  const handleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Juan'
      }
    })
    openDateModal()
  }

  return (
    <button onClick={handleClickNew} className='btn btn-primary fab'>
      <i className='fas fa-plus' />
    </button>
  )
}
