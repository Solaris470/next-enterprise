export default function SupportItems() {
  const items = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg",
      title: "Customer Support",
      text: "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
      link: "Explore Customer Support",
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg",
      title: "Customer Experience",
      text: "Enhance every stage of your customer journey and scale confidently — from a single touchpoint to the entire lifecycle.",
      link: "Explore Customer Experience",
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg",
      title: "Technical Customer Support",
      text: "Outsource dedicated experts on your business to answer customer questions.",
      link: "Explore Technical Customer Support",
    },
    {
        id: 4,
        icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0ca966ce478f_icons%3DPencil.svg",
        title: "Customer Support",
        text: "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
        link: "Explore Customer Support",
      },
      {
        id: 5,
        icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1b4ace4778_icons%3DData%20Processing.svg",
        title: "Customer Support",
        text: "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
        link: "Explore Customer Support",
      },
      {
        id: 6,
        icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761c9_66a94bdb23f9b933553ccdb1_Untitled%2520design%2520(40)%2520(1).png",
        title: "Customer Support",
        text: "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
        link: "Explore Customer Support",
      },
  ]

  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-20">
        {items.map((item, index) => (
          <div key={item.id}>
            <div className="support-item gap-y-5 flex flex-col">
              <div className="flex items-center gap-3 font-bold">
            <img src={item.icon} width="40" height={40} />
            <h3>{item.title}</h3>
              </div>
              <div className="flex items-center gap-3 font-normal">
            <p>{item.text}</p>
              </div>
              <div className="flex items-center gap-3 font-bold">
            <a href="#">{item.link} {'->'}</a>
              </div>
            </div>
            <hr className="mt-10 border-b border-gray-400 "/>
          </div>
        ))}
      </div>
    </>
  )
}
