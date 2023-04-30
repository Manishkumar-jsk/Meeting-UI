import React from 'react'
import "./meeting.css";
import DuoIcon from '@mui/icons-material/Duo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';


export default function Meeting() {
  return (
    <div className='meetingContainer'>
        <div className="meetingWrapper">
            <div className="meetingLeftContainer">
                <div className="meetingLeftTop">
                    <h4>Daily Scrum Meeting <span style={{"color":"blue","marginLeft":"30px"}}><DuoIcon style={{"color":"blue"}} />Zoom</span></h4>
                    <h5>Date : 22/08/2020</h5>
                    <p>Daily Stand up for Aled team working on PRD 1Project</p>
                </div>
                <hr className='hl' />
                <div className="meetingLeftMiddle">
                    <div className="meetingLeftMiddleItems">
                        <div className="meetingMiddleItem1">
                            <p>Owner</p>
                            <img src='https://static.thenounproject.com/png/5034901-200.png' width="40px"/>
                        </div>
                        <div className='vl'></div>
                        <div className="meetingMiddleItem2">
                            <p className='text-center'>Watcher</p>
                            <div className="Item2Imgs">
                                <div className='Item2Imgs1'>
                                    <img className='rounded-circle' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" width="40px" height="40px" />
                                </div>
                                <div className='Item2Imgs2'>
                                    <img className='rounded-circle' src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" width="40px" height="40px" />
                                </div>
                                <div className='Item2Imgs3'>
                                    <p>+3</p>
                                </div>
                            </div>
                        </div>
                        <div className='vl'></div>
                        <div className="meetingMiddleItem3">
                            <p className='text-center'>Participants</p>
                            <div className='Item3Imgs'>
                                <div className='Item3Img1'>
                                    <img className='rounded-circle' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" width="40px" height="40px"/>
                                </div>
                                <div className='Item3Img2'>
                                    <img className='rounded-circle' src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" width="40px" height="40px" />
                                </div>
                                <div className='Item3Img3'>
                                    <img className='rounded-circle' src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" width="40px" height="40px" />
                                </div>
                                <div className='Item3Imgs4'>
                                    <p>+12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="meetingLeftBottom">
                    <h5>Meeting Hour</h5>
                    <p>3 hr 20 minutes</p>
                </div>
            </div>
            <div className="meetingRightContainer">
                <div className="meetingRightContainerWrapper">
                    <div className="meetingRightTop">
                        <div className='meetingRightItems'>
                            <p>Agenda</p>
                            <p className='meetingTask'>Tasks</p>
                            <button className='meetingRightbtn'>Detailed View</button>
                        </div>
                        <hr />
                        <div className='meetingRightList'>
                            <p>UX/UI Decision Making</p>
                            <p>UX/UI Prdoucts Edit</p>
                        </div>
                    </div>
                    <div className="meetingRightMiddle">
                        <div className='meetingRightMiddleHeader'>
                            <p>Notes</p>
                        </div>
                        <div className='meetingRightList'>
                            <p>Decision Point 1, Points- add actions here</p>
                            <p>Insight, Points- add actions here</p>
                            <p>Discussion, Points- add actions here</p>
                        </div>
                    </div>
                    <div className="meetingRightBottom">
                        <div className='meetingRightBottomHeader'>
                        <p>Resources<span className='download-link'>(Download links)</span></p>
                        </div>
                        <div className='meetingRightBottomButtons'>
                            <p className='meetingRightBottomBtn'>Sales .pptx <span style={{"marginLeft":"40px"}}><FontAwesomeIcon icon={faArrowDown} style={{"color":"#0099ff"}} /></span></p>
                            <p className='meetingRightBottomBtn'>Sales .pptx <span style={{"marginLeft":"40px"}}><FontAwesomeIcon icon={faArrowDown} style={{"color":"#0099ff"}} /></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="MeetingSchedule">
            <span className='MeetingScheduleItem'>Create Follow up Meeting</span>
            <span className='MeetingScheduleItem'>Follow up Meeting</span>
            <span className='MeetingScheduleItem'>09/21/2020 <FontAwesomeIcon icon={faCalendar} style={{"color":"#0099ff","marginLeft":"40px","fontSize":"1.2rem"}} /></span>
        </div>
    </div>
  )
}
