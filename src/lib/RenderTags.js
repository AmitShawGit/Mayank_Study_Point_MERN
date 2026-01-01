export default function RenderTags({ tags }) {

    let json = JSON.parse(tags)
    
   return (
    <>
    <ul>
        {json ?.map((item)=><li key={item.index}>{item}</li>)}
    </ul>
    </>
   )
   

   
  
}
