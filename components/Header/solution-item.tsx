export default function SolutionItems() {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
      title: "Customer Experience",
    },
    {
      id: 2,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
      title: "Customer Experience",
    },
    {
      id: 3,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
      title: "Customer Experience",
    },
    {
      id: 4,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
      title: "Customer Experience",
    },
    {
      id: 5,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
      title: "Customer Experience",
    },
    {
      id: 6,
      image:
        "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
      title: "Customer Experience",
    },
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap px-4">
      <div className="flex gap-3">
        {data.map((item) => (
          <div key={item.id} className="bg-[#fffcfa80] rounded-2xl p-10 flex flex-col gap-3 min-w-[200px]">
            <img src={item.image} alt={item.title} className="w-16 h-16 mx-auto" />
            <h3 className="text-sm font-semibold text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
