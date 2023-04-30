import React from 'react'
import "./schedule.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';

export default function Schedule() {
  return (
    <div className='scheduleContainer'>
        <div className="scheduleConhtainerWrapper">
            <div className='scheduleLeft'>
              <p>Meeting Feedback</p>
              <div className='scheduleIcons'>
                <FontAwesomeIcon icon={faStar} style={{"color":"#ffcc00","fontSize":"1.2rem","marginRight":"5px"}} />
                <FontAwesomeIcon icon={faStar} style={{"color":"#ffcc00","fontSize":"1.2rem","marginRight":"5px"}} />
                <FontAwesomeIcon icon={faStar} style={{"color":"#ffcc00","fontSize":"1.2rem","marginRight":"5px"}} />
                <FontAwesomeIcon icon={faStar} style={{"color":"#ffcc00","fontSize":"1.2rem","marginRight":"5px"}} />
                <FontAwesomeIcon icon={faStarHalfStroke} style={{"color":"#ffcc00","fontSize":"1.2rem"}} />
              </div>
            </div>
            <div className="scheduleMiddle">
              <textarea rows="4" cols="70" className='scheduleMiddleText'>Leave Comment</textarea>
            </div>
            <div className="scheduleRight">
              <input type="checkbox" />
              <label style={{"marginLeft":"8px"}}>I agree to the Meetings Minutes</label><br />
              <input type="checkbox" />
              <label style={{"marginTop":"10px","marginLeft":"8px"}}>I Don't Agree to the Meetings Minutes</label><br />
              <div className='scheduleBtns'>
                <button className='scheduleCloseBtn'>Close</button>
                <button className='scheduleSubmitBtn'>Submit</button>
              </div>
            </div>
        </div>
    </div>
  )
}
