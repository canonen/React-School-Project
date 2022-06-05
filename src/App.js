import reactDom from "react-dom";

import Validation from "./components/Validation";




function App() {
//dersler listesi
  const mat2 = ["Mat107","Genel Matematik II ","Zorunlu","5","6","1"]
  const fizik2 = ["Fiz112","Genel Fizik II ","Zorunlu","3","4","1"]
  const proggiris = ["Bil121","Programlama Dillerine Giriş", "Zorunlu","3,5","6","1"]
  const ayrikmat = ["Mat122","Ayrık Matematik","Zorunlu","3","6","1"]
  const zai = ["Zai102","İnkılap Tarihi","Seçmeli","2","2","1"]
  const ztd = ["Ztd102","Türk Dili II" , "Seçmeli","2","2","1"]
  const eng1 = ["Zyd102","Yabanci Dil II","Zorunlu","2","2","1"]
  const mec124 = ["mec124","İstatistik", "Zorunlu","3,5","6","1"]
  const fiz104 = ["fiz104","Fizik II","Zorunlu","4","6","1"]
  const kim105 = ["kim105","Genel kimya I","Zorunlu","4","5","1"]
  const mec126 = ["mec126","Advanced English II" , "Zorunlu","4","5","1"]
  const mat102 = ["mat102","Matematik II","Zorunlu","6","7","1"]

//öğrenci bilgileri
  const students = [
  {id:1,ogrno : "1191602016",pwd : "123",isim : "Can",soyisim : "Önen",bolum:"Bilgisayar Mühendisliği",dersler:[mat2,fizik2,proggiris,ayrikmat,zai,ztd,eng1]},
  {id:2,ogrno : "1181601015",pwd : "456",isim : "Ahmet",soyisim : "Mehmet" ,bolum:"Makine Mühendisliği", dersler:[mec124,fiz104,kim105,mec126,mat102,zai]},
  
]
  return (
    <div style= {{width:"100%",height:"100%"}}>
      <div id = "logincontainer" style = {{height:"100%"}}>

          <Validation item = {students}/>
          

      </div>
      
    </div>
  );
}

export default App;
