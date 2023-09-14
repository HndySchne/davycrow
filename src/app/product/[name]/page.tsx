"use client";
import Products from "../../../components/products";
import ScreenPrinting from "../../../components/screenPrinting";
import { useParams } from "next/navigation";
import Footer from '../../../components/footer';

export default function product() {
  const params = useParams();
  const NAV_TYPE: string = params.name;
  console.log('NAV_TYPE :', NAV_TYPE);
  
  return (
    <main>
      {NAV_TYPE == "SE" ? <div><ScreenPrinting /></div> : <div><Products nav={NAV_TYPE}
      /></div>}
    </main>
  );
  }
