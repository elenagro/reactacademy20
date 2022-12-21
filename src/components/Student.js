const Student = (props) => {
    // ternaren

    const { shouldTheComponentsShow, name, age, fruits } = props

    // if (props.shouldTheComponentsShow) {
    //     console.log('true')
    // } else {
    //     console.log('false')
    // }

    // shouldTheComponentsShow ? console.log('true') : console.log ('false')

    // console.log(props)

    // conditional rendering
    // if shouldTheComponentsShow is true it will print the component, otherwise it will not render anything
if(!shouldTheComponentsShow){
    return null
}

// JSON.stringify(fruits)

    return (shouldTheComponentsShow &&
    <div>
        <h1>Student</h1>
        <div>Name : {name}</div>
        <div>Age : {age}</div>
        <div>ShouldShow : {shouldTheComponentsShow}</div>
        <div>Fruits : {fruits.map(fruit => {
            return <li key={fruit}>{fruit}</li>
        })}</div>
    </div>)
}

export default Student