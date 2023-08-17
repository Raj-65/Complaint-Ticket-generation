import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

   

function Complain() {
    let { id } = useParams();
    const [complainObject, setComplainObject] = useState({});
    const [comments, setComments] = useState([]);
    // const [newComment, setNewComment] = useState("");
    const [newComment, setNewComment] = useState({
      AssignedTo:"",
      Remarks:"",
      InventoryUsed:""
    });
    
// const [showBanner, setShowBanner] = useState(true);
  // const [disable,setDisable] =useState(0);
  // const [dis,setDis] =useState(0);
  // let visible=true;
  // let dis;

    useEffect(() => {
      axios.get(`http://localhost:3001/complains/byId/${id}`).then((response) => {
        setComplainObject(response.data);
        console.log(response.data);
      });
      axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
        setComments(response.data);
      });
    }, [id]);
    // useEffect(() => {
    //   // console.log('showBanner', showBanner);
    //   const data = window.localStorage.getItem('MY_APP_STATE');
    //   if ( data !== null ) setShowBanner(JSON.parse(data));
    // }, []);

    const addComment = () => {
      axios.post("http://localhost:3001/comments", {
          AssignedTo: newComment.AssignedTo,
          Remarks: newComment.Remarks,
          InventoryUsed: newComment.InventoryUsed,
          ComplainId: id,
        })
        .then((response) => {
          const commentToAdd = {
             AssignedTo: newComment.AssignedTo,
             Remarks: newComment.Remarks,
             InventoryUsed: newComment.InventoryUsed
           };
          setComments([...comments, commentToAdd]);
          setNewComment({AssignedTo:"",
          Remarks:"",
          InventoryUsed:""});
          // disable=1;
        }).catch(err =>{
          // alert("You can assign only once" );
         console.log(err);
        });
    };

    function handleChange(event) {
      const { name, value } = event.target;
    
      setNewComment((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
    const complete = () =>{
      axios.post("http://localhost:3001/completed", {
        IsComplete:"DONE",
        Name:complainObject.Name,
        email:complainObject.email,
        ComplainDetail:complainObject.ComplainDetail,
        Department:complainObject.Department,
        registered:complainObject.createdAt,
        AssignedTo: comments[0].AssignedTo,
        Remarks: comments[0].Remarks,
        InventoryUsed: comments[0].InventoryUsed,
        ComplainId: id,
      }).then((response) => {
        console.log("Complain Resolved!");
        alert("Ok!");
        // setShowBanner(false)
        // visible=false;
      })
    }
    const deleteComment = (id) => {
      axios.delete(`http://localhost:3001/comments/${id}`, {
        })
        .then(() => {
          setComments(
            comments.filter((val) => {
              return val.id !== id;
            })
          );
        });
    };

  return ( 
    <div className="complainPage">
    <div className="leftSide">
        <div className="complain" id="individual">
        <div className="title"> <span className="top">{complainObject.id}</span>{complainObject.Name} </div>
        <div className="title"> {complainObject.email}</div>
        <div className="body"> {complainObject.ComplainDetail}</div>
        <div className="footer"><span id="placeholder">Dept:</span> {complainObject.Department}</div>
        <div className="footer"><span id="placeholder">Registered at:</span> {complainObject.createdAt}</div>
        {/* <div className="footer">{complainObject.createdAt.slice(11,19)}</div> */}
        {/* <div className="footer">{diffHours}</div> */}
        </div>
      </div>
      <div className="rightSide">
      <div className="addCommentContainer">
          <input
            type="text"
            name="AssignedTo"
            placeholder="Assign To..."
            autoComplete="off"
            value={newComment.AssignedTo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Remarks"
            placeholder="Remarks..."
            autoComplete="off"
            value={newComment.Remarks}
            onChange={handleChange}
          />
          <input
            name="InventoryUsed"
            type="text"
            placeholder="Inventory Used..."
            autoComplete="off"
            value={newComment.InventoryUsed}
            onChange={handleChange}
          />
          <button onClick={addComment} > Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
               <p className="assign"><span id="placeholder" >Assigned To:</span> {comment.AssignedTo}</p>
               <p className="assign"><span id="placeholder" >Remarks:</span> {comment.Remarks}</p>
               <p className="assign"><span id="placeholder" >Inventory used:</span>{comment.InventoryUsed}</p>
               {/* <i onClick={() => {
                      deleteComment(comment.id);
                    }} className="fa-sharp fa-solid fa-trash" style={{position:"relative", left:"90%"}}></i> */}
              </div>
            );
          })}
        </div>
       <button className="comp" onClick={complete}>Mark as Complete!</button>
      </div>
  </div>
  )
}

export default Complain
