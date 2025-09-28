export function MapSection() {
  return (
    <div 
      id="MapSection"
      className="w-full bg-[#8d7b5d]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 py-32 px-4 md:px-0">

        <div className="flex flex-col gap-4 min-h-96">
          <p className="text-center text-4xl font-bold text-background">Lokasi Pemberkatan</p>
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=10%C2%B010'39.0%22S%20123%C2%B033'43.5%22E&maptype=roadmap"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-4 min-h-96">
          <p className="text-center text-4xl font-bold text-white">Lokasi Resepsi</p>
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=10%C2%B010'39.0%22S%20123%C2%B033'43.5%22E&maptype=roadmap"
            allowFullScreen
          />
        </div>
      </div>


    </div>
  )
}