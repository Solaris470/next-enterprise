export default function SolutionItems() {
  const data = [
    { id: 1, image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg", title: "Customer Experience" },
    { id: 2, image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp", title: "Customer Support" },
    { id: 3, image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp", title: "Technical Customer Support" },
    { id: 4, image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp", title: "Content Moderation" },
    { id: 5, image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp", title: "Data Processing" },
    { id: 6, image: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp", title: "Finance & Accounting" },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Wrapper ที่บังคับขอบเขต */}
      <div className="relative w-full overflow-hidden">
        {/* Scroll Container */}
        <div className="flex flex-col gap-3 sm:flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 scrollbar-hide w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-[#fffcfa80] rounded-2xl p-5 flex flex-col items-center gap-3 min-w-[160px] md:min-w-[200px] snap-center"
            >
              <img src={item.image} alt={item.title} className="w-16 h-16" />
              <h3 className="text-sm font-semibold text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}