import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductCard } from "../../components/ProductCard";
import { productCollections } from "../../data/products";

const PRODUCTS_PER_PAGE = 5;

type ProductsPageProps = {
  params: {
    page?: string[];
  };
};

const allProducts = productCollections.flatMap((collection) =>
  collection.products.map((product) => ({
    product,
    variant: collection.id,
  })),
);

const totalProducts = allProducts.length;
const totalPages = Math.max(
  1,
  Math.ceil(totalProducts / PRODUCTS_PER_PAGE),
);

export const metadata: Metadata = {
  title: "All Products | MythPoke Frames",
  description:
    "Browse every MythPoke canvas and acrylic frame. Paginated view with quick access to all collector pieces.",
};

const resolveHrefForPage = (pageNumber: number) =>
  pageNumber <= 1 ? "/products" : `/products/${pageNumber}`;

export default function ProductsPage({ params }: ProductsPageProps) {
  const rawPage = params.page?.[0];
  const parsedPage = rawPage ? Number(rawPage) : 1;
  const currentPage =
    Number.isFinite(parsedPage) && parsedPage >= 1
      ? Math.floor(parsedPage)
      : 1;

  if (currentPage > totalPages) {
    const fallbackHref = resolveHrefForPage(totalPages);
    redirect(fallbackHref);
  }

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  if (paginatedProducts.length === 0) {
    return (
      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-4xl uppercase tracking-[0.08em]">
            All MythPoke Frames
          </h1>
          <p className="text-sm text-white/60">
            No products available right now. Check back soon for new drops.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-myth-purple px-6 py-2 text-sm font-medium text-white transition hover:bg-myth-purple-dark"
          >
            Return Home
          </Link>
        </div>
      </section>
    );
  }

  const rangeStart = startIndex + 1;
  const rangeEnd = startIndex + paginatedProducts.length;
  const previousPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            Catalog
          </p>
          <h1 className="font-heading text-4xl uppercase tracking-[0.08em] sm:text-5xl">
            Every MythPoke Frame
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/60">
            Explore the full lineup of premium acrylic and canvas frames. Use
            the pagination controls to browse every collector piece in the
            MythPoke studio.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {paginatedProducts.map(({ product, variant }) => (
            <ProductCard
              key={`${variant}-${product.name}`}
              product={product}
              variant={variant}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-surface-border bg-surface-elevated/60 px-6 py-4 text-sm text-white/60 sm:flex-row">
          <p>
            Showing <span className="text-white">{rangeStart}</span>-
            <span className="text-white">{rangeEnd}</span> of{" "}
            <span className="text-white">{totalProducts}</span> products
          </p>
          {totalPages > 1 && (
            <nav className="flex items-center gap-2">
              <Link
                href={resolveHrefForPage(previousPage)}
                aria-disabled={currentPage === 1}
                className={`inline-flex items-center rounded-full border px-4 py-2 transition ${
                  currentPage === 1
                    ? "pointer-events-none border-white/5 text-white/30"
                    : "border-white/10 text-white/70 hover:text-white"
                }`}
              >
                Previous
              </Link>
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <Link
                    key={pageNumber}
                    href={resolveHrefForPage(pageNumber)}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm transition ${
                      isActive
                        ? "border-myth-purple bg-myth-purple text-white"
                        : "border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
              <Link
                href={resolveHrefForPage(nextPage)}
                aria-disabled={currentPage === totalPages}
                className={`inline-flex items-center rounded-full border px-4 py-2 transition ${
                  currentPage === totalPages
                    ? "pointer-events-none border-white/5 text-white/30"
                    : "border-white/10 text-white/70 hover:text-white"
                }`}
              >
                Next
              </Link>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
