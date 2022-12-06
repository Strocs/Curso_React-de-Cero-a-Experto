// import { render } from "@testing-library/react"
import { shallow } from "enzyme"
import PrimeraApp from "../PrimeraApp"

describe('Pruebas en <PrimeraApp />', () => { 

//    test('should show the message Hola soy Ignacio', () => { 
//         const saludo = 'Hola soy Ignacio'       
//         const { getByText } = render(<PrimeraApp saludo={ saludo } />)
//         expect(getByText(saludo)).toBeInTheDocument() 
//     }) 

    test('should show <PrimeraApp /> correctly', () => { 

        const saludo = 'Hola soy Goku'
        //shallow = render
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        
        expect(wrapper).toMatchSnapshot()
        
    })
    
    test('should mostrar el subtitulo enviado por props', () => { 
        const saludo = 'Hola soy Goku'
        const subtitulo = 'soy un sub'
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subtitulo } 
            />
        )
            console.log(wrapper);
        // document.querySelector('p')
        const textoParrafo = wrapper.find('p').text()
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo)
     })
        

 })