import React from 'react';
import XLSX from 'xlsx';
import './Vendorfile.css';

class Vendorfile extends React.Component{

    componentDidMount(){
   
            document.getElementsByClassName('file-xl')[0].onchange = function(e){
                    var reader = new FileReader();
                    reader.readAsArrayBuffer(e.target.files[0]);

                    reader.onload = function(e){
                        var data = new Uint8Array(reader.result);
                        var book = XLSX.read(data, {type:'array'});
                        var table = XLSX.write(book, {type:'binary',bookType:'html'});
                        document.getElementsByClassName('xl-sheet')[0].innerHTML = table;
                        document.getElementsByClassName('xl-sheet')[0].style.display = 'block';
                    }
            }    

            document.getElementsByClassName('file-xl-2')[0].onchange = function(e){
              var reader = new FileReader();
              reader.readAsArrayBuffer(e.target.files[0]);

              reader.onload = function(e){
                  var data = new Uint8Array(reader.result);
                  var book = XLSX.read(data, {type:'array'});
                  var table = XLSX.write(book, {type:'binary',bookType:'html'});
                  document.getElementsByClassName('xl-sheet-2')[0].innerHTML = table;
                  document.getElementsByClassName('xl-sheet-2')[0].style.display = 'block';
              }
      }

      document.getElementsByClassName('file-xl-3')[0].onchange = function(e){
        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);

        reader.onload = function(e){
            var data = new Uint8Array(reader.result);
            var book = XLSX.read(data, {type:'array'});
            var table = XLSX.write(book, {type:'binary',bookType:'html'});
            document.getElementsByClassName('xl-sheet-3')[0].innerHTML = table;
            document.getElementsByClassName('xl-sheet-3')[0].style.display = 'block';
        }
}
    }
    render(){
        return(
            <form action="#" className='form-dress container'>
    <div className="file-field input-field">
      <div className="btn waves-effect waves-red purple">
        <span style={{fontWeight:'700'}}>File for Dresses</span>
        <input type="file" className='file-xl' accept='.xlsx'/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      
    </div><br />
    <div className='xl-sheet ' style={{display:'none',fontWeight:'600'}}></div><hr />


    <div className="file-field input-field">
      <div className="btn waves-effect waves-red purple white-text">
        <span style={{fontWeight:'700'}}>File for Colors</span>
        <input type="file" className='file-xl-2' accept='.xlsx'/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      
    </div><br />
    <div className='xl-sheet-2' style={{display:'none'}}></div><hr />


    <div className="file-field input-field">
      <div className="btn waves-effect waves-red purple white-text">
        <span style={{fontWeight:'700'}}>File for Dress Information</span>
        <input type="file" className='file-xl-3' accept='.xlsx'/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      
    </div><br />
    <div className='xl-sheet-3' style={{display:'none'}}></div><hr />
    <button className="btn green" style={{float:"right",fontWeight:'700'}}>Submit</button>
  </form>

        )
    }
}

export default Vendorfile;