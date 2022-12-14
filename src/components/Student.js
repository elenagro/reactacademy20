const Student = (props) => {
    // ternaren

    if (props.shouldTheComponentsShow) {
        console.log('true')
    } else {
        console.log('false')
    }

    props.shouldTheComponentsShow ? console.log('true') : console.log ('false')

    console.log(props)
    return <div>
        <h1>Student</h1>
        <div>Name : {props.name}</div>
        <div>Age : {props.age}</div>
        <div>ShouldShow : {props.shouldTheComponentsShow}</div>
    </div>
}

export default Student