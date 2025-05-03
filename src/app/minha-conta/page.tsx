import BannerPaginaCima from "../components/BannerPaginaCima";
import BlocoAcesso from "../components/BlocoAcesso";

export default function MyAccount() {
  return (
    <main className="bg-[#F2FAFC] container">
      <BannerPaginaCima />

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-4">
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
        <BlocoAcesso />
      </div>
    </main>
  );
}
