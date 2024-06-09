import Image from "next/image";

export default function Projet({ projet }) {
  return (
    <div className="w-[50em] h-[35em] mx-auto  mt-10 ">
      <div className="mx-auto w-[30em] text-center font-serif text-slate-600 font-semibold mt-5">
        {projet.titre}
      </div>

      <Image
        className="w-[13em] h-[9em]  mt-7 rounded-lg mx-auto"
        height={200}
        width={200}
        src={"./img/" + projet.illustration}
      />

      <div className="w-[60%] mt-5 mx-auto text-center">
        <span className="text-xs text-justify">{projet.description}</span>
      </div>
    </div>
  );
}
