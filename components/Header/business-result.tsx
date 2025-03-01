export default function BusinessResult() {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    },
    {
      id: 2,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    },
    {
      id: 3,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg",
    },
    {
      id: 4,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg",
    },
    {
      id: 5,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg",
    },
    {
      id: 6,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg",
    },
  ]
  return (
    <>
    <div className="flex gap-2">
        {data.map((item) => (
          <div key={item.id} className="rounded-2xl flex flex-col gap-3 max-w-40">
            <img className="w-full" src={item.image} alt={item.image} width={240} height={240}/>
          </div>
        ))}
      </div>
    </>
  )
}
