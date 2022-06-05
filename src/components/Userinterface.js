import React,{useState} from "react";
import studentpic from "./images/indir.png";
import "./componentsCss/Userinterface.css";
import Dersler from "./Dersler";

const Interface1 = (props) => {

    const [isclicked,setClick] = useState(Boolean)
    //ders kayıt tuşuna basıldığı zaman tetiklenip isclicked değişkenini true yapan fonksiyon
    const getirders = () =>{
        setClick(true);

    }
//login olan öğrencinin bilgileri aşagıdaki kodla ekranda gösterilir
    return(
        <div style = {{width:"100%",height:"100%"}}>
            <div style = {{position:"absolute",width:"23%",height:"auto",backgroundColor:"#c4c0c0",borderRadius:"10px"}}>
                <div  style = {{backgroundColor:"#575555", width :"65%",height:"auto",margin:"50px 15% 50px 15%",border:"3px solid black",borderRadius:"10px"}}>
                    <img   src={studentpic} width = "100%" height="250px" />
                    <div className = "text-center" style = {{width :"100%",height:"50px",margin:"30px 0 0 0"}}><h3 style={{color:"white",fontSize:"20px"}} > {props.card.ogrno}</h3></div>
                    <div className = "text-center" style = {{width :"100%",height:"50px",margin:"5px 0 0 0"}}><h3 style = {{color:"white",fontSize:"20px"}}>{props.card.isim + " " + props.card.soyisim}</h3></div>
                    <div className = "text-center" style = {{width :"100%",height:"50px",margin:"5px 0 0 0"}}><h3 style = {{color:"white",fontSize:"20px"}}>{props.card.bolum}</h3></div>
                    <div className="text-center">
                        <a href = "http://localhost:3000"><button style={{width: "90%",backgroundColor: "#b92d15" ,color: "white",padding: "10px 15px", margin: "15px 0 15px 0",border: "none", borderRadius: "4px", cursor: "pointer"}}>Çıkış Yap</button></a>
                    </div>

                    <a href = "#"><div className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"5px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Bilgilerim</h3></div></a>
                    <a href = "#" ><div onClick={getirders} className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"3px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Ders Kayıt</h3></div></a>
                    <a href = "#"><div className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"3px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Not Bilgileri</h3></div></a>
                    <a href = "#"><div className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"3px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Mesaj</h3></div></a>
                    <a href = "#"><div className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"3px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Transkript</h3></div></a>
                    <a href = "#"><div className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"3px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Danışman </h3></div></a>
                    <a href = "#" ><div className = "text-center hover1" style = {{width :"100%",height:"50px",margin:"3px 0 0 0",backgroundColor:"black"}}><h3 className = "child" style = {{height:"100%",fontSize:"20px" ,padding:"5% 0 0 0 "}}>Faaliyet</h3></div></a>
                </div>
            </div>
            {isclicked?<Dersler liste = {props.card}/>:console.log("hata veriyo ya")}
            
        </div>
    )

}
export default Interface1;