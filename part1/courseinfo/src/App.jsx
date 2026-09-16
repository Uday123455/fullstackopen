const Header=(props)=>{
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}
const Part=(props)=>{
  console.log(props)
  return(
    <p>{props.par.name} {props.par.exercises}</p>
  )
}
const Content=(props)=>{
  console.log(props.part)
  return(
    <>
    <Part par={props.part[0]} />
    <Part par={props.part[1]}  />
    <Part par={props.part[2]}  />  
    </>
    
  )
}
const Total= (props)=>{
  console.log(props)
  return(
    <p>
     Total number of exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}
    </p>
  )
}

const App = () => {
  const course='Half Stack application development'
  const parts =[
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
  return (
    <div>
      <Header course={course} />
      <Content part={parts}/>
      <Total part={parts} />
    </div>
  )
}

export default App 
