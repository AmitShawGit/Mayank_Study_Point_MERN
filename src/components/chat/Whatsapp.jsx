import wp from '../../assets/wp.png'

function Whatsapp() {
    
  return (
    <div className='whatsapp_icon'>
        <a href="https://wa.me/9093513031" target='_blank'  rel="noreferrer">
        <img src={wp} alt="wp icon" loading='eager' className='img-fluid'/>
        </a>
    </div>
  )
}

export default Whatsapp