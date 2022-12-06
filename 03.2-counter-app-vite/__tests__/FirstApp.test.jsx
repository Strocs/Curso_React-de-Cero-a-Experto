import { render } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Hola, soy Goku'
  //   const { container } = render(<FirstApp title={title} />)

  //   expect(container).toMatchSnapshot()
  // })

  test('debe de mostrar el título en un h1', () => {
    const title = 'Hola, soy Vegeta'
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    )
    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)

    expect(getByTestId('test-title').innerHTML).toContain(title)
  })

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, soy Radic'
    const subTitle = 'Soy un sub'
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />)

    expect(getAllByText(subTitle).length).toBe(2)
  })
})
