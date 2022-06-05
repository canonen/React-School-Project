import React,{useState} from "react";
import "./componentsCss/Validation.css";
import Userinterface from "./Userinterface";




const Valid = (props) => {
    const [index1,setIndex] = useState(""); 
    const [islogin,setLogin] = useState(false);
    const [text,setText] = useState(""); 
    const [dersleri,] = useState([]);
    const [yenidersler,] = useState([]);

    const remove1 = (e) => {

        const index = dersleri.indexOf(e);
        if (index > -1){
            dersleri.splice(index,1);
            document.getElementById(e).remove();
            yenidersler.push(e);

        }
    }
//Login kontrol işlemi
    const a = () => {
        let b = document.getElementById("ogr").value;
        let c = document.getElementById("pwd").value; 

        for(let index = 0; index < props.item.length; index++)
        {   
            if (b == props.item[index].ogrno && c == props.item[index].pwd){
                setText("Hoşgeldiniz" + " " + props.item[index].isim + " " + props.item[index].soyisim);
                setLogin(true);
                setIndex(index);
                
                for(let j = 0; j < props.item[index].dersler.length;j++){
                    dersleri.push(props.item[index].dersler[j]);
                }
            }
            else if (c == props.item[index].pwd && b != props.item[index].ogrno){setText("*Hatalı öğrenci numarası veya parola*" )
            document.getElementsByClassName("myH1").style.color = "red";}
            else if (b == props.item[index].ogrno && c != props.item[index].pwd){setText("*Hatalı öğrenci numarası veya parola*"); }

            else{
                setText("*Hatalı öğrenci numarası veya parola*");
            }
        }


    }

    return(
        <div id = "rem" style = {{height:"100%"}}>
            <div id = "login"  style = {{ position:"absolute",backgroundColor:"#c4c0c0" , height:"auto",width:"25%",  top: "50%",left: "50%", transform: "translate(-50%, -50%)",border:"8px solid #2c2b2b",borderRadius:"5px"}}>
                <div style = {{height : "500px"}}  >
                    <div id = "form"  >
                        <form>
                            <div style = {{padding:"20% 25px 0px 25px"}}>
                                <h3 style = {{color:"black"}} >Öğrenci numarası :</h3>
                            </div>
                            <div className = "text-center" >
                                <input id = "ogr" type = "text" placeholder="Ogr No"></input>
                            </div>
                            <div style = {{padding:"15px 25px 0px 25px"}}><h3 style = {{color:"black"}} >Parola:</h3></div>
                            
                            <div className = "text-center">
                                <input id = "pwd" type = "password" placeholder="*************"></input>
                            </div>
                        </form>
                        <div className=" text-center " style = {{width:"100%"}}>
                            <button  className="submit"  onClick={a}>Giriş yap</button>
                        </div>
                        {islogin?document.getElementById("login").remove():<div className = "text-center" style = {{fontSize:"24px" , padding: "0px 0 0 0"}}>Lütfen Giriş Yapın</div>}
                        <div style = {{float:"right",padding:"30px 15px 0 0"}}><a href="#">Şifremi unuttum?</a></div>
                    </div>
                    <h3 style = {{fontSize :"14px" , margin:"20px 0px 0px 14px",color:"red"}}>{text}</h3>
                    <h3>{dersleri.map( e => <div id = {e} onClick={() => remove1(e)}>{ e }</div>)} </h3>
                </div>
            </div>

            {islogin?<Userinterface card = {props.item[index1]}/>:console.log("")}
            
        </div>
    )

}
export default Valid;