import { products } from "@/constants";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Latest shoes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard 
            key={product.id} 
            title={product.title}
            subtitle={product.subtitle}
            meta={product.meta}
            imageSrc={product.imageSrc}
            price={product.price}
            badge={product.badge}
            href={`/products/${product.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
