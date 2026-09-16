const Header=(props)=>{
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}
const Part=(props)=>{
  console.log(props)
  return(
    <p>{props.par.name} {props.par.exercises}</p>
  )
}
const Content=(props)=>{
  console.log(props)
  return(
    <>
    <Part par={props.part.parts[0]} />
    <Part par={props.part.parts[1]}  />
    <Part par={props.part.parts[2]}  />  
    </>
    
  )
}
const Total= (props)=>{
  console.log(props)
  return(
    <p>
     Total number of exercises {props.part.parts[0].exercises+props.part.parts[1].exercises+props.part.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course={
    name:'Half Stack application development',
    parts:[
  {
    name: 'Fundamentals of React',
    exercises:10
  },
  {
    name:'Using props to pass data',
    exercises:7
  },
  {
      name:'State of a component',
      exercises:14
  }
]
}
  return (
    <div>
      <Header course={course} />
      <Content part={course}/>
      <Total part={course} />
    </div>
  )
}

export default App 
