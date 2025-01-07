import Link from "next/link";
import GenericMeta from "../components/GenericMeta";

export default function Custom404() {
  return (
    <>
      <GenericMeta
        title="404 - Halaman tidak ditemukan."
        description="Sepertinya halaman yang kamu cari tidak ada. Silahkan kembali!"
      />
      <h1 className="mb-2 heading text-amber-400">
        404 &ndash; Halaman tidak ditemukan.
      </h1>
      <p>
        Sepertinya halaman yang kamu cari tidak ada. Silahkan{" "}
        <Link href="/" className="border-b border-[#fff4] hover:border-white transition">
          kembali
        </Link>
        !
      </p>
    </>
  );
}