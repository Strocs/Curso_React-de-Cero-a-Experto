import CounterApp from "../CounterApp"
import { shallow } from 'enzyme'


describe('Tests del CounterApp', () => { 
    //scope
    // se repite para no perder el intellisense
    let wrapper = shallow(<CounterApp />)
    const counter = wrapper.find('h2').text()
    // reinicializar el valor en cada test
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('should display <CounterApp /> correctly', () => { 
        expect(wrapper).toMatchSnapshot()
    })

    test('should display default valor of 100', () => { 
        const value = 100
        const wrapper = shallow(<CounterApp value={value} />)

        const counter = wrapper.find('h2').text()
        expect(counter).toBe('100')
    })

    test('should increment with +1 button', () => { 

        wrapper.find('button').at(0).simulate('click')
        // console.log(btn1.html()); // para ver el html
        const counter = wrapper.find('h2').text()
        expect(counter).toBe('1')

    })

    test('should increment with -1 button', () => { 
        //recibe el valor aumentado de la prueba anterior
        wrapper.find('button').at(2).simulate('click')
        // console.log(btn1.html()); // para ver el html
        const counter = wrapper.find('h2').text()
        expect(counter).toBe('-1')
    })

    test('should reset to default value = 0', () => { 

        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const counter = wrapper.find('h2').text()
        expect(counter).toBe('0')
    })

 })