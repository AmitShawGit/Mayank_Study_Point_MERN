export default function RenderTags({ tags }) {

    let json = JSON.parse(tags)
    
    console.log(typeof(json));
    

   return (
    <>
    <ul>
        {json ?.map((item)=><li key={item.index}>{item}</li>)}
    </ul>
    </>
   )
   

   
  
}
