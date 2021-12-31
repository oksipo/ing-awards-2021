 const Person = ({person})=>{
return person?<div>
    <img src = {person.img} width={'64px'} height={'64px'}/>
    <br/>
    {person.name}
</div>:''
}

export default Person