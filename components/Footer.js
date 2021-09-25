const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-32 bg-gray-100 text-gray-600 border-2 border-gray-300">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-semibold">ABOUT</h5>
          <p> How Airbnb works</p>
          <p> Newsroom</p>
          <p> Airbnb 2021</p>
          <p> Investors</p>
          <p> Airbnb Plus</p>
          <p>Airbnb Luxe</p>
          <p> HotelTonight</p>
          <p> Airbnb for Work</p>
          <p>Made possible by Hosts</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-semibold">COMMUNITY</h5>
          <p> Diversity & Belonging</p>
          <p> Against Discrimination</p>
          <p> Accessibility</p>
          <p> Airbnb Associates</p>
          <p> Host Afghan refugees</p>
          <p>Airbnb Luxe</p>
          <p> Guest Referrals</p>
          <p> Gift cards</p>
          <p>Airbnb.org</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-semibold">HOST</h5>
          <p> Host your home</p>
          <p> Host an Online Experience</p>
          <p> Host an Experience</p>
          <p>Responsible hosting</p>
          <p> Host Afghan refugees</p>
          <p>Resource Center</p>
          <p> Community Center</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-semibold">SUPPORT</h5>
          <p> Our COVID-19 Response</p>
          <p> Help Center</p>
          <p> Host an Experience</p>
          <p>Cancellation options</p>
          <p> Neighborhood Support</p>
          <p>Trust & Safety</p>
        </div>
      </div>
      <p className="bg-gray-400 text-center p-3 text-white font-semibold">
        {" "}
        All Copyright reserved by © {new Date().getFullYear()} Airbnb, Inc
      </p>
    </>
  );
};

export default Footer;
