import Student from "./components/Student";
import PersonIterator from './components/PersonIterator'
import StudentClass from './components/StudentClass'

import './css/style.css'

// const name = "Mia Koluci"
// const age = 31
// const toShow = true
// const fruits = ['apple', 'android', 'banana']
// const student = {
//   name,
//   age,
//   fruits
// }

const App = () => {
const name = "Mia Koluci"
const age = 31
const toShow = true
const fruits = ['apple', 'android', 'banana']
const student = {
  name,
  age,
  fruits
}
  return (<>
    <div style={{fontSize: '10px'}}>Hello World</div>
    <Student fruits={fruits} name={name} age={age} shouldTheComponentsShow={toShow} />

    <Student fruits={['orange', 'lemon', 'lime']} name={'Svetle'} age={44} shouldTheComponentsShow={true} />
    <hr />

    <PersonIterator />

    <hr />

    <StudentClass fruits={fruits} name={name} age={age} shouldTheComponentsShow={toShow} />


    </>);
}

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

export default App;
