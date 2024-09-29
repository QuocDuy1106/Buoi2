export default function Hello(){
    const hiAll=()=>{
        alert("hello everyone")
    }
    const hiYou=(abc)=>{
        alert("Hello"+ abc)
    }
    return(
        <>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={()=>hiYou ("abc")}>Hi you</button>
        </>
    )
  
}