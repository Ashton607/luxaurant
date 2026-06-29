import { useState } from 'react'
import './Contact.css'
import { IoLocationOutline, IoTimeOutline, IoCallOutline } from 'react-icons/io5'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";

const Contact = () => {
  const [fullName, setFullName] = useState('')
  const [contactDetails, setContactDetails] = useState('')
  const [foodOrder, setFoodOrder] = useState('')
  const [foodQty, setFoodQty] = useState('')
  const [drinks, setDrinks] = useState('')
  const [drinksQty, setDrinksQty] = useState('')
  const [dessert, setDessert] = useState('')
  const [dessertQty, setDessertQty] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

 
 
  const handleImageChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected)
    setPreview(URL.createObjectURL(selected)) // shows preview
  }

  const handleCancelImage = () => {
  setFile(null)
  setPreview(null)
  document.getElementById('fileInput').value = '' // resets the input
}

  const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'luxaurant') // set in Cloudinary dashboard

  const res = await fetch('https://api.cloudinary.com/v1_1/drtb5zhbe/image/upload', {
    method: 'POST',
    body: formData
  })
  const data = await res.json()
  return data.secure_url // this is the image link
}

  const handleSubmit = async () => {
    const imageUrl = file ? await uploadImage(file) : 'No image'

    if (!fullName || !foodOrder) {
      alert('Please fill in your name and order.')
      return
    }

     setLoading(true)

    const message =
      `New Reservation Request\n\n` +
      `Full-Name: ${fullName}\n` +
      `Phone: ${contactDetails}\n` +
      `Food: ${foodOrder || 'None'}\n` +
      `Food Qty: ${foodQty || 'None'}\n` +
      `Drinks: ${drinks || 'None'}\n` +
      `Drinks Qty: ${drinksQty || 'None'}\n` +
      `Dessert: ${dessert || 'None'}\n` +
      `Dessert Qty: ${dessertQty || 'None'}\n` +
      `Reference Image: ${imageUrl}\n` +
      `Special Requests: ${specialRequests || 'None'}`

    const phone = '27788825777'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')

    setLoading(false)
  }
  
  return (
    <div className='Contact'>
    
    <div className="contact-content">
    
    <span className="contact-badge">contact</span>

    <p className="contact-subtitle">reserve your food</p>

    <h1 className="contact-title">Contact Us to Reserve Your Order in <span>Douglas</span></h1>

    <p className="contact-subtitle-2">Have a question or want to skip the queue? 
    Drop us a WhatsApp text to secure your meal, or visit us at our pickup point below.</p>

    <div className="left-right">

     <div className="contact-left">
      <p className="contact-left-subtitle">come find us</p>
      <p className="contact-left-subtitle-2">We serve the best food in Douglas. 
        Pop into our shop to order fresh, or text us on WhatsApp to reserve your meals and 
        treats so they’re ready the moment you arrive!</p>

      <div className="location-time">
        <h2><IoLocationOutline/>Location</h2>
        <p>12 Carel Cilliers St,Douglas 8730</p>
        <h2><IoTimeOutline/>Hours</h2>
        <p>Mon-Fri 8:00 am - 17:00 pm</p>
        <p>Sat-Sun 8:00 am - 13:00 pm</p>
      </div>
      <div className="contact-info">
        <h2><IoCallOutline/>Phone</h2>
        <p>+27 778 885 666</p>
        <h2><SiGmail/>Email</h2>
        <p>luxaurant@info.com</p>
        <h2><FaWhatsapp/>WhatsApp</h2>
        <p>0755526999</p>
      </div>
      
     </div>

     <div className="contact-right">
        <h2 className="form-title"><span>Reserve </span>your meal</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Full-Name</label>
            <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Contact Details</label>
            <input value={contactDetails} onChange={e => setContactDetails(e.target.value)} placeholder="062 456..." />
          </div>
        </div>


        <div className="form-row">
        <div className="form-group">
          <label>Food</label>
          <input value={foodOrder} onChange={e => setFoodOrder(e.target.value)} placeholder="e.g cheese burger" />
        </div>
        <div className="form-group">
          <label>Food (Qty)</label>
          <input value={foodQty} onChange={e => setFoodQty(e.target.value)} placeholder="e.g 2" />
        </div>
        </div>

        <div className="form-row">
        <div className="form-group">
            <label>Drinks</label>
            <input value={drinks} onChange={e => setDrinks(e.target.value)} placeholder="e.g chocolate milkshake" />
          </div>
          <div className="form-group">
            <label>Drinks (Qty)</label>
            <input value={drinksQty} onChange={e => setDrinksQty(e.target.value)} placeholder="e.g 2" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Dessert</label>
            <input value={dessert} onChange={e => setDessert(e.target.value)} placeholder="e.g melktert" />
          </div>
          <div className="form-group">
            <label>Dessert (Qty)</label>
            <input value={dessertQty} onChange={e => setDessertQty(e.target.value)} placeholder="e.g 4" />
          </div>
        </div>

        <div className="form-group">
          <label>Image Reference</label>
          <div className="image-upload" onClick={() => !preview && document.getElementById('fileInput').click()}>
    {preview ? (
      <>
        <img src={preview} alt="preview" className="image-preview" />
        <button className="cancel-image" onClick={(e) => { e.stopPropagation(); handleCancelImage() }}>
          ✕ Remove Image
        </button>
      </>
    ) : (
      <span>Click to upload image</span>
    )}
  </div>
          <input id='fileInput' type='file' accept='image/*' style={{display:'none'}} onChange={handleImageChange}/>
        </div>

        <div className="form-group">
          <label>Special Requests</label>
          <textarea value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} 
          placeholder="Dietary requirements, celebrations, seating preferences..." rows={4} />
        </div>

        <button className="form-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Uploading...' : 'Send'}<LuSendHorizontal style={{marginBottom:'-2px'}}/>
        </button>
      </div>
      </div>
      
    </div>
      
    </div>
  )
}

export default Contact
