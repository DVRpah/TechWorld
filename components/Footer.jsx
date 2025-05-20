import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Acest site a fost facut de: Vrancean Dan si Caraus Mihai, noi nu am dovedit sa facem tot,
            deoarece l-am refacat de la 0 de 3 ori, si am avut cel putin 4 nopti nedormite, fiecare dintre noi,
            va multumim ca ati vizitat site-ul dat.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Compania</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Acasa</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Despre noi</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contacteaza-ne</a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Contacte</h2>
            <div className="text-sm space-y-2">
              <p>+373 69 389 977 (Dan) 
                +373 67 646 540 (Mihai)
              </p>
              <p>dan07vr@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © Vrancean Dan, Caraus Mihai All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;