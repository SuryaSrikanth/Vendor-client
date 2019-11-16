import React from 'react';
import './Vendornotification.css'
import M from 'materialize-css';

class Vendornotification extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems);
          });

        document.getElementsByClassName('notification-btn')[0].onclick = function(){
            document.getElementsByClassName('notification-container')[0].style.display = 'block';
        };
        document.getElementsByClassName('notif-btn-close')[0].onclick = function(){
            document.getElementsByClassName('notification-container')[0].style.display = 'none';
        };
        
    }

    render(){
        return(<div className='container'>
            <div className='notification-container card hoverable pink white-text' style={{display:'block'}}>
                <p>
                <h5 className='noti-head '>Notifications</h5>
                </p>
                <div className='notif-data'>
                <p>
                    Surya has sent you designs.
                </p></div>
                <div className='notif-close'>
                    <button className='notif-btn-close btn white blue-text' style={{fontWeight:'700'}}>Close</button>
                </div>



            </div>
<div className="fixed-action-btn">
  <a className="btn-floating btn-large red">
    <i className="large material-icons">settings</i>
  </a>
  <ul>
    <li><a className="btn-floating red notification-btn"><i className="material-icons">notifications</i></a></li>
    <li><a className="btn-floating yellow darken-1"><i className="material-icons">person</i></a></li>
    
  </ul>
</div></div>
        );
    }
}

export default Vendornotification;