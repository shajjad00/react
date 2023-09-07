export default function User({user}){
    const {name,email}=user
    return(
        <div style={{border:'2px solid purple', margin: '20px', padding:'10px'}}>
            <h4>name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}