export default function RenderTags({ tags }) {

    let json = JSON.parse(tags)
    
   return (
    <>
    <ul>
        {json?.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
    </>
   )
   

   
  
}
