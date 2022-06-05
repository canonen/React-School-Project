import React,{useState,useEffect} from "react";
import "./componentsCss/Dersler.css";
const Dersler1 = (props) =>{
    const [dizi,setdizi] = useState([])
    const [dersleri,] = useState([]);
    //dersleri , dersleri adındaki listeye atıyoruz
    for(let j = 0; j < props.liste.dersler.length;j++){
        dersleri.push(props.liste.dersler[j]);
    }
    //seçilen dersi geri verme
    function dersver (c) {
        console.log(c);
        document.getElementById(c).onclick = function() {dersal1(c)};
        document.getElementById("tbody").appendChild(document.getElementById(c));
        console.log(document.getElementById(c))
    }
    //seçilen dersi alma
    function dersal1 (c){
        document.getElementById(c).onclick = function() {dersver(c)};
        document.getElementById("thetable").appendChild(document.getElementById(c))
    }
    //dersleri kaydetme
    function save() {
        const parent = document.getElementById("thetable");
        const button = document.querySelector('#button3');
        const text1 = document.querySelector("#saved");
         
        for (var i = 0; i<parent.children.length;i++){
            parent.children[i].style.backgroundColor = "#4CAF50";                       
        }
        button.disabled = true;
        button.style.backgroundColor = "#93b994";
        button.style.border = "1px solid #4CAF50";
        text1.innerHTML = "Ders Seçiminiz başarıyla gerçekleşti <br/> <br/>  Danışmanınızın onaylamasını bekleyiniz...";      
    }
    
    const dersal = (b) => {

        const index = dersleri.indexOf(b);

        if (index > -1){
            dersleri.splice(index,1);
            document.getElementById(b[0]).onclick = function() {dersver(b[0])};
            document.getElementById("thetable").appendChild(document.getElementById(b[0]))
            
            dizi.push(b);
            setdizi(dizi)

        }
    }
    //açılan bar js ile
    const opener = () =>{
        var coll = document.getElementsByClassName("table1");

        for (var i = 0; i < coll.length; i++) {
            
            if (coll[i].style.display === "block") {
                coll[i].style.display = "none";
            } 
            else {
                coll[i].style.display = "block";
            }
           
        }
    }
    //açılan bar 2 js ile
    const opener2 = () =>{
        var coll = document.getElementsByClassName("table2");

        for (var i = 0; i < coll.length; i++) {
            
            if (coll[i].style.display === "block") {
                coll[i].style.display = "none";
            } 
            else {
                coll[i].style.display = "block";
            }
           
        }
    }


   
    return(
    <div style = {{width:"60%",height:"890px" ,backgroundColor:"#c4c0c0",float:"right",margin:"3% 10% 0 0",borderRadius:"10px"}}>

        <div className="content text-center">
            <div onClick={opener}>
                <h3>Alınabilecek Dersler</h3>
            </div>
        </div>
        <table className="table1">
            <thead>
                <tr>
                    <th style = {{width:"10%"}}>Kod</th>
                    <th>Ders Adı</th>
                    <th>Z/S</th>
                    <th>Kredi</th>
                    <th>AKTS</th>
                    <th>Sınıf</th>
                </tr>
            </thead>
            <tbody id = "tbody">
                {dersleri.map( e => <tr id = {e[0]}  onClick={() => dersal(e)}><td>{e[0]}</td><td>{e[1]}</td><td>{e[2]}</td><td>{e[3]}</td><td>{e[4]}</td><td>{e[5]}</td></tr>)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>

        <div className="content text-center">
            <div onClick={opener2}>
                <h3>Seçtiğim Dersler</h3>               
            </div>
        </div>
        <table className="table2">
            <thead>
                <tr>
                    <th style = {{width:"10%"}}>Kod</th>
                    <th>Ders Adı</th>
                    <th>Z/S</th>
                    <th>Kredi</th>
                    <th>AKTS</th>
                    <th>Sınıf</th>
                </tr>
            </thead>
            <tbody id = "thetable">
                
            </tbody>
                <tfoot>

                </tfoot>
        </table>
        <div style = {{marginTop : "25px",marginLeft : "50px"}}><h3 id = "saved" style = {{color:"green" ,fontSize:"16px"}}></h3></div>

        <div style={{height : "auto"}}>
            <button id = "button3" className ="submitbutton" onClick={save}> Kaydet</button>
        </div>
        
    </div>

    )
}
export default Dersler1;