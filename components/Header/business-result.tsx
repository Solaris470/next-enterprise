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
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    },
    {
      id: 4,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    },
    {
      id: 5,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    },
    {
      id: 6,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    },
  ]
  return (
    <>
    <div className="flex gap-2">
        {data.map((item) => (
          <div key={item.id} className="rounded-2xl flex flex-col gap-3">
            <img src={item.image} alt={item.image} />
          </div>
        ))}
      </div>
    </>
  )
}
