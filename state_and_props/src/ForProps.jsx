 export default function ForProps(props){
    return(
        <>
        <h2>Using Props:</h2>
        <div style={{border:'5px solid purple', padding:'10px', margin:'25px'}}>
         <h3>In this component I am using Props</h3>
        <h4>Hi! I am {props.name}</h4>
        <h4>This is task for {props.fellowshipName} </h4>
        </div>
        </>
        
    )

    
}
