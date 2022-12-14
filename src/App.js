import Student from "./components/Student"

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
    <div>Hello World</div>
    <Student name={name} age={age} shouldTheComponentsShow={toShow} />
    </>);
}

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

export default App;
