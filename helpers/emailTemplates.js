export const EMAIL_TEMPLATES = {
  WELCOME: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2D3142;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://www.lastcompanion.shop/assets/email-logo.png" alt="The Last Companion" style="max-width: 200px;">
      </div>
      <h2 style="color: #2D3142; margin-bottom: 20px;">Welcome to The Last Companion</h2>
      <p>Assalamu Alaikum {user},</p>
      <p>Thank you for joining The Last Companion. We are honored to be of service to our community in times of need.</p>
      <p>May Allah (SWT) bless you and your family.</p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #EF8354;">
        <p style="color: #4F5D75; font-size: 14px;">The Last Companion<br>Your trusted partner in Islamic funeral services</p>
      </div>
    </div>
  `,

 SERVICE_BOOKING: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2D3142;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://www.lastcompanion.shop/assets/email-logo.png" alt="The Last Companion" style="max-width: 200px;">
      </div>
      <h2 style="color: #2D3142; margin-bottom: 20px;">Booking Confirmation</h2>
      <p>Assalamu Alaikum {customer_name},</p>
      <p>We have received your booking request for funeral services with The Last Companion. Here are the details of your booking:</p>
      
      <div style="background-color: #F5F5F7; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <h3 style="color: #EF8354; margin-top: 0;">Service Details:</h3>
        <p><strong>Service Type:</strong> {service_type}</p>
        <p><strong>Service Name:</strong> {service_name}</p>
        <p><strong>Service Description:</strong> {service_description}</p>
        <p><strong>Service Price:</strong> ₹{service_price}</p>
      </div>

      <div style="background-color: #F5F5F7; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <h3 style="color: #EF8354; margin-top: 0;">Booking Information:</h3>
        <p><strong>Deceased Name:</strong> {deceased_name}</p>
        <p><strong>Date:</strong> {booking_date}</p>
        <p><strong>Time:</strong> {booking_time}</p>
        <p><strong>Status:</strong> {booking_status}</p>
      </div>

      <div style="background-color: #F5F5F7; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <h3 style="color: #EF8354; margin-top: 0;">Location Details:</h3>
        <p><strong>Graveyard Name:</strong> {graveyard_name}</p>
        <p><strong>Address:</strong> {graveyard_address}</p>
      </div>

      <div style="background-color: #F5F5F7; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <h3 style="color: #EF8354; margin-top: 0;">Contact Information:</h3>
        <p><strong>Phone:</strong> {customer_phone}</p>
        <p><strong>Email:</strong> {customer_email}</p>
      </div>

      {additional_notes_section}

      <p>Our team will contact you shortly to confirm the arrangements. For urgent matters, please call us at: <strong>+91 9618316290</strong></p>
      <p>May Allah (SWT) grant you strength and patience during this difficult time.</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #EF8354;">
        <p style="color: #4F5D75; font-size: 14px;">The Last Companion<br>Available 24/7 for our community</p>
        <p style="color: #4F5D75; font-size: 12px;">Booking Reference: {created_at}</p>
      </div>
    </div>
  `,

  FUNDRAISER_CONFIRMATION: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #2D3142;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://www.lastcompanion.shop/assets/email-logo.png" alt="The Last Companion" style="max-width: 200px;">
      </div>
      <h2 style="color: #2D3142; margin-bottom: 20px;">Thank You for Your Contribution</h2>
      <p>Assalamu Alaikum {user},</p>
      <p>Jazak Allah Khair for your generous contribution of ₹{amount} to The Last Companion community fund.</p>
      <div style="background-color: #F5F5F7; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <h3 style="color: #EF8354; margin-top: 0;">Donation Details:</h3>
        <p>Amount: ₹{amount}</p>
        <p>Transaction ID: {transactionId}</p>
        <p>Date: {date}</p>
      </div>
      <p>Your contribution will help us provide dignified Islamic funeral services to those in need within our community.</p>
      <p>May Allah (SWT) accept your contribution and reward you abundantly in this life and the hereafter.</p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #EF8354;">
        <p style="color: #4F5D75; font-size: 14px;">The Last Companion<br>Serving our community with dignity and respect</p>
      </div>
    </div>
  `
};